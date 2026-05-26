import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section id="hero-image" className="relative h-screen">
        <Image src="/suelo.jpg" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} alt="imagen_suelo_radiante"/>
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue-dark via-brand-blue-dark/70 to-brand-blue-dark/50"></div>
      <section id="hero-text" className="relative z-10 max-w-7xl mx-auto px-6 py-28 md:py-40 text-primary-foreground">
      <div className="max-w-3xl">
        <h1 className="mt-6 font-serif text-5xl md:text-7xl font-semibold leading-[1.05] text-white">El confort perfecto para tu hogar,</h1>
        <span className="block italic font-serif text-5xl md:text-7xl font-semibold text-brand-orange">en cualquier estación.</span>
        <p className="mt-6 text-lg md:text-xl text-primary-foreground/85 max-w-2xl leading-relaxed text-amber-50">
          Instalamos sistemas de <strong>suelo radiante</strong> y <strong>aerotermia</strong> a medida. Climatización eficiente, silenciosa y sostenible para tu vivienda en toda Comunidad Valenciana. </p>
      </div>
      </section>
      </section>
      <section className="bg-white">
        <h1>hola</h1>
      </section>
    </div>
  );
}
