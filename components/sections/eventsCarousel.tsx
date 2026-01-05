import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "@/lib/data/events";

export default function EventsCarousel() {
  return (
    <section className="space-y-4">
      <div className="flex items-center justify-start gap-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B0B0B]">Upcoming events</h2>
          <p className="text-sm text-[#4B4B4B]">
            Les prochains rendez-vous BluLab.
          </p>
        </div>
      </div>

      {/* Carrousel */}
      <div className="-mx-6 px-6 overflow-x-auto no-scrollbar scroll-smooth">
        <div className="flex gap-0 snap-x snap-mandatory">
          {EVENTS.map((event) => (
            <Link
              key={event.id}
              href={`/events/${event.id}`}
              className="group relative snap-start shrink-0 w-[85%] md:w-[600px] h-[700px]  overflow-hidden border border-[#D9D9D9] bg-white"
            >
              {/* Image */}
              <Image
                src={event.imageSrc}
                alt={event.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                priority={false}
              />

              {/* Assombrir au hover */}
              <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/45" />

              {/* Action voir l'évenement */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="flex items-center gap-2  py-2 text-white">
                  <span className="text-sm font-medium">Voir l’évènement</span>
                  <span className="text-base" aria-hidden>
                    →
                  </span>
                </div>
              </div>

              {/* Infos rapide de l'évenement */}
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div >
                  <p className="text-xs text-[#9EA6FF]">{event.dateLabel}</p>
                  <h3 className="text-lg font-semibold tracking-tight text-[#0B0B0B]">
                    {event.title}
                  </h3>
                  {event.location ? (
                    <p className="text-xs text-[#9EA6FF] mt-1">{event.location}</p>
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
