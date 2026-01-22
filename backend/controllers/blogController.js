const Blog = require('../models/Blog');
const cloudinary = require('../config/cloudinary');

// Get all blogs with filtering and pagination
exports.getAllBlogs = async (req, res) => {
  try {
    const { category, subcategory, tag, featured, published, page = 1, limit = 10 } = req.query;
    
    const query = {};
    if (category) query.category = category;
    if (subcategory) query.subcategory = subcategory;
    if (tag) query.tags = tag;
    if (featured !== undefined) query.featured = featured === 'true';
    if (published !== undefined) query.published = published === 'true';
    
    const blogs = await Blog.find(query)
      .sort({ createdAt: -1 })
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
    
    const count = await Blog.countDocuments(query);
    
    res.json({
      blogs,
      totalPages: Math.ceil(count / limit),
      currentPage: page,
      total: count
    });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blogs', error: error.message });
  }
};

// Get single blog by slug
exports.getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug });
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    // Increment views
    blog.views += 1;
    await blog.save();
    
    res.json(blog);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching blog', error: error.message });
  }
};

// Create new blog
exports.createBlog = async (req, res) => {
  try {
    const blogData = { ...req.body };
    
    // Parse tags if it's a JSON string
    if (blogData.tags && typeof blogData.tags === 'string') {
      try {
        blogData.tags = JSON.parse(blogData.tags);
      } catch (e) {
        // If not valid JSON, split by comma
        blogData.tags = blogData.tags.split(',').map(t => t.trim()).filter(t => t);
      }
    }
    
    // Parse boolean fields
    if (typeof blogData.published === 'string') {
      blogData.published = blogData.published === 'true';
    }
    if (typeof blogData.featured === 'string') {
      blogData.featured = blogData.featured === 'true';
    }
    
    // Handle featured image upload if provided
    if (req.files && req.files.featuredImage) {
      const result = await cloudinary.uploader.upload(req.files.featuredImage[0].path, {
        folder: 'brazilian_blog/featured'
      });
      blogData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id
      };
    }
    
    // Handle additional images
    if (req.files && req.files.images) {
      blogData.images = await Promise.all(
        req.files.images.map(async (file) => {
          const result = await cloudinary.uploader.upload(file.path, {
            folder: 'brazilian_blog/content'
          });
          return {
            url: result.secure_url,
            publicId: result.public_id
          };
        })
      );
    }
    
    const blog = new Blog(blogData);
    await blog.save();
    
    res.status(201).json({ message: 'Blog created successfully', blog });
  } catch (error) {
    res.status(400).json({ message: 'Error creating blog', error: error.message });
  }
};

// Update blog
exports.updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    const updateData = { ...req.body };
    
    // Parse tags if it's a JSON string
    if (updateData.tags && typeof updateData.tags === 'string') {
      try {
        updateData.tags = JSON.parse(updateData.tags);
      } catch (e) {
        // If not valid JSON, split by comma
        updateData.tags = updateData.tags.split(',').map(t => t.trim()).filter(t => t);
      }
    }
    
    // Parse boolean fields
    if (typeof updateData.published === 'string') {
      updateData.published = updateData.published === 'true';
    }
    if (typeof updateData.featured === 'string') {
      updateData.featured = updateData.featured === 'true';
    }
    
    // Handle new featured image upload
    if (req.files && req.files.featuredImage) {
      // Delete old image from cloudinary if exists
      if (blog.featuredImage && blog.featuredImage.publicId) {
        await cloudinary.uploader.destroy(blog.featuredImage.publicId);
      }
      
      const result = await cloudinary.uploader.upload(req.files.featuredImage[0].path, {
        folder: 'brazilian_blog/featured'
      });
      updateData.featuredImage = {
        url: result.secure_url,
        publicId: result.public_id
      };
    }
    
    Object.assign(blog, updateData);
    await blog.save();
    
    res.json({ message: 'Blog updated successfully', blog });
  } catch (error) {
    res.status(400).json({ message: 'Error updating blog', error: error.message });
  }
};

// Delete blog
exports.deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    
    if (!blog) {
      return res.status(404).json({ message: 'Blog not found' });
    }
    
    // Delete images from cloudinary
    if (blog.featuredImage && blog.featuredImage.publicId) {
      await cloudinary.uploader.destroy(blog.featuredImage.publicId);
    }
    
    if (blog.images && blog.images.length > 0) {
      await Promise.all(
        blog.images.map(img => cloudinary.uploader.destroy(img.publicId))
      );
    }
    
    await blog.deleteOne();
    
    res.json({ message: 'Blog deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting blog', error: error.message });
  }
};

// Get featured blogs
exports.getFeaturedBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find({ featured: true, published: true })
      .sort({ createdAt: -1 })
      .limit(6);
    
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching featured blogs', error: error.message });
  }
};

// Get latest blogs
exports.getLatestBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 5;
    const blogs = await Blog.find({ published: true })
      .sort({ createdAt: -1 })
      .limit(limit);
    
    res.json(blogs);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching latest blogs', error: error.message });
  }
};
