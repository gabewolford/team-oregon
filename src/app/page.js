import Hero from "./components/Hero"
import PresentedBy from "./components/PresentedBy"
import LeftContentBlock from "./components/LeftContentBlock"

export default function HomePage() {
  return (
    <main>
      <PresentedBy color={'text-brown-500'} display={'hidden md:flex md:flex-row'}/>
      <Hero />
      <LeftContentBlock header={'Team-oriented, inclusive, and supportive'} text={'Our mission is to enhance the sport of cycling in Oregon by organizing an accessible team with resources to help all members reach their goals within the sport. Experienced riders share their knowledge with less experienced team members, enabling growth and skill development.'}/>
    </main>
  )
}
