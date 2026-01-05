export type EventItem = {
  id: string;
  slug: string;
  title: string;
  dateLabel: string; // ex: "Jan 18, 2026"
  imageSrc: string;  // dans /public
  location?: string;
};

export const EVENTS: EventItem[] = [
  {
    id: "01",
    slug: "BLU PRINT II",
    title: "BLU PRINT II",
    dateLabel: "Samedi 29 Nov",
    imageSrc: "/images/events/event01.jpg",
    location: "BluLab",
  },
  {
    id: "02",
    slug: "Dakar bdlm",
    title: "Dakar bdlm",
    dateLabel: "Dimmanche 4 Jan",
    imageSrc: "/images/events/event02.jpg",
    location: "Villa Majorelle Almadies Ngor, Dakar",
  },
  {
    id: "03",
    slug: "music-live-session",
    title: "Pop up store - After party",
    dateLabel: "Samedi 03 Mai",
    imageSrc: "/images/events/event03.jpg",
    location: "BluLab",
  },
  {
    id: "04",
    slug: "workshop-styling",
    title: "Workshop Onomo",
    dateLabel: "Samedi 17 Mai",
    imageSrc: "/images/events/event04.jpg",
    location: "BluLab",
  },
];
