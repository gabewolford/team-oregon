import GetSponsors from "../api/GetSponsors"
import { sailorsRegular } from "../styles/fonts"

export default function SponsorsPage() {
  return (
    <main className="flex">
      <section className="mx-auto">
        <h3 className={'text-center text-xl md:text-2xl text-blue-500 mb-8 font-semibold uppercase'}>Additional Sponsorship By</h3>
        <GetSponsors />
      </section>
    </main>
  )
}
