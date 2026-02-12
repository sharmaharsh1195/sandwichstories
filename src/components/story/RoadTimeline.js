'use client'
import { motion } from 'framer-motion'
import { FaHeart, FaStar, FaQuoteLeft, FaMapMarkerAlt } from 'react-icons/fa'
import { HiSparkles } from 'react-icons/hi'

export default function RoadTimeline() {
  const milestones = [
    {
      id: 1,
      year: '2008',
      title: 'Our First Kitchen! 🍳',
      note: 'Just a small room, a griller, and a dream. Mom’s secret chutney recipe was the star!',
      location: 'Surat, Gujarat',
      image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&q=80',
      rotation: -3,
      sticker: '🥪',
      color: 'bg-yellow-100'
    },
    {
      id: 2,
      year: '2024',
      title: 'Hello Pune! 🌆',
      note: 'New city, new vibes! We were so nervous, but Pune showed us so much love. Best bun maska in town?',
      location: 'Pune, Maharashtra',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&q=80',
      rotation: 2,
      sticker: '🎉',
      color: 'bg-green-100'
    },
    {
      id: 3,
      year: '2025',
      title: 'Home Sweet Home 🏡',
      note: 'Opened our second cafe in Surat. The line went around the block! Best feeling ever.',
      location: 'Surat (Branch 2)',
      image: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=800&q=80',
      rotation: -1,
      sticker: '❤️',
      color: 'bg-orange-100'
    },
    {
      id: 4,
      year: '2026',
      title: 'What\'s Next? 🚀',
      note: 'Dreaming big! Maybe Mumbai? Maybe Delhi? Where should we go next? The journey continues...',
      location: 'Coming Soon...',
      image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&q=80',
      rotation: 3,
      sticker: '✨',
      color: 'bg-pink-100'
    }
  ]

  return (
    <section className="py-24 relative overflow-hidden bg-[#f8f5f2]">
      {/* Background Texture - Notebook Paper Pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(#444 1px, transparent 1px)', backgroundSize: '30px 30px' }}>
      </div>

      {/* Decorative Doodles */}
      <div className="absolute top-10 left-10 text-6xl opacity-20 rotate-12 font-handwriting">Dear Diary...</div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-10 -rotate-12">☕</div>

      <div className="container-custom relative z-10">
        
        {/* Center Line (Dashed Thread) */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-1 border-l-4 border-dashed border-gray-300 transform -translate-x-1/2 hidden md:block"></div>

        <div className="space-y-24 md:space-y-32">
          {milestones.map((milestone, index) => (
            <ScrapbookItem 
              key={milestone.id} 
              milestone={milestone} 
              index={index} 
              isLeft={index % 2 === 0}
            />
          ))}
        </div>

        {/* Ending Message */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-32"
        >
          <div className="inline-block bg-white p-6 rotate-2 shadow-xl border-2 border-gray-200 max-w-lg mx-auto transform hover:rotate-0 transition-transform duration-300">
             <h3 className="font-handwriting text-3xl text-dark mb-4">To be continued...</h3>
             <p className="font-body text-lg text-gray-600">
               Thanks for being part of our story. Grab a sandwich and let's make more memories!
             </p>
             <div className="mt-4 text-4xl">🥪 💛</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ScrapbookItem({ milestone, index, isLeft }) {
  return (
    <div className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      
      {/* Photo Side */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8, rotate: isLeft ? -10 : 10 }}
        whileInView={{ opacity: 1, scale: 1, rotate: milestone.rotation }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, type: "spring", bounce: 0.4 }}
        whileHover={{ scale: 1.05, rotate: 0, zIndex: 10 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className="relative group perspective-1000">
          {/* Polaroid Container */}
          <div className="bg-white p-4 pb-16 shadow-2xl transform transition-transform duration-500 hover:rotate-0">
            {/* Tape */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 h-8 bg-yellow-200/80 rotate-2 shadow-sm z-10"></div>
            
            {/* Image */}
            <div className="h-64 md:h-80 w-[300px] md:w-[400px] overflow-hidden bg-gray-100 filter sepia-[0.3] group-hover:sepia-0 transition-all duration-500">
              <img 
                src={milestone.image} 
                alt={milestone.title} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Handwritten Caption on Polaroid */}
            <div className="absolute bottom-4 left-0 right-0 text-center font-handwriting text-gray-700 text-xl">
              {milestone.location} • {milestone.year}
            </div>

            {/* Sticker */}
            <div className="absolute -bottom-6 -right-6 text-6xl drop-shadow-lg transform rotate-12 group-hover:scale-110 transition-transform">
              {milestone.sticker}
            </div>
          </div>
        </div>
      </motion.div>

      {/* Note Side */}
      <motion.div 
        initial={{ opacity: 0, x: isLeft ? 50 : -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <div className={`relative ${milestone.color} p-8 shadow-lg max-w-md transform ${isLeft ? 'rotate-1' : '-rotate-1'} hover:rotate-0 transition-transform duration-300`}>
          {/* Push Pin */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-3xl text-red-500 drop-shadow-md">📍</div>

          <h3 className="font-heading font-bold text-3xl text-dark mb-4 relative inline-block">
            {milestone.title}
            <span className="absolute bottom-1 left-0 w-full h-2 bg-yellow-300/50 -z-10 transform -rotate-1"></span>
          </h3>
          
          <div className="font-handwriting text-xl text-gray-800 leading-relaxed relative">
            <FaQuoteLeft className="text-gray-400 absolute -top-2 -left-2 text-2xl opacity-50" />
            {milestone.note}
          </div>

          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
            <HiSparkles className="text-yellow-500 text-lg" />
            <span>Memories</span>
          </div>
        </div>
      </motion.div>
    </div>
  )
}
