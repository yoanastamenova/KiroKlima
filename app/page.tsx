import Hero from "./components/hero/hero";
import Servicios from "./components/servicios/servicios";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <Servicios />
    </div>
  );
}
