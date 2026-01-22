# 🗺️ Website Sitemap

## Visual Website Structure

```
🏠 Homepage (/)
│
├── 🎨 Hero Section
│   ├── "Beleza Brasileira" title
│   ├── Tagline
│   └── CTA Buttons → Fashion | Beauty
│
├── ⭐ Featured Blogs Section
│   └── 3-6 featured blog cards
│
├── 👔 Fashion Category Section
│   ├── Section title
│   ├── 3 latest fashion posts
│   └── "View All Fashion" button
│
├── 💄 Beauty Category Section
│   ├── Section title
│   ├── 3 latest beauty posts
│   └── "View All Beauty" button
│
├── 📰 Latest Blogs Section
│   └── 6 most recent posts
│
└── 📧 Newsletter Section
    └── Email signup form

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📚 All Blogs Page (/blogs)
│
├── 🎯 Page Header
│   ├── Title
│   └── Description
│
├── 🏷️ Category Filter Bar
│   └── [All] [Fashion] [Beauty] [Lifestyle] [Sustainable] [Trends]
│
├── 📱 Blog Grid
│   ├── Blog Card 1
│   ├── Blog Card 2
│   ├── Blog Card 3
│   └── ... (12 per page)
│
└── 📄 Pagination
    └── [Previous] [1] [2] [3] [Next]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📝 Single Blog Post (/blogs/[slug])
│
├── 📋 Header
│   ├── Category badge
│   ├── Subcategory badge
│   ├── Title
│   ├── Excerpt
│   ├── Metadata (date, read time, views)
│   └── Share buttons
│
├── 🖼️ Featured Image
│
├── 📄 Blog Content
│   └── Rich text with formatting
│
├── 🏷️ Tags Section
│   └── Related tags
│
└── 🔗 Related Blogs
    └── 3 similar posts

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

ℹ️ About Page (/about)
│
├── Page Header
├── Mission Statement
├── What We Cover
│   ├── Fashion Topics
│   └── Beauty Topics
├── Brazilian Style Philosophy
├── Featured Topics
└── Join Community CTA

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

🔧 Admin Panel (/admin)
│
├── 📑 Tabs
│   ├── [Manage Blogs]
│   └── [Social Media]
│
├── 📝 Manage Blogs Tab
│   │
│   ├── "Create New Blog" Button
│   │
│   ├── 📋 Blog Form (when creating/editing)
│   │   ├── Title input
│   │   ├── Category dropdown
│   │   ├── Subcategory dropdown
│   │   ├── Excerpt textarea
│   │   ├── Content editor (Rich text)
│   │   ├── Featured image upload
│   │   ├── Tags input
│   │   ├── Published checkbox
│   │   ├── Featured checkbox
│   │   └── Submit button
│   │
│   └── 📊 Blogs Table
│       ├── Columns: Title | Category | Published | Featured | Views
│       └── Actions: Edit | Delete
│
└── 🌐 Social Media Tab
    └── Social media management interface
```

## URL Structure

```
Homepage:          /
All Blogs:         /blogs
Category Filter:   /blogs?category=Fashion
Specific Blog:     /blogs/office-wear-trends-2026
About:             /about
Admin:             /admin

API Endpoints:
GET    /api/blogs
GET    /api/blogs/featured
GET    /api/blogs/latest
GET    /api/blogs/:slug
POST   /api/blogs
PUT    /api/blogs/:id
DELETE /api/blogs/:id
GET    /api/social-media
```

---

This sitemap shows the complete structure of your Brazilian blogging website! 🗺️✨
