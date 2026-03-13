'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { HiMenuAlt3, HiX } from 'react-icons/hi'
import { motion, AnimatePresence } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'
import { SiZomato, SiSwiggy } from 'react-icons/si' // 👈 new

const ZOMATO_LINK = 'https://link.zomato.com/xqzv/rshare?id=13119965730563f3b'
const SWIGGY_LINK = 'https://www.swiggy.com/direct/brand/177058?source=swiggy-direct&subSource=generic'
const GOOGLE_MAPS_LINK = 'https://maps.app.goo.gl/dyeJYNQ6RQPyYqDq6'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
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

  {/* ✨ Wrap in flex-col to stack name + tagline */}
  <div className="flex flex-col leading-tight items-end">
  <span className={`font-heading font-black tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-amber-500 drop-shadow-sm transition-all duration-300
    ${scrolled ? 'text-xl md:text-2xl' : 'text-2xl md:text-3xl'}`}>
    Sandwich Stories
  </span>
  <span className={`font-heading font-medium text-black tracking-widest transition-all duration-300
    ${scrolled ? 'text-[9px] md:text-[10px]' : 'text-[10px] md:text-xs'}`}>
    Since 2008
  </span>
</div>

</Link>


            {/* Desktop Navigation */}
            <ul className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className="relative px-5 py-2 font-body font-bold text-gray-800 hover:text-orange-600 transition-colors duration-300 group overflow-hidden rounded-full"
                  >
                    <span className="relative z-10">{link.name}</span>
                    <span className="absolute inset-0 bg-orange-100 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 ease-out origin-center opacity-0 group-hover:opacity-100"></span>
                  </Link>
                </li>
              ))}

              {/* ✨ Refined Split Order Button */}
              <li className="ml-4">
                <div className="flex flex-col items-center gap-1">
                  {/* Floating label above */}
                  <span className="text-[10px] font-body font-semibold text-gray-400 uppercase tracking-widest leading-none">
                    Order via
                  </span>

                  {/* Split Pill */}
                  <div className="flex rounded-full overflow-hidden ring-1 ring-black/10 shadow-lg font-heading font-black text-sm uppercase tracking-wide">

                    {/* Zomato Half */}
                    <a
                      href={ZOMATO_LINK}
                      rel="noopener noreferrer" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/z relative flex items-center gap-2 bg-[#CB202D] text-white pl-5 pr-4 py-2.5
                        hover:bg-[#b01c27]
                        hover:-translate-y-0.5
                        hover:shadow-[0_8px_24px_-4px_rgba(203,32,45,0.55)]
                        active:scale-95 active:translate-y-0
                        transition-all duration-300 overflow-hidden"
                    >
                      {/* Shimmer sweep */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/z:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                      <SiZomato className="text-base shrink-0" />
                      <span>Zomato</span>
                    </a>

                    {/* Divider */}
                    <span className="w-px bg-white/40 self-stretch shrink-0" />

                    {/* Swiggy Half */}
                    <a
                      href={SWIGGY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group/s relative flex items-center gap-2 bg-[#FC8019] text-white pl-4 pr-5 py-2.5
                        hover:bg-[#e57316]
                        hover:-translate-y-0.5
                        hover:shadow-[0_8px_24px_-4px_rgba(252,128,25,0.55)]
                        active:scale-95 active:translate-y-0
                        transition-all duration-300 overflow-hidden"
                    >
                      {/* Shimmer sweep */}
                      <span className="pointer-events-none absolute inset-0 -translate-x-full group-hover/s:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12" />
                      <SiSwiggy className="text-base shrink-0" />
                      <span>Swiggy</span>
                    </a>

                  </div>
                </div>
              </li>
            </ul>

            {/* Mobile Menu Button - unchanged */}
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

      <div className={`transition-all duration-500 ${scrolled ? 'h-16' : 'h-24'}`}></div>

      {/* Information Ribbon */}
      <div
        className="hidden md:flex text-yellow-100 py-1.5 w-full justify-center items-center space-x-6 text-sm font-body tracking-wider uppercase drop-shadow-md z-40 relative"
        style={{ backgroundColor: 'hsl(120deg 100% 19.61%)' }}
      >
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
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block px-4 py-3 rounded-xl font-heading font-bold text-xl text-gray-800 hover:text-orange-600 hover:bg-orange-50 transition-all"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}

                {/* ✨ Mobile Split Order Buttons */}
                <motion.li
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  className="pt-4"
                >
                  <p className="text-xs text-gray-400 font-body uppercase tracking-widest text-center mb-3">
                    🛵 Order via your favourite app
                  </p>
                  <div className="flex gap-3">
                    <a
                      href={ZOMATO_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#CB202D] text-white py-3.5 rounded-2xl font-heading font-bold text-base shadow-lg shadow-red-300/40 active:scale-95 transition-transform"
                    >
                      <SiZomato className="text-lg" />
                      Zomato
                    </a>
                    <a
                      href={SWIGGY_LINK}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setIsOpen(false)}
                      className="flex-1 flex items-center justify-center gap-2 bg-[#FC8019] text-white py-3.5 rounded-2xl font-heading font-bold text-base shadow-lg shadow-orange-300/40 active:scale-95 transition-transform"
                    >
                      <SiSwiggy className="text-lg" />
                      Swiggy
                    </a>
                  </div>
                </motion.li>
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
