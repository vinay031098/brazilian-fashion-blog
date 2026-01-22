# 🚀 Quick Start Guide

## What You Have

A complete Brazilian Fashion & Beauty blogging platform with:

✅ **Backend API** - Node.js + Express + MongoDB  
✅ **Frontend Website** - Next.js 14 + React + Tailwind CSS  
✅ **Admin Panel** - Full blog management interface  
✅ **Image Uploads** - Cloudinary integration  
✅ **Sample Content** - 5 pre-written blog posts ready to use  
✅ **Beautiful Design** - Vibrant Brazilian-themed UI  

## Before You Start

You need to install:

1. **Node.js** (v18+) - [Download here](https://nodejs.org/)
2. **MongoDB** - [Local](https://www.mongodb.com/try/download/community) or [Cloud Atlas](https://www.mongodb.com/cloud/atlas)
3. **Cloudinary Account** (free) - [Sign up here](https://cloudinary.com/)

## Installation (5 minutes)

### Step 1: Install Node.js
```bash
# macOS with Homebrew
brew install node

# Verify installation
node --version
npm --version
```

### Step 2: Install MongoDB
```bash
# macOS with Homebrew
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community

# Or use MongoDB Atlas (cloud) - no installation needed!
```

### Step 3: Install Project Dependencies
```bash
# Navigate to project
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs"

# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

### Step 4: Configure Environment
```bash
# Copy example environment file
cd ../backend
cp .env.example .env

# Edit .env file with your settings:
# - MongoDB URI (local or Atlas)
# - Cloudinary credentials (from cloudinary.com dashboard)
```

Example `.env`:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/brazilian_blog
CLOUDINARY_CLOUD_NAME=your_cloud_name_here
CLOUDINARY_API_KEY=your_api_key_here
CLOUDINARY_API_SECRET=your_api_secret_here
```

### Step 5: Seed Sample Data (Optional)
```bash
cd backend
npm run seed
```
This adds 5 sample blog posts to get you started!

## Running the Application

### Terminal 1 - Start Backend
```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs/backend"
npm run dev
```
✅ Backend running at: http://localhost:5000

### Terminal 2 - Start Frontend
```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs/frontend"
npm run dev
```
✅ Website running at: http://localhost:3000

## Your Website URLs

- 🏠 **Homepage**: http://localhost:3000
- 📝 **All Blogs**: http://localhost:3000/blogs
- 👔 **Fashion Category**: http://localhost:3000/blogs?category=Fashion
- 💄 **Beauty Category**: http://localhost:3000/blogs?category=Beauty
- ℹ️ **About Page**: http://localhost:3000/about
- 🔧 **Admin Panel**: http://localhost:3000/admin
- 🔌 **API Health**: http://localhost:5000/api/health

## Creating Your First Blog Post

1. Go to **http://localhost:3000/admin**
2. Click **"Create New Blog"**
3. Fill in:
   - **Title**: "My First Brazilian Fashion Post"
   - **Category**: Fashion or Beauty
   - **Excerpt**: Short summary (max 200 chars)
   - **Content**: Use the rich text editor
   - **Featured Image**: Upload or use URL
   - Check **"Published"** to make it live
   - Check **"Featured"** to show on homepage
4. Click **"Create Blog"**
5. Visit homepage to see your post!

## Using Images

### Option 1: Upload (Requires Cloudinary)
- Setup Cloudinary account
- Add credentials to `.env`
- Upload images via admin panel

### Option 2: Use Image URLs (No setup needed!)
Use free stock photos:
- **Unsplash**: https://unsplash.com/
- **Pexels**: https://pexels.com/
- Just paste the image URL in the featured image field

## Project Structure

```
brazil_blogs/
├── backend/           # API server
│   ├── models/       # Database schemas
│   ├── controllers/  # Business logic
│   ├── routes/       # API endpoints
│   └── server.js     # Entry point
│
├── frontend/         # Next.js website
│   ├── app/         # Pages
│   │   ├── page.js        # Homepage
│   │   ├── blogs/         # Blog pages
│   │   ├── about/         # About page
│   │   └── admin/         # Admin panel
│   └── components/  # Reusable UI components
│
└── README.md        # Full documentation
```

## Common Issues & Solutions

### "npm: command not found"
→ Install Node.js first

### "MongoDB connection failed"
→ Start MongoDB: `brew services start mongodb-community`  
→ Or use MongoDB Atlas cloud database

### "Port 3000 already in use"
→ Kill process: `lsof -ti:3000 | xargs kill -9`

### Images not uploading
→ Check Cloudinary credentials in `.env`  
→ Or use image URLs instead

## Next Steps

1. ✅ **Customize Design**: Edit colors in `frontend/tailwind.config.js`
2. ✅ **Add Content**: Create blog posts via admin panel
3. ✅ **Update About Page**: Edit `frontend/app/about/page.js`
4. ✅ **Add Social Media**: Update links in admin panel
5. ✅ **Deploy**: Use Vercel (frontend) + Railway (backend)

## Sample Blog Post Ideas

### Fashion
- "Top 10 Brazilian Designer Brands to Watch in 2026"
- "How to Build a Capsule Wardrobe for Tropical Climate"
- "Sustainable Fashion: Brazilian Brands Leading the Way"

### Beauty
- "The Ultimate Brazilian Skincare Routine"
- "Bold Lip Colors for Every Skin Tone"
- "Natural Hair Care Tips from Brazilian Experts"

## Need Help?

- 📖 Check `README.md` for detailed documentation
- 🛠️ See `SETUP.md` for installation help
- 💻 View code comments for technical details

## Features Overview

✨ **Content Management**
- Create, edit, delete blog posts
- Rich text editor with formatting
- Image upload and management
- Categories and tags
- Draft/publish system
- Featured posts

🎨 **Design**
- Responsive (mobile, tablet, desktop)
- Brazilian color theme
- Beautiful typography
- Smooth animations
- SEO optimized

📊 **Analytics**
- View counts per post
- Read time calculation
- Popular posts tracking

🔗 **Social Features**
- Share buttons (Facebook, Twitter, Pinterest, WhatsApp)
- Social media links in footer
- Newsletter signup

---

**Made with ❤️ for Brazilian Fashion & Beauty**

Ready to start? Run the backend and frontend, then visit http://localhost:3000! 🎉
