'use client'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

export default function ChalkboardMenu() {
  const items = [
    { id: 1, name: 'Classic Club Sandwich', price: '₹180', special: true },
    { id: 2, name: 'Paneer Tikka Delight', price: '₹160', special: false },
    { id: 3, name: 'Bombay Masala Grilled', price: '₹140', special: true },
  ]

  return (
    <div className="container-custom">
      <div className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl p-12 shadow-2xl border-8 border-amber-900 relative overflow-hidden">
        {/* Chalk dust texture */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width="100" height="100" xmlns="http://www.w3.org/2000/svg"%3E%3Cfilter id="noise"%3E%3CfeTurbulence baseFrequency="0.9" /%3E%3C/filter%3E%3Crect width="100" height="100" filter="url(%23noise)" opacity="0.4" /%3E%3C/svg%3E")'
        }}></div>

        {/* Header */}
        <div className="text-center mb-12 relative">
          <h2 className="text-5xl font-heading font-bold text-white mb-4" style={{ textShadow: '0 0 10px rgba(255,255,255,0.5)' }}>
            Today's Menu
          </h2>
          <div className="h-1 w-64 bg-white/30 mx-auto"></div>
          <p className="text-yellow-300 font-handwriting text-2xl mt-4">~ Fresh & Made to Order ~</p>
        </div>

        {/* Menu Items */}
        <div className="space-y-8 max-w-3xl mx-auto relative">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="flex justify-between items-center border-b-2 border-dashed border-white/20 pb-4">
                <div className="flex items-center gap-4">
                  {item.special && (
                    <FaStar className="text-yellow-400 text-2xl animate-pulse" />
                  )}
                  <h3 className="text-3xl font-handwriting text-white group-hover:text-yellow-300 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <div className="text-4xl font-handwriting text-yellow-400 font-bold">
                  {item.price}
                </div>
              </div>

              {/* Hover: Food photo slides in */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute left-0 -bottom-20 z-50 hidden group-hover:block"
              >
                <div className="bg-white p-2 rounded-lg shadow-2xl border-4 border-yellow-400">
                  <div className="w-32 h-32 bg-gray-200 rounded flex items-center justify-center">
                    <span className="text-4xl">🥪</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Decorative chalk elements */}
        <div className="absolute top-10 right-10 text-white/10 text-9xl rotate-12">☕</div>
        <div className="absolute bottom-10 left-10 text-white/10 text-7xl -rotate-12">→</div>
      </div>
    </div>
  )
}
