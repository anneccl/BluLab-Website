import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "@/lib/data/events";

export default function EventsCarousel() {
  return (
    <section className="py-8 md:py-12">

      {/* TITRE */}
      <div className="max-w-7xl mx-auto px-4 md:px-6 mb-6 md:mb-10">
        <div className="relative">
          {/* Style du fond  */}
          <div className="absolute -left-4 -top-6 w-48 md:w-72 h-24 md:h-32 bg-gradient-to-r from-[#283AFE]/10 to-[#4B5EFF]/5 blur-2xl -z-10" />
          
          <div className="relative">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-[#cae9ff] uppercase">
              Upcoming events
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-[#1B4965] mt-2 md:mt-3 font-medium tracking-wide">
              Les prochains rendez-vous BluLab.
            </p>
          </div>
        </div>
      </div>

      {/* Carrousel (sans barre de défilement visible) */}
      <div className="overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-3 md:gap-0 px-4 md:px-6 snap-x snap-mandatory">
          {EVENTS.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group relative snap-start shrink-0 w-[80%] sm:w-[70%] md:w-[500px] h-[450px] sm:h-[500px] md:h-[600px] overflow-hidden border border-[#D9D9D9] bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={event.imageSrc}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />

              {/* Assombrir au hover (survol) */}
              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/40" />

              {/* ACTION VOIR EVENT (Caché sur mobile tactile_ */}
              <div className="absolute inset-0 hidden md:flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 py-2 text-white">
                  <span className="text-sm font-medium">Voir l'événement</span>
                  <span className="text-base" aria-hidden>
                    →
                  </span>
                </div>
              </div>

              {/* Infos rapide de l'événement */}
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-5 bg-gradient-to-t from-black/80 to-transparent">
                <div>
                  <p className="text-xs text-white/90 font-medium">{event.dateLabel}</p>
                  <h3 className="text-base md:text-lg font-semibold tracking-tight text-white mt-1">
                    {event.title}
                  </h3>
                  {event.location ? (
                    <p className="text-xs text-white/80 mt-1">{event.location}</p>
                  ) : null}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}