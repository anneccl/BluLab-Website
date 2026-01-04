import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-6 py-4">
        
        <div className="grid grid-cols-3 items-center gap-4">
          
          {/* LIENS DE NAVIGATION */}
          <div className="flex gap-8 ">
            <Link 
              href="/events" 
              className="text-[#0B0B0B] font-medium text-[25px] tracking-wide hover:text-[#283AFE] hover:scale-110 hover:tracking-wider transition-all duration-300 ease-out"
            >
              Events
            </Link>
            <Link 
              href="/drops" 
              className="text-[#0B0B0B] font-medium text-[25px] tracking-wide hover:text-[#283AFE] hover:scale-110 hover:tracking-wider transition-all duration-300 ease-out"
            >
              Drops
            </Link>
            <Link 
              href="/story" 
              className="text-[#0B0B0B] font-medium text-[25px] tracking-wide hover:text-[#283AFE] hover:scale-110 hover:tracking-wider transition-all duration-300 ease-out"
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
                width={200}
                height={50}
                priority
                className="hover:opacity-50 transition-opacity duration-300"
              />
            </Link>
          </div>

          {/* PANIER ET COMPTE UTILISATEUR */}
          <div className="flex justify-end">
            {/* Décommente pour V2 :
            <button className="text-[#4B4B4B] hover:text-[#283AFE] transition-colors duration-300 font-medium">
              Panier (0)
            </button>
            */}
          </div>

        </div>
      </div>
    </nav>
  );
}