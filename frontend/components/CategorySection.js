'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

export default function CategorySection({ title, category, description }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchBlogs();
  }, [category]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5001/api/blogs', {
        params: { category, published: true, limit: 3 }
      });
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="container mx-auto px-4 py-16 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="section-title">{title}</h2>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">{description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
      
      <div className="text-center">
        <a href={`/blogs?category=${category}`} className="btn-primary">
          View All {category} Posts
        </a>
      </div>
    </section>
  );
}
