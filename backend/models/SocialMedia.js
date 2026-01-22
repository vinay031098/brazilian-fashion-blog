const mongoose = require('mongoose');

const socialMediaSchema = new mongoose.Schema({
  platform: {
    type: String,
    required: true,
    enum: ['Instagram', 'Facebook', 'Twitter', 'Pinterest', 'TikTok', 'YouTube', 'LinkedIn']
  },
  handle: {
    type: String,
    required: true
  },
  url: {
    type: String,
    required: true
  },
  icon: String,
  active: {
    type: Boolean,
    default: true
  },
  order: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('SocialMedia', socialMediaSchema);
