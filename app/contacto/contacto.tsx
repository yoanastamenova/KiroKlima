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
                <div>
                    <p>Teléfono</p>
                    <p>+34 620 411 385</p>
                </div>
                 <div>
                    <p>Email</p>
                    <p>hola@kiroklima.es</p>
                </div>
                 <div>
                    <p>Zona</p>
                    <p>Comunidad Valenciana</p>
                </div>
             </div>
             </div>
            </section>
        </>
    )
}