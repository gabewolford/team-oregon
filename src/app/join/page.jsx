import JoinForm from "../components/JoinForm"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"
import { authOptions } from "../api/auth/[...nextauth]/route"

export const metadata = {
  title: 'Team Oregon | Join The Team',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default async function JoinPage() {
  const session = await getServerSession(authOptions);

  if (session) redirect('/account')

  return (
      <>
          <main className="flex flex-col gap-10 md:gap-20">
              <div className="mx-6 lg:mx-20 my-4 md:my-10">
                  <h2 className='text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase mb-2'>Join The Team</h2>
                  <div className="mb-6 w-full lg:w-1/2 mx-auto">
                    <p className="mb-6 text-center font-semibold italic">Thank you for your interest in Team Oregon!</p>
                    <p className="mb-2">Team Oregon welcomes cyclists of all backgrounds, disciplines, and abilities. Whether you are an experienced racer or are thinking of pinning on a race number for the first time this season, we would love to support your goals as a member of our team.</p>
                    <p className="mb-2">Benefits of team membership include:</p>
                      <ul className="list-disc pl-8">
                        <li>Discounted products or services from many of our sponsors</li>
                        <li>Discounts on certain race entry fees (these can easily add up to more than what your membership costs over the course of a single season.)</li>
                        <li>Awesome teammates who show up to race (we won the OBRA Team BAR competition in 2015, 2016, and 2017!)</li>
                      </ul>
                  </div>
                  <JoinForm />
              </div>
          </main>

      </>
    )
  }
  