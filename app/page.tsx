import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero-image" className="relative min-h-[90vh] overflow-hidden flex items-center">
        <Image
          src="/suelo.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1080}
          alt="imagen_suelo_radiante"
        />
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue-dark via-brand-blue-dark/85 via-50% to-brand-blue-dark/60"></div>
        <section
          id="hero-text"
          className="relative z-10 max-w-7xl mx-auto px-6 py-16 text-primary-foreground w-full"
        >
          <div className="max-w-3xl">
            <h1 className="mt-6 font-serif text-5xl md:text-7xl font-semibold leading-[1.05] text-white">
              El confort perfecto para tu hogar,
            </h1>
            <span className="block italic font-serif text-5xl md:text-7xl font-semibold text-brand-orange">
              en cualquier estación.
            </span>
            <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed text-amber-50">
              Instalamos sistemas de <strong>suelo radiante</strong> y{" "}
              <strong>aerotermia</strong> a medida. Climatización eficiente,
              silenciosa y sostenible para tu vivienda en toda Comunidad
              Valenciana.{" "}
            </p>
          </div>
          <div id="buttons" className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-brand-orange text-white hover:bg-brand-orange-light
             rounded-full px-7 py-3.5 text-base font-semibold transition hover:cursor-pointer"
            >
              Solicitar presupuesto &rarr;
            </Link>
            <Link
              href="/servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 px-7 py-3.5 text-base font-semibold hover:bg-white/10 transition text-white"
            >
              Ver servicios
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl">
            <div>
              <h4 className="text-brand-orange font-serif text-5xl md:text-6xl font-semibold">+12</h4>
              <p className="text-white/70 text-xs uppercase tracking-wider mt-2">años de experiencia</p>
            </div>
            <div>
              <h4 className="text-brand-orange font-serif text-5xl md:text-6xl font-semibold">850</h4>
              <p className="text-white/70 text-xs uppercase tracking-wider mt-2">instalaciones</p>
            </div>
            <div>
              <h4 className="text-brand-orange font-serif text-5xl md:text-6xl font-semibold">75%</h4>
              <p className="text-white/70 text-xs uppercase tracking-wider mt-2">ahorro energético</p>
            </div>
          </div>
        </section>
      </section>
      <section className="bg-white">
        <h1>hola</h1>
      </section>
    </div>
  );
}
