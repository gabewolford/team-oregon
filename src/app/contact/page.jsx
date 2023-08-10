import ContactForm from "../components/ContactForm"

export const metadata = {
  title: 'Team Oregon | Contact Us',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default function ContactPage() {

    return (
        <>
            <main className="flex flex-col gap-10 md:gap-20">
                <div className="mx-6 lg:mx-20 my-4 md:my-10">
                    <h2 className='text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase mb-2'>Contact Us</h2>
                    <ContactForm />
                </div>
            </main>
        </>
    )      
}