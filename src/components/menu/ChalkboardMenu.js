'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaStar } from 'react-icons/fa'

export default function ChalkboardMenu() {
  const [activeCategory, setActiveCategory] = useState('non-grilled-sandwiches')

  const categories = [
    { id: 'non-grilled-sandwiches', name: 'Non-Grilled', emoji: '🥪' },
    { id: 'gas-toast-sandwiches', name: 'Gas Toast', emoji: '🔥' },
    { id: 'grilled-sandwiches', name: 'Grilled', emoji: '🥪' },
    { id: 'triangle-grilled-sandwiches', name: 'Triangle Grill', emoji: '🔺' },
    { id: 'open-grilled-sandwiches', name: 'Open Grilled', emoji: '🍕' },
    { id: 'pizzas', name: 'Pizza', emoji: '🍕' },
    { id: 'fries', name: 'Fries', emoji: '🍟' },
    { id: 'burgers', name: 'Burger', emoji: '🍔' },
    { id: 'maggi', name: 'Maggi', emoji: '🍜' },
    { id: 'nuggets', name: 'Nuggets', emoji: '🍗' },
    { id: 'garlic-bread', name: 'Garlic Bread', emoji: '🥖' },
    { id: 'mocktails', name: 'Mocktails', emoji: '🍹' },
    { id: 'hot-beverages', name: 'Hot Beverages', emoji: '☕' },
    { id: 'cold-beverages', name: 'Cold Beverages', emoji: '🥤' },
    { id: 'add-ons', name: 'Add-Ons', emoji: '➕' },
  ]

  const menuData = {
    'non-grilled-sandwiches': [
      { id: 101, name: 'Bread Butter', price: '₹40' },
      { id: 102, name: 'Bread Butter Jam', price: '₹50' },
      { id: 103, name: 'Peanut Butter', price: '₹60' },
      { id: 104, name: 'Bread Butter Cheese', price: '₹70' },
      { id: 105, name: 'Chutney Cheese (R)', price: '₹70', special: true },
      { id: 106, name: 'Veg Sandwich', price: '₹50' },
      { id: 107, name: 'Veg Cheese Sandwich (R)', price: '₹80', special: true },
    ],
    'gas-toast-sandwiches': [
      { id: 201, name: 'Only Cheese Toast (R)', price: '₹70', special: true },
      { id: 202, name: 'Veg Toast', price: '₹60' },
      { id: 203, name: 'Veg Cheese Toast (R)', price: '₹90', special: true },
      { id: 204, name: 'Aloo Masala Toast', price: '₹60' },
      { id: 205, name: 'Aloo Masala Cheese Toast', price: '₹80' },
      { id: 206, name: 'Mayo Corn Toast', price: '₹90' },
      { id: 207, name: 'Chilli Cheese Toast (R)', price: '₹100', special: true },
    ],
    'grilled-sandwiches': [
      { id: 301, name: 'Bread Butter Grill', price: '₹60' },
      { id: 302, name: 'Chocolate Sandwich', price: '₹90' },
      { id: 303, name: 'Only Cheese Grill', price: '₹110' },
      { id: 304, name: 'Veg Grill', price: '₹80' },
      { id: 305, name: 'Veg Cheese Grill', price: '₹110' },
      { id: 306, name: 'Aloo Masala Grill', price: '₹80' },
      { id: 307, name: 'Aloo Masala Cheese Grill (R)', price: '₹110', special: true },
      { id: 308, name: 'Mayo Corn Grill', price: '₹110' },
      { id: 309, name: 'Peri Peri Corn Grill (R)', price: '₹120', special: true },
      { id: 310, name: 'Corn Chilli Cheese Grill', price: '₹120' },
      { id: 311, name: 'Chilli Cheese Grill', price: '₹130' },
      { id: 312, name: 'Tandoori Paneer Cheese Grill (R)', price: '₹150', special: true },
      { id: 313, name: 'Peri Peri Paneer Cheese Grill', price: '₹150' },
      { id: 314, name: 'Schezwan Paneer Cheese Grill', price: '₹150' },
    ],
    'triangle-grilled-sandwiches': [
      { id: 401, name: 'Veg Cheese Grill (R)', price: '₹140', special: true },
      { id: 402, name: 'Melting Cheese Grill (R)', price: '₹200', special: true },
      { id: 403, name: 'Paneer Veg Cheese Grill', price: '₹220' },
      { id: 404, name: 'Paneer Tandoori Grill', price: '₹250' },
      { id: 405, name: 'Rimzim Sandwich', price: '₹-' },
    ],
    'open-grilled-sandwiches': [
      { id: 501, name: 'Open Veg Cheese Grill', price: '₹120' },
      { id: 502, name: 'Open Chilli Cheese Grill (R)', price: '₹140', special: true },
      { id: 503, name: 'Open Peri Peri Corn Cheese Grill', price: '₹160' },
      { id: 504, name: 'Open Paneer Cheese Grill (R)', price: '₹160', special: true },
      { id: 505, name: 'Open Tandoori Paneer Cheese Grill', price: '₹180' },
    ],
    'pizzas': [
      { id: 601, name: 'Margherita', price: '₹100 / ₹140' },
      { id: 602, name: 'Onion Capsicum', price: '₹120 / ₹160' },
      { id: 603, name: 'Corn Onion', price: '₹120 / ₹160' },
      { id: 604, name: 'Veg Cheese (R)', price: '₹140 / ₹180', special: true },
      { id: 605, name: 'Corn Paneer', price: '₹160 / ₹200' },
      { id: 606, name: 'Veg Paneer', price: '₹180 / ₹220' },
      { id: 607, name: 'Tandoori Paneer (R)', price: '₹200 / ₹240', special: true },
    ],
    'fries': [
      { id: 701, name: 'French Fries', price: '₹80' },
      { id: 702, name: 'Cheesy French Fries', price: '₹120' },
      { id: 703, name: 'Peri Peri French Fries (R)', price: '₹100', special: true },
      { id: 704, name: 'Peri Peri Cheese Fries (R)', price: '₹150', special: true },
      { id: 705, name: 'Chipotle Cheese Fries', price: '₹150' },
    ],
    'burgers': [
      { id: 801, name: 'Aloo Tikki Burger (R)', price: '₹60 / ₹80', special: true },
      { id: 802, name: 'Veg Tikki Burger', price: '₹80 / ₹100' },
      { id: 803, name: 'Veg Cheese Burger', price: '₹100 / ₹120' },
      { id: 804, name: 'Veg Tandoori Cheese Burger', price: '₹120 / ₹140' },
      { id: 805, name: 'Mexican Cheese Burger (R)', price: '₹120 / ₹140', special: true },
      { id: 806, name: 'Paneer Tikki Burger', price: '₹150' },
      { id: 807, name: 'Paneer Cheese Burger (R)', price: '₹180', special: true },
      { id: 808, name: 'Paneer Tandoori Cheese Burger', price: '₹180' },
    ],
    'maggi': [
      { id: 901, name: 'Masala Maggi (R)', price: '₹60', special: true },
      { id: 902, name: 'Veg Masala Maggi', price: '₹80' },
      { id: 903, name: 'Veg Cheese Maggi (R)', price: '₹100', special: true },
      { id: 904, name: 'Peri Peri Maggi', price: '₹100' },
      { id: 905, name: 'Peri Peri Cheese Maggi', price: '₹120' },
      { id: 906, name: 'Schezwan Maggi', price: '₹100' },
    ],
    'nuggets': [
      { id: 1001, name: 'Crispy Veggie Finger', price: '₹120' },
      { id: 1002, name: 'Chilli Garlic Potato Shots', price: '₹120' },
      { id: 1003, name: 'Potato Cheese Shots', price: '₹120' },
      { id: 1004, name: 'Onion Ring (R)', price: '₹150', special: true },
      { id: 1005, name: 'Cheese Corn Triangles', price: '₹150' },
      { id: 1006, name: 'Cheese Jalapenos Poppers', price: '₹150' },
      { id: 1007, name: 'Pizza Pocket (R)', price: '₹180', special: true },
      { id: 1008, name: 'Crispy Pizza Finger', price: '₹180' },
    ],
    'garlic-bread': [
      { id: 1101, name: 'Cheese Garlic Bread (R)', price: '₹100', special: true },
      { id: 1102, name: 'Cheese Chilli Garlic Bread', price: '₹120' },
      { id: 1103, name: 'Cheese Garlic Bread (Onion & Capsicum)', price: '₹120' },
    ],
    'mocktails': [
      { id: 1201, name: 'Fresh Lime Mojito (R)', price: '₹80', special: true },
      { id: 1202, name: 'Virgin Mojito', price: '₹80' },
      { id: 1203, name: 'Strawberry Mojito', price: '₹80' },
      { id: 1204, name: 'Watermelon Mojito (R)', price: '₹90', special: true },
      { id: 1205, name: 'Green Apple Mojito', price: '₹90' },
      { id: 1206, name: 'Blue Curacao Mojito', price: '₹90' },
    ],
    'hot-beverages': [
      { id: 1301, name: 'Ginger Tea', price: '₹25' },
      { id: 1302, name: 'Black Tea', price: '₹25' },
      { id: 1303, name: 'Honey Lemon Tea (R)', price: '₹35', special: true },
      { id: 1304, name: 'Black Coffee', price: '₹25' },
      { id: 1305, name: 'Hot Coffee (R)', price: '₹40', special: true },
      { id: 1306, name: 'Hot Chocolate', price: '₹50' },
      { id: 1307, name: 'Vanilla / Hazelnut / Butterscotch Hot Coffee', price: '₹60' },
    ],
    'cold-beverages': [
      { id: 1401, name: 'Cold Coffee', price: '₹60' },
      { id: 1402, name: 'Cold Coffee Ice Cream (R)', price: '₹90', special: true },
      { id: 1403, name: 'Chocolate Cold Coffee', price: '₹110' },
      { id: 1404, name: 'Vanilla / Hazelnut Cold Coffee', price: '₹90' },
      { id: 1405, name: 'Lemon Iced Tea', price: '₹90' },
      { id: 1406, name: 'Peach Iced Tea', price: '₹90' },
    ],
    'add-ons': [
      { id: 1501, name: 'Extra Amul Cheese', price: '₹30' },
      { id: 1502, name: 'Atta Maggi', price: '₹30' },
      { id: 1503, name: 'Atta Maggi Extra', price: '₹30' },
      { id: 1504, name: 'Peri Peri Sauce', price: '₹30' },
      { id: 1505, name: 'Mayo Sauce', price: '₹30' },
    ],
  }

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

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-3 mb-12 relative overflow-x-auto pb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-xl font-handwriting text-xl font-bold transition-all duration-300 border-2 ${
                activeCategory === category.id
                  ? 'bg-yellow-300 text-dark border-white shadow-lg'
                  : 'bg-white/10 text-white border-white/20 hover:bg-white/20'
              }`}
            >
              <span className="mr-2">{category.emoji}</span>
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items */}
        <div className="space-y-6 max-w-3xl mx-auto relative min-h-[400px]">
          {menuData[activeCategory].map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.05 }}
              className="relative group"
            >
              <div className="flex justify-between items-center border-b-2 border-dashed border-white/20 pb-4">
                <div className="flex items-center gap-4">
                  {item.special && (
                    <FaStar className="text-yellow-400 text-2xl animate-pulse" />
                  )}
                  <h3 className="text-2xl md:text-3xl font-handwriting text-white group-hover:text-yellow-300 transition-colors">
                    {item.name}
                  </h3>
                </div>
                <div className="text-3xl md:text-4xl font-handwriting text-yellow-400 font-bold whitespace-nowrap ml-4">
                  {item.price}
                </div>
              </div>
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

