import Image from "next/image";
import Link from "next/link";
import Button from "./Button";
import heroImage from "../../../public/images/hero-image.png";
import heroImageMobile from "../../../public/images/hero-image-mobile.png";
import heroImageText from "../../../public/images/team-oregon-logo-year.png";

export default function Hero({ text, buttonText, buttonLink }) {
  return (
    <div className="flex flex-col gap-4">
      <section className="flex relative w-full md:pb-20">
        <Image
          src={heroImage}
          sizes="100vw"
          alt="Hero image"
          priority={true}
          quality={100}
          className="hidden md:block"
        />
        <div className="flex flex-row w-full h-full absolute">
          <div className="w-1/2 h-full"></div>
          <div className="flex items-center w-1/2 pr-2">
            <div
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-once="true"
              className="hidden md:flex md:flex-col items-start gap-4 w-[543px]"
            >
              <div className="flex flex-col gap-2">
                <div className="flex flex-row">
                  <Image
                    src={heroImageText}
                    alt="Team Oregon est. 1987"
                  ></Image>
                  <h3 className="hidden">Team Oregon est. 1987</h3>
                </div>
                <div>
                  <h2 className="text-white-500 text-md lg:text-2xl">{text}</h2>
                </div>
              </div>
              <Link href={buttonLink}>
                <Button text={buttonText} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="flex md:hidden pb-10 md:pb-0">
        <div className="flex relative items-start gap-2 w-full">
          <Image
            src={heroImageMobile}
            sizes="100vw"
            alt="Hero image"
            priority={true}
            className="w-full"
          />
          <div
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
            className="absolute bottom-0 py-4 flex-col px-4 gap-4 backdrop-blur-sm"
          >
            <div className="flex flex-col gap-2 mb-4">
              <div className="flex flex-row">
                <Image src={heroImageText} alt="Team Oregon est. 1987"></Image>
                <h3 className="hidden">Team Oregon est. 1987</h3>
              </div>
              <div>
                <h3 className="text-md text-white-500 leading-[160%] font-medium lg:text-2xl">
                  {text}
                </h3>
              </div>
            </div>
            <Link href={buttonLink}>
              <Button text={buttonText} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
