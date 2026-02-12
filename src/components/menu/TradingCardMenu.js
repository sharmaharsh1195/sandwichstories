'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function TradingCardMenu() {
  const items = [
    {
      id: 1,
      name: 'Hero Club',
      rarity: 'Legendary',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
      stats: { spicy: 20, cheesy: 90, filling: 95 },
      price: '₹180',
      color: 'from-yellow-400 to-orange-400'
    },
    {
      id: 2,
      name: 'Paneer Power',
      rarity: 'Rare',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80',
      stats: { spicy: 70, cheesy: 60, filling: 80 },
      price: '₹160',
      color: 'from-green-400 to-teal-400'
    },
    {
      id: 3,
      name: 'Bombay Blast',
      rarity: 'Epic',
      image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&q=80',
      stats: { spicy: 95, cheesy: 85, filling: 70 },
      price: '₹140',
      color: 'from-red-400 to-pink-400'
    },
  ]

  return (
    <div className="container-custom">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-heading font-bold text-dark mb-2">
          Collect 'Em All! 🎴
        </h2>
        <p className="font-body text-brown">Flip cards to see stats & ingredients!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <TradingCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  )
}

function TradingCard({ item, index }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      viewport={{ once: true }}
      className="perspective-1000 cursor-pointer"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative w-full h-[500px] preserve-3d"
      >
        {/* Front */}
        <div className={`absolute inset-0 backface-hidden bg-gradient-to-br ${item.color} rounded-3xl p-1 shadow-2xl`}>
          <div className="bg-white rounded-3xl h-full p-6 flex flex-col">
            {/* Rarity Badge */}
            <div className="text-center mb-4">
              <span className="bg-dark text-yellow-300 px-4 py-1 rounded-full font-heading font-bold text-sm">
                {item.rarity}
              </span>
            </div>

            {/* Image */}
            <div className="flex-1 rounded-2xl overflow-hidden mb-4">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
            </div>

            {/* Name */}
            <h3 className="text-3xl font-heading font-bold text-center text-dark mb-2">
              {item.name}
            </h3>

            {/* Price */}
            <div className="text-2xl font-heading font-bold text-center text-primary-orange">
              {item.price}
            </div>

            {/* Hint */}
            <p className="text-center text-sm font-body text-gray-500 mt-4">
              👆 Click to flip & see stats!
            </p>
          </div>
        </div>

        {/* Back */}
        <div className={`absolute inset-0 backface-hidden bg-gradient-to-br ${item.color} rounded-3xl p-1 shadow-2xl`} style={{ transform: 'rotateY(180deg)' }}>
          <div className="bg-dark rounded-3xl h-full p-6 flex flex-col justify-center text-white">
            <h3 className="text-3xl font-heading font-bold text-center mb-8 text-yellow-300">
              {item.name} Stats
            </h3>

            {/* Stats Bars */}
            <div className="space-y-6">
              <StatBar label="🌶️ Spicy" value={item.stats.spicy} />
              <StatBar label="🧀 Cheesy" value={item.stats.cheesy} />
              <StatBar label="🍽️ Filling" value={item.stats.filling} />
            </div>

            <p className="text-center text-sm font-body text-gray-300 mt-8">
              👆 Click again to flip back
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function StatBar({ label, value }) {
  return (
    <div>
      <div className="flex justify-between mb-2 font-body font-semibold">
        <span>{label}</span>
        <span>{value}/100</span>
      </div>
      <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${value}%` }}
          transition={{ duration: 1, delay: 0.2 }}
          className="h-full bg-gradient-to-r from-yellow-400 to-orange-400"
        />
      </div>
    </div>
  )
}
