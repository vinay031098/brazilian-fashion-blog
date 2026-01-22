import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-brazilian-coral via-brazilian-sunset to-brazilian-yellow py-32">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-6xl md:text-7xl font-heading font-bold text-white mb-6 drop-shadow-lg">
          Beleza Brasileira
        </h1>
        <p className="text-2xl md:text-3xl text-white mb-8 max-w-3xl mx-auto">
          Discover vibrant fashion, sustainable beauty, and tropical elegance
        </p>
        <p className="text-lg text-white/90 mb-12 max-w-2xl mx-auto">
          From Rio's beach-ready styles to São Paulo's urban chic, explore the best of Brazilian fashion and beauty
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/blogs?category=Fashion" className="bg-white text-brazilian-coral px-8 py-4 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors">
            Explore Fashion
          </Link>
          <Link href="/blogs?category=Beauty" className="bg-brazilian-green text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-brazilian-green/90 transition-colors">
            Beauty Secrets
          </Link>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0V120Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
}
