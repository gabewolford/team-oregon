import CTA from "../components/CTA"
import GetBoardmembers from "../api/boardmembers/GetBoardmembers"

export const metadata = {
  title: 'Team Oregon | Meet The Team',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default function TeamPage() {
    return (
      <main className="flex flex-col gap-10 md:gap-20 mt-6">
        <section className="flex flex-col gap-6 mx-auto">
          <h3 className={'text-center text-xl md:text-2xl text-blue-500 font-semibold uppercase'}>2023 Team Leadership</h3>
          <GetBoardmembers />
        </section>
        <section className="mt-10 mb-20">
          <CTA
            header={"We'd love to meet you!"}
            subtext={"Feel free to contact us with any questions."}
            buttonText={'Get in touch'}
            linkTo={'/contact'}
          >
          </CTA>
        </section>
      </main>
    )
  }
  