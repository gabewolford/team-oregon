import Image from "next/image"

export default function ContactConfirmation() {
    return (
        <>
            <main className="flex flex-col gap-10 md:gap-20">
                <div className="mx-6 lg:mx-20 my-4 md:my-10">
                    <h2 className='text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase mb-2'>Submission Successful</h2>
                    <p className="mb-6 text-center w-full lg:w-1/2 mx-auto">Your inquiry has been recieved.</p>
                    <Image
                        src={'/images/thumbsup.png'}
                        alt="thumbs up"
                        height={580}
                        width={442}
                        className="mx-auto"
                    >
                    </Image>
                </div>
            </main>
        </>
    )
}