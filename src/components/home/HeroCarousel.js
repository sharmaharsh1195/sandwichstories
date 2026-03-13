'use client'
import { useState, useEffect, useCallback } from 'react'
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from 'framer-motion'

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
    doodles: [
      { text: 'Extra Cheesy!', x: '70%', y: '20%', rotate: 15 },
      { text: 'Best Seller 🏆', x: '10%', y: '70%', rotate: -10 },
    ]
  },
  {
    id: 2,
    tag: 'Spice it Up 🌶️',
    title: 'Tandoori Paneer Pizza',
    subtitle: 'Fusion at its finest. Desi goodness on a crust.',
    cta: 'Try It Today',
    image: '/Tandoori%20Paneer%20Pizza.jpg',
    bg: 'from-red-500 to-orange-400',
    accent: '#ef4444',
    particles: ['🌶️', '🍕', '🔥'],
    doodles: [
      { text: 'Spicy Level: 🔥🔥🔥', x: '65%', y: '15%', rotate: 5 },
      { text: 'Hand-tossed', x: '15%', y: '80%', rotate: -5 },
    ]
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
    doodles: [
      { text: 'Secret Herb Butter 🌿', x: '75%', y: '25%', rotate: 12 },
      { text: 'Perfect Grill Marks', x: '10%', y: '65%', rotate: -8 },
    ]
  },
  {
    id: 4,
    tag: 'Cheese Lover\'s Pick 🧀',
    title: 'Veg Cheese Burger',
    subtitle: 'Loaded with premium cheese. No secrets here.',
    cta: 'Get Cheesy',
    image: '/Veg%20Cheese%20Burger.jpg',
    bg: 'from-yellow-500 to-amber-400',
    accent: '#eab308',
    particles: ['🧀', '😋', '💛'],
    doodles: [
      { text: 'Premium Cheese', x: '70%', y: '15%', rotate: 10 },
      { text: 'Golden Crunch', x: '15%', y: '75%', rotate: -12 },
    ]
  },
  {
    id: 5,
    tag: 'Sizzling Side 🍟',
    title: 'Peri Peri French Fries',
    subtitle: 'Crispy, spicy, and perfectly seasoned.',
    cta: 'Snack Now',
    image: '/Peri%20Peri%20French%20Fries.jpg',
    bg: 'from-orange-600 to-red-500',
    accent: '#ea580c',
    particles: ['🍟', '🌶️', '✨'],
    doodles: [
      { text: 'Spicy peri-peri', x: '75%', y: '20%', rotate: 15 },
      { text: 'Extra Crispy', x: '10%', y: '75%', rotate: -10 },
    ]
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

const doodleVariants = {
  hidden: { opacity: 0, scale: 0.5, rotate: -20 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    rotate: (r) => r || 0,
    transition: { 
      type: "spring",
      stiffness: 260,
      damping: 20,
      delay: 0.8 
    }
  },
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

function DoodleAnnotation({ doodle }) {
  return (
    <motion.div
      variants={doodleVariants}
      initial="hidden"
      animate="visible"
      className="absolute z-30 pointer-events-none bg-white/10 backdrop-blur-[2px] border border-white/20 px-3 py-1 rounded-lg shadow-sm"
      style={{ left: doodle.x, top: doodle.y, rotate: doodle.rotate }}
    >
      <span className="font-handwriting text-white text-lg md:text-xl whitespace-nowrap drop-shadow-md">
        {doodle.text}
      </span>
    </motion.div>
  )
}

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // 3D Tilt Logic
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 })
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 })

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"])

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setPaused(false)
  }

  const next = useCallback(() => setCurrent((c) => (c + 1) % slides.length), [])
  const prev = useCallback(() => setCurrent((c) => (c - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const t = setInterval(next, 5000)
    return () => clearInterval(t)
  }, [paused, next])

  const slide = slides[current]

  return (
    <div
      className="relative overflow-hidden cursor-default group/hero"
      style={{ minHeight: '520px', perspective: '1000px' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={handleMouseLeave}
    >
      {/* Background Gradient */}
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
      <div className="relative z-20 flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto px-6 md:px-12 pt-10 pb-20 md:pb-24 min-h-[520px]">
        {/* Text Side */}
        <div className="flex-1 text-white max-w-lg text-center md:text-left mb-8 md:mb-0">
          <AnimatePresence mode="wait">
            <motion.div key={`text-${slide.id}`}>
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
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
            >
              {/* Doodles Overlay */}
              <div className="absolute inset-0 pointer-events-none z-30">
                {slide.doodles.map((doodle, i) => (
                  <DoodleAnnotation key={i} doodle={doodle} />
                ))}
              </div>

              {/* Glow behind image */}
              <div
                className={`absolute -inset-6 rounded-full blur-3xl opacity-40`}
                style={{ background: slide.accent, transform: 'translateZ(-50px)' }}
              />
              <motion.img
                src={slide.image}
                alt={slide.title}
                className="relative z-10 w-[360px] md:w-[500px] lg:w-[600px] h-[280px] md:h-[380px] object-cover rounded-[2.5rem] shadow-2xl border-4 border-white/20"
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                style={{ transform: 'translateZ(50px)' }}
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
          style={{ display: 'block', height: '50px' }}
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
