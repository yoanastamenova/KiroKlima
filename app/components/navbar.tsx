import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between"> 
            <Link href="/" className="flex items-center gap-3 text-black"> 
                 <Image src="/logo.png" height={80} width={80} alt="logo"/>
                 <span className="font-serif text-xl font-semibold tracking-tight text-brand-dark">Kiro <span className="text-brand-orange">Klima</span></span>
            </Link>
        <div className="hidden md:flex items-center space-x-9">
            <Link href="/servicios" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Servicios</Link>
            <Link href="/beneficios" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Beneficios</Link>
            <Link href="/proceso" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Proceso</Link>
            <Link href="/nosotros" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Nosotros</Link>
            <Link href="/contacto" className="text-sm font-bold text-brand-dark/70 hover:text-brand-blue transition">Contacto</Link>
            <button className="bg-brand-blue text-white hover:bg-brand-blue-light
            inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition hover:cursor-pointer"> Presupuesto gratis {'->'}</button>
        </div>
        </div>
    </nav>
  )
}