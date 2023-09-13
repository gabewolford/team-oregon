import LoginForm from "../components/LoginForm"
import Image from "next/image"
import sideAngle from "../../../public/images/side-angle.png"

export const metadata = {
    title: 'Team Oregon | Log In',
    description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
  }

export default function LogInPage() {
  return (
    <main className="flex flex-col">
      <div className="mx-auto md:mx-auto md:max-w-[80vw] mt-4 mb-16 md:mt-10 md:mb-0 lg:mb-8 flex flex-row items-center">
        <div className="lg:w-3/5 h-fit">
          <Image
            alt="side angle photo"
            src={sideAngle}
            className="hidden lg:block w-auto h-full object-cover flex-1"
            placeholder="blur"
          >
          </Image>
        </div>
        <div className="lg:w-2/5 h-full">
          <LoginForm />
        </div>
      </div>
    </main>
  )
}
