import localFont from 'next/font/local'
import { Exo } from 'next/font/google'

const exo = Exo({ subsets: ['latin'] })
const sailorsRegular = localFont({ src: './fonts/Sailors.otf' });
const sneakoutRegular = localFont({ src: './fonts/Sneakout.ttf' });

export { exo, sailorsRegular, sneakoutRegular }