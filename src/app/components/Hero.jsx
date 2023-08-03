import Image from "next/image"
import { exo, sneakoutRegular } from "../styles/fonts"
import Button from "./Button"

export default function Hero() {
    return (
        <>
            <section className="flex relative w-full mb-20">
                <Image
                    src="/images/hero-image.png"
                    sizes="100vw"
                    height={798}
                    width={2440}
                    alt="Hero image"
                    priority={true}
                >
                </Image>
                <div className="flex flex-row w-full h-full absolute">
                    <div className="w-1/2 h-full"></div>
                    <div className="flex items-center w-1/2">
                        <div className="flex flex-col items-start gap-6 w-[543px]">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row items-baseline gap-2">
                                    <h1 className={`${sneakoutRegular.className} text-white-500 text-[56px] leading-[120%]`}>Team Oregon</h1>
                                    <h6 className={`text-base text-white-500 ${exo.className}`}>est. 1987</h6>
                                </div>
                                <div>
                                    <h2 className="text-white-500 text-2xl">Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.</h2>
                                </div>
                            </div>
                            <Button text={'Ride with us'} linkTo={'/join'}/>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}