import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "@/lib/data/events";

export default function EventsCarousel() {
  return (
    <section className="py-12">

      {/* Titre avec fond stylé */}
      <div className="max-w-7xl mx-auto px-6 mb-10">
        <div className="relative">
          {/* Fond stylé derrière le titre */}
          <div className="absolute -left-4 -top-6 w-72 h-32 bg-gradient-to-r from-[#283AFE]/10 to-[#4B5EFF]/5 blur-3xl -z-10" />
          
          <div className="relative">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0B0B0B] uppercase">
              Upcoming events
            </h2>
            <p className="text-lg text-[#283AFE] mt-3 font-medium tracking-wide">
              Les prochains rendez-vous BluLab.
            </p>
          </div>
        </div>
      </div>

      {/* Carrousel - SANS barre de défilement visible */}
      <div className="overflow-x-auto scrollbar-hide scroll-smooth">
        <div className="flex gap-0 px-6 snap-x snap-mandatory">
          {EVENTS.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group relative snap-start shrink-0 w-[85%] md:w-[500px] h-[600px] overflow-hidden border border-[#D9D9D9] bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
            >
              {/* Image */}
              <Image
                src={event.imageSrc}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                priority={false}
              />

              {/* Assombrir au hover */}
              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/40" />

              {/* Action voir l'événement */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2 py-2 text-white">
                  <span className="text-sm font-medium">Voir l'événement</span>
                  <span className="text-base" aria-hidden>
                    →
                  </span>
                </div>
              </div>

              {/* Infos rapide de l'événement */}
              <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 to-transparent">
                <div>
                  <p className="text-xs text-white/90 font-medium">{event.dateLabel}</p>
                  <h3 className="text-lg font-semibold tracking-tight text-white mt-1">
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