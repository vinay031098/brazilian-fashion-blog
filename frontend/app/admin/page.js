'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';
import dynamic from 'next/dynamic';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState('blogs');
  const [blogs, setBlogs] = useState([]);
  const [socialMedia, setSocialMedia] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingBlog, setEditingBlog] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: 'Fashion',
    subcategory: '',
    tags: '',
    published: false,
    featured: false
  });
  const [featuredImage, setFeaturedImage] = useState(null);

  useEffect(() => {
    if (activeTab === 'blogs') {
      fetchBlogs();
    } else {
      fetchSocialMedia();
    }
  }, [activeTab]);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/blogs', {
        params: { limit: 100 }
      });
      setBlogs(res.data.blogs);
    } catch (error) {
      console.error('Error fetching blogs:', error);
    }
  };

  const fetchSocialMedia = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/social-media');
      setSocialMedia(res.data);
    } catch (error) {
      console.error('Error fetching social media:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleContentChange = (content) => {
    setFormData(prev => ({ ...prev, content }));
  };

  const handleImageChange = (e) => {
    setFeaturedImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const data = new FormData();
    Object.keys(formData).forEach(key => {
      if (key === 'tags') {
        const tagsArray = formData[key].split(',').map(t => t.trim()).filter(t => t);
        data.append(key, JSON.stringify(tagsArray));
      } else if (key === 'published' || key === 'featured') {
        data.append(key, formData[key] ? 'true' : 'false');
      } else if (formData[key] !== '' && formData[key] !== null) {
        data.append(key, formData[key]);
      }
    });
    
    if (featuredImage) {
      data.append('featuredImage', featuredImage);
    }

    try {
      if (editingBlog) {
        await axios.put(`http://localhost:5000/api/blogs/${editingBlog._id}`, data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Blog updated successfully!');
      } else {
        await axios.post('http://localhost:5000/api/blogs', data, {
          headers: { 'Content-Type': 'multipart/form-data' }
        });
        alert('Blog created successfully!');
      }
      
      resetForm();
      fetchBlogs();
      setShowForm(false);
    } catch (error) {
      console.error('Error details:', error.response?.data);
      alert('Error saving blog: ' + (error.response?.data?.error || error.message));
    }
  };

  const handleEdit = (blog) => {
    setEditingBlog(blog);
    setFormData({
      title: blog.title,
      excerpt: blog.excerpt,
      content: blog.content,
      category: blog.category,
      subcategory: blog.subcategory || '',
      tags: blog.tags ? blog.tags.join(', ') : '',
      published: blog.published,
      featured: blog.featured
    });
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      await axios.delete(`http://localhost:5000/api/blogs/${id}`);
      alert('Blog deleted successfully!');
      fetchBlogs();
    } catch (error) {
      alert('Error deleting blog: ' + error.message);
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      excerpt: '',
      content: '',
      category: 'Fashion',
      subcategory: '',
      tags: '',
      published: false,
      featured: false
    });
    setFeaturedImage(null);
    setEditingBlog(null);
  };

  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="section-title text-center gradient-text mb-8">Admin Panel</h1>
      
      {/* Tabs */}
      <div className="flex gap-4 mb-8 border-b">
        <button
          onClick={() => setActiveTab('blogs')}
          className={`px-6 py-3 font-semibold ${
            activeTab === 'blogs'
              ? 'border-b-4 border-brazilian-green text-brazilian-green'
              : 'text-gray-600'
          }`}
        >
          Manage Blogs
        </button>
        <button
          onClick={() => setActiveTab('social')}
          className={`px-6 py-3 font-semibold ${
            activeTab === 'social'
              ? 'border-b-4 border-brazilian-green text-brazilian-green'
              : 'text-gray-600'
          }`}
        >
          Social Media
        </button>
      </div>

      {/* Blogs Tab */}
      {activeTab === 'blogs' && (
        <div>
          <div className="mb-8">
            <button
              onClick={() => {
                resetForm();
                setShowForm(!showForm);
              }}
              className="btn-primary"
            >
              {showForm ? 'Cancel' : 'Create New Blog'}
            </button>
          </div>

          {/* Blog Form */}
          {showForm && (
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <h2 className="text-2xl font-bold mb-6">
                {editingBlog ? 'Edit Blog' : 'Create New Blog'}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block font-semibold mb-2">Title *</label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brazilian-green"
                  />
                </div>
                
                <div>
                  <label className="block font-semibold mb-2">Category *</label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brazilian-green"
                  >
                    <option value="Fashion">Fashion</option>
                    <option value="Beauty">Beauty</option>
                    <option value="Lifestyle">Lifestyle</option>
                    <option value="Sustainable">Sustainable</option>
                    <option value="Trends">Trends</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Subcategory</label>
                <select
                  name="subcategory"
                  value={formData.subcategory}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brazilian-green"
                >
                  <option value="">Select Subcategory</option>
                  <option value="Office Wear">Office Wear</option>
                  <option value="Street Style">Street Style</option>
                  <option value="Capsule Wardrobe">Capsule Wardrobe</option>
                  <option value="Skincare">Skincare</option>
                  <option value="Makeup">Makeup</option>
                  <option value="Hair Care">Hair Care</option>
                  <option value="Seasonal Trends">Seasonal Trends</option>
                </select>
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Excerpt *</label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  required
                  maxLength={200}
                  rows={3}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brazilian-green"
                  placeholder="Brief description (max 200 characters)"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Content *</label>
                <ReactQuill
                  theme="snow"
                  value={formData.content}
                  onChange={handleContentChange}
                  className="bg-white"
                  modules={{
                    toolbar: [
                      [{ header: [1, 2, 3, false] }],
                      ['bold', 'italic', 'underline', 'strike'],
                      [{ list: 'ordered' }, { list: 'bullet' }],
                      ['link', 'image'],
                      ['clean']
                    ]
                  }}
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Featured Image</label>
                <input
                  type="file"
                  onChange={handleImageChange}
                  accept="image/*"
                  className="w-full"
                />
              </div>

              <div className="mb-6">
                <label className="block font-semibold mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  name="tags"
                  value={formData.tags}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brazilian-green"
                  placeholder="fashion, beauty, sustainable"
                />
              </div>

              <div className="flex gap-6 mb-6">
                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="w-5 h-5"
                  />
                  <span className="font-semibold">Published</span>
                </label>

                <label className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="featured"
                    checked={formData.featured}
                    onChange={handleInputChange}
                    className="w-5 h-5"
                  />
                  <span className="font-semibold">Featured</span>
                </label>
              </div>

              <div className="flex gap-4">
                <button type="submit" className="btn-primary">
                  {editingBlog ? 'Update Blog' : 'Create Blog'}
                </button>
                <button
                  type="button"
                  onClick={() => {
                    resetForm();
                    setShowForm(false);
                  }}
                  className="px-6 py-3 bg-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-400"
                >
                  Cancel
                </button>
              </div>
            </form>
          )}

          {/* Blogs List */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-6 py-4 text-left font-semibold">Title</th>
                  <th className="px-6 py-4 text-left font-semibold">Category</th>
                  <th className="px-6 py-4 text-center font-semibold">Published</th>
                  <th className="px-6 py-4 text-center font-semibold">Featured</th>
                  <th className="px-6 py-4 text-center font-semibold">Views</th>
                  <th className="px-6 py-4 text-center font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                {blogs.map((blog) => (
                  <tr key={blog._id} className="border-t hover:bg-gray-50">
                    <td className="px-6 py-4">{blog.title}</td>
                    <td className="px-6 py-4">{blog.category}</td>
                    <td className="px-6 py-4 text-center">
                      {blog.published ? '✅' : '❌'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      {blog.featured ? '⭐' : '-'}
                    </td>
                    <td className="px-6 py-4 text-center">{blog.views}</td>
                    <td className="px-6 py-4 text-center">
                      <button
                        onClick={() => handleEdit(blog)}
                        className="text-blue-600 hover:text-blue-800 mr-4"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(blog._id)}
                        className="text-red-600 hover:text-red-800"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Social Media Tab */}
      {activeTab === 'social' && (
        <div>
          <p className="text-gray-600 mb-8">
            Manage your social media links. These will appear in the footer and social pages.
          </p>
          {/* Add social media management UI here */}
        </div>
      )}
    </div>
  );
}
