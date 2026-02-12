'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

export default function FeaturedBlogs() {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedBlogs();
  }, []);

  const fetchFeaturedBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs/featured');
      setBlogs(res.data);
    } catch (error) {
      console.error('Error fetching featured blogs:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="text-center py-20">Loading featured blogs...</div>;
  }

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="section-title gradient-text">Featured Stories</h2>
        <p className="text-gray-600 text-lg">Handpicked articles showcasing the best of Brazilian style</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
