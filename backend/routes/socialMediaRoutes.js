const express = require('express');
const router = express.Router();
const socialMediaController = require('../controllers/socialMediaController');

// Public routes
router.get('/', socialMediaController.getAllSocialMedia);

// Admin routes (in production, add authentication middleware)
router.post('/', socialMediaController.createSocialMedia);
router.put('/:id', socialMediaController.updateSocialMedia);
router.delete('/:id', socialMediaController.deleteSocialMedia);

module.exports = router;
