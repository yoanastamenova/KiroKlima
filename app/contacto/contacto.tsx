export default function Contacto() {
    return (
        <>
        <section id="contacto" className="py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange uppercase font-semibold tracking-[0.2em]">
              contacto
            </span>
            <h2 className="text-black mt-3 font-serif text-4xl md:text-5xl font-semibold">
              Pide tu presupuesto sin compromiso.
            </h2>
            <p className="mt-5 text-lg text-gray-500">
              {" "}
              Cuéntanos tu proyecto y te responderemos en menos de 24 horas con una propuesta clara.
            </p>
          </div>
             <div className="max-w-2xl mt-16 grid md:grid-rows-3 gap-8">
                <div className="flex items-center gap-4">
                    <span className="p-2.5 bg-linear-to-br from-brand-orange/20 to-brand-orange/5 rounded-full shadow-sm">
                        <svg className="w-6 h-6 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                        </svg>
                    </span>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">Teléfono</p>
                        <p className="font-bold text-black">+34 620 411 385</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <span className="p-2.5 bg-linear-to-br from-brand-orange/20 to-brand-orange/5 rounded-full shadow-sm">
                        <svg className="w-6 h-6 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <rect width="20" height="16" x="2" y="4" rx="2" />
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                        </svg>
                    </span>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">Email</p>
                        <p className="font-bold text-black">hola@kiroklima.es</p>
                    </div>
                </div>
                 <div className="flex items-center gap-4">
                    <span className="p-2.5 bg-linear-to-br from-brand-orange/20 to-brand-orange/5 rounded-full shadow-sm">
                        <svg className="w-6 h-6 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                            <circle cx="12" cy="10" r="3" />
                        </svg>
                    </span>
                    <div>
                        <p className="text-xs uppercase tracking-wider text-gray-500">Zona</p>
                        <p className="font-bold text-black">Comunidad Valenciana</p>
                    </div>
                </div>
             </div>
             </div>
            </section>
        </>
    )
}