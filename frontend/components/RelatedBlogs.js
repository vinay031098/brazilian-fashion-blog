'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import BlogCard from './BlogCard';

export default function RelatedBlogs({ category, currentSlug }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetchRelatedBlogs();
  }, [category]);

  const fetchRelatedBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs', {
        params: { category, published: true, limit: 3 }
      });
      const filtered = res.data.blogs.filter(blog => blog.slug !== currentSlug);
      setBlogs(filtered.slice(0, 3));
    } catch (error) {
      console.error('Error fetching related blogs:', error);
    }
  };

  if (blogs.length === 0) {
    return null;
  }

  return (
    <section className="mt-16 pt-16 border-t">
      <h2 className="text-3xl font-heading font-bold mb-8">Related Articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </section>
  );
}
