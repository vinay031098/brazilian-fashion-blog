const mongoose = require('mongoose');
const Blog = require('./models/Blog');
const SocialMedia = require('./models/SocialMedia');
require('dotenv').config();

// Sample blog posts
const sampleBlogs = [
  {
    title: 'Office Wear Trends: Brazilian Smart-Casual for 2026',
    slug: 'office-wear-trends-brazilian-smart-casual-for-2026',
    excerpt: 'Discover how to blend professional style with Brazil\'s vibrant fashion sense. From oversized blazers to breathable fabrics perfect for our climate.',
    content: `
      <h2>The Evolution of Brazilian Office Wear</h2>
      <p>Brazilian office fashion has evolved beyond traditional suits. Today's professionals embrace smart-casual styles that reflect our tropical climate and vibrant culture.</p>
      
      <h3>Key Trends for 2026</h3>
      <ul>
        <li><strong>Oversized Blazers:</strong> Pair with tailored trousers in breathable linen or cotton blends</li>
        <li><strong>Bold Colors:</strong> Don't shy away from poppy reds, ocean blues, and sunset oranges</li>
        <li><strong>Sustainable Fabrics:</strong> Organic cotton and recycled materials are becoming mainstream</li>
        <li><strong>Layered Looks:</strong> Perfect for air-conditioned offices and warm outdoor meetings</li>
      </ul>
      
      <h3>Brazilian Brands Leading the Way</h3>
      <p><strong>Farm Rio</strong> offers colorful, sustainable pieces that transition from office to after-work events. Their tropical prints bring joy to any workspace.</p>
      <p><strong>PatBo</strong> creates sophisticated pieces with Brazilian flair, perfect for important meetings and presentations.</p>
      
      <h3>Styling Tips</h3>
      <p>Mix professional pieces with statement accessories. A classic blazer becomes distinctly Brazilian when paired with bold earrings or a colorful scarf.</p>
      <p>Remember: breathability is key in our climate. Choose natural fabrics that keep you cool while looking polished.</p>
    `,
    category: 'Fashion',
    subcategory: 'Office Wear',
    tags: ['office wear', 'professional style', 'Farm Rio', 'PatBo', 'sustainable fashion'],
    published: true,
    featured: true,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=800',
      publicId: 'sample-office-wear'
    }
  },
  {
    title: 'Tropical Skincare Routines: Glowing Skin in Brazil\'s Climate',
    slug: 'tropical-skincare-routines-glowing-skin-in-brazils-climate',
    excerpt: 'Master the art of tropical skincare with natural ingredients like açaí and coconut oil. Sun protection meets Brazilian beauty wisdom.',
    content: `
      <h2>Skincare for Brazil's Tropical Climate</h2>
      <p>Brazil's sunny, humid weather requires a specialized approach to skincare. Here's how to maintain glowing, healthy skin year-round.</p>
      
      <h3>Morning Routine</h3>
      <ol>
        <li><strong>Cleanse:</strong> Use a gentle, sulfate-free cleanser</li>
        <li><strong>Vitamin C Serum:</strong> Protects against environmental damage</li>
        <li><strong>Moisturize:</strong> Lightweight, non-comedogenic formulas</li>
        <li><strong>SPF 50+:</strong> Non-negotiable in Brazilian sun</li>
      </ol>
      
      <h3>Brazilian Superfoods for Your Skin</h3>
      <p><strong>Açaí:</strong> Rich in antioxidants, helps fight aging and environmental damage</p>
      <p><strong>Coconut Oil:</strong> Natural moisturizer perfect for body care</p>
      <p><strong>Brazil Nut Oil:</strong> Packed with selenium for skin repair</p>
      
      <h3>Evening Routine</h3>
      <ol>
        <li>Double cleanse to remove sunscreen and pollution</li>
        <li>Hydrating toner with Brazilian botanicals</li>
        <li>Retinol or treatment serum</li>
        <li>Rich night cream</li>
      </ol>
      
      <h3>Sun Protection Tips</h3>
      <p>Reapply every 2 hours when outdoors. Look for water-resistant formulas for beach days. Don't forget your neck, chest, and hands!</p>
    `,
    category: 'Beauty',
    subcategory: 'Skincare',
    tags: ['skincare', 'tropical beauty', 'sun protection', 'açaí', 'natural ingredients'],
    published: true,
    featured: true,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=800',
      publicId: 'sample-skincare'
    }
  },
  {
    title: 'Sustainable Street Style: Rio Meets São Paulo',
    slug: 'sustainable-street-style-rio-meets-sao-paulo',
    excerpt: 'Learn how to create eco-friendly outfits that blend Rio\'s beach vibes with São Paulo\'s urban sophistication.',
    content: `
      <h2>The Rise of Sustainable Brazilian Fashion</h2>
      <p>Brazilian street style is evolving to embrace sustainability without sacrificing style. Here's how to look good while doing good.</p>
      
      <h3>Rio's Beach-Ready Sustainable Style</h3>
      <p>Rio street fashion embraces:</p>
      <ul>
        <li>Organic cotton basics in vibrant colors</li>
        <li>Recycled swimwear that transitions to streetwear</li>
        <li>Handmade accessories from local artisans</li>
        <li>Comfortable sandals from sustainable materials</li>
      </ul>
      
      <h3>São Paulo's Urban Eco-Chic</h3>
      <p>The city's fashion-forward crowd is adopting:</p>
      <ul>
        <li>Vintage and upcycled pieces</li>
        <li>Locally-made clothing from ethical brands</li>
        <li>Minimal wardrobe with maximum versatility</li>
        <li>Statement pieces from sustainable designers</li>
      </ul>
      
      <h3>Building a Sustainable Wardrobe</h3>
      <ol>
        <li><strong>Invest in Quality:</strong> Fewer, better pieces that last</li>
        <li><strong>Support Local:</strong> Brazilian brands using local materials</li>
        <li><strong>Choose Natural Fibers:</strong> Organic cotton, linen, hemp</li>
        <li><strong>Care Properly:</strong> Extend garment life with proper care</li>
      </ol>
      
      <h3>Where to Shop Sustainably in Brazil</h3>
      <p>Look for brands like Reserva, Malwee, and Insecta Shoes that prioritize sustainability and ethical production.</p>
    `,
    category: 'Sustainable',
    subcategory: 'Street Style',
    tags: ['sustainable fashion', 'street style', 'eco-friendly', 'Rio', 'São Paulo'],
    published: true,
    featured: true,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=800',
      publicId: 'sample-street-style'
    }
  },
  {
    title: 'Bold Makeup Looks: Brazilian Beauty Inspiration',
    slug: 'bold-makeup-looks-brazilian-beauty-inspiration',
    excerpt: 'Master the art of vibrant makeup that lasts in humid weather. From coral lips to graphic eyes, embrace Brazilian boldness.',
    content: `
      <h2>Brazilian Makeup Philosophy</h2>
      <p>Brazilian beauty embraces bold colors, healthy-looking skin, and makeup that can withstand our tropical climate.</p>
      
      <h3>The Perfect Base</h3>
      <p>Start with well-prepped skin:</p>
      <ul>
        <li>Hydrating primer (crucial in humidity)</li>
        <li>Long-wearing, lightweight foundation</li>
        <li>Setting powder only where needed</li>
        <li>Setting spray for all-day wear</li>
      </ul>
      
      <h3>Signature Brazilian Looks</h3>
      
      <h4>1. The Beach Goddess</h4>
      <p>Sun-kissed skin, peachy blush, nude lips, and waterproof mascara. Perfect for daytime.</p>
      
      <h4>2. Carnival Queen</h4>
      <p>Graphic eyeliner, glitter accents, bold lips in red or coral. For when you want to make a statement.</p>
      
      <h4>3. Tropical Elegance</h4>
      <p>Warm eyeshadows, defined brows, and a vibrant lip. Perfect for evening events.</p>
      
      <h3>Products That Last</h3>
      <p>In Brazil's humid climate, choose:</p>
      <ul>
        <li>Waterproof mascara and eyeliner</li>
        <li>Long-wearing lip stains</li>
        <li>Cream products (they blend better in heat)</li>
        <li>Quality setting spray</li>
      </ul>
      
      <h3>Influencer Inspiration</h3>
      <p>Follow Brazilian beauty influencers like Camila Coelho for tutorials and product recommendations tailored to our climate.</p>
    `,
    category: 'Beauty',
    subcategory: 'Makeup',
    tags: ['makeup', 'bold looks', 'Brazilian beauty', 'Camila Coelho', 'tropical makeup'],
    published: true,
    featured: false,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=800',
      publicId: 'sample-makeup'
    }
  },
  {
    title: 'Hair Care for Brazilian Climate: Waves, Curls & Everything Between',
    slug: 'hair-care-for-brazilian-climate-waves-curls-everything-between',
    excerpt: 'Embrace your natural texture with products and techniques designed for Brazil\'s humidity. Affordable local brands included.',
    content: `
      <h2>Understanding Brazilian Hair Types</h2>
      <p>Brazil's diverse population means diverse hair types. From straight to tightly coiled, here's how to care for your hair in our climate.</p>
      
      <h3>Humidity-Proof Routines</h3>
      
      <h4>For Wavy Hair (Type 2)</h4>
      <ul>
        <li>Lightweight leave-in conditioner</li>
        <li>Sea salt spray for definition</li>
        <li>Anti-frizz serum on ends</li>
        <li>Air dry or diffuse</li>
      </ul>
      
      <h4>For Curly Hair (Type 3)</h4>
      <ul>
        <li>Deep conditioning weekly</li>
        <li>Curl-defining cream</li>
        <li>Gel for hold in humidity</li>
        <li>Microfiber towel or t-shirt drying</li>
      </ul>
      
      <h4>For Coily Hair (Type 4)</h4>
      <ul>
        <li>Rich moisturizing products</li>
        <li>Protective styling</li>
        <li>Natural oils (coconut, argan)</li>
        <li>Satin pillowcase</li>
      </ul>
      
      <h3>Affordable Brazilian Brands</h3>
      <p><strong>Salon Line:</strong> Excellent product lines for all hair types</p>
      <p><strong>Lola Cosmetics:</strong> Natural ingredients, vegan options</p>
      <p><strong>Skala:</strong> Budget-friendly, effective products</p>
      
      <h3>Beach Hair Care</h3>
      <p>Before swimming:</p>
      <ul>
        <li>Wet hair with fresh water</li>
        <li>Apply leave-in conditioner</li>
        <li>Braid or bun to minimize damage</li>
      </ul>
      <p>After swimming:</p>
      <ul>
        <li>Rinse immediately</li>
        <li>Use clarifying shampoo</li>
        <li>Deep condition</li>
      </ul>
      
      <h3>Embracing Natural Texture</h3>
      <p>The "natural hair" movement is strong in Brazil. Celebrate your texture with the right products and techniques!</p>
    `,
    category: 'Beauty',
    subcategory: 'Hair Care',
    tags: ['hair care', 'natural hair', 'curly hair', 'Brazilian products', 'beach hair'],
    published: true,
    featured: false,
    featuredImage: {
      url: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800',
      publicId: 'sample-hair-care'
    }
  }
];

// Sample social media links
const sampleSocialMedia = [
  {
    platform: 'Instagram',
    handle: '@belezabrasileira',
    url: 'https://instagram.com/belezabrasileira',
    active: true,
    order: 1
  },
  {
    platform: 'Pinterest',
    handle: 'Beleza Brasileira',
    url: 'https://pinterest.com/belezabrasileira',
    active: true,
    order: 2
  },
  {
    platform: 'TikTok',
    handle: '@belezabrasileira',
    url: 'https://tiktok.com/@belezabrasileira',
    active: true,
    order: 3
  },
  {
    platform: 'YouTube',
    handle: 'Beleza Brasileira',
    url: 'https://youtube.com/@belezabrasileira',
    active: true,
    order: 4
  }
];

async function seedDatabase() {
  try {
    // Connect to MongoDB
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await Blog.deleteMany({});
    await SocialMedia.deleteMany({});
    console.log('Cleared existing data');

    // Insert sample blogs one by one to trigger pre-save hooks
    for (const blogData of sampleBlogs) {
      const blog = new Blog(blogData);
      await blog.save();
    }
    console.log(`Inserted ${sampleBlogs.length} sample blogs`);

    // Insert sample social media
    await SocialMedia.insertMany(sampleSocialMedia);
    console.log(`Inserted ${sampleSocialMedia.length} social media links`);

    console.log('✅ Database seeded successfully!');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
}

// Run the seeder
seedDatabase();
