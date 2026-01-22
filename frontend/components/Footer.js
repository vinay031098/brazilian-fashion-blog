'use client';

import { useState, useEffect } from 'react';
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest, FaTiktok, FaYoutube } from 'react-icons/fa';
import axios from 'axios';

export default function Footer() {
  const [socialMedia, setSocialMedia] = useState([]);

  useEffect(() => {
    fetchSocialMedia();
  }, []);

  const fetchSocialMedia = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/social-media');
      setSocialMedia(res.data);
    } catch (error) {
      console.error('Error fetching social media:', error);
    }
  };

  const getIcon = (platform) => {
    const icons = {
      Instagram: FaInstagram,
      Facebook: FaFacebook,
      Twitter: FaTwitter,
      Pinterest: FaPinterest,
      TikTok: FaTiktok,
      YouTube: FaYoutube,
    };
    const Icon = icons[platform] || FaInstagram;
    return <Icon className="text-2xl" />;
  };

  return (
    <footer className="bg-gradient-to-r from-brazilian-green to-brazilian-ocean text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">Beleza Brasileira</h3>
            <p className="text-gray-100 mb-4">
              Your destination for vibrant Brazilian fashion and beauty trends. Sustainable style meets tropical elegance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="/blogs?category=Fashion" className="hover:text-brazilian-yellow transition-colors">Fashion</a></li>
              <li><a href="/blogs?category=Beauty" className="hover:text-brazilian-yellow transition-colors">Beauty</a></li>
              <li><a href="/blogs?category=Sustainable" className="hover:text-brazilian-yellow transition-colors">Sustainable Style</a></li>
              <li><a href="/about" className="hover:text-brazilian-yellow transition-colors">About Us</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Categories</h4>
            <ul className="space-y-2">
              <li><a href="/blogs?subcategory=Office Wear" className="hover:text-brazilian-yellow transition-colors">Office Wear</a></li>
              <li><a href="/blogs?subcategory=Street Style" className="hover:text-brazilian-yellow transition-colors">Street Style</a></li>
              <li><a href="/blogs?subcategory=Skincare" className="hover:text-brazilian-yellow transition-colors">Skincare</a></li>
              <li><a href="/blogs?subcategory=Makeup" className="hover:text-brazilian-yellow transition-colors">Makeup</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="text-xl font-semibold mb-4">Connect With Us</h4>
            <div className="flex flex-wrap gap-4">
              {socialMedia.map((social) => (
                <a
                  key={social._id}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-brazilian-yellow transition-colors"
                  aria-label={social.platform}
                >
                  {getIcon(social.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Beleza Brasileira. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
