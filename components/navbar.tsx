import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6 py-3">
        
        <div className="grid grid-cols-3 items-center gap-4">
          
          {/* LIENS DE NAVIGATION */}
          <div className="flex gap-8 -ml-35">
            <Link 
              href="/events" 
              className="text-[#001c55] font-medium text-2xl tracking-wide hover:text-[#c0d6df] hover:scale-105 transition-all duration-300 ease-out"
            >
              Events
            </Link>
            <Link 
              href="/drops" 
              className="text-[#001c55] font-medium text-2xl tracking-wide hover:text-[#c0d6df] hover:scale-105 transition-all duration-300 ease-out"
            >
              Drops
            </Link>
            <Link 
              href="/story" 
              className="text-[#001c55] font-medium text-2xl tracking-wide hover:text-[#c0d6df] hover:scale-105 transition-all duration-300 ease-out"
            >
              Story
            </Link>
          </div>

          {/* LOGO */}
          <div className="flex justify-center">
            <Link href="/">
              <Image
                src="/logo.svg"
                alt="BluLab logo"
                width={140}
                height={60}
                priority
                className="hover:opacity-50 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* PANIER ET COMPTE UTILISATEUR */}
          <div className="flex justify-end">
            {/* Décommente pour V2 :
            <button className="text-white hover:text-[#283AFE] transition-colors duration-300 font-medium text-sm">
              Panier (0)
            </button>
            */}
          </div>

        </div>
      </div>
    </nav>
  );
}