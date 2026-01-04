export default function Home() {
  return (

    <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">

      {/* ENTETE */}
      <header className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">BluLab</h1>
        <p className="text-base text-[#4B4B4B] max-w-xl">
          Drops, events et culture. Découvre les nouveautés et les prochains événements.
        </p>
      </header>

      {/* SECTION */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold tracking-tight">Latest drops</h2>
        <div className="border border-[#D9D9D9] rounded-lg p-6 text-[#4B4B4B]">
          Coming soon.
        </div>
      </section>

    </div>
  );
}
