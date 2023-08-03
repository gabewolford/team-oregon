import Hero from "./components/Hero"
import PresentedBy from "./components/PresentedBy"
import LeftContentBlock from "./components/LeftContentBlock"
import RightContentBlock from "./components/RightContentBlock"

export default function HomePage() {
  return (
    <main>
      <PresentedBy color={'text-brown-500'} display={'hidden md:flex md:flex-row'}/>
      <Hero />
      <LeftContentBlock header={'Team-oriented, inclusive, and supportive'} text={'Our mission is to enhance the sport of cycling in Oregon by organizing an accessible team with resources to help all members reach their goals within the sport. Experienced riders share their knowledge with less experienced team members, enabling growth and skill development.'}/>
      <RightContentBlock header={'We encourage and reward involvement in the community'} text={'In addition to racing, members are encouraged to be active in the club and assist in the club’s operations and projects. Team Oregon actively promotes races, training rides, training camps, community cycling events, and coaching.'}/>
    </main>
  )
}
