import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Servicios from "./components/servicios/servicios";
import Contacto from "./components/contacto/contacto";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Servicios />
      <Contacto />
      <Footer />
    </div>
  );
}
