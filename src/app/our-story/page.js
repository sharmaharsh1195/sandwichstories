import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import RoadTimeline from '@/components/story/RoadTimeline'

export const metadata = {
  title: 'Our Story - Sandwich Stories',
  description: 'The journey of Sandwich Stories from Surat to multiple cities',
}

export default function OurStoryPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f5f2]">
        {/* Hero Section */}
        <section className="bg-white py-24 relative overflow-hidden border-b-4 border-dashed border-gray-300">
          <div className="container-custom text-center relative z-10">
            <span className="font-handwriting text-2xl text-primary-orange block mb-2 rotate-2">Est. 2008</span>
            <h1 className="text-6xl md:text-8xl font-heading font-bold text-dark mb-6 relative inline-block">
              Our Story
              <div className="absolute -bottom-2 left-0 w-full h-4 bg-yellow-200 -z-10 transform -rotate-1"></div>
            </h1>
            <p className="text-xl md:text-2xl font-body text-gray-600 max-w-3xl mx-auto font-medium">
              A collection of delicious memories, one sandwich at a time.
            </p>
          </div>
          
          {/* Decorative Background Elements */}
          <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-100 rounded-full opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-100 rounded-full opacity-50"></div>
        </section>

        {/* Road Timeline */}
        <RoadTimeline />

        {/* Call to Action */}
        <section className="py-16 bg-gray-900">
          <div className="container-custom text-center">
            <div className="bg-primary-yellow rounded-3xl p-12 shadow-2xl border-4 border-white">
              <h2 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-4">
                Join Our Journey! 🎉
              </h2>
              <p className="text-xl font-body text-dark/80 mb-6">
                Visit us and become part of the story!
              </p>
              <a 
                href="/locations"
                className="inline-block bg-accent-red hover:bg-red-600 text-white font-heading font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 shadow-lg"
              >
                Find Nearest Location →
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
