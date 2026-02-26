'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const slides = [
  {
    id: 1,
    tag: 'Fan Favourite ⭐',
    title: 'The Melting Legend',
    subtitle: 'Gooey, cheesy, and absolutely irresistible.',
    cta: 'Order Now',
    image: '/melting%20toast.jpg',
    bg: 'from-amber-400 to-yellow-300',
    accent: '#f59e0b',
    particles: ['🧀', '🍞', '✨'],
  },
  {
    id: 2,
    tag: 'Spice it Up 🌶️',
    title: 'Chilli Paneer Pizza',
    subtitle: 'Fusion at its finest. Desi goodness on a crust.',
    cta: 'Try It Today',
    image: '/chilli%20paneer%20pizza.jpg',
    bg: 'from-red-500 to-orange-400',
    accent: '#ef4444',
    particles: ['🌶️', '🍕', '🔥'],
  },
  {
    id: 3,
    tag: 'Grill Game Strong 🔥',
    title: 'The Grill Master',
    subtitle: 'Perfectly pressed with herb butter & fresh veggies.',
    cta: 'Taste the Grill',
    image: '/grill%20sandwich.jpg',
    bg: 'from-orange-500 to-amber-400',
    accent: '#f97316',
    particles: ['🥪', '🌿', '⚡'],
  },
  {
    id: 4,
    tag: 'Cheese Lover\'s Pick 🧀',
    title: 'The Open Secret',
    subtitle: 'Loaded with premium cheese. No secrets here.',
    cta: 'Get Cheesy',
    image: '/open%20cheese%20toast.jpg',
    bg: 'from-yellow-500 to-amber-400',
    accent: '#eab308',
    particles: ['🧀', '😋', '💛'],
  },
]

const textVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.55, ease: 'easeOut' },
  }),
  exit: { opacity: 0, y: -30, transition: { duration: 0.3 } },
}

const imageVariants = {
  hidden: { opacity: 0, scale: 0.85, y: 30 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut', delay: 0.2 },
  },
  exit: { opacity: 0, scale: 0.9, y: -20, transition: { duration: 0.35 } },
}

function FloatingParticle({ emoji, index }) {
  const positions = [
    { left: '8%', top: '20%' },
    { left: '85%', top: '15%' },
    { left: '90%', top: '70%' },
  ]
  const pos = positions[index % positions.length]
  return (
    <motion.div
      className="absolute text-4xl md:text-5xl select-none pointer-events-none z-10 opacity-30"
      style={pos}
      animate={{
        y: [0, -18, 0],
        rotate: [0, 12, -12, 0],
        scale: [1, 1.1, 1],
      }}
      transition={{
        repeat: Infinity,
        duration: 3 + index * 0.7,
        ease: 'easeInOut',
        delay: index * 0.4,
      }}
    >
      {emoji}
    </motion.div>
  )
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 4500)
    return () => clearInterval(t)
  }, [paused, next])

  const slide = slides[current]

  return (
    <div
      className="relative overflow-hidden"
      style={{ minHeight: '580px' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Animated gradient background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`bg-${slide.id}`}
          className={`absolute inset-0 bg-gradient-to-br ${slide.bg}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
        />
      </AnimatePresence>

      {/* Floating dot pattern overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Floating particles */}
      <AnimatePresence mode="wait">
        <motion.div
          key={`particles-${slide.id}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {slide.particles.map((emoji, i) => (
            <FloatingParticle key={i} emoji={emoji} index={i} />
          ))}
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 pt-12 pb-28 md:pb-32 min-h-[580px]">
        {/* Text Side */}
        <div className="flex-1 text-white max-w-lg text-center md:text-left mb-8 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.div key={`text-${slide.id}`}>
              {/* Tag */}
              <motion.span
                variants={textVariants}
                custom={0}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="inline-block bg-white/20 backdrop-blur-sm border border-white/30 text-white text-sm font-bold px-4 py-1.5 rounded-full mb-4 tracking-wide"
              >
                {slide.tag}
              </motion.span>

              {/* Title */}
              <motion.h1
                variants={textVariants}
                custom={1}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-4xl md:text-6xl font-heading font-black mb-4 leading-tight drop-shadow-lg"
              >
                {slide.title}
              </motion.h1>

              {/* Subtitle */}
              <motion.p
                variants={textVariants}
                custom={2}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="text-lg md:text-xl font-body mb-8 text-white/90 drop-shadow"
              >
                {slide.subtitle}
              </motion.p>

              {/* CTA Button */}
              <motion.button
                variants={textVariants}
                custom={3}
                initial="hidden"
                animate="visible"
                exit="exit"
                whileHover={{ scale: 1.07, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-white text-gray-900 font-heading font-black px-8 py-3.5 rounded-full text-lg shadow-xl hover:shadow-2xl transition-all duration-300"
                style={{ color: slide.accent }}
              >
                {slide.cta} →
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Image Side */}
        <div className="flex-1 flex justify-center md:justify-end relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={`img-${slide.id}`}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative"
            >
              {/* Glow behind image */}
              <div
                className="absolute -inset-6 rounded-full blur-3xl opacity-40"
                style={{ background: slide.accent }}
              />
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="relative z-10 w-[360px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[420px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-16 left-1/2 -translate-x-1/2 flex gap-2 z-30">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`rounded-full transition-all duration-300 ${
              i === current
                ? 'w-8 h-3 bg-white shadow-lg'
                : 'w-3 h-3 bg-white/40 hover:bg-white/70'
            }`}
          />
        ))}
      </div>

      {/* Prev / Next Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 md:left-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all border border-white/30"
      >
        ‹
      </button>
      <button
        onClick={next}
        className="absolute right-3 md:right-6 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/40 backdrop-blur-sm text-white rounded-full w-10 h-10 flex items-center justify-center text-xl transition-all border border-white/30"
      >
        ›
      </button>

      {/* Wavy bottom SVG */}
      <div className="absolute bottom-0 left-0 right-0 z-20">
        <svg
          viewBox="0 0 1440 80"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          className="w-full"
          style={{ display: 'block', height: '70px' }}
        >
          <path
            d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1380,20 1440,40 L1440,80 L0,80 Z"
            fill="white"
          />
        </svg>
      </div>
    </div>
  )
}
