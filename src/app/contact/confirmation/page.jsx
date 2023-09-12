import Image from "next/image"

export default function ContactConfirmation() {
    return (
        <>
            <main className="flex flex-col gap-10 md:gap-20">
                <div className="mx-6 lg:mx-20 mt-4 mb-16 md:m-10">
                    <h2 className='text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase mb-2'>Submission Successful</h2>
                    <p className="mb-6 text-center w-full lg:w-1/2 mx-auto">Your inquiry has been recieved.</p>
                    <Image
                        src={'/images/submission-successful.png'}
                        alt="thumbs up"
                        height={450}
                        width={600}
                        className="mx-auto"
                    >
                    </Image>
                </div>
            </main>
        </>
    )
}