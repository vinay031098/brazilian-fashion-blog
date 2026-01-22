# 🇧🇷 Beleza Brasileira - Brazilian Fashion & Beauty Blog

A vibrant full-stack blogging platform celebrating Brazilian fashion and beauty trends. Built with Next.js, React, Node.js, Express, and MongoDB.

![Brazilian Blog](https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1200&h=400&fit=crop)

## 📚 Quick Documentation Links

- 🚀 **[QUICKSTART.md](QUICKSTART.md)** - Get running in 5 minutes!
- 🔧 **[SETUP.md](SETUP.md)** - Detailed installation guide
- 🚢 **[DEPLOYMENT.md](DEPLOYMENT.md)** - Deploy to production
- 📂 **[PROJECT_STRUCTURE.md](PROJECT_STRUCTURE.md)** - Code organization
- 🗺️ **[SITEMAP.md](SITEMAP.md)** - Website structure
- 📋 **[PROJECT_SUMMARY.md](PROJECT_SUMMARY.md)** - Complete overview
- 📖 **[INDEX.md](INDEX.md)** - Documentation index

## ✨ Features

### 🎨 Content Management
- **Full CRUD Operations**: Create, read, update, and delete blog posts
- **Rich Text Editor**: Beautiful content creation with React Quill
- **Image Upload**: Cloudinary integration for image management
- **Categories & Tags**: Organized content with Fashion, Beauty, Lifestyle, Sustainable, and Trends categories
- **Featured Posts**: Highlight your best content on the homepage

### 🌟 User Experience
- **Responsive Design**: Beautiful UI on all devices
- **Brazilian-Themed Colors**: Vibrant color palette inspired by Brazil
- **Fast Performance**: Built with Next.js 14 for optimal speed
- **SEO Optimized**: Proper meta tags and semantic HTML
- **Social Sharing**: Share buttons for Facebook, Twitter, Pinterest, WhatsApp

### 🔧 Admin Panel
- **Blog Management**: Easy-to-use interface for creating and editing posts
- **Draft System**: Save drafts before publishing
- **Featured Toggle**: Mark posts as featured
- **Analytics**: View counts for each blog post
- **Social Media Management**: Update social media links

## 📋 Content Focus

### Fashion Blog Ideas
- **Office Wear Trends**: Smart-casual tailoring with breathable fabrics (Farm Rio, PatBo)
- **Sustainable Street Style**: Eco-friendly outfits blending Rio vibrancy with São Paulo chic
- **Seasonal Capsule Wardrobes**: Earthy tones, graphic stripes, and co-ord sets

### Beauty Blog Ideas
- **Tropical Skincare Routines**: Sun-protective products with natural ingredients (açaí, coconut oil)
- **Bold Makeup Looks**: Vibrant lips, graphic eyes, beach-proof makeup
- **Hair Care Hacks**: Tips for Brazilian hair types with local brands

## 🛠️ Tech Stack

### Frontend
- **Next.js 14**: React framework with App Router
- **React 18**: UI library
- **Tailwind CSS**: Utility-first CSS framework
- **Axios**: HTTP client
- **React Quill**: Rich text editor
- **React Icons**: Icon library
- **date-fns**: Date formatting

### Backend
- **Node.js**: JavaScript runtime
- **Express**: Web framework
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB ODM
- **Multer**: File upload handling
- **Cloudinary**: Image hosting and management
- **CORS**: Cross-origin resource sharing
- **dotenv**: Environment variables

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB (local or Atlas)
- Cloudinary account (for image uploads)

### Installation

1. **Clone the repository**
```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs"
```

2. **Backend Setup**
```bash
cd backend
npm install
```

3. **Configure Backend Environment**
Create a `.env` file in the backend directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/brazilian_blog
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

4. **Start MongoDB**
```bash
# If using local MongoDB
mongod
```

5. **Run Backend Server**
```bash
cd backend
npm run dev
```
Server will run on http://localhost:5000

6. **Frontend Setup**
```bash
cd ../frontend
npm install
```

7. **Run Frontend**
```bash
npm run dev
```
Frontend will run on http://localhost:3000

## 📁 Project Structure

```
brazil_blogs/
├── backend/
│   ├── config/
│   │   ├── database.js          # MongoDB connection
│   │   └── cloudinary.js        # Cloudinary config
│   ├── controllers/
│   │   ├── blogController.js    # Blog CRUD operations
│   │   └── socialMediaController.js
│   ├── models/
│   │   ├── Blog.js              # Blog schema
│   │   └── SocialMedia.js       # Social media schema
│   ├── routes/
│   │   ├── blogRoutes.js        # Blog API routes
│   │   └── socialMediaRoutes.js
│   ├── middleware/
│   │   └── upload.js            # Multer configuration
│   ├── uploads/                 # Temporary file storage
│   ├── .env.example
│   ├── server.js                # Entry point
│   └── package.json
│
├── frontend/
│   ├── app/
│   │   ├── about/
│   │   │   └── page.js          # About page
│   │   ├── admin/
│   │   │   └── page.js          # Admin panel
│   │   ├── blogs/
│   │   │   ├── [slug]/
│   │   │   │   └── page.js      # Individual blog post
│   │   │   └── page.js          # All blogs
│   │   ├── layout.js            # Root layout
│   │   ├── page.js              # Homepage
│   │   └── globals.css          # Global styles
│   ├── components/
│   │   ├── Navbar.js            # Navigation
│   │   ├── Footer.js            # Footer with social links
│   │   ├── Hero.js              # Homepage hero
│   │   ├── BlogCard.js          # Blog preview card
│   │   ├── FeaturedBlogs.js     # Featured posts section
│   │   ├── CategorySection.js   # Category-specific posts
│   │   ├── LatestBlogs.js       # Latest posts
│   │   ├── Newsletter.js        # Newsletter signup
│   │   ├── Pagination.js        # Blog pagination
│   │   ├── ShareButtons.js      # Social sharing
│   │   └── RelatedBlogs.js      # Related posts
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   └── package.json
│
└── README.md
```

## 🎨 Color Palette

The design uses vibrant Brazilian-inspired colors:

- **Brazilian Yellow**: `#FFD700` - Warmth and energy
- **Brazilian Green**: `#009B3A` - Nature and growth
- **Brazilian Blue**: `#002776` - Ocean and sky
- **Coral**: `#FF6B6B` - Tropical vibrancy
- **Sand**: `#F5DEB3` - Beach elegance
- **Ocean**: `#4A90E2` - Coastal beauty
- **Sunset**: `#FF6347` - Warm evenings
- **Palm**: `#228B22` - Tropical nature

## 🌐 API Endpoints

### Blogs
- `GET /api/blogs` - Get all blogs (with filtering)
- `GET /api/blogs/featured` - Get featured blogs
- `GET /api/blogs/latest` - Get latest blogs
- `GET /api/blogs/:slug` - Get single blog by slug
- `POST /api/blogs` - Create new blog (with image upload)
- `PUT /api/blogs/:id` - Update blog
- `DELETE /api/blogs/:id` - Delete blog

### Social Media
- `GET /api/social-media` - Get all social media links
- `POST /api/social-media` - Create social media link
- `PUT /api/social-media/:id` - Update social media link
- `DELETE /api/social-media/:id` - Delete social media link

## 📝 Usage Guide

### Creating a Blog Post

1. Navigate to `/admin`
2. Click "Create New Blog"
3. Fill in the form:
   - **Title**: Post title (auto-generates slug)
   - **Category**: Fashion, Beauty, Lifestyle, Sustainable, or Trends
   - **Subcategory**: More specific categorization
   - **Excerpt**: Brief summary (max 200 chars)
   - **Content**: Full blog post with rich text editor
   - **Featured Image**: Upload main image
   - **Tags**: Comma-separated keywords
   - **Published**: Toggle to publish
   - **Featured**: Mark as featured post
4. Click "Create Blog"

### Managing Social Media

1. Go to Admin Panel > Social Media tab
2. Add your social media handles and URLs
3. Links will automatically appear in the footer

## 🎯 Key Pages

- **Homepage** (`/`): Hero, featured blogs, category sections, latest posts, newsletter
- **All Blogs** (`/blogs`): Grid of all blog posts with category filter and pagination
- **Single Blog** (`/blogs/[slug]`): Full blog post with sharing, related posts
- **About** (`/about`): Information about the blog and mission
- **Admin Panel** (`/admin`): Content management interface

## 🔐 Security Notes

⚠️ **Important**: The admin panel currently has no authentication. For production:

1. Add authentication middleware (JWT, NextAuth, etc.)
2. Protect admin routes
3. Add user roles and permissions
4. Implement CSRF protection
5. Add rate limiting

## 🚢 Deployment

### Backend Deployment (Heroku/Railway/Render)
1. Set environment variables
2. Update MongoDB URI to production database
3. Configure Cloudinary credentials
4. Deploy

### Frontend Deployment (Vercel/Netlify)
1. Connect your repository
2. Update API base URL to production backend
3. Deploy

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

## 📄 License

ISC License

## 🙏 Acknowledgments

- Inspired by Brazilian fashion influencers like Camila Coelho
- Brazilian brands: Farm Rio, PatBo
- Tropical beauty and sustainable fashion movements

## 📞 Support

For issues or questions, please create an issue in the repository.

---

**Made with ❤️ for Brazilian Fashion & Beauty**

🌴 *Embracing vibrant style, sustainable practices, and tropical elegance* 🌴
