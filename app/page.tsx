import Image from "next/image";
import Link from "next/link";
import EventsCarousel from "@/components/sections/eventsCarousel";


export default function Home() {
  return (

    <div>
      {/* HERO FULL WIDTH */}
      <section className="relative w-full h-[70vh] min-h-[520px]">
        <Image
          src="/images/hero/imageentree.jpg"
          alt="BluLab"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Texte */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl space-y-4">
              <h1 className="text-white text-4xl md:text-5xl font-bold tracking-tight">
                Where streetwear meets community.
              </h1>
              <p className="text-white/90 text-base md:text-lg">
                Drops limités, events, pop-ups et énergie BluLab.
              </p>

            </div>
          </div>
        </div>
      </section>

      <EventsCarousel />

      {/* CONTENU */}
      <div className="max-w-7xl mx-auto px-6 py-12 space-y-10">
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Latest drops</h2>
          <div className="border border-[#D9D9D9] rounded-lg p-6 text-[#4B4B4B]">
            Coming soon.
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold tracking-tight">Upcoming event</h2>
          <div className="border border-[#D9D9D9] rounded-lg p-6 text-[#4B4B4B]">
            Coming soon.
          </div>
        </section>
      </div>
    </div>
  );
}
