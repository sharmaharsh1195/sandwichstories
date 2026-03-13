import { FaInstagram, FaPhone, FaMapMarkerAlt } from 'react-icons/fa'
import { SiZomato, SiSwiggy } from 'react-icons/si'

const ZOMATO_LINK = 'https://link.zomato.com/xqzv/rshare?id=13119965730563f3b'
const SWIGGY_LINK = 'https://www.swiggy.com/direct/brand/177058?source=swiggy-direct&subSource=generic'

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-12">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-heading font-bold text-primary-yellow mb-4">
              Sandwich Stories
            </h3>
            <p className="font-body text-gray-300">
              Crafting delicious sandwich stories since 2008Fresh ingredients, bold flavors!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 font-body">
              <li><a href="/menu" className="hover:text-primary-yellow transition-colors">Menu</a></li>
              <li><a href="/our-story" className="hover:text-primary-yellow transition-colors">Our Story</a></li>
              <li><a href="/locations" className="hover:text-primary-yellow transition-colors">Locations</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-4">Get in Touch</h4>
            <ul className="space-y-3 font-body">
              <li className="flex items-center gap-2">
                <FaPhone className="text-primary-yellow" />
                <span>+91 8200948607</span>
              </li>
              <li className="flex items-start gap-2">
                <FaMapMarkerAlt className="text-primary-yellow mt-1 flex-shrink-0" />
                <span className="text-sm">SANDWICH STORIES, G8, SKY ELANZA, OPP. SKY VIEW HEIGHTS, BEHIND MIDAS SQUARE, GODADARA RD, SURAT, GUJARAT 395012</span>
              </li>
            </ul>
            <div className="flex gap-4 mt-6">
              <a 
                href="https://www.instagram.com/sandwich.storiess?igsh=dXAyemo3ajRlcHNr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-primary-yellow transition-all duration-300 hover:scale-110"
                title="Follow us on Instagram"
              >
                <FaInstagram />
              </a>
              <a 
                href={ZOMATO_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#CB202D] transition-all duration-300 hover:scale-110"
                title="Order on Zomato"
              >
                <SiZomato />
              </a>
              <a 
                href={SWIGGY_LINK} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-2xl hover:text-[#FC8019] transition-all duration-300 hover:scale-110"
                title="Order on Swiggy"
              >
                <SiSwiggy />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center font-body text-gray-400">
          <p>&copy; 2026 Sandwich Stories. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
    