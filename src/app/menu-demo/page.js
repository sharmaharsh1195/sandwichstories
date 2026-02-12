'use client'
import { useState } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import ComicBookMenu from '@/components/menu/ComicBookMenu'
import ChalkboardMenu from '@/components/menu/ChalkboardMenu'
import TradingCardMenu from '@/components/menu/TradingCardMenu'
import RecipeBookMenu from '@/components/menu/RecipeBookMenu'

export default function MenuDemoPage() {
  const [activeOption, setActiveOption] = useState(1)

  const options = [
    { id: 1, name: 'Comic Book Menu', emoji: '📚', component: ComicBookMenu },
    { id: 2, name: 'Chalkboard Menu', emoji: '🚚', component: ChalkboardMenu },
    { id: 3, name: 'Trading Card Menu', emoji: '🎴', component: TradingCardMenu },
    { id: 4, name: 'Recipe Book Menu', emoji: '📔', component: RecipeBookMenu },
  ]

  const ActiveComponent = options.find(opt => opt.id === activeOption)?.component

  return (
    <>
      <Header />
      <main className="bg-light min-h-screen">
        {/* Demo Header */}
        <section className="bg-gradient-to-r from-primary-yellow to-primary-orange py-12">
          <div className="container-custom text-center">
            <h1 className="text-4xl md:text-6xl font-heading font-bold text-white mb-4">
              Menu Design Options 🎨
            </h1>
            <p className="text-lg font-body text-white/90">
              Choose your favorite style! Click tabs to preview each design.
            </p>
          </div>
        </section>

        {/* Option Tabs */}
        <section className="sticky top-20 z-40 bg-white shadow-lg border-b-4 border-dark">
          <div className="container-custom py-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {options.map((option) => (
                <button
                  key={option.id}
                  onClick={() => setActiveOption(option.id)}
                  className={`p-4 rounded-xl font-heading font-bold text-center transition-all duration-300 transform hover:scale-105 ${
                    activeOption === option.id
                      ? 'bg-primary-orange text-white shadow-xl scale-105'
                      : 'bg-gray-100 text-dark hover:bg-gray-200'
                  }`}
                >
                  <div className="text-4xl mb-2">{option.emoji}</div>
                  <div className="text-sm md:text-base">{option.name}</div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Active Menu Preview */}
        <section className="py-12">
          {ActiveComponent && <ActiveComponent />}
        </section>

        {/* Decision CTA */}
        <section className="py-16 bg-white">
          <div className="container-custom text-center">
            <div className="bg-dark text-white p-8 rounded-3xl max-w-2xl mx-auto">
              <h2 className="text-3xl font-heading font-bold mb-4">
                Which one do you like? 🤔
              </h2>
              <p className="font-body text-lg mb-6">
                Once you decide, we'll build the full version with all menu items!
              </p>
              <div className="text-6xl">👇</div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
