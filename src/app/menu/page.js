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
      {/* Site header/footer hidden on mobile so the menu component is the full QR experience */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/*
        Desktop: fills remaining height below site header (flex-grow)
        Mobile:  100dvh full screen (no site header visible)
      */}
      <main className="menu-page-main">
        <KitchenWallMenu />
      </main>

      <style>{`
        .menu-page-main {
          width: 100%;
          overflow: hidden;
        }

        /* Desktop: fill remaining space below site header */
        @media (min-width: 769px) {
          .menu-page-main {
            height: calc(100vh - 120px);  /* site header ~ 96px + ribbon ~ 24px */
          }
        }

        /* Mobile: full viewport height, no site header */
        @media (max-width: 768px) {
          .menu-page-main {
            height: 100dvh;
            height: 100vh; /* fallback for older browsers */
          }
          @supports (height: 100dvh) {
            .menu-page-main {
              height: 100dvh;
            }
          }
        }
      `}</style>

      <div className="hidden md:block">
        <Footer />
      </div>
    </>
  )
}
