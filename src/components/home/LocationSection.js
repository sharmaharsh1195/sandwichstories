'use client'
import { motion } from 'framer-motion'
import { FaMapMarkerAlt, FaClock, FaPhone, FaDirections } from 'react-icons/fa'

export default function LocationSection() {
  const locations = [
    {
      id: 1,
      name: 'Godadara, Surat',
      address: 'SANDWICH SSTORIES, G8, SKY ELANZA, OPP. SKY VIEW HEIGHTS, BEHIND MIDAS SQUARE, GODADARA RD, SURAT, GUJARAT 395012',
      hours: '11:00 AM - 11:00 PM',
      phone: '+91 9033160966',
      mapUrl: '#',
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
      mapUrl: '#',
      image: '/location-surat.jpeg',
      color: 'bg-accent-green',
      emoji: '🎯'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-light to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 right-10 text-9xl opacity-5 rotate-12">🗺️</div>
      <div className="absolute bottom-20 left-10 text-9xl opacity-5 -rotate-12">📍</div>

      <div className="container-custom">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4">
            Find Your Story! 📍
          </h2>
          <p className="text-lg md:text-xl font-body text-brown max-w-2xl mx-auto">
            Visit us at any of our locations. Fresh food, warm vibes guaranteed!
          </p>
        </motion.div>

        {/* Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-w-4xl mx-auto gap-8 mb-12">
          {locations.map((location, index) => (
            <LocationCard key={location.id} location={location} index={index} />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-block bg-white rounded-3xl shadow-2xl p-8 border-4 border-dark">
            <p className="text-2xl font-heading font-bold text-dark mb-4">
              Can't decide? We'll help! 🎉
            </p>
            <a 
              href="/locations"
              className="inline-block bg-accent-red hover:bg-red-600 text-white font-heading font-bold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:scale-110 shadow-lg"
            >
              View All Locations & Map
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function LocationCard({ location, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, rotate: -5 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        bounce: 0.4
      }}
      viewport={{ once: true }}
      whileHover={{ 
        y: -10,
        rotate: 2,
        transition: { duration: 0.3 }
      }}
      className="group relative"
    >
      {/* Card Container */}
      <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-dark h-full">
        {/* Image Section with Overlay */}
        <div className="relative h-48 overflow-hidden">
          <img 
            src={location.image}
            alt={location.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          
          {/* Location Name on Image */}
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <h3 className="text-2xl font-heading font-bold text-white drop-shadow-lg">
              {location.name}
            </h3>
            <span className="text-4xl">{location.emoji}</span>
          </div>

          {/* Pin Badge */}
          <div className={`absolute top-4 right-4 ${location.color} p-3 rounded-full shadow-lg animate-bounce`}>
            <FaMapMarkerAlt className="text-dark text-xl" />
          </div>
        </div>

        {/* Info Section */}
        <div className="p-6 space-y-4">
          {/* Address */}
          <div className="flex items-start gap-3">
            <FaMapMarkerAlt className="text-primary-orange text-xl mt-1 flex-shrink-0" />
            <p className="font-body text-dark text-sm leading-relaxed">
              {location.address}
            </p>
          </div>

          {/* Hours */}
          <div className="flex items-center gap-3">
            <FaClock className="text-accent-green text-xl flex-shrink-0" />
            <p className="font-body text-dark font-semibold text-sm">
              {location.hours}
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <FaPhone className="text-accent-red text-xl flex-shrink-0" />
            <a 
              href={`tel:${location.phone}`}
              className="font-body text-dark hover:text-primary-orange transition-colors text-sm font-semibold"
            >
              {location.phone}
            </a>
          </div>

          {/* CTA Button */}
          <button 
            type="button" 
            onClick={(e) => e.preventDefault()} 
            className={`w-full ${location.color} hover:bg-dark hover:text-white text-dark font-heading font-bold py-3 rounded-xl transition-all duration-300 transform group-hover:scale-105 shadow-md flex items-center justify-center gap-2 mt-4`}
          >
            <FaDirections />
            Get Directions
          </button>
        </div>
      </div>
    </motion.div>
  )
}
