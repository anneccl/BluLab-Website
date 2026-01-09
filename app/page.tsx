import Image from "next/image";
import Link from "next/link";
import EventsCarousel from "@/components/sections/eventsCarousel";

export default function Home() {
  return (
    <div>
      {/* IMAGE D'ENTREE SUR LE SITE */}
      <section className="relative w-full h-screen min-h-[500px] md:min-h-[520px]">
        <Image
          src="/images/hero/imageacceuil01.jpg"
          alt="BluLab"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Texte accueil */}
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="max-w-xl space-y-3 md:space-y-4">
              <h1 className="text-[#cae9ff] text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
                Where streetwear meets community.
              </h1>
              <p className="text-[#5FA8D3] text-sm sm:text-base md:text-lg">
                Drops limités, events, pop-ups et énergie BluLab.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION EVENEMENTS À VENIR */}
      <EventsCarousel />

      {/* IMAGE FINALE AVEC LOGO CENTRÉ */}
      <section className="relative w-full h-[50vh] md:h-[60vh]">
        <Image
          src="/images/hero/imageacceuil02.jpg"
          alt="BluLab"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute inset-0 flex items-end justify-center pb-4 md:pb-0">
          <Image
            src="/logoBLulab.svg"
            alt="BluLab"
            width={120}
            height={80}
            className="opacity-90 hover:opacity-100 transition-opacity duration-300 md:w-[150px] md:h-[100px]"
          />
        </div>
      </section>
    </div>
  );
}