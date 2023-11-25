import ContactForm from "../components/ContactForm";
import Image from "next/image";
import taborPhoto from "../../../public/images/tabor-photo.png";
import bottleSquirt from "../../../public/images/bottle-squirt.png";

export const metadata = {
  title: "Team Oregon | Contact Us",
  description:
    "Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.",
};

export default function ContactPage() {
  return (
    <section className="flex flex-col mx-6 md:mx-auto md:max-w-[80vw] mt-4 mb-16 md:mt-10 md:mb-0 lg:mb-8 ">
      <div className="flex flex-row">
        <div className="lg:w-1/2">
          <Image
            alt="mt tabor race photo"
            src={taborPhoto}
            className="hidden lg:block w-auto h-full object-cover flex-1"
            placeholder="blur"
          ></Image>
        </div>
        <div className="lg:w-1/2">
          <ContactForm />
        </div>
      </div>
      <div className="relative w-full flex lg:hidden pt-8">
        <Image
          alt="Team photo"
          src={bottleSquirt}
          className="w-auto h-full object-cover"
        />
        <h6 className="absolute bottom-2 right-2 text-xs text-white-500/60">
          Photo by Bertrand Morin / Bike Tires Direct
        </h6>
      </div>
    </section>
  );
}
