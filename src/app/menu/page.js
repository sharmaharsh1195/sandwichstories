import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import KitchenWallMenu from '@/components/menu/KitchenWallMenu'

export const metadata = {
  title: 'Menu - Sandwich Stories',
  description: 'Explore our delicious sandwiches, burgers, and more!',
}

export default function MenuPage() {
  return (
    <>
      <Header />
      <main className="bg-[#f8f5f0] min-h-screen">
        <KitchenWallMenu />
      </main>
      <Footer />
    </>
  )
}
