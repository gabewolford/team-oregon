"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function LeftContentBlock({
  header,
  text,
  buttonText,
  buttonLink,
  image,
  altText,
  photoCredit,
}) {
  useEffect(() => {
    AOS.init({
      // add options if needed
    });
  }, []);

  return (
    <section
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="true"
      className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-10 mx-auto px-10 mb-10 md:mb-20 lg:max-w-[90vw]"
    >
      <div className="flex flex-col order-1 md:order-0 items-start gap-4 md:w-1/2">
        <h3 className="text-[28px] font-semibold">{header}</h3>
        <p className="leading-[160%] font-medium">{text}</p>
        <Link href={buttonLink}>
          <Button text={buttonText} />
        </Link>
      </div>
      <div className="order-0 md:order-1 md:w-1/2 w-full relative">
        <Image
          src={image}
          alt={altText}
          priority={true}
          placeholder="blur"
          className="w-full h-auto"
        />
        <h6 className="absolute bottom-2 right-2 text-white-500/60 text-xs">
          {photoCredit}
        </h6>
      </div>
    </section>
  );
}
