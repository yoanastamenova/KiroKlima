import Footer from "./components/footer/footer";
import Hero from "./components/hero/hero";
import Servicios from "./components/servicios/servicios";
import Contacto from "./components/contacto/contacto";
import Proceso from "./components/proceso/proceso";
import Preguntas from "./components/preguntas/preguntas";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Servicios />
      <Proceso />
      <Preguntas />
      <Contacto />
      <Footer />
    </div>
  );
}
