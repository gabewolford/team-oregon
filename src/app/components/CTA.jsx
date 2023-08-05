import Button from "./Button"

export default function CTA({ header, subtext, buttonText, linkTo }) {
  return (
    <section className="flex flex-col gap-4 text-center px-10">
            <h3 className="text-2xl md:text-3xl font-semibold">{header}</h3>
            { subtext && <p>{subtext}</p>}
            <div className='mx-auto'>
                <Button
                    text={buttonText}
                    linkTo={linkTo}
                >
                </Button>
            </div>
    </section>
  )
}
