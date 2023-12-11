"use client";

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "./Button";
import Link from "next/link";

export default function CTA({ header, subtext, buttonText, linkTo }) {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <section className="gradient-background">
      <div
        className="flex flex-col gap-4 px-10 py-20 text-white-500 text-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <h3 className="text-2xl md:text-3xl font-semibold">{header}</h3>
        {subtext && <p>{subtext}</p>}
        <Link className="mx-auto" href={linkTo}>
          <Button text={buttonText} />
        </Link>
      </div>
    </section>
  );
}
