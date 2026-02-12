'use client'
import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function RecipeBookMenu() {
  const items = [
    {
      id: 1,
      name: 'Classic Club Sandwich',
      ingredients: ['Chicken', 'Lettuce', 'Tomato', 'Mayo', 'Cheese'],
      price: '₹180',
      note: 'Customer favorite!',
      stain: '☕'
    },
    {
      id: 2,
      name: 'Paneer Tikka Special',
      ingredients: ['Paneer', 'Tikka Masala', 'Onion', 'Mint', 'Butter'],
      price: '₹160',
      note: 'Chef recommends!',
      stain: '🍅'
    },
  ]

  return (
    <div className="container-custom">
      {/* Recipe Book */}
      <div className="max-w-4xl mx-auto bg-[#f8f5f0] rounded-3xl shadow-2xl p-12 relative border-8 border-amber-900">
        {/* Spiral binding effect */}
        <div className="absolute left-0 top-0 bottom-0 w-12 bg-gradient-to-r from-gray-400 to-gray-500 flex flex-col justify-around py-8">
          {[...Array(15)].map((_, i) => (
            <div key={i} className="w-full h-4 bg-gray-700 rounded-r-full"></div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-12 ml-8">
          <h2 className="text-5xl font-handwriting text-dark mb-4">
            Grandma's Recipe Book
          </h2>
          <div className="h-0.5 w-full bg-gray-300"></div>
        </div>

        {/* Recipes */}
        <div className="space-y-12 ml-8">
          {items.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative bg-white p-6 rounded-lg shadow-lg border-2 border-gray-200"
            >
              {/* Coffee stain */}
              <div className="absolute -top-4 -right-4 text-6xl opacity-20 rotate-45">
                {item.stain}
              </div>

              {/* Recipe Title */}
              <h3 className="text-3xl font-handwriting text-dark mb-4 border-b-2 border-dashed border-gray-300 pb-2">
                {item.name}
              </h3>

              {/* Ingredients */}
              <div className="mb-4">
                <p className="font-handwriting text-xl text-brown mb-2">Ingredients:</p>
                <ul className="font-handwriting text-lg text-dark space-y-1">
                  {item.ingredients.map((ing, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="text-accent-red">✓</span> {ing}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Price & Note */}
              <div className="flex justify-between items-end">
                <div className="bg-yellow-100 px-4 py-2 rounded-lg rotate-2">
                  <p className="font-handwriting text-xl text-dark flex items-center gap-2">
                    <FaHeart className="text-red-500" />
                    {item.note}
                  </p>
                </div>
                <div className="text-4xl font-handwriting font-bold text-primary-orange">
                  {item.price}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
