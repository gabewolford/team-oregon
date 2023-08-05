import GetSponsors from "../api/GetSponsors"

export default function SponsorsPage() {
  return (
    <main className="flex mx-10">
      <section className="mx-auto">
        <GetSponsors />
      </section>
    </main>
  )
}
