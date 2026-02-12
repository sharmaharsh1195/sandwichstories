import { Fredoka, Nunito, Permanent_Marker } from 'next/font/google'
import './globals.css'

const fredoka = Fredoka({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-fredoka',
})

const nunito = Nunito({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-nunito',
})

const permanentMarker = Permanent_Marker({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-permanent-marker',
})

export const metadata = {
  title: 'Sandwich Stories - Delicious Sandwiches & Burgers',
  description: 'Mumbai\'s favorite sandwich spot! Fresh, tasty sandwiches, burgers and more.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${fredoka.variable} ${nunito.variable} ${permanentMarker.variable} font-body bg-white text-dark antialiased`}>
        {children}
      </body>
    </html>
  )
}
