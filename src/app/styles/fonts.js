import localFont from 'next/font/local'
import { Exo } from 'next/font/google'

const exo = Exo({ subsets: ['latin'] })
const sailorsRegular = localFont({ src: './fonts/sailors.otf' });
const sneakoutRegular = localFont({ src: './fonts/sneakout.ttf' });

export { exo, sailorsRegular, sneakoutRegular }