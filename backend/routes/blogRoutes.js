const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogController');
const upload = require('../middleware/upload');

// Public routes
router.get('/', blogController.getAllBlogs);
router.get('/featured', blogController.getFeaturedBlogs);
router.get('/latest', blogController.getLatestBlogs);
router.get('/:slug', blogController.getBlogBySlug);

// Admin routes (in production, add authentication middleware)
router.post('/', upload.fields([
  { name: 'featuredImage', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]), blogController.createBlog);

router.put('/:id', upload.fields([
  { name: 'featuredImage', maxCount: 1 },
  { name: 'images', maxCount: 10 }
]), blogController.updateBlog);

router.delete('/:id', blogController.deleteBlog);

module.exports = router;
