"use client";

import { useEffect } from "react";
import Link from "next/link";
import Button from "./components/Button";

export default function Error({ error }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <main className="flex flex-col gap-10 md:gap-20 pt-[55px] md:pt-[68px]">
      <section className="flex flex-col gap-6 mx-auto pt-6">
        <h3
          className={
            "text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase"
          }
        >
          Page Not Found
        </h3>
        <Link className="mx-auto" href="/">
          <Button text="Go home" />
        </Link>
      </section>
    </main>
  );
}
