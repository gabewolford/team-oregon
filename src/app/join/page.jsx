import JoinForm from "../components/JoinForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Image from "next/image"

export const metadata = {
  title: 'Team Oregon | Join The Team',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default async function JoinPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect('/account')

  return (
      <main className="flex flex-col">
          <div className="mx-6 lg:mx-auto lg:max-w-[80vw] mt-4 mb-16 md:mt-10 md:mb-0 lg:mb-8 flex flex-row">
            <div className="lg:w-1/2">
              <Image
                height={722}
                width={550}
                alt="thumbs up photo"
                src="/images/thumbsup.png"
                className="hidden lg:block w-auto h-full object-cover flex-1"
              >
              </Image>
            </div>
            <div className="lg:w-1/2">
              <JoinForm />
            </div>
          </div>
      </main>
    )
  }
  