'use client';

export default function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add newsletter subscription logic here
    alert('Thank you for subscribing!');
  };

  return (
    <section className="bg-gradient-to-r from-brazilian-ocean to-brazilian-green py-20">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-heading font-bold text-white mb-4">
          Join Our Community
        </h2>
        <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
          Get the latest Brazilian fashion and beauty trends delivered to your inbox
        </p>
        
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-6 py-4 rounded-lg text-gray-900 focus:outline-none focus:ring-2 focus:ring-brazilian-yellow"
            />
            <button type="submit" className="bg-brazilian-coral hover:bg-brazilian-sunset text-white px-8 py-4 rounded-lg font-bold transition-colors">
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
