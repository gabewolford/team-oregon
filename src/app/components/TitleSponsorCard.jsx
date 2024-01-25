import Image from "next/image";
import Instagram from "../components/Socials/Instagram";
import Website from "../components/Socials/Website";
import Facebook from "../components/Socials/Facebook";

export default function TitleSponsorCard() {
  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      className="flex flex-col mt-6 md:mt-10 gap-6 md:gap-10"
    >
      <div className="px-10">
        <h2 className="text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase">
          2024 Presenting Sponsor
        </h2>
        <Image
          src={"/images/rodda-paint-logo-large.png"}
          alt="Rodda Paint"
          height={315}
          width={650}
          className="pt-6 pb-4 mx-auto"
        ></Image>
        <h5 className="text-center text-sm md:text-xl font-medium uppercase">
          Commerical | Industrial | Residential
        </h5>
      </div>
      <div className="flex flex-col max-w-[650px] mx-auto px-10 gap-2">
        <div className="flex flex-row gap-4">
          <h1 className="text-3xl font-semibold">Rodda Paint</h1>
          <div className="flex flex-row items-center space-x-2">
            <Website color={"#0163AA"} linkTo={"https://www.roddapaint.com/"} />
            <Instagram
              color={"#0163AA"}
              linkTo={"https://www.instagram.com/roddapaint/"}
            />
            <Facebook
              color={"#0163AA"}
              linkTo={"https://www.facebook.com/roddapaint/"}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            Rodda&apos;s family roots are strong and deep in the Pacific
            Northwest as our traditions date back to the 1930&apos;s. We are
            dedicated to developing and maintaining partnerships with our
            professional customers and strong allegiances in our communities.
          </p>
          <h5 className="mt-2">
            We have been guided by our core values since 1932.
          </h5>
          <div className="flex flex-col pl-8 md:pl-0 md:flex-row justify-around text-sm md:text-base">
            <div className="flex flex-col">
              <ul className="list-disc">
                <li>
                  Respect for <strong>People</strong>
                </li>
                <li>
                  Commitment to <strong>Integrity</strong>
                </li>
                <li>
                  Industry Leading <strong>Service</strong>
                </li>
                <li>
                  Foster <strong>Innovation</strong>
                </li>
              </ul>
            </div>
            <div className="flex flex-col">
              <ul className="list-disc">
                <li>
                  Focusing on <strong>Quality</strong>
                </li>
                <li>
                  Clarity of <strong>Communication</strong>
                </li>
                <li>
                  Social <strong>Responsibility</strong>
                </li>
                <li>
                  Promote <strong>Success</strong>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
