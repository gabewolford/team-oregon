import ContactForm from "../components/ContactForm"

export const metadata = {
  title: 'Team Oregon | Contact Us',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default function ContactPage() {

    return (
        <>
            <main className="mx-auto max-w-7xl pt-16 md:pt-24">
                <div className="mx-6 lg:mx-20 mb-8 md:mb-16">
                    <h2 className='text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase mb-2'>Contact Us</h2>
                    <ContactForm />
                </div>
            </main>
        </>
    )      
}