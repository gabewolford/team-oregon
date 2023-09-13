import ContactForm from "../components/ContactForm"
import Image from "next/image"
import taborPhoto from "../../../public/images/tabor-photo.png"

export const metadata = {
  title: 'Team Oregon | Contact Us',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default function ContactPage() {

    return (
      <main className="flex flex-col">
        <div className="mx-6 md:mx-auto md:max-w-[80vw] mt-4 mb-16 md:mt-10 md:mb-0 lg:mb-8 flex flex-row">
            <div className="lg:w-1/2">
              <Image
                alt="mt tabor race photo"
                src={taborPhoto}
                className="hidden lg:block w-auto h-full object-cover flex-1"
                placeholder="blur"
              >
              </Image>
            </div>
            <div className="lg:w-1/2">
              <ContactForm />
            </div>
          </div>
        </main>
    )      
}