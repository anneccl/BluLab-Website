export type AvailabilityStatus = "in_stock" | "out_of_stock" | "preorder";

export type DropItem = {
  id: string;
  slug: string;
  title: string;
  priceLabel: string;     // ex: "95$"
  imageSrc: string;       // dans /public
  tag?: string;           // ex: "New", "Limited"
  availability: AvailabilityStatus;
};

export const DROPS: DropItem[] = [
  {
    id: "1",
    slug: "blulab-hoodie-blue",
    title: "BluLab Hoodie (Blue)",
    priceLabel: "95$",
    imageSrc: "/drops/drop-1.jpg",
    tag: "New",
    availability: "in_stock",
  },
  {
    id: "2",
    slug: "graphic-tee-archive",
    title: "Graphic Tee — Archive",
    priceLabel: "45$",
    imageSrc: "/drops/drop-2.jpg",
    tag: "Limited",
    availability: "in_stock",
  },
  {
    id: "3",
    slug: "cap-logo",
    title: "Logo Cap",
    priceLabel: "35$",
    imageSrc: "/drops/drop-3.jpg",
    availability: "in_stock",
  },
  {
    id: "4",
    slug: "bag-street",
    title: "Street Bag",
    priceLabel: "60$",
    imageSrc: "/drops/drop-4.jpg",
    tag: "New",
    availability: "in_stock",
  },
  {
    id: "5",
    slug: "sneakers-rare-piece",
    title: "Rare Piece Sneakers",
    priceLabel: "220$",
    imageSrc: "/drops/drop-5.jpg",
    tag: "Rare",
    availability: "preorder",
  },
  {
    id: "6",
    slug: "accessories-pack",
    title: "Accessories Pack",
    priceLabel: "25$",
    imageSrc: "/drops/drop-6.jpg",
    availability: "out_of_stock",
  },
];
