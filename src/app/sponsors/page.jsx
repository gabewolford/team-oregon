import SponsorCard from "../components/SponsorCard";
import CTA from "../components/CTA";
import TitleSponsorCard from "../components/TitleSponsorCard";
import { client } from "../../../sanity/lib/client";

export const metadata = {
  title: "Team Oregon | Sponsors",
  description:
    "Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.",
};

export default async function SponsorsPage() {
  const data = await client.fetch(`
    *[_type == "sponsor"]{
      name, 
      "imageUrl": image.asset->url, 
      order, 
      website, 
      facebook, 
      instagram, 
      description} 
      | order(order asc)
  `);

  const sponsors = data;

  return (
    <main className="flex flex-col gap-10 md:gap-20 pt-[55px] md:pt-[68px]">
      <TitleSponsorCard />

      <section className="flex flex-col gap-6 mx-auto">
        <h3
          className={
            "text-center text-xl md:text-2xl text-blue-500 font-semibold uppercase"
          }
        >
          Additional Sponsorship By
        </h3>

        {sponsors.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-10">
            {sponsors.map((sponsor, i) => (
              <div key={i}>
                <SponsorCard key={i} sponsorData={sponsor} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row justify-around">
            <Spinner />
          </div>
        )}
      </section>

      <section className="mt-10">
        <CTA
          header={"Interested in becoming a team sponsor?"}
          buttonText={"Get in touch"}
          linkTo={"/contact"}
        ></CTA>
      </section>
    </main>
  );
}
