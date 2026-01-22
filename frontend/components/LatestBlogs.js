'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

export default function LatestBlogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchLatestBlogs();
  }, []);

  const fetchLatestBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/blogs/latest', {
        params: { limit: 6 }
      });
      setBlogs(res.data);
    } catch (error) {
      console.error('Error fetching latest blogs:', error);
    }
  };

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="section-title gradient-text">Latest Posts</h2>
        <p className="text-gray-600 text-lg">Fresh content on Brazilian fashion and beauty</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
