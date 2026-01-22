import Hero from '@/components/Hero'
import FeaturedBlogs from '@/components/FeaturedBlogs'
import CategorySection from '@/components/CategorySection'
import LatestBlogs from '@/components/LatestBlogs'
import Newsletter from '@/components/Newsletter'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedBlogs />
      <CategorySection 
        title="Fashion Trends"
        category="Fashion"
        description="Explore vibrant Brazilian fashion from office wear to sustainable street style"
      />
      <CategorySection 
        title="Beauty Secrets"
        category="Beauty"
        description="Discover tropical skincare, bold makeup looks, and hair care tips"
      />
      <LatestBlogs />
      <Newsletter />
    </>
  )
}
