import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-16 max-w-4xl">
      <h1 className="section-title text-center gradient-text mb-8">
        About Beleza Brasileira
      </h1>
      
      <div className="prose prose-lg max-w-none">
        <p className="text-xl text-gray-600 leading-relaxed mb-6">
          Welcome to <strong>Beleza Brasileira</strong>, your ultimate destination for vibrant Brazilian fashion and beauty content. We celebrate the unique blend of tropical elegance, sustainable practices, and bold cultural expression that defines Brazilian style.
        </p>

        <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Our Mission</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          We're dedicated to sharing the best of Brazilian fashion and beauty with audiences worldwide. From the sun-soaked beaches of Rio to the cosmopolitan streets of São Paulo, we bring you authentic insights into:
        </p>

        <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
          <li><strong>Fashion Trends:</strong> Office wear, sustainable street style, and seasonal capsule wardrobes</li>
          <li><strong>Beauty Secrets:</strong> Tropical skincare routines, bold makeup looks, and hair care for Brazilian climates</li>
          <li><strong>Cultural Expression:</strong> The vibrant colors, patterns, and textures that make Brazilian style unique</li>
          <li><strong>Sustainability:</strong> Eco-friendly fashion and beauty practices inspired by Brazil's rich natural heritage</li>
        </ul>

        <h2 className="text-3xl font-heading font-bold mt-12 mb-6">What We Cover</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gradient-to-br from-brazilian-coral to-brazilian-sunset p-6 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Fashion</h3>
            <ul className="space-y-2">
              <li>• Office Wear Trends</li>
              <li>• Sustainable Street Style</li>
              <li>• Seasonal Capsule Wardrobes</li>
              <li>• Brazilian Designer Spotlights</li>
            </ul>
          </div>
          
          <div className="bg-gradient-to-br from-brazilian-ocean to-brazilian-green p-6 rounded-xl text-white">
            <h3 className="text-2xl font-bold mb-4">Beauty</h3>
            <ul className="space-y-2">
              <li>• Tropical Skincare Routines</li>
              <li>• Bold Makeup Tutorials</li>
              <li>• Hair Care for All Types</li>
              <li>• Natural Ingredient Guides</li>
            </ul>
          </div>
        </div>

        <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Brazilian Style Philosophy</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Brazilian fashion and beauty are characterized by:
        </p>
        <ul className="list-disc pl-6 mb-8 text-gray-700 space-y-2">
          <li><strong>Vibrant Colors:</strong> From poppy reds to ocean blues, we embrace bold, joyful palettes</li>
          <li><strong>Beach-Ready Elegance:</strong> Effortless styles that transition from beach to city</li>
          <li><strong>Sustainable Practices:</strong> Eco-friendly choices using local, organic materials</li>
          <li><strong>Cultural Fusion:</strong> A blend of indigenous, African, and European influences</li>
          <li><strong>Natural Beauty:</strong> Celebrating authentic features with skincare and makeup</li>
        </ul>

        <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Featured Topics</h2>
        <div className="bg-gray-50 p-6 rounded-xl mb-8">
          <p className="text-gray-700 mb-4"><strong>Office Wear:</strong> Smart-casual tailoring with breathable fabrics perfect for Brazil's climate, featuring brands like Farm Rio and PatBo.</p>
          <p className="text-gray-700 mb-4"><strong>Street Style:</strong> Tutorials blending Rio vibrancy with São Paulo urban chic, using sustainable materials.</p>
          <p className="text-gray-700 mb-4"><strong>Skincare:</strong> Sun-protective products and natural ingredients like açaí and coconut oil for glowing, healthy skin.</p>
          <p className="text-gray-700"><strong>Hair Care:</strong> Tips for Brazilian hair types, from beach waves to protective styling with local brands.</p>
        </div>

        <h2 className="text-3xl font-heading font-bold mt-12 mb-6">Join Our Community</h2>
        <p className="text-gray-700 leading-relaxed mb-6">
          Whether you're in Brazil or inspired by Brazilian culture from afar, we invite you to explore, learn, and celebrate the beauty of Brazilian fashion and style. Follow us on social media and subscribe to our newsletter for the latest updates!
        </p>

        <div className="text-center mt-12">
          <Link href="/blogs" className="btn-primary">
            Explore Our Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
