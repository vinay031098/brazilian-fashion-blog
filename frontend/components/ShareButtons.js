'use client';

import { FaFacebook, FaTwitter, FaPinterest, FaWhatsapp, FaLink } from 'react-icons/fa';

export default function ShareButtons({ url, title }) {
  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    whatsapp: `https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`,
  };

  const copyLink = () => {
    navigator.clipboard.writeText(url);
    alert('Link copied to clipboard!');
  };

  return (
    <div className="flex items-center gap-4">
      <span className="text-gray-600 font-semibold">Share:</span>
      <a
        href={shareLinks.facebook}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-700 text-xl"
        aria-label="Share on Facebook"
      >
        <FaFacebook />
      </a>
      <a
        href={shareLinks.twitter}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sky-500 hover:text-sky-600 text-xl"
        aria-label="Share on Twitter"
      >
        <FaTwitter />
      </a>
      <a
        href={shareLinks.pinterest}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-700 text-xl"
        aria-label="Share on Pinterest"
      >
        <FaPinterest />
      </a>
      <a
        href={shareLinks.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        className="text-green-600 hover:text-green-700 text-xl"
        aria-label="Share on WhatsApp"
      >
        <FaWhatsapp />
      </a>
      <button
        onClick={copyLink}
        className="text-gray-600 hover:text-gray-700 text-xl"
        aria-label="Copy link"
      >
        <FaLink />
      </button>
    </div>
  );
}
