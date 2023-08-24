import Image from "next/image"
import Link from "next/link"
import Button from "./Button"

export default function RightContentBlock({ header, text, buttonText, buttonLink, image, altText }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mx-auto px-10 mb-10 md:mb-20 lg:max-w-[90vw]">
      <Image
        src={image}
        alt={altText}
        width={543}
        height={785}
        className="md:w-1/2 w-full"
      >
      </Image>
      <div className="flex flex-col items-start gap-4 md:w-1/2">
        <h3 className="text-[28px] font-semibold">{header}</h3>
        <p className="leading-[160%] font-medium">{text}</p>
        <Link href={buttonLink}>
          <Button text={buttonText}/>
        </Link>
      </div>
    </section>
  )
}
