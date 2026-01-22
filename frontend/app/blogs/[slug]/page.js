import axios from 'axios';
import Image from 'next/image';
import { format } from 'date-fns';
import { FiClock, FiEye, FiCalendar } from 'react-icons/fi';
import RelatedBlogs from '@/components/RelatedBlogs';
import ShareButtons from '@/components/ShareButtons';

async function getBlog(slug) {
  try {
    const res = await axios.get(`http://localhost:5001/api/blogs/${slug}`);
    return res.data;
  } catch (error) {
    console.error('Error fetching blog:', error);
    return null;
  }
}

export default async function BlogPost({ params }) {
  const blog = await getBlog(params.slug);

  if (!blog) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Blog Not Found</h1>
        <p className="text-gray-600 mb-8">Sorry, this blog post doesn't exist.</p>
        <a href="/blogs" className="btn-primary">Back to Blogs</a>
      </div>
    );
  }

  return (
    <article className="container mx-auto px-4 py-16 max-w-4xl">
      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap gap-2 mb-4">
          <span className="px-4 py-1 bg-brazilian-coral text-white rounded-full text-sm font-semibold">
            {blog.category}
          </span>
          {blog.subcategory && (
            <span className="px-4 py-1 bg-brazilian-ocean text-white rounded-full text-sm font-semibold">
              {blog.subcategory}
            </span>
          )}
        </div>

        <h1 className="text-5xl font-heading font-bold mb-6 leading-tight">
          {blog.title}
        </h1>

        <p className="text-xl text-gray-600 mb-6">{blog.excerpt}</p>

        <div className="flex flex-wrap items-center gap-6 text-gray-500 mb-6">
          <div className="flex items-center gap-2">
            <FiCalendar />
            <span>{format(new Date(blog.createdAt), 'MMMM dd, yyyy')}</span>
          </div>
          <div className="flex items-center gap-2">
            <FiClock />
            <span>{blog.readTime} min read</span>
          </div>
          <div className="flex items-center gap-2">
            <FiEye />
            <span>{blog.views} views</span>
          </div>
        </div>

        <ShareButtons 
          url={`https://yoursite.com/blogs/${blog.slug}`}
          title={blog.title}
        />
      </header>

      {/* Featured Image */}
      {blog.featuredImage && (
        <div className="relative w-full h-[500px] mb-12 rounded-2xl overflow-hidden">
          <Image
            src={blog.featuredImage.url}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Content */}
      <div 
        className="prose prose-lg max-w-none mb-12"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      />

      {/* Tags */}
      {blog.tags && blog.tags.length > 0 && (
        <div className="mb-12">
          <h3 className="text-xl font-bold mb-4">Tags</h3>
          <div className="flex flex-wrap gap-3">
            {blog.tags.map((tag, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                #{tag}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Related Blogs */}
      <RelatedBlogs category={blog.category} currentSlug={blog.slug} />
    </article>
  );
}
