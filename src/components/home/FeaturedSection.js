'use client'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function FeaturedSection() {
  const items = [
    {
      id: 1,
      name: 'The Melting Legend',
      story: "A gooey, cheesy masterpiece that's been a fan favorite since day one.",
      speech: '"I\'m literally melting for you!"',
      image: '/melting%20toast.jpg',
      color: 'bg-primary-yellow',
      rotate: -3
    },
    {
      id: 2,
      name: 'The Spicy Italian',
      story: 'Fusion at its finest. Desi paneer meets thin-crust Italian goodness.',
      speech: '"Spicy, saucy, and absolutely iconic."',
      image: '/chilli%20paneer%20pizza.jpg',
      color: 'bg-accent-red',
      rotate: 2
    },
    {
      id: 3,
      name: 'The Grill Master',
      story: 'Perfectly toasted with our secret herb butter and fresh veggies.',
      speech: '"I\'ve got those perfect grill marks!"',
      image: '/grill%20sandwich.jpg',
      color: 'bg-primary-orange',
      rotate: -2
    },
    {
      id: 4,
      name: 'The Open Secret',
      story: 'Loaded with premium cheese and toppings, served wide open for maximum flavor.',
      speech: '"Too much cheese? No such thing."',
      image: '/open%20cheese%20toast.jpg',
      color: 'bg-accent-green',
      rotate: 3
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-light to-white relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-20 left-10 text-8xl opacity-10">🥪</div>
      <div className="absolute bottom-20 right-10 text-8xl opacity-10">🍔</div>
      
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-heading font-bold text-dark mb-4 inline-block">
              Meet Our Characters! 
              <span className="inline-block ml-2 animate-bounce">🎭</span>
            </h2>
          </motion.div>
          <p className="text-lg md:text-xl font-body text-brown max-w-2xl mx-auto mt-4">
            Every sandwich has a personality. Which one matches yours?
          </p>
        </div>

        {/* Story Cards - Scattered Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 max-w-6xl mx-auto">
          {items.map((item, index) => (
            <StoryCard key={item.id} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function StoryCard({ item, index }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 100, rotate: item.rotate * 2 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        rotate: item.rotate 
      } : { 
        opacity: 0, 
        y: 100, 
        rotate: item.rotate * 2 
      }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.15,
        type: "spring",
        bounce: 0.4
      }}
      whileHover={{ 
        rotate: 0, 
        scale: 1.05,
        transition: { duration: 0.3 }
      }}
      className={`relative ${index % 2 === 0 ? 'md:mt-0' : 'md:mt-12'}`}
    >
      {/* Main Card */}
      <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-dark group">
        {/* Image Section */}
        <div className="relative h-64 overflow-hidden">
          <img 
            src={item.image} 
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
          
          {/* Character Name on Image */}
          <div className="absolute bottom-4 left-4">
            <h3 className="text-3xl font-heading font-bold text-white drop-shadow-lg">
              {item.name}
            </h3>
          </div>
        </div>

        {/* Story Section */}
        <div className={`${item.color} p-6 relative`}>
          {/* Comic Speech Bubble */}
          <div className="absolute -top-6 right-6 bg-white rounded-2xl px-4 py-2 shadow-lg border-3 border-dark max-w-[200px]">
            <p className="text-sm font-body font-bold text-dark relative">
              {item.speech}
              {/* Speech bubble tail */}
              <span className="absolute -bottom-2 right-4 w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white"></span>
            </p>
          </div>

          {/* Story Text */}
          <p className="text-dark font-body text-lg font-semibold mt-4 mb-4">
            {item.story}
          </p>

          {/* CTA Button */}
          <button className="w-full bg-dark hover:bg-brown text-white font-heading font-bold py-3 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
            Read Full Story →
          </button>
        </div>

        {/* Decorative Corner Stamp */}
        <div className="absolute top-4 left-4 bg-accent-red text-white text-xs font-heading font-bold px-3 py-1 rounded-full rotate-12 shadow-md">
          FAMOUS
        </div>
      </div>
    </motion.div>
  )
}
