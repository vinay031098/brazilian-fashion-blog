// API Configuration
// This file centralizes API URL management for easy deployment

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

// Helper function to build API endpoints
export const API_ENDPOINTS = {
  // Blog endpoints
  blogs: {
    getAll: (params = {}) => {
      const queryString = new URLSearchParams(params).toString();
      return `${API_URL}/api/blogs${queryString ? `?${queryString}` : ''}`;
    },
    getBySlug: (slug) => `${API_URL}/api/blogs/${slug}`,
    getFeatured: () => `${API_URL}/api/blogs/featured`,
    getLatest: (limit = 5) => `${API_URL}/api/blogs/latest?limit=${limit}`,
    create: () => `${API_URL}/api/blogs`,
    update: (id) => `${API_URL}/api/blogs/${id}`,
    delete: (id) => `${API_URL}/api/blogs/${id}`,
  },
  
  // Social media endpoints
  socialMedia: {
    getAll: () => `${API_URL}/api/social-media`,
    create: () => `${API_URL}/api/social-media`,
    update: (id) => `${API_URL}/api/social-media/${id}`,
    delete: (id) => `${API_URL}/api/social-media/${id}`,
  },
  
  // Health check
  health: () => `${API_URL}/api/health`,
};

export default API_URL;
