import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { FiClock } from 'react-icons/fi';

export default function BlogCard({ blog }) {
  const imageUrl = blog.featuredImage?.url || 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800';

  return (
    <Link href={`/blogs/${blog.slug}`} className="card group">
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageUrl}
          alt={blog.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brazilian-coral text-white rounded-full text-sm font-semibold">
            {blog.category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-heading font-bold mb-3 line-clamp-2 group-hover:text-brazilian-green transition-colors">
          {blog.title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3">
          {blog.excerpt}
        </p>
        
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>{format(new Date(blog.createdAt), 'MMM dd, yyyy')}</span>
          <div className="flex items-center gap-1">
            <FiClock />
            <span>{blog.readTime} min</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
