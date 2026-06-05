"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false); 

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-black">
          <Image src="/logo.png" height={80} width={80} alt="logo" />
          <span className="font-serif text-xl font-semibold tracking-tight text-brand-dark">
            Kiro <span className="text-brand-orange">Klima</span>
          </span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-9">
          <a href="#servicios" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Servicios</a>
          <Link href="/beneficios" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Beneficios</Link>
          <Link href="/proceso" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Proceso</Link>
          <Link href="/nosotros" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Nosotros</Link>
          <Link href="/contacto" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Contacto</Link>
          <Link href="/contacto" className="bg-brand-blue text-white hover:bg-brand-blue-light inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:cursor-pointer">
            Presupuesto gratis {'->'}
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6 text-brand-dark"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {isOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-6 py-4 space-y-4">
            <a href="#servicios" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Servicios</a>
            <Link href="#beneficios" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Beneficios</Link>
            <Link href="#proceso" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Proceso</Link>
            <Link href="#nosotros" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Nosotros</Link>
            <Link href="#contacto" onClick={() => setIsOpen(false)} className="block text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Contacto</Link>
            <Link href="#contacto" onClick={() => setIsOpen(false)} className="bg-brand-blue text-white hover:bg-brand-blue-light inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:cursor-pointer">
              Presupuesto gratis {'->'}
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
