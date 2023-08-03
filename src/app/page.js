import Hero from "./components/Hero"
import PresentedBy from "./components/PresentedBy"

export default function HomePage() {
  return (
    <main>
      <PresentedBy color={'text-brown-500'} display={'hidden md:flex md:flex-row'}/>
      <Hero />
    </main>
  )
}
