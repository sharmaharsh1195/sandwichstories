'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart, FaFire, FaLeaf, FaStar } from 'react-icons/fa'
import { HiViewGrid, HiViewList } from 'react-icons/hi'

export default function KitchenWallMenu() {
  const [activeCategory, setActiveCategory] = useState('sandwiches')
  const [viewMode, setViewMode] = useState('chalkboard') // 'cards' or 'chalkboard'

  const categories = [
    { id: 'sandwiches', name: 'Sandwiches', emoji: '🥪' },
    { id: 'burgers', name: 'Burgers', emoji: '🍔' },
    { id: 'beverages', name: 'Beverages', emoji: '☕' },
    { id: 'sides', name: 'Sides', emoji: '🍟' },
  ]

  const menuData = {
    sandwiches: [
      {
        id: 1,
        name: 'Classic Club Sandwich',
        ingredients: ['Grilled Chicken', 'Lettuce', 'Tomato', 'Cheese', 'Mayo', 'Toast Bread'],
        description: 'Triple-layered perfection with our secret sauce',
        price: '₹180',
        note: 'Customer favorite since 2008!',
        stain: '☕',
        tags: ['bestseller'],
        image: 'https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=400&q=80'
      },
      {
        id: 2,
        name: 'Paneer Tikka Delight',
        ingredients: ['Paneer Tikka', 'Mint Chutney', 'Onions', 'Capsicum', 'Butter Toast'],
        description: 'Grilled paneer with aromatic Indian spices',
        price: '₹160',
        note: 'Spicy & aromatic!',
        stain: '🌶️',
        tags: ['spicy', 'vegetarian'],
        image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=400&q=80'
      },
      {
        id: 3,
        name: 'Bombay Masala Grilled',
        ingredients: ['Potato Masala', 'Cheese Burst', 'Green Chutney', 'Butter', 'Grilled Bread'],
        description: 'Street-style Mumbai favorite with cheese burst',
        price: '₹140',
        note: 'Street style favorite!',
        stain: '🧀',
        tags: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1621852004158-f3bc188ace2d?w=400&q=80'
      },
      {
        id: 4,
        name: 'Chicken Cheese Melt',
        ingredients: ['Shredded Chicken', 'Double Cheese', 'Jalapenos', 'Mayo', 'Garlic Butter'],
        description: 'Loaded with double cheese and juicy chicken',
        price: '₹190',
        note: 'For cheese lovers!',
        stain: '💛',
        tags: ['bestseller'],
        image: 'https://images.unsplash.com/photo-1619096252214-ef06c45683e3?w=400&q=80'
      },
    ],
    burgers: [
      {
        id: 5,
        name: 'Chicken Champion Burger',
        ingredients: ['Chicken Patty (150g)', 'Lettuce', 'Tomato', 'Cheese', 'Special Sauce', 'Sesame Bun'],
        description: 'Our signature 150g chicken patty burger',
        price: '₹200',
        note: 'Our signature burger!',
        stain: '🍔',
        tags: ['bestseller'],
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&q=80'
      },
      {
        id: 6,
        name: 'Veg Delight Burger',
        ingredients: ['Veg Patty', 'Grilled Veggies', 'Cheese', 'Mint Mayo', 'Whole Wheat Bun'],
        description: 'Healthy veggie patty with grilled veggies',
        price: '₹160',
        note: 'Healthy & tasty!',
        stain: '🥬',
        tags: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1520072959219-c595dc870360?w=400&q=80'
      },
      {
        id: 7,
        name: 'Paneer Tikka Burger',
        ingredients: ['Paneer Tikka Patty', 'Onion Rings', 'Tandoori Mayo', 'Lettuce', 'Butter Bun'],
        description: 'Desi twist with tandoori flavors',
        price: '₹180',
        note: 'Desi twist!',
        stain: '🔥',
        tags: ['spicy', 'vegetarian'],
        image: 'https://images.unsplash.com/photo-1603064752734-4c48eff53d05?w=400&q=80'
      },
    ],
    beverages: [
      {
        id: 8,
        name: 'Masala Chai',
        ingredients: ['Tea Leaves', 'Milk', 'Ginger', 'Cardamom', 'Sugar'],
        description: 'Traditional Indian chai with aromatic spices',
        price: '₹40',
        note: 'Perfect with any sandwich!',
        stain: '☕',
        tags: [],
        image: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&q=80'
      },
      {
        id: 9,
        name: 'Fresh Lime Soda',
        ingredients: ['Fresh Lime', 'Soda', 'Sugar/Salt', 'Mint', 'Ice'],
        description: 'Refreshing lime soda with mint',
        price: '₹60',
        note: 'Refreshing!',
        stain: '🍋',
        tags: [],
        image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?w=400&q=80'
      },
      {
        id: 10,
        name: 'Mango Smoothie',
        ingredients: ['Fresh Mango', 'Yogurt', 'Honey', 'Ice'],
        description: 'Creamy mango smoothie with yogurt',
        price: '₹100',
        note: 'Seasonal special!',
        stain: '🥭',
        tags: [],
        image: 'https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=400&q=80'
      },
    ],
    sides: [
      {
        id: 11,
        name: 'Crispy French Fries',
        ingredients: ['Potatoes', 'Salt', 'Herbs', 'Ketchup'],
        description: 'Golden crispy fries with herb seasoning',
        price: '₹80',
        note: 'Golden & crispy!',
        stain: '🍟',
        tags: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1576107232684-1279f390859f?w=400&q=80'
      },
      {
        id: 12,
        name: 'Onion Rings',
        ingredients: ['Onions', 'Batter', 'Breadcrumbs', 'Mayo Dip'],
        description: 'Crunchy onion rings with mayo dip',
        price: '₹90',
        note: 'Crunchy goodness!',
        stain: '🧅',
        tags: ['vegetarian'],
        image: 'https://images.unsplash.com/photo-1639024471283-03518883512d?w=400&q=80'
      },
    ],
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

          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-xl font-handwriting text-xl font-bold transition-all duration-300 border-4 ${
                  activeCategory === category.id
                    ? 'bg-yellow-300 text-dark border-white shadow-2xl scale-105'
                    : 'bg-gray-700 text-white border-gray-600 hover:bg-gray-600'
                }`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </motion.button>
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
          <RecipeCardsView key="cards" menuData={menuData} activeCategory={activeCategory} />
        ) : (
          <ChalkboardView key="chalkboard" menuData={menuData} activeCategory={activeCategory} />
        )}
      </AnimatePresence>
    </div>
  )
}

// Recipe Cards View Component
function RecipeCardsView({ menuData, activeCategory }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 relative bg-[#f8f5f0]"
    >
      {/* Wall texture */}
      <div className="absolute inset-0 opacity-5" 
           style={{ backgroundImage: 'radial-gradient(#8B4513 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
      </div>

      <div className="container-custom relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {menuData[activeCategory].map((item, index) => (
              <RecipeCard key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

// Chalkboard List View Component
function ChalkboardView({ menuData, activeCategory }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="py-16 bg-gradient-to-br from-gray-800 to-gray-900 min-h-screen"
    >
      <div className="container-custom">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 30 }}
            className="max-w-4xl mx-auto space-y-8"
          >
            {menuData[activeCategory].map((item, index) => (
              <ChalkboardItem key={item.id} item={item} index={index} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  )
}

// Recipe Card Component
function RecipeCard({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -3, y: 50 }}
      animate={{ opacity: 1, rotate: 0, y: 0 }}
      transition={{ delay: index * 0.1, type: 'spring', bounce: 0.3 }}
      whileHover={{ scale: 1.05, rotate: 2, zIndex: 20 }}
      className="relative group"
    >
      {/* Pin */}
      <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-4xl text-red-500 drop-shadow-lg z-20 group-hover:scale-110 transition-transform">
        📍
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border-4 border-gray-200 relative">
        {/* Stain */}
        <div className="absolute -top-3 -right-3 text-6xl opacity-20 rotate-12 z-10">
          {item.stain}
        </div>

        {/* Image */}
        <div className="h-48 overflow-hidden bg-gray-100 relative">
          <img 
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          />
          
          {/* Tags */}
          <div className="absolute top-2 left-2 flex gap-2">
            {item.tags.includes('bestseller') && (
              <span className="bg-accent-red text-white px-3 py-1 rounded-full text-xs font-heading font-bold flex items-center gap-1">
                <FaHeart /> Bestseller
              </span>
            )}
            {item.tags.includes('spicy') && (
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-heading font-bold flex items-center gap-1">
                <FaFire /> Spicy
              </span>
            )}
            {item.tags.includes('vegetarian') && (
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-heading font-bold flex items-center gap-1">
                <FaLeaf /> Veg
              </span>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="p-6">
          <h3 className="text-2xl md:text-3xl font-handwriting text-dark mb-3 border-b-2 border-dashed border-gray-300 pb-2">
            {item.name}
          </h3>

          {/* Ingredients */}
          <div className="mb-4">
            <p className="font-handwriting text-lg text-brown mb-2 flex items-center gap-2">
              <span className="text-xl">📝</span> Ingredients:
            </p>
            <ul className="font-body text-sm text-dark space-y-1 pl-4">
              {item.ingredients.map((ing, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-accent-red mt-1">✓</span>
                  <span>{ing}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Note & Price */}
          <div className="flex justify-between items-end gap-4">
            <div className="bg-yellow-100 px-3 py-2 rounded-lg transform rotate-1 flex-1">
              <p className="font-handwriting text-base text-dark flex items-center gap-1">
                <span className="text-lg">💛</span>
                <span className="text-sm">{item.note}</span>
              </p>
            </div>
            <div className="text-3xl md:text-4xl font-handwriting font-bold text-primary-orange whitespace-nowrap">
              {item.price}
            </div>
          </div>
        </div>

        {/* Tape */}
        {index % 3 === 0 && (
          <div className="absolute top-0 left-1/4 w-16 h-6 bg-yellow-200/60 rotate-45 -translate-y-2"></div>
        )}
      </div>
    </motion.div>
  )
}

// Chalkboard Item Component
function ChalkboardItem({ item, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.1 }}
      className="relative group"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b-2 border-dashed border-white/20 pb-6">
        {/* Left: Name & Description */}
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            {item.tags.includes('bestseller') && (
              <FaStar className="text-yellow-400 text-2xl animate-pulse" />
            )}
            <h3 className="text-3xl font-handwriting text-white group-hover:text-yellow-300 transition-colors">
              {item.name}
            </h3>
          </div>
          <p className="text-white/70 font-body text-lg ml-8">
            {item.description}
          </p>
          
          {/* Tags */}
          <div className="flex gap-2 mt-3 ml-8">
            {item.tags.includes('spicy') && (
              <span className="text-orange-400 text-sm font-body flex items-center gap-1">
                <FaFire /> Spicy
              </span>
            )}
            {item.tags.includes('vegetarian') && (
              <span className="text-green-400 text-sm font-body flex items-center gap-1">
                <FaLeaf /> Vegetarian
              </span>
            )}
          </div>
        </div>

        {/* Right: Price */}
        <div className="text-5xl font-handwriting text-yellow-400 font-bold whitespace-nowrap">
          {item.price}
        </div>
      </div>
    </motion.div>
  )
}
