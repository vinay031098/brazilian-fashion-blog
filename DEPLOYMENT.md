# 🚀 Deployment Guide

Deploy your Brazilian blog to the internet for free!

## Recommended Setup

- **Frontend**: Vercel (Free)
- **Backend**: Railway or Render (Free tier)
- **Database**: MongoDB Atlas (Free tier)
- **Images**: Cloudinary (Free tier)

## Step-by-Step Deployment

### 1️⃣ Setup MongoDB Atlas (Database)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free account
3. Create a new cluster (free tier)
4. Click "Connect" → "Connect your application"
5. Copy connection string:
   ```
   mongodb+srv://username:<password>@cluster.mongodb.net/brazilian_blog
   ```
6. Replace `<password>` with your actual password
7. Save this for later!

### 2️⃣ Setup Cloudinary (Images)

1. Go to [Cloudinary](https://cloudinary.com/)
2. Create free account
3. Go to Dashboard
4. Copy these credentials:
   - Cloud Name
   - API Key
   - API Secret
5. Save for later!

### 3️⃣ Deploy Backend to Railway

#### Option A: Railway (Recommended)

1. Go to [Railway.app](https://railway.app/)
2. Sign up with GitHub
3. Click "New Project" → "Deploy from GitHub repo"
4. Connect your repository
5. Select `backend` folder as root
6. Add environment variables:
   ```
   PORT=5000
   MONGODB_URI=your_atlas_connection_string
   CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   ```
7. Deploy!
8. Copy your backend URL (e.g., `https://your-app.railway.app`)

#### Option B: Render

1. Go to [Render.com](https://render.com/)
2. Sign up with GitHub
3. Click "New" → "Web Service"
4. Connect your repository
5. Settings:
   - **Root Directory**: `backend`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
6. Add environment variables (same as above)
7. Deploy!
8. Copy your backend URL

### 4️⃣ Deploy Frontend to Vercel

1. Go to [Vercel](https://vercel.com/)
2. Sign up with GitHub
3. Click "Add New" → "Project"
4. Import your repository
5. Settings:
   - **Root Directory**: `frontend`
   - **Framework Preset**: Next.js
6. **Important**: Update API URLs in your code
7. Deploy!

#### Update API URLs

Before deploying, update all API calls in your frontend:

**Create a new file**: `frontend/lib/api.js`
```javascript
export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';
```

**Update these files** to use `API_URL`:
- `components/FeaturedBlogs.js`
- `components/CategorySection.js`
- `components/LatestBlogs.js`
- `components/Footer.js`
- `app/blogs/page.js`
- `app/blogs/[slug]/page.js`
- `app/admin/page.js`

Example change:
```javascript
// Before
const res = await axios.get('http://localhost:5000/api/blogs');

// After
import { API_URL } from '@/lib/api';
const res = await axios.get(`${API_URL}/api/blogs`);
```

Then add environment variable in Vercel:
```
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```

### 5️⃣ Seed Production Database (Optional)

```bash
# Update backend/.env with Atlas URI, then:
cd backend
npm run seed
```

## Free Tier Limits

| Service | Free Tier |
|---------|-----------|
| **Vercel** | Unlimited public projects, 100GB bandwidth/month |
| **Railway** | $5 credit/month, 500 hours |
| **Render** | 750 hours/month, sleeps after inactivity |
| **MongoDB Atlas** | 512MB storage, shared cluster |
| **Cloudinary** | 25GB storage, 25GB bandwidth/month |

## Environment Variables Checklist

### Backend (Railway/Render)
```env
PORT=5000
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/brazilian_blog
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

### Frontend (Vercel)
```env
NEXT_PUBLIC_API_URL=https://your-backend.railway.app
```

## Post-Deployment Checklist

- [ ] Backend is accessible (visit `/api/health`)
- [ ] Frontend loads correctly
- [ ] Can view existing blogs
- [ ] Admin panel loads
- [ ] Can create new blog (test with URL image)
- [ ] Image uploads work (if Cloudinary configured)
- [ ] Social media links appear in footer

## Custom Domain (Optional)

### Vercel (Frontend)
1. Go to project settings
2. Click "Domains"
3. Add your domain
4. Follow DNS instructions

### Railway (Backend)
1. Go to project settings
2. Click "Settings" → "Domains"
3. Add custom domain
4. Update DNS records

## Security Improvements for Production

⚠️ **Before going live, add these:**

### 1. Authentication for Admin Panel

```bash
npm install next-auth
```

Protect `/admin` route with authentication.

### 2. Rate Limiting

```bash
cd backend
npm install express-rate-limit
```

Add to `server.js`:
```javascript
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
});

app.use('/api/', limiter);
```

### 3. CORS Configuration

Update `server.js`:
```javascript
app.use(cors({
  origin: 'https://your-frontend-domain.vercel.app',
  credentials: true
}));
```

### 4. Environment Variables

Never commit `.env` files! Always use platform's environment variable settings.

## Monitoring & Analytics

### Add Google Analytics

1. Get tracking ID from Google Analytics
2. Add to `frontend/app/layout.js`:

```javascript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=GA_TRACKING_ID`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'GA_TRACKING_ID');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Troubleshooting Deployment

### Backend not responding
- Check environment variables are set
- View logs in Railway/Render dashboard
- Verify MongoDB Atlas IP whitelist (allow all: 0.0.0.0/0)

### Frontend can't connect to backend
- Check CORS settings in backend
- Verify `NEXT_PUBLIC_API_URL` is set correctly
- Check browser console for errors

### Images not uploading
- Verify Cloudinary credentials
- Check backend logs for errors
- Test with image URLs instead

### Database connection failed
- Check MongoDB Atlas connection string
- Verify password doesn't contain special characters
- Add current IP to IP Access List in Atlas

## Performance Optimization

### Backend
- [ ] Enable compression middleware
- [ ] Add database indexes
- [ ] Implement caching (Redis)
- [ ] Optimize image sizes

### Frontend
- [ ] Use Next.js Image optimization
- [ ] Enable static generation where possible
- [ ] Add loading states
- [ ] Implement lazy loading

## Backup Strategy

### Database
MongoDB Atlas provides automatic backups on paid tiers. For free tier:
```bash
mongodump --uri="your_mongodb_uri"
```

### Images
Cloudinary automatically stores your images. Download backups periodically.

## Cost Estimates

### If you outgrow free tiers:

- **Vercel Pro**: $20/month
- **Railway**: ~$5-20/month (pay for usage)
- **MongoDB Atlas M10**: $57/month
- **Cloudinary**: $89/month

Total: ~$30-50/month for moderate traffic

## Going Live Checklist

- [ ] Backend deployed and tested
- [ ] Frontend deployed and tested
- [ ] MongoDB Atlas configured
- [ ] Cloudinary configured
- [ ] All environment variables set
- [ ] Sample data seeded
- [ ] Admin authentication added
- [ ] Rate limiting enabled
- [ ] CORS configured properly
- [ ] Custom domain connected (optional)
- [ ] Analytics added (optional)
- [ ] Social media accounts created
- [ ] First 5-10 blog posts published

## Alternative Deployment Options

### All-in-One Platforms
- **Heroku**: Backend + Frontend (no longer free)
- **DigitalOcean App Platform**: $5-12/month
- **AWS Amplify**: Pay as you go
- **Google Cloud Run**: Pay as you go

### Self-Hosted
- **DigitalOcean Droplet**: $4/month
- **Linode**: $5/month
- **AWS EC2**: Free tier for 12 months

## Support & Resources

- **Vercel Docs**: https://vercel.com/docs
- **Railway Docs**: https://docs.railway.app
- **MongoDB Atlas Docs**: https://docs.atlas.mongodb.com
- **Next.js Deployment**: https://nextjs.org/docs/deployment

---

**Your blog is ready for the world!** 🌍

Need help? Check the logs, verify environment variables, and ensure all services are running. 🚀
