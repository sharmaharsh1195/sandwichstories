'use client'
import { motion } from 'framer-motion'

export default function ComicBookMenu() {
  const items = [
    {
      id: 1,
      name: 'The Hero Club',
      speech: '"I\'m TRIPLE stacked!"',
      price: '₹180',
      badge: 'POW!',
      image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80',
      color: 'bg-yellow-300'
    },
    {
      id: 2,
      name: 'Paneer Power',
      speech: '"Grilled to perfection!"',
      price: '₹160',
      badge: 'BAM!',
      image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80',
      color: 'bg-green-300'
    },
    {
      id: 3,
      name: 'Bombay Blast',
      speech: '"Spice attack!"',
      price: '₹140',
      badge: 'BOOM!',
      image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&q=80',
      color: 'bg-orange-300'
    },
  ]

  return (
    <div className="container-custom">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-heading font-bold text-dark mb-2" style={{ fontStyle: 'italic', textShadow: '3px 3px 0px #FFC107' }}>
          MENU HEROES!
        </h2>
        <p className="font-body text-brown">Comic book style - Each sandwich is a character!</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, rotate: 2 }}
            className="relative"
          >
            {/* Comic Panel */}
            <div className="bg-white border-8 border-black rounded-xl overflow-hidden shadow-2xl relative">
              {/* Badge */}
              <div className="absolute top-4 right-4 z-20">
                <div className="bg-accent-red text-white font-heading font-black text-2xl px-4 py-2 rotate-12 transform border-4 border-black shadow-lg" style={{ fontStyle: 'italic' }}>
                  {item.badge}
                </div>
              </div>

              {/* Image with dots pattern */}
              <div className="relative h-48 overflow-hidden" style={{ 
                backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
                backgroundSize: '4px 4px'
              }}>
                <img 
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover mix-blend-multiply"
                />
              </div>

              {/* Content */}
              <div className={`${item.color} p-4 border-t-8 border-black`}>
                <h3 className="text-3xl font-heading font-black text-black mb-2" style={{ fontStyle: 'italic', textTransform: 'uppercase' }}>
                  {item.name}
                </h3>

                {/* Speech Bubble */}
                <div className="relative bg-white border-4 border-black rounded-2xl p-3 mb-3">
                  <p className="font-body font-bold text-black text-lg">
                    {item.speech}
                  </p>
                  {/* Bubble tail */}
                  <div className="absolute -bottom-3 left-6 w-0 h-0 border-l-[15px] border-r-[15px] border-t-[15px] border-transparent border-t-black"></div>
                  <div className="absolute -bottom-2 left-7 w-0 h-0 border-l-[12px] border-r-[12px] border-t-[12px] border-transparent border-t-white"></div>
                </div>

                {/* Price */}
                <div className="text-4xl font-heading font-black text-black text-center" style={{ fontStyle: 'italic' }}>
                  {item.price}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
