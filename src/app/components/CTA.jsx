import Button from "./Button"

export default function CTA({ header, subtext, buttonText, linkTo }) {
  return (
    <section className="flex flex-col gap-4 text-center">

            <h3 className="text-3xl font-semibold">{header}</h3>
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
