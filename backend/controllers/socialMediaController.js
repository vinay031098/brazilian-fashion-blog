const SocialMedia = require('../models/SocialMedia');

// Get all active social media links
exports.getAllSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.find({ active: true }).sort({ order: 1 });
    res.json(socialMedia);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching social media', error: error.message });
  }
};

// Create social media link
exports.createSocialMedia = async (req, res) => {
  try {
    const socialMedia = new SocialMedia(req.body);
    await socialMedia.save();
    res.status(201).json({ message: 'Social media link created', socialMedia });
  } catch (error) {
    res.status(400).json({ message: 'Error creating social media link', error: error.message });
  }
};

// Update social media link
exports.updateSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!socialMedia) {
      return res.status(404).json({ message: 'Social media link not found' });
    }
    
    res.json({ message: 'Social media link updated', socialMedia });
  } catch (error) {
    res.status(400).json({ message: 'Error updating social media link', error: error.message });
  }
};

// Delete social media link
exports.deleteSocialMedia = async (req, res) => {
  try {
    const socialMedia = await SocialMedia.findByIdAndDelete(req.params.id);
    
    if (!socialMedia) {
      return res.status(404).json({ message: 'Social media link not found' });
    }
    
    res.json({ message: 'Social media link deleted' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting social media link', error: error.message });
  }
};
