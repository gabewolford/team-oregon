import './globals.css'
import { exo } from './styles/fonts'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { AuthProvider } from './utils/providers/Providers'
import PayPalConfig from './components/PayPal/paypal.config'

export const metadata = {
  title: 'Team Oregon | PNW Bike Racing',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <AuthProvider>
          <PayPalConfig>
            <Navbar />
            <div className='pt-[55px] md:pt-[68px] pb-[375px] md:pb-[275px] lg:pb-[250px]'>
              {children}
            </div>
            <Footer />
          </PayPalConfig>
        </AuthProvider>
      </body>
    </html>
  )
}
