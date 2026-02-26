'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { FaMapMarkerAlt, FaStore, FaRocket } from 'react-icons/fa'

export default function StoryTimeline() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  })

  const milestones = [
    {
      id: 1,
      year: '2008',
      title: 'The First Slice 🍞',
      description: 'It all started 18 years ago in Surat. A small cafe, big dreams, and one simple mission: make the perfect sandwich that tells a story.',
      location: 'Surat, Gujarat',
      icon: <FaStore className="text-4xl" />,
      image: '/Our%20First%20Kitchen!surat-1st.jpeg',
      color: 'bg-primary-yellow',
      emoji: '🏪',
      rotation: -3
    },
    {
      id: 2,
      year: '2024',
      title: 'The Pune Adventure 🚀',
      description: 'Two years ago, we took our stories to Pune! New city, same love for fresh ingredients and happy customers. The response was overwhelming!',
      location: 'Pune, Maharashtra',
      icon: <FaRocket className="text-4xl" />,
      image: '/pune%20location.jpg',
      color: 'bg-accent-green',
      emoji: '🎯',
      rotation: 2
    },
    {
      id: 3,
      year: '2025',
      title: 'Back to Roots 🌟',
      description: 'We returned home! A second location in Surat because one wasn\'t enough. Our hometown deserved more sandwich stories.',
      location: 'Surat (New Branch), Gujarat',
      icon: <FaMapMarkerAlt className="text-4xl" />,
      image: '/location-surat.jpeg',
      color: 'bg-primary-orange',
      emoji: '⭐',
      rotation: -2
    },
    {
      id: 4,
      year: '2026',
      title: 'The Story Continues... 📖',
      description: 'Today, we serve thousands of happy customers across 3 locations. But this is just the beginning. More chapters coming soon!',
      location: 'Multiple Cities',
      icon: <span className="text-5xl">🎉</span>,
      image: '/location-surat.jpeg',
      color: 'bg-accent-red',
      emoji: '🎊',
      rotation: 3
    }
  ]

  return (
    <section ref={containerRef} className="py-20 relative">
      <div className="container-custom">
        {/* Progress Bar */}
        <div className="hidden md:block fixed left-1/2 top-20 -translate-x-1/2 z-50">
          <div className="bg-white rounded-full px-6 py-3 shadow-xl border-2 border-dark">
            <p className="font-heading font-bold text-dark text-sm">
              Journey Progress: <motion.span className="text-primary-orange">{useTransform(scrollYProgress, [0, 1], ['0%', '100%'])}</motion.span>
            </p>
          </div>
        </div>

        {/* The Winding Path */}
        <div className="relative">
          {/* Animated SVG Path */}
          <svg 
            className="absolute left-1/2 top-0 -translate-x-1/2 w-full h-full hidden md:block pointer-events-none z-0"
            style={{ minHeight: '100%' }}
          >
            <motion.path
              d="M 50 0 Q 30 25, 50 50 T 50 150 Q 70 175, 50 200 T 50 300 Q 30 325, 50 350 T 50 100%"
              stroke="#FF9800"
              strokeWidth="8"
              fill="none"
              strokeLinecap="round"
              strokeDasharray="0 1"
              initial={{ pathLength: 0 }}
              style={{
                pathLength: scrollYProgress,
                strokeDasharray: "10 10"
              }}
            />
          </svg>

          {/* Milestones */}
          <div className="relative z-10 space-y-32 md:space-y-48">
            {milestones.map((milestone, index) => (
              <MilestoneCard 
                key={milestone.id} 
                milestone={milestone} 
                index={index}
                isLeft={index % 2 === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function MilestoneCard({ milestone, index, isLeft }) {
  const ref = useRef(null)
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true)
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated])

  return (
    <div 
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 ${
        isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
      }`}
    >
      {/* Card */}
      <motion.div
        initial={{ opacity: 0, x: isLeft ? -100 : 100, rotate: milestone.rotation * 2 }}
        animate={hasAnimated ? { 
          opacity: 1, 
          x: 0,
          rotate: milestone.rotation
        } : {}}
        transition={{ 
          duration: 0.8,
          type: "spring",
          bounce: 0.4,
          delay: 0.2
        }}
        whileHover={{ 
          scale: 1.05, 
          rotate: 0,
          transition: { duration: 0.3 }
        }}
        className="w-full md:w-5/12 relative"
      >
        {/* Polaroid Card */}
        <div className="bg-white p-4 rounded-2xl shadow-2xl border-4 border-dark">
          {/* Image */}
          <div className="relative h-64 rounded-xl overflow-hidden mb-4">
            <img 
              src={milestone.image}
              alt={milestone.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Year Badge */}
            <div className={`absolute top-4 left-4 ${milestone.color} px-4 py-2 rounded-full border-3 border-white shadow-lg`}>
              <p className="font-heading font-bold text-dark text-xl">{milestone.year}</p>
            </div>

            {/* Emoji */}
            <div className="absolute top-4 right-4 text-5xl animate-bounce">
              {milestone.emoji}
            </div>
          </div>

          {/* Content */}
          <div className={`${milestone.color} p-6 rounded-xl`}>
            <h3 className="text-3xl font-heading font-bold text-dark mb-3">
              {milestone.title}
            </h3>
            <p className="font-body text-dark text-base mb-4 leading-relaxed">
              {milestone.description}
            </p>
            <div className="flex items-center gap-2 text-brown font-body font-semibold">
              <FaMapMarkerAlt className="text-accent-red" />
              <span>{milestone.location}</span>
            </div>
          </div>

          {/* Pin at top */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-6 h-6 bg-accent-red rounded-full shadow-lg border-2 border-white"></div>
        </div>
      </motion.div>

      {/* Center Icon Circle */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={hasAnimated ? { scale: 1, rotate: 0 } : {}}
        transition={{ 
          duration: 0.6,
          type: "spring",
          delay: 0.4
        }}
        className={`hidden md:flex w-24 h-24 ${milestone.color} rounded-full items-center justify-center border-4 border-dark shadow-2xl z-20`}
      >
        {milestone.icon}
      </motion.div>

      {/* Spacing for alternating layout */}
      <div className="hidden md:block w-5/12"></div>
    </div>
  )
}
