import CTA from "../components/CTA";
import BoardmemberCard from "../components/BoardmemberCard";
import { client } from "../../../sanity/lib/client";

export const metadata = {
  title: "Team Oregon | Meet The Team",
  description:
    "Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.",
};

export default async function TeamPage() {
  const data = await client.fetch(`
  *[_type == "boardmember"]{
    firstname, 
    lastname, 
    "imageUrl": image.asset->url, 
    position, bio} 
    | order(lastname asc)
  `);

  const boardmembers = data;

  return (
    <main className="flex flex-col gap-10 md:gap-20 pt-[55px] md:pt-[68px]">
      <section className="flex flex-col gap-6 mx-auto pt-6">
        <h3
          className={
            "text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase"
          }
        >
          2024 Team Leadership
        </h3>
        <h4
          className={
            "text-center text-lg md:text-2xl text-blue-500 font-semibold py-12 h-[600px]"
          }
        >
          Coming soon...
        </h4>

        {/* {boardmembers.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 mx-10">
            {boardmembers.map((boardmember, i) => (
              <div key={i}>
                <BoardmemberCard key={i} boardmemberData={boardmember} />
              </div>
            ))}
          </div>
        ) : (
          <div className="flex flex-row justify-around">
            <Spinner />
          </div>
        )} */}
      </section>
      <section className="mt-10">
        <CTA
          header={"We'd love to meet you!"}
          subtext={"Feel free to contact us with any questions."}
          buttonText={"Get in touch"}
          linkTo={"/contact"}
        ></CTA>
      </section>
    </main>
  );
}
