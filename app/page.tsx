import Hero from "./components/hero/hero";
import Servicios from "./components/servicios/servicios";
import Contacto from "./contacto/contacto";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Servicios />
      <Contacto />
    </div>
  );
}
