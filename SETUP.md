# Setup Instructions

Since Node.js is not currently installed on your system, please follow these steps:

## 1. Install Node.js

### Option A: Using Homebrew (Recommended for macOS)
```bash
# Install Homebrew if you don't have it
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# Install Node.js
brew install node
```

### Option B: Download from Official Website
Visit https://nodejs.org/ and download the LTS version for macOS.

## 2. Install MongoDB

### Option A: Using Homebrew
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Option B: Use MongoDB Atlas (Cloud)
Visit https://www.mongodb.com/cloud/atlas and create a free account.

## 3. Setup Cloudinary (Free)

1. Visit https://cloudinary.com/
2. Create a free account
3. Get your credentials from the dashboard:
   - Cloud Name
   - API Key
   - API Secret

## 4. Install Dependencies

### Backend
```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs/backend"
npm install
```

### Frontend
```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs/frontend"
npm install
```

## 5. Configure Environment Variables

Create a `.env` file in the backend directory:

```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs/backend"
cp .env.example .env
```

Edit `.env` with your credentials:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/brazilian_blog
# Or use MongoDB Atlas URI:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/brazilian_blog

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

## 6. Run the Application

### Terminal 1 - Backend
```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs/backend"
npm run dev
```

### Terminal 2 - Frontend
```bash
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs/frontend"
npm run dev
```

## 7. Access the Application

- **Frontend**: http://localhost:3000
- **Backend API**: http://localhost:5000/api
- **Admin Panel**: http://localhost:3000/admin

## 8. Create Your First Blog Post

1. Go to http://localhost:3000/admin
2. Click "Create New Blog"
3. Fill in all the details
4. For images, you can:
   - Upload your own images (requires Cloudinary setup)
   - Use URLs from free image sites like:
     - Unsplash: https://unsplash.com/
     - Pexels: https://pexels.com/
5. Click "Create Blog"

## Quick Start (After Node.js Installation)

```bash
# Navigate to project root
cd "/Users/vinay/Library/CloudStorage/GoogleDrive-vinay904412@gmail.com/My Drive/brazil_blogs"

# Install backend dependencies
cd backend && npm install

# Install frontend dependencies  
cd ../frontend && npm install

# Setup environment variables
cd ../backend
cp .env.example .env
# Edit .env with your credentials

# Start backend (in one terminal)
cd backend
npm run dev

# Start frontend (in another terminal)
cd frontend
npm run dev
```

## Troubleshooting

### MongoDB Connection Issues
- Make sure MongoDB is running: `brew services list`
- Or use MongoDB Atlas cloud database

### Port Already in Use
- Backend: Change PORT in `.env` file
- Frontend: Change port in package.json scripts

### Image Upload Not Working
- Verify Cloudinary credentials in `.env`
- Check uploads folder exists in backend directory

## Next Steps

1. **Install Node.js and MongoDB**
2. **Configure environment variables**
3. **Install dependencies**
4. **Start the application**
5. **Create sample blog posts**
6. **Customize the design and content**

Enjoy your Brazilian Fashion & Beauty Blog! 🇧🇷✨
