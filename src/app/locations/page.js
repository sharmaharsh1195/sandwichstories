'use client'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaPhone, FaDirections, FaHeart } from 'react-icons/fa'

const locations = [
  {
    id: 1,
    name: 'Godadara, Surat',
    address: 'SANDWICH STORIES, G8, SKY ELANZA, OPP. SKY VIEW HEIGHTS, BEHIND MIDAS SQUARE, GODADARA RD, SURAT, GUJARAT 395012',
    hours: '11:00 AM - 11:00 PM',
    phone: '+91 9033160966',
    mapUrl: 'https://maps.app.goo.gl/dyeJYNQ6RQPyYqDq6',
    image: '/location-surat.jpeg',
    color: 'bg-primary-yellow',
    emoji: '🏪'
  },
  {
    id: 2,
    name: 'Parvat Patiya, Surat',
    address: 'J.K.NAGAR, VESU CANAL RD, NEAR SAI BABA MANDIR, OPPOSITE PARVAT PATIA BRTS, PARVAT PATIYA, SURAT, GUJARAT 395010',
    hours: '06:00 PM - 11:00 PM',
    phone: '+91 9974993710',
    mapUrl: 'https://maps.app.goo.gl/RR6TQ4f5nHxXGV1b7',
    image: '/location-surat.jpeg',
    color: 'bg-accent-green',
    emoji: '🎯'
  }
]

export default function LocationsPage() {
  return (
    <>
      <Header />
      
      <main className="min-h-screen bg-[#f8f5f2] py-12 md:py-24 relative overflow-hidden">
        {/* Background Texture */}
        <div className="absolute inset-0 opacity-10 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
        </div>

        <div className="container-custom relative z-10 px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12 md:mb-16"
          >
            <div className="inline-block px-6 py-2 bg-primary-orange text-white rounded-full font-heading font-black text-xs md:text-sm uppercase tracking-widest mb-4 shadow-md">
              Our Branches
            </div>
            <h1 className="text-4xl md:text-7xl font-heading font-bold text-dark mb-6">
              Find Your Nearest <span className="text-primary-orange">Story</span>! 📍
            </h1>
            <p className="text-lg md:text-xl font-body text-gray-600 max-w-2xl mx-auto italic">
              "Every corner of Surat deserves a great sandwich. Visit us today!"
            </p>
          </motion.div>

          {/* Locations Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
            {locations.map((loc, index) => (
              <motion.div
                key={loc.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="relative group"
              >
                {/* Scrapbook Frame */}
                <div className="bg-white p-4 md:p-6 pb-10 md:pb-12 shadow-2xl transition-all duration-500 border-2 border-gray-100 flex flex-col h-full">
                  {/* Tape Asset */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 md:w-40 h-8 md:h-10 bg-yellow-200/60 rotate-1 z-20 shadow-sm" />
                  
                  {/* Location Image */}
                  <div className="relative h-56 md:h-80 w-full overflow-hidden mb-6 rounded-sm shrink-0">
                    <img 
                      src={loc.image} 
                      alt={loc.name}
                      className="w-full h-full object-cover transition-all duration-700"
                    />
                    <div className="absolute top-4 right-4 text-4xl md:text-5xl drop-shadow-lg">{loc.emoji}</div>
                  </div>

                  {/* Content */}
                  <div className="px-2 text-left flex flex-col flex-grow">
                    <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark mb-4 flex items-center gap-3">
                      <FaMapMarkerAlt className="text-primary-orange" />
                      {loc.name}
                    </h2>
                    
                    <div className="space-y-4 mb-6 flex-grow">
                      <div className="flex items-start gap-3">
                        <div className="w-8 h-8 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                          <FaMapMarkerAlt className="text-primary-orange text-sm" />
                        </div>
                        <p className="font-body text-gray-700 leading-relaxed text-xs md:text-sm">
                          {loc.address}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                          <FaClock className="text-accent-green text-sm" />
                        </div>
                        <p className="font-body text-gray-700 font-bold text-sm">
                          {loc.hours}
                        </p>
                      </div>

                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                          <FaPhone className="text-accent-red text-sm" />
                        </div>
                        <a href={`tel:${loc.phone}`} className="font-body text-dark hover:text-primary-orange transition-colors font-bold text-sm">
                          {loc.phone}
                        </a>
                      </div>
                    </div>

                    {/* Google Maps Button */}
                    <a 
                      href={loc.mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-3 w-full bg-dark text-white font-heading font-bold py-3.5 rounded-xl hover:bg-primary-orange transition-all duration-300 shadow-xl group/btn mt-auto"
                    >
                      <FaDirections className="text-xl group-hover/btn:animate-bounce" />
                      Open Google Maps
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom Message */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="text-center mt-16 md:mt-24"
          >
            <p className="font-handwriting text-2xl md:text-3xl text-gray-500">
              Hand-crafted with <FaHeart className="inline text-accent-red mx-1 animate-pulse" /> since 2008
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </>
  )
}
