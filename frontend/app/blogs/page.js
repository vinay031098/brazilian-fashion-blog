import axios from 'axios';
import BlogCard from '@/components/BlogCard';
import Pagination from '@/components/Pagination';

async function getBlogs(searchParams) {
  const page = searchParams.page || 1;
  const category = searchParams.category || '';
  
  try {
    const res = await axios.get(`http://localhost:5000/api/blogs`, {
      params: { page, category, published: true, limit: 12 }
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching blogs:', error);
    return { blogs: [], totalPages: 0, currentPage: 1 };
  }
}

export default async function BlogsPage({ searchParams }) {
  const { blogs, totalPages, currentPage } = await getBlogs(searchParams);
  const category = searchParams.category || 'All';

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="section-title gradient-text">
          {category === 'All' ? 'All Blogs' : `${category} Blogs`}
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          Explore our collection of Brazilian fashion and beauty insights
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {['All', 'Fashion', 'Beauty', 'Lifestyle', 'Sustainable', 'Trends'].map((cat) => (
          <a
            key={cat}
            href={`/blogs${cat !== 'All' ? `?category=${cat}` : ''}`}
            className={`px-6 py-2 rounded-full font-semibold transition-colors ${
              category === cat
                ? 'bg-brazilian-green text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {cat}
          </a>
        ))}
      </div>

      {/* Blog Grid */}
      {blogs.length > 0 ? (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {blogs.map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
          
          <Pagination 
            currentPage={parseInt(currentPage)} 
            totalPages={totalPages} 
            category={category !== 'All' ? category : ''}
          />
        </>
      ) : (
        <div className="text-center py-20">
          <p className="text-2xl text-gray-500">No blogs found in this category.</p>
        </div>
      )}
    </div>
  );
}
