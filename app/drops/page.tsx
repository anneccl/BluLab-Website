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
      <section className="relative w-full h-screen min-h-[520px]">
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
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-2xl mx-auto space-y-6 text-center">
              <h1 className="text-[#cae9ff] text-5xl md:text-7xl font-black tracking-tight uppercase">
                Drops
              </h1>
              <p className="text-[#5FA8D3] text-xl md:text-2xl font-medium">
                Nos pépites exclusives. Collections limitées, drops uniques.
              </p>
            </div>
          </div>
        </div>
      </section>


       {/* SECTION PRODUITS */}
      <section className="py-20 ">
        <div className="max-w-7xl mx-auto px-6">
          {/* Titre de section */}
          {/* <div className="relative mb-12">
            <div className="absolute -left-4 -top-6 w-72 h-32 bg-gradient-to-r from-[#283AFE]/10 to-[#4B5EFF]/5 blur-2xl -z-10" />
            
            <div className="relative text-center">
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#1B4965] uppercase">
                Collections
              </h2>
              <p className="text-lg text-[#5FA8D3] mt-3 font-medium tracking-wide">
                Découvrez nos derniers drops.
              </p>
            </div>
          </div> */}

          {/* Grille de produits */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {DROPS.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Drops