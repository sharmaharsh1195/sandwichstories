import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import HeroCarousel from '@/components/home/HeroCarousel'
import FeaturedSection from '@/components/home/FeaturedSection'
import TestimonialsSection from '@/components/home/TestimonialsSection'
import LocationSection from '@/components/home/LocationSection'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroCarousel />
        <FeaturedSection />
        <TestimonialsSection />
        <LocationSection />
      </main>
      <Footer />
    </>
  )
}
