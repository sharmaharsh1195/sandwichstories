'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menu', href: '/menu' },
    { name: 'Our Story', href: '/our-story' },
    { name: 'Locations', href: '/locations' },
  ]

  return (
    <>
      <header 
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-in-out ${
          scrolled ? 'py-0 shadow-lg' : 'py-0'
        }`}
      >
        <div className="w-full">
          {/* Main Header Container - Full Width */}
          <nav 
            className={`relative flex justify-between items-center transition-all duration-500 ease-in-out px-4 md:px-8 border-b border-white/20
              ${scrolled 
                ? 'bg-white/70 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.07)] py-2' 
                : 'bg-white/40 backdrop-blur-sm py-4'
              }`}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 relative group">
              <div className="relative w-12 h-12 md:w-16 md:h-16 transition-transform duration-300 group-hover:scale-105 rounded-full overflow-hidden bg-white shadow-sm p-1">
                <Image 
                  src="/Sandwitch logo-1.png" 
                  alt="Sandwich Stories Logo" 
                  fill
                  className="object-cover rounded-full"
                  priority
                />
              </div>
              <span className={`font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 drop-shadow-sm transition-all duration-300 
                ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
                Sandwich Stories
              </span>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="relative px-5 py-2 font-body font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 group overflow-hidden rounded-full"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center opacity-0 group-hover:opacity-100"></span>
                  </Link>
                </li>
              ))}
              <li className="ml-4">
                <button className="bg-gradient-to-r from-orange-500 to-amber-500 text-white hover:bg-orange-50 px-6 py-2.5 rounded-full font-heading font-black shadow-lg shadow-orange-500/30 hover:shadow-orange-500/50 hover:-translate-y-0.5 transition-all duration-300 tracking-wide uppercase text-sm">
                  Order Now
                </button>
              </li>
            </ul>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-800 text-3xl p-2 rounded-full hover:bg-white/50 transition-colors"
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={isOpen ? 'close' : 'open'}
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.2 }}
                >
                  {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </motion.div>
              </AnimatePresence>
            </button>
          </nav>
        </div>
      </header>

      {/* Spacer to prevent content from hiding under the fixed header */}
      <div className={`transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}></div>

      {/* Information Ribbon underneath header */}
      <div className="hidden md:flex bg-amber-800 text-yellow-100 py-1.5 w-full justify-center items-center space-x-6 text-sm font-body tracking-wider uppercase drop-shadow-md z-40 relative">
        <span className="flex items-center"><FaHeart className="text-orange-500 mr-2" /> Fresh Ingredients</span>
        <span className="text-orange-400 font-black">•</span>
        <span className="flex items-center"><FaHeart className="text-orange-500 mr-2" /> Made to Order</span>
        <span className="text-orange-400 font-black">•</span>
        <span className="flex items-center"><FaHeart className="text-orange-500 mr-2" /> 100% Veg Options</span>
      </div>

      {/* Mobile Navigation Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div 
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="fixed top-24 left-4 right-4 bg-white/90 backdrop-blur-lg rounded-3xl p-6 shadow-2xl border border-white/50 z-40 md:hidden"
            >
              <ul className="flex flex-col space-y-2">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link 
                      href={link.href}
                      className="block px-4 py-3 rounded-xl font-heading font-bold text-xl text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
                <motion.li 
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <button className="w-full bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-xl font-heading font-bold shadow-lg shadow-orange-500/30 text-xl">
                    Order Now
                  </button>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
