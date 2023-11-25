import JoinForm from "../components/JoinForm";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";
import Image from "next/image";
import thumbsUp from "../../../public/images/thumbsup.png";
import teamPhoto from "../../../public/images/team-photo.png";

export const metadata = {
  title: "Team Oregon | Join The Team",
  description:
    "Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.",
};

export default async function JoinPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect("/account");

  return (
    <section className="flex flex-col mx-6 md:mx-auto md:max-w-[80vw] mt-4 mb-16 md:mt-10 md:mb-0 lg:mb-8 ">
      <div className="flex flex-row">
        <div className="lg:w-1/2">
          <Image
            alt="thumbs up photo"
            src={thumbsUp}
            className="hidden lg:block w-auto h-full object-cover flex-1"
            placeholder="blur"
          ></Image>
        </div>
        <div className="lg:w-1/2">
          <JoinForm />
        </div>
      </div>
      <div className="flex lg:hidden w-full pt-8">
        <Image
          alt="Team photo"
          src={teamPhoto}
          className="w-auto h-full object-cover"
        />
      </div>
    </section>
  );
}
