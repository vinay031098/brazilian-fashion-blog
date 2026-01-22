export default function Pagination({ currentPage, totalPages, category }) {
  const pages = [];
  const maxPages = 5;
  
  let startPage = Math.max(1, currentPage - Math.floor(maxPages / 2));
  let endPage = Math.min(totalPages, startPage + maxPages - 1);
  
  if (endPage - startPage < maxPages - 1) {
    startPage = Math.max(1, endPage - maxPages + 1);
  }
  
  for (let i = startPage; i <= endPage; i++) {
    pages.push(i);
  }
  
  const getUrl = (page) => {
    const params = new URLSearchParams();
    params.set('page', page);
    if (category) params.set('category', category);
    return `/blogs?${params.toString()}`;
  };

  if (totalPages <= 1) return null;

  return (
    <div className="flex justify-center items-center gap-2">
      {currentPage > 1 && (
        <a
          href={getUrl(currentPage - 1)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold"
        >
          Previous
        </a>
      )}
      
      {pages.map((page) => (
        <a
          key={page}
          href={getUrl(page)}
          className={`px-4 py-2 rounded-lg font-semibold ${
            page === currentPage
              ? 'bg-brazilian-green text-white'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {page}
        </a>
      ))}
      
      {currentPage < totalPages && (
        <a
          href={getUrl(currentPage + 1)}
          className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 font-semibold"
        >
          Next
        </a>
      )}
    </div>
  );
}
