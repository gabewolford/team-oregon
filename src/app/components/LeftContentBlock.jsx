import Image from "next/image"
import Button from "./Button"

export default function LeftContentBlock({ header, text }) {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-10 mx-auto px-4 md:px-10 mb-10 md:mb-20 lg:max-w-[90vw]">
      <div className="flex flex-col order-1 items-start gap-4 md:w-1/2">
        <h3 className="text-[28px] font-semibold">{header}</h3>
        <p className="leading-[160%] font-medium">{text}</p>
        <Button text={'Meet the team'} linkTo={'/team'}/>
      </div>
      <Image
        src={'/images/home-photo-right-1.png'}
        alt="Tabor photo"
        width={543}
        height={518}
        className="order-0 md:w-1/2"
      ></Image>
    </section>
  )
}
