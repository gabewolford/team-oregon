import GetSponsors from "../api/sponsors/GetSponsors"
import CTA from "../components/CTA"
import TitleSponsorCard from "../components/TitleSponsorCard"

export const metadata = {
  title: 'Team Oregon | Sponsors',
  description: 'Helping our members achieve their cycling goals and developing the sport of competive cycling in the Pacific Northwest for over three decades.',
}

export default function SponsorsPage() {
  return (
    <main className="flex flex-col gap-10 md:gap-20">

      <TitleSponsorCard />

      <section className="flex flex-col gap-6 mx-auto">
        <h3 className={'text-center text-xl md:text-2xl text-blue-500 font-semibold uppercase'}>Additional Sponsorship By</h3>
        <GetSponsors />
      </section>
      <section className="mt-10 mb-20">
        <CTA
          header={'Interested in becoming a team sponsor?'}
          buttonText={'Get in touch'}
          linkTo={'/contact'}
        >
        </CTA>
      </section>
    </main>
  )
}
