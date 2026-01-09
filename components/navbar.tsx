'use client';

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 z-50 w-full  backdrop-blur-md border-b border-[#D9D9D9]">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-3">
        
        {/* VERSION MOBILE */}
        <div className="flex md:hidden items-center justify-between">
          {/* Bouton hamburger */}
          <button 
            onClick={toggleMenu}
            className="p-2 text-[#001c55]"
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {/* Logo centré */}
          <Link href="/" onClick={closeMenu}>
            <Image
              src="/logo.svg"
              alt="BluLab logo"
              width={100}
              height={40}
              priority
              className="hover:opacity-50 transition-opacity duration-300"
            />
          </Link>

          {/* Placeholder pour équilibrer */}
          <div className="w-10" />
        </div>

        {/* Menu mobile déroulant */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-[#D9D9D9]/100 backdrop-blur-md border-b border-[#D9D9D9] py-4">
            <div className="flex flex-col items-center gap-4">
              <Link 
                href="/events" 
                onClick={closeMenu}
                className="text-[#001c55] font-medium text-lg tracking-wide hover:text-[#c0d6df] transition-all duration-300"
              >
                Events 
              </Link>
              <Link 
                href="/drops" 
                onClick={closeMenu}
                className="text-[#001c55] font-medium text-lg tracking-wide hover:text-[#c0d6df] transition-all duration-300"
              >
                Drops
              </Link>
              <Link 
                href="/story" 
                onClick={closeMenu}
                className="text-[#001c55] font-medium text-lg tracking-wide hover:text-[#c0d6df] transition-all duration-300"
              >
                Notre Histoire
              </Link>
              <Link 
                href="/findus" 
                onClick={closeMenu}
                className="text-[#001c55] font-medium text-lg tracking-wide hover:text-[#c0d6df] transition-all duration-300"
              >
                Find Us
              </Link>
            </div>
          </div>
        )}

        {/* VERSION DESKTOP */}
        <div className="hidden md:grid grid-cols-3 items-center gap-4">
          
          {/* LIENS DE NAVIGATION */}
          <div className="flex gap-6 lg:gap-8">
            <Link 
              href="/events" 
              className="text-[#001c55] font-medium text-lg lg:text-xl tracking-wide hover:text-[#c0d6df] hover:scale-105 transition-all duration-300 ease-out"
            >
              Events 
            </Link>
            <Link 
              href="/drops" 
              className="text-[#001c55] font-medium text-lg lg:text-xl tracking-wide hover:text-[#c0d6df] hover:scale-105 transition-all duration-300 ease-out"
            >
              Drops
            </Link>
            <Link 
              href="/story" 
              className="text-[#001c55] font-medium text-lg lg:text-xl tracking-wide hover:text-[#c0d6df] hover:scale-105 transition-all duration-300 ease-out"
            >
              Notre Histoire
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

          {/* FIND US */}
          <div className="flex justify-end">
            <Link 
              href="/findus" 
              className="text-[#001c55] font-medium text-lg lg:text-xl tracking-wide hover:text-[#c0d6df] hover:scale-105 transition-all duration-300 ease-out"
            >
              Find Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}