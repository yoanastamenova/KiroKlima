import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <section className="relative h-screen">
        <Image src="/suelo.jpg" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} alt="imagen_suelo_radiante"/>
        <div className="absolute inset-0 bg-linear-to-r from-brand-blue-dark via-brand-blue-dark/70 to-brand-blue-dark/50"></div>
      </section>

      <section className="bg-white">
        <h1>hola</h1>
      </section>
    </div>
  );
}
