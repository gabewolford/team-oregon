import './globals.css'
import { exo } from './styles/fonts'
import Navbar from './components/Navbar'

export const metadata = {
  title: 'Team Oregon | PNW Bike Racing',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={exo.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}