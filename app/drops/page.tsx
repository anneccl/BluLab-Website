import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/dropCard";
import { DROPS } from "@/lib/data/drops";

export const metadata: Metadata = {
  title: "Drops"
};

const Drops = () => {
  return (
    <div>
      {/* SECTION IMAGE DE FOND AVEC TITRE DROPS */}
      <section className="relative w-full h-[70vh] md:h-screen min-h-[400px] md:min-h-[520px]">
        {/* Vidéo en arrière-plan */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/drops-hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay pour lisibilité */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Texte par dessus - CENTRÉ */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 md:px-6 w-full">
            <div className="max-w-2xl mx-auto space-y-4 md:space-y-6 text-center">
              <h1 className="text-[#cae9ff] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight uppercase">
                Drops
              </h1>
              <p className="text-[#5FA8D3] text-base sm:text-lg md:text-xl lg:text-2xl font-medium px-4">
                Nos pépites exclusives. Collections limitées, drops uniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION PRODUITS */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          {/* Grille de produits - 2 colonnes sur mobile, 3 sur desktop */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
            {DROPS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Drops;