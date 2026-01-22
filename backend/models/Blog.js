const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  slug: {
    type: String,
    unique: true,
    lowercase: true
  },
  excerpt: {
    type: String,
    required: true,
    maxlength: 200
  },
  content: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: ['Fashion', 'Beauty', 'Lifestyle', 'Sustainable', 'Trends']
  },
  subcategory: {
    type: String,
    enum: [
      'Office Wear',
      'Street Style',
      'Capsule Wardrobe',
      'Skincare',
      'Makeup',
      'Hair Care',
      'Seasonal Trends'
    ]
  },
  featuredImage: {
    url: String,
    publicId: String
  },
  images: [{
    url: String,
    publicId: String,
    caption: String
  }],
  tags: [String],
  author: {
    type: String,
    default: 'Admin'
  },
  published: {
    type: Boolean,
    default: false
  },
  featured: {
    type: Boolean,
    default: false
  },
  views: {
    type: Number,
    default: 0
  },
  readTime: {
    type: Number, // in minutes
    default: 5
  }
}, {
  timestamps: true
});

// Create slug from title before saving
blogSchema.pre('save', function(next) {
  if (!this.slug || this.isModified('title')) {
    this.slug = this.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  }
  
  // Calculate read time (average reading speed: 200 words per minute)
  if (this.isModified('content')) {
    const wordCount = this.content.split(/\s+/).length;
    this.readTime = Math.ceil(wordCount / 200);
  }
  
  next();
});

module.exports = mongoose.model('Blog', blogSchema);
