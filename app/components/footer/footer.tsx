import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10">
      <div className="max-w-screen-2xl mx-auto px-6 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image src="/logo.png" height={30} width={30} alt="logo" />
        <p className="text-sm text-gray-500">
          © 2026 Kiro Klima · Climatización eficiente
        </p>
        </div>
        <div className="flex items-center gap-3">
            <a href="#" className="text-sm text-gray-500 hover:text-brand-orange transition">
            Aviso Legal
           </a>
           <a href="#" className="text-sm text-gray-500 hover:text-brand-orange transition">
            Privacidad
           </a>
           <a href="#contacto" className="text-sm text-gray-500 hover:text-brand-orange transition">
            Contacto
           </a>
           </div>
           </div>
    </footer>
  );
}
