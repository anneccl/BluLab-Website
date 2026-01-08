export type Category =
  | "tshirt"
  | "pant"
  | "shoes"
  | "accessoire"
  | "robe"
  | "hoodie"
  | "veste"
  | "jupe"
  | "chemise";

export type Gender = "homme" | "femme" | "unisex";

export type Availability = "en_magasin" | "arrive_bientot" | "rupture";

export type Tag =
  | "edition_limitee"
  | "populaire"
  | "nouveau"
  | "exclusive"
  | "best_seller";

export type MoneyXOF = {
  amount: number; 
  currency: "XOF"; // Côte d'Ivoire currency only
};

export type ProductImages = {
  cover: string;
  gallery?: string[]; // optional extra images
};

export type DropItem = {
  id: string;
  slug: string;

  title: string; 
  brand?: string; // optional
  collection?: string; // optional

  category: Category;
  gender: Gender;

  images: ProductImages;

  price: MoneyXOF;
  quantity?: number; // actual stock count

  availability: Availability; // drives the badge shown to user
  tags?: Tag[]; // optional badges "édition limitée", "nouveau", etc.

  // Optional “extra info” for product page / card
  shortDescription?: string; 
};

// ---------- UI labels (French) ----------
export const CATEGORY_LABEL_FR: Record<Category, string> = {
  tshirt: "T-shirt",
  pant: "Pantalon",
  shoes: "Chaussures",
  accessoire: "Accessoire",
  robe: "Robe",
  hoodie: "Hoodie",
  veste: "Veste",
  jupe: "Jupe",
  chemise: "Chemise",
};

export const GENDER_LABEL_FR: Record<Gender, string> = {
  homme: "Homme",
  femme: "Femme",
  unisex: "Unisexe",
};

export const AVAILABILITY_LABEL_FR: Record<Availability, string> = {
  en_magasin: "Disponible en magasin",
  arrive_bientot: "Arrive bientôt",
  rupture: "Rupture de stock",
};

export const TAG_LABEL_FR: Record<Tag, string> = {
  edition_limitee: "Édition limitée",
  populaire: "Populaire",
  nouveau: "Nouveau",
  exclusive: "Exclusif",
  best_seller: "Meilleure vente",
};

// ---------- Helpers ----------
export function formatPriceXOF(price: MoneyXOF): string {
  // Côte d’Ivoire locale often works well:
  // "fr-CI" may not be available in all environments; fallback included.
  const locale =
    typeof Intl !== "undefined" && Intl.NumberFormat.supportedLocalesOf("fr-CI").length
      ? "fr-CI"
      : "fr-FR";

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "XOF",
    maximumFractionDigits: 0,
  }).format(price.amount);
}

export function computeAvailability(item: DropItem): Availability {
  // Optional rule: if quantity is 0 => rupture, else keep what you set.
  // If you want auto "arrive_bientot", you can handle it elsewhere.
  if (item.quantity != null){
    if (item.quantity <= 0) 
        return "rupture";
  }
  return item.availability;
}

export function isLowStock(item: DropItem, threshold = 2): boolean {
    if(item.quantity !=null){
        return item.quantity > 0 && item.quantity <= threshold;
    }
  
    return true;
}

// ---------- Example data ----------
export const DROPS: DropItem[] = [
  {
    id: "01",
    slug: "tshirt-logo-noir",
    title: "T-shirt Logo Noir",
    brand: "BluLab",
    category: "tshirt",
    gender: "unisex",
    images: {
      cover: "/images/drops/tshirt-logo-noir/cover.jpg",
      gallery: [
        "/images/drops/tshirt-logo-noir/1.jpg",
        "/images/drops/tshirt-logo-noir/2.jpg",
      ],
    },
    price: { amount: 15000, currency: "XOF" },
    quantity: 6,
    availability: "en_magasin",
    tags: ["nouveau", "populaire"],
    shortDescription: "Coupe oversize, impression premium.",
  },
  {
    id: "drop_002",
    slug: "robe-satin-ivory",
    title: "Robe Satin Ivoire",
    brand: "Collection Studio",
    collection: "Drop Janvier",
    category: "robe",
    gender: "femme",
    images: {
      cover: "/images/drops/robe-satin-ivory/cover.jpg",
    },
    price: { amount: 28000, currency: "XOF" },
    quantity: 0,
    availability: "rupture",
    tags: ["edition_limitee"],
    shortDescription: "Édition limitée — stocks très faibles.",
  },
  {
    id: "drop_003",
    slug: "sneakers-blanc-gris",
    title: "Sneakers Blanc/Gris",
    brand: "BluLab Select",
    category: "shoes",
    gender: "unisex",
    images: {
      cover: "/images/drops/sneakers-blanc-gris/cover.jpg",
      gallery: ["/images/drops/sneakers-blanc-gris/1.jpg"],
    },
    price: { amount: 45000, currency: "XOF" },
    quantity: 3,
    availability: "arrive_bientot",
    tags: ["exclusive"],
    shortDescription: "Arrive bientôt en boutique.",
  },
];
