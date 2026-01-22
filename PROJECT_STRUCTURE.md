# 📁 Project Directory Structure

```
brazil_blogs/
│
├── 📄 README.md                    # Complete project documentation
├── 📄 QUICKSTART.md               # Fast setup guide (start here!)
├── 📄 SETUP.md                    # Detailed installation instructions
│
├── 📂 .github/
│   └── 📄 copilot-instructions.md # Project guidelines
│
├── 📂 backend/                    # Node.js + Express API Server
│   │
│   ├── 📂 config/
│   │   ├── 📄 database.js        # MongoDB connection setup
│   │   └── 📄 cloudinary.js      # Image upload configuration
│   │
│   ├── 📂 models/
│   │   ├── 📄 Blog.js            # Blog post schema (title, content, images, etc.)
│   │   └── 📄 SocialMedia.js     # Social media links schema
│   │
│   ├── 📂 controllers/
│   │   ├── 📄 blogController.js        # Blog CRUD operations
│   │   └── 📄 socialMediaController.js # Social media management
│   │
│   ├── 📂 routes/
│   │   ├── 📄 blogRoutes.js           # API endpoints for blogs
│   │   └── 📄 socialMediaRoutes.js    # API endpoints for social media
│   │
│   ├── 📂 middleware/
│   │   └── 📄 upload.js          # File upload handling (Multer)
│   │
│   ├── 📂 uploads/               # Temporary image storage (auto-created)
│   │
│   ├── 📄 server.js              # Main entry point - starts API server
│   ├── 📄 seed.js                # Sample data loader (5 blog posts)
│   ├── 📄 package.json           # Dependencies and scripts
│   ├── 📄 .env.example           # Environment variables template
│   ├── 📄 .env                   # Your credentials (create this!)
│   └── 📄 .gitignore             # Git ignore rules
│
└── 📂 frontend/                  # Next.js 14 Website
    │
    ├── 📂 app/                   # Next.js App Router
    │   │
    │   ├── 📂 blogs/
    │   │   ├── 📂 [slug]/
    │   │   │   └── 📄 page.js   # Individual blog post view
    │   │   └── 📄 page.js       # All blogs page (with filters)
    │   │
    │   ├── 📂 about/
    │   │   └── 📄 page.js       # About page
    │   │
    │   ├── 📂 admin/
    │   │   └── 📄 page.js       # Admin panel (create/edit blogs)
    │   │
    │   ├── 📄 page.js            # Homepage (hero, featured, latest)
    │   ├── 📄 layout.js          # Root layout (navbar, footer)
    │   └── 📄 globals.css        # Global styles & Tailwind
    │
    ├── 📂 components/            # Reusable React Components
    │   ├── 📄 Navbar.js         # Top navigation
    │   ├── 📄 Footer.js         # Footer with social links
    │   ├── 📄 Hero.js           # Homepage hero section
    │   ├── 📄 BlogCard.js       # Blog preview card
    │   ├── 📄 FeaturedBlogs.js  # Featured posts section
    │   ├── 📄 CategorySection.js # Category-specific posts
    │   ├── 📄 LatestBlogs.js    # Latest posts section
    │   ├── 📄 Newsletter.js     # Newsletter signup form
    │   ├── 📄 Pagination.js     # Page navigation
    │   ├── 📄 ShareButtons.js   # Social sharing buttons
    │   └── 📄 RelatedBlogs.js   # Related posts
    │
    ├── 📄 next.config.js         # Next.js configuration
    ├── 📄 tailwind.config.js     # Tailwind CSS config (colors!)
    ├── 📄 postcss.config.js      # PostCSS setup
    ├── 📄 package.json           # Dependencies and scripts
    └── 📄 .gitignore             # Git ignore rules
```

## 🎯 Key Files Explained

### Backend

**server.js** (Line ~40)
- Starts Express server on port 5000
- Connects to MongoDB
- Sets up API routes
- Handles CORS for frontend

**models/Blog.js** (Line ~80)
- Defines blog post structure
- Auto-generates URL slugs
- Calculates read time
- Stores images and metadata

**controllers/blogController.js** (Line ~180)
- `getAllBlogs()` - Get all posts with filters
- `getBlogBySlug()` - Get single post
- `createBlog()` - Create new post
- `updateBlog()` - Edit existing post
- `deleteBlog()` - Remove post

**seed.js** (Line ~150)
- Adds 5 sample blog posts
- Adds social media links
- Great for testing!

### Frontend

**app/page.js** (Homepage)
- Hero section
- Featured blog posts
- Category sections (Fashion/Beauty)
- Latest posts
- Newsletter signup

**app/blogs/page.js** (All Blogs)
- Grid of all blog posts
- Category filter buttons
- Pagination
- Responsive layout

**app/blogs/[slug]/page.js** (Single Post)
- Full blog content
- Featured image
- Share buttons
- Related posts
- View tracking

**app/admin/page.js** (Admin Panel)
- Create new blog posts
- Edit existing posts
- Delete posts
- Rich text editor
- Image upload
- Publish/draft toggle
- Featured post toggle

**components/Navbar.js**
- Navigation links
- Mobile responsive menu
- Link to admin panel

**components/Footer.js**
- Fetches social media links from API
- Dynamic social icons
- Quick links
- Copyright info

**tailwind.config.js**
- Brazilian color palette
- Custom fonts (Playfair Display, Inter)
- Responsive breakpoints

## 🎨 Brazilian Color Theme

```javascript
colors: {
  'brazilian-yellow': '#FFD700',  // Warmth & energy
  'brazilian-green': '#009B3A',   // Nature & growth
  'brazilian-blue': '#002776',    // Ocean & sky
  'brazilian-coral': '#FF6B6B',   // Tropical vibrancy
  'brazilian-sand': '#F5DEB3',    // Beach elegance
  'brazilian-ocean': '#4A90E2',   // Coastal beauty
  'brazilian-sunset': '#FF6347',  // Warm evenings
  'brazilian-palm': '#228B22',    // Tropical nature
}
```

## 🔌 API Endpoints

```
Backend: http://localhost:5000

GET    /api/blogs              - Get all blogs (with filters)
GET    /api/blogs/featured     - Get featured blogs
GET    /api/blogs/latest       - Get latest blogs
GET    /api/blogs/:slug        - Get single blog
POST   /api/blogs              - Create blog (with image)
PUT    /api/blogs/:id          - Update blog
DELETE /api/blogs/:id          - Delete blog

GET    /api/social-media       - Get social links
POST   /api/social-media       - Add social link
PUT    /api/social-media/:id   - Update social link
DELETE /api/social-media/:id   - Delete social link
```

## 📦 Package Dependencies

### Backend
- **express** - Web framework
- **mongoose** - MongoDB ORM
- **multer** - File uploads
- **cloudinary** - Image hosting
- **cors** - Cross-origin requests
- **dotenv** - Environment variables
- **nodemon** - Auto-restart (dev)

### Frontend
- **next** - React framework
- **react** - UI library
- **tailwindcss** - CSS framework
- **axios** - HTTP client
- **react-quill** - Rich text editor
- **react-icons** - Icon library
- **date-fns** - Date formatting

## 🚀 Commands Cheat Sheet

```bash
# Backend
cd backend
npm install          # Install dependencies
npm run dev          # Start dev server (auto-reload)
npm start            # Start production server
npm run seed         # Load sample data

# Frontend
cd frontend
npm install          # Install dependencies
npm run dev          # Start dev server
npm run build        # Build for production
npm start            # Start production server
npm run lint         # Check code quality
```

## 📱 Website Pages

```
Frontend: http://localhost:3000

/                           - Homepage
/blogs                      - All blog posts
/blogs?category=Fashion     - Fashion posts only
/blogs?category=Beauty      - Beauty posts only
/blogs/[slug]              - Individual blog post
/about                      - About page
/admin                      - Admin panel
```

## 💡 Quick Tips

1. **Start here**: Read `QUICKSTART.md` first
2. **Need help?**: Check `SETUP.md`
3. **Sample data**: Run `npm run seed` in backend
4. **Colors**: Edit `frontend/tailwind.config.js`
5. **Logo**: Edit `components/Navbar.js`
6. **Footer**: Edit `components/Footer.js`
7. **About**: Edit `app/about/page.js`

## 🔐 Important Notes

⚠️ **Admin panel has NO authentication** - Add before production!  
⚠️ **Cloudinary required** for image uploads (or use URLs)  
⚠️ **MongoDB required** - Local or Atlas cloud  

## 📝 File Counts

- **Backend Files**: 13 code files
- **Frontend Files**: 25+ code files
- **Total Components**: 11 React components
- **Sample Blog Posts**: 5 ready to use
- **Lines of Code**: ~3000+

---

**Everything is ready to go!** 🎉

Just install Node.js, MongoDB, configure `.env`, and run! 🚀
