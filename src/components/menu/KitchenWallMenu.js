'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaFire, FaLeaf, FaStar } from 'react-icons/fa'
import { HiViewGrid, HiViewList } from 'react-icons/hi'

export default function KitchenWallMenu() {
  const [activeMainCategory, setActiveMainCategory] = useState('sandwiches')
  const [activeSubCategory, setActiveSubCategory] = useState('non-grilled-sandwiches')
  const [viewMode, setViewMode] = useState('chalkboard') // 'cards' or 'chalkboard'

  const mainCategories = [
    { id: 'sandwiches', name: 'Sandwiches', emoji: '🥪' },
    { id: 'fast-food', name: 'Fast Food', emoji: '🍔' },
    { id: 'beverages', name: 'Beverages', emoji: '🥤' },
    { id: 'extras', name: 'Extras', emoji: '➕' },
  ]

  const subCategories = {
    sandwiches: [
      { id: 'non-grilled-sandwiches', name: 'Non-Grilled' },
      { id: 'gas-toast-sandwiches', name: 'Gas Toast' },
      { id: 'grilled-sandwiches', name: 'Grilled' },
      { id: 'triangle-grilled-sandwiches', name: 'Triangle Grill' },
      { id: 'open-grilled-sandwiches', name: 'Open Grilled' },
    ],
    'fast-food': [
      { id: 'pizzas', name: 'Pizza' },
      { id: 'fries', name: 'Fries' },
      { id: 'burgers', name: 'Burger' },
      { id: 'maggi', name: 'Maggi' },
      { id: 'nuggets', name: 'Nuggets' },
      { id: 'garlic-bread', name: 'Garlic Bread' },
    ],
    beverages: [
      { id: 'mocktails', name: 'Mocktails' },
      { id: 'hot-beverages', name: 'Hot Beverages' },
      { id: 'cold-beverages', name: 'Cold Beverages' },
    ],
    extras: [
      { id: 'add-ons', name: 'Add-Ons' },
    ],
  }

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

  const handleMainCategoryChange = (mainId) => {
    setActiveMainCategory(mainId)
    setActiveSubCategory(subCategories[mainId][0].id)
  }

  return (
    <div>
      {/* Chalkboard Menu Board Header */}
      <section className="bg-gradient-to-br from-gray-800 via-gray-900 to-black py-8 shadow-2xl border-b-8 border-amber-900">
        <div className="container-custom">
          {/* Menu Board Title */}
          <div className="text-center mb-6">
            <h1 
              className="text-4xl md:text-6xl font-heading font-bold text-white mb-2" 
              style={{ textShadow: '0 0 20px rgba(255,255,255,0.3)' }}
            >
              Menu
            </h1>
            <div className="h-1 w-48 bg-yellow-300 mx-auto"></div>
            <p className="text-yellow-300 font-handwriting text-xl mt-3">~ Fresh & Made with Love ~</p>
          </div>

          {/* View Toggle */}
          <div className="flex justify-center mb-6">
            <div className="bg-gray-700 rounded-full p-1 flex gap-2">
              <button
                onClick={() => setViewMode('chalkboard')}
                className={`px-6 py-2 rounded-full font-heading font-bold transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'chalkboard'
                    ? 'bg-primary-yellow text-dark'
                    : 'text-white hover:bg-gray-600'
                }`}
              >
                <HiViewList className="text-xl" />
                Chalkboard List
              </button>
              <button
                onClick={() => setViewMode('cards')}
                className={`px-6 py-2 rounded-full font-heading font-bold transition-all duration-300 flex items-center gap-2 ${
                  viewMode === 'cards'
                    ? 'bg-primary-yellow text-dark'
                    : 'text-white hover:bg-gray-600'
                }`}
              >
                <HiViewGrid className="text-xl" />
                Recipe Cards
              </button>
            </div>
          </div>

          {/* Main Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {mainCategories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => handleMainCategoryChange(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-handwriting text-xl font-bold transition-all duration-300 border-4 ${
                  activeMainCategory === category.id
                    ? 'bg-yellow-300 text-dark border-white shadow-2xl scale-105'
                    : 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </motion.button>
            ))}
          </div>

          {/* Subcategory Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2 md:gap-4 max-w-4xl mx-auto px-4">
            {subCategories[activeMainCategory].map((sub) => (
              <button
                key={sub.id}
                onClick={() => setActiveSubCategory(sub.id)}
                className={`px-5 py-2 rounded-full font-heading text-sm md:text-base font-semibold transition-all duration-300 border-2 ${
                  activeSubCategory === sub.id
                    ? 'bg-white text-dark border-white shadow-lg shadow-white/20'
                    : 'bg-transparent text-gray-300 border-gray-500 hover:border-gray-300 hover:text-white'
                }`}
              >
                {sub.name}
              </button>
            ))}
          </div>

          {/* Decorative elements */}
          <div className="absolute top-4 right-10 text-white/10 text-5xl rotate-12 hidden md:block">✨</div>
          <div className="absolute bottom-4 left-10 text-white/10 text-4xl -rotate-12 hidden md:block">→</div>
        </div>
      </section>

      {/* Menu Content - Recipe Cards OR Chalkboard */}
      <AnimatePresence mode="wait">
        {viewMode === 'cards' ? (
          <RecipeCardsView key="cards" menuItems={menuData[activeSubCategory]} activeSubCategory={activeSubCategory} />
        ) : (
          <ChalkboardView key="chalkboard" menuItems={menuData[activeSubCategory]} activeSubCategory={activeSubCategory} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Recipe Cards View Component
function RecipeCardsView({ menuItems, activeSubCategory }) {
  if (!menuItems) return null;
  
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 relative bg-[#f8f5f0] min-h-[500px]"
    >
      {/* Wall texture */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(#8B4513 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container-custom relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuItems.map((item, index) => (
              <RecipeCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

// Chalkboard List View Component
function ChalkboardView({ menuItems, activeSubCategory }) {
  if (!menuItems) return null;

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 min-h-[500px]"
    >
      <div className="container-custom">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSubCategory}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {menuItems.map((item, index) => (
              <ChalkboardItem key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

// Recipe Card Component (Updated for simpler data structure)
function RecipeCard({ item, index }) {
  // Generate a distinct color pattern or placeholder for missing images based on the ID or index
  const hue = (item.id * 137.5) % 360;
  
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -3, y: 50 }}
      animate={{ opacity: 1, rotate: 0, y: 0 }}
      transition={{ delay: index * 0.05, type: 'spring', bounce: 0.3 }}
      whileHover={{ scale: 1.05, rotate: 2, zIndex: 20 }}
      className="relative group h-full"
    >
      {/* Pin */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-red-500 drop-shadow-lg z-20 group-hover:scale-110 transition-transform">
        📍
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden border-4 border-gray-200 relative h-full flex flex-col">
        {/* Decorative Top Banner */}
        <div 
          className="h-24 relative overflow-hidden flex items-center justify-center p-4 border-b-2 border-dashed border-gray-300"
          style={{ 
            background: `linear-gradient(135deg, hsl(${hue}, 70%, 90%), hsl(${(hue + 40) % 360}, 70%, 80%))` 
          }}
        >
          {item.special && (
            <div className="absolute top-2 right-2 flex items-center justify-center bg-white/50 rounded-full p-2">
               <FaStar className="text-yellow-500 text-xl drop-shadow-sm" />
            </div>
          )}
          <h4 className="font-heading font-black text-white text-opacity-90 text-4xl tracking-widest drop-shadow-md">
            No.{item.id}
          </h4>
        </div>

        {/* Content */}
        <div className="p-6 flex-grow flex flex-col justify-between">
          <div>
            <h3 className="text-2xl md:text-3xl font-handwriting text-dark mb-4">
              {item.name}
              {item.name.includes('(R)') && <span className="text-sm font-body bg-red-100 text-red-600 px-2 py-1 rounded ml-2 align-middle">Regular</span>}
            </h3>
          </div>

          {/* Price */}
          <div className="flex justify-between items-end gap-4 mt-6 pt-4 border-t-2 border-dashed border-gray-200">
            <div className="bg-yellow-100 px-3 py-2 rounded-lg transform -rotate-2">
               <span className="font-handwriting text-sm text-dark font-bold hover:scale-110 transition-transform">Made Fresh!</span>
            </div>
            <div className="text-3xl md:text-4xl font-handwriting font-bold text-primary-orange whitespace-nowrap">
              {item.price}
            </div>
          </div>
        </div>

        {/* Tape */}
        {index % 3 === 0 && (
          <div className="absolute top-0 left-1/4 w-16 h-6 bg-yellow-200/60 rotate-45 -translate-y-2 mix-blend-multiply"></div>
        )}
      </div>
    </motion.div>
  )
}

// Chalkboard Item Component (Updated for simpler data structure)
function ChalkboardItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05 }}
      className="relative group"
    >
      <div className="flex justify-between items-center border-b-2 border-dashed border-white/20 pb-4">
        {/* Left: Name */}
        <div className="flex items-center gap-4">
          {item.special && (
            <FaStar className="text-yellow-400 text-2xl animate-pulse" />
          )}
          <h3 className="text-2xl md:text-3xl font-handwriting text-white group-hover:text-yellow-300 transition-colors">
            {item.name}
          </h3>
        </div>

        {/* Right: Price */}
        <div className="text-3xl md:text-4xl font-handwriting text-yellow-400 font-bold whitespace-nowrap ml-4">
          {item.price}
        </div>
      </div>
    </motion.div>
  )
}
