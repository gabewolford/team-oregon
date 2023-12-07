import Button from "./Button";
import Link from "next/link";

export default function CTA({ header, subtext, buttonText, linkTo }) {
  return (
    <section className="flex flex-col gap-4 text-center px-10 py-20 gradient-background text-white-500">
      <h3 className="text-2xl md:text-3xl font-semibold">{header}</h3>
      {subtext && <p>{subtext}</p>}
      <Link className="mx-auto" href={linkTo}>
        <Button text={buttonText} />
      </Link>
    </section>
  );
}
