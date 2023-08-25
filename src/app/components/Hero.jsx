import Image from "next/image"
import Link from "next/link"
import { exo, sneakoutRegular } from "../styles/fonts"
import Button from "./Button"

export default function Hero({ text, buttonText, buttonLink }) {
    return (
        <div className="flex flex-col gap-4">
            <section className="flex relative w-full -mt-4 md:mt-6 md:pb-20">
                <Image
                    src="/images/hero-image.png"
                    sizes="100vw"
                    height={798}
                    width={2800}
                    alt="Hero image"
                    priority={true}
                    className="hidden md:block"
                >
                </Image>
                <div className="flex flex-row w-full h-full absolute">
                    <div className="w-1/2 h-full"></div>
                    <div className="flex items-center w-1/2 pr-2">
                        <div className="hidden md:flex md:flex-col items-start gap-4 w-[543px]">
                            <div className="flex flex-col gap-2">
                                <div className="flex flex-row">
                                    <Image
                                        src="/images/team-oregon-logo-year.png"
                                        height={110}
                                        width={946}
                                        alt="Team Oregon est. 1987"
                                    >
                                    </Image>
                                    <h3 className="hidden">Team Oregon est. 1987</h3>
                                </div>
                                <div>
                                    <h2 className="text-white-500 text-md lg:text-2xl">{text}</h2>
                                </div>
                            </div>
                            <Link href={buttonLink}>
                                <Button text={buttonText}/>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            <div className="flex md:hidden pb-10 md:pb-0">
                <div className="flex relative items-start gap-2 w-full">
                    <Image
                        src="/images/hero-image-mobile.png"
                        sizes="100vw"
                        height={798}
                        width={543}
                        alt="Hero image"
                        priority={true}
                        className="w-full"
                    >
                    </Image>
                    <div className="absolute bottom-0 py-4 flex-col px-4 gap-4 backdrop-blur-sm">
                        <div className="flex flex-col gap-2 mb-4">
                            <div className="flex flex-row">
                                <Image
                                    src="/images/team-oregon-logo-year.png"
                                    height={55}
                                    width={473}
                                    alt="Team Oregon est. 1987"
                                >
                                </Image>
                                <h3 className="hidden">Team Oregon est. 1987</h3>
                            </div>
                            <div>
                                <h3 className="text-md text-white-500 leading-[160%] font-medium lg:text-2xl">{text}</h3>
                            </div>
                        </div>
                        <Link href={buttonLink}>
                            <Button text={buttonText}/>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}