import LoginForm from "../components/LoginForm"

export const metadata = {
    title: 'Team Oregon | Log In',
    description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
  }

export default function LogInPage() {
  return (
    <main className="flex flex-col gap-10 md:gap-20">
          <div className="mx-6 lg:mx-20 mt-4 mb-16 md:mt-10 md:mb-0">
            <h2 className='text-center text-xl md:text-3xl text-blue-500 font-semibold uppercase mb-2'>LOG IN TO YOUR ACCOUNT</h2>
            <LoginForm />
        </div>
    </main>
  )
}
