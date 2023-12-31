import Hero from "./components/Hero";
import CTA from "./components/CTA";
import LeftContentBlock from "./components/LeftContentBlock";
import RightContentBlock from "./components/RightContentBlock";
import homePhoto1 from "../../public/images/home-photo-1.png";
import homePhoto2 from "../../public/images/home-photo-2.png";
import homePhoto3 from "../../public/images/home-photo-3.png";

export const metadata = {
  title: "Team Oregon | PNW Bike Racing",
  description:
    "Helping our members achieve their cycling goals and developing the sport of competitive cycling in the Pacific Northwest for over three decades.",
};

export default function HomePage() {
  return (
    <main className="pt-[44px] md:pt-[68px]">
      <Hero
        text={
          "Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades."
        }
        buttonText={"Ride with us"}
        buttonLink={"/join"}
      ></Hero>

      <LeftContentBlock
        header={"Team-oriented, inclusive, and supportive"}
        text={
          "Our mission is to enhance the sport of cycling in Oregon by organizing an accessible team with resources to help all members reach their goals within the sport. Experienced riders share their knowledge with less experienced team members, enabling growth and skill development."
        }
        buttonText={"Meet the team"}
        buttonLink={"/team"}
        image={homePhoto1}
        altText={"Tabor photo"}
        photoCredit={"Photo by Bertrand Mejia-Morin / Bike Tires Direct"}
      ></LeftContentBlock>

      <RightContentBlock
        header={"We encourage and reward involvement in the community"}
        text={
          "In addition to racing, members are encouraged to be active in the club and assist in the club’s operations and projects. Team Oregon actively promotes races, training rides, training camps, community cycling events, and coaching."
        }
        buttonText={"Get involved"}
        buttonLink={"/join"}
        image={homePhoto2}
        altText={"Tabor photo"}
      ></RightContentBlock>

      <LeftContentBlock
        header={"Made possible by the generosity of our community sponsors"}
        text={
          "Team Oregon is proud to be supported by some of the finest local businesses that the Pacific Northwest has to offer. Whether you are painting your home, looking for the highest quality cycling gear, or just yearning for a delicious beer or coffee - we’ve got you covered."
        }
        buttonText={"Meet our sponsors"}
        buttonLink={"/sponsors"}
        image={homePhoto3}
        altText={"Rodda paint photo"}
        photoCredit={"Photo by Bertrand Mejia-Morin / Bike Tires Direct"}
      ></LeftContentBlock>

      <section className="mt-10">
        <CTA
          header={"Ride with us today!"}
          buttonText={"Join now"}
          linkTo={"/join"}
        ></CTA>
      </section>
    </main>
  );
}
