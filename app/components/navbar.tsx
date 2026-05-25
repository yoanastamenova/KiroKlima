import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-amber-50 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 py-4"> 
            <Link href="/" className="text-black"> 
            <Image src="/logo.png" height={80} width={80} alt="logo"/>
            </Link>
        <div className="hidden md:flex space-x-9">
            <Link href="/servicios" className="text-black"> Servicios</Link>
            <Link href="/beneficios" className="text-black"> Beneficios </Link>
            <Link href="/proceso" className="text-black"> Proceso </Link>
            <Link href="/nosotros" className="text-black"> Nosotros </Link>
            <Link href="/contacto" className="text-black"> Contacto </Link>
            <button className="bg-brand-orange text-black hover:bg-brand-orange-light"> Presupuesto gratis {'->'}</button>
        </div>
        </div>
    </nav>
  )
}