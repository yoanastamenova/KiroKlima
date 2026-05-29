import Image from "next/image";
import "./servicios.css";

export default function Servicios() {
  return (
    <>
      <section id="servicios" className="py-24 md:py-32">
        <div className="max-w-screen-2xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-brand-orange uppercase font-semibold tracking-[0.2em]">
              servicios
            </span>
            <h2 className="text-black mt-3 font-serif text-4xl md:text-5xl font-semibold">
              Dos tecnologías,{" "}
              <span className="text-gradient"> un solo sistema </span> de
              bienestar.
            </h2>
            <p className="mt-5 text-lg text-gray-500">
              {" "}
              Combinamos suelo radiante y aerotermia para ofrecerte calefacción,
              refrigeración y agua caliente sanitaria con la máxima eficiencia.
            </p>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-8">
            <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-card">
              <div className="aspect-4/3 overflow-hidden">
                <Image
                  src="/suelo2.jpg"
                  alt="Instalación de suelo radiante"
                  loading="lazy"
                  width="1200"
                  height="900"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold flex items-center gap-3">
                  <span className="p-2.5 bg-linear-to-br from-brand-orange/20 to-brand-orange/5 rounded-xl shadow-sm">
                    <svg className="w-6 h-6 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M3 21h18" />
                      <path d="M3 17c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                      <path d="M3 13c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                      <path d="M3 9c2-2 4-2 6 0s4 2 6 0 4-2 6 0" />
                    </svg>
                  </span>
                  Suelo radiante
                </h3>
                <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                  Calor envolvente desde el suelo, distribuido de forma
                  uniforme. <span className="text-gray-800 font-medium">Invisible, silencioso</span> y compatible con cualquier
                  acabado: tarima, porcelánico o microcemento.
                </p>
                <div className="mt-4 pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/10">
                        <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Confort térmico uniforme
                    </li>
                    <li className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/10">
                        <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Compatible con refrescamiento en verano
                    </li>
                    <li className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/10">
                        <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Sin radiadores ni ruidos
                    </li>
                  </ul>
                </div>
              </div>
            </article>
            <article className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-card">
              <div className="aspect-4/3 overflow-hidden">
                <Image
                  src="/aerotermia.jpg"
                  alt="Instalación de aerotermia"
                  loading="lazy"
                  width="1200"
                  height="900"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                />
              </div>
              <div className="p-8 md:p-10">
                <h3 className="font-serif text-2xl md:text-3xl font-semibold flex items-center gap-3">
                  <span className="p-2.5 bg-linear-to-br from-brand-orange/20 to-brand-orange/5 rounded-xl shadow-sm">
                    <svg className="w-6 h-6 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.8 19.6A2 2 0 1 0 14 16H2" />
                      <path d="M17.5 8a2.5 2.5 0 1 1 2 4H2" />
                      <path d="M9.8 4.4A2 2 0 1 1 11 8H2" />
                    </svg>
                  </span>
                  Aerotermia
                </h3>
                <p className="mt-5 text-gray-600 leading-relaxed text-base md:text-lg">
                  Bombas de calor de última generación que extraen energía del aire. Calefacción, refrigeración y ACS con <span className="text-gray-800 font-medium">una sola máquina</span> y hasta un <span className="text-brand-orange font-semibold">75% de ahorro</span> frente al gas.
                </p>
                <div className="mt-4 pt-6">
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/10">
                        <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Energía renovable y limpia
                    </li>
                    <li className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/10">
                        <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      3 en 1: calor, frío y agua caliente
                    </li>
                    <li className="flex items-center gap-3 text-sm md:text-base text-gray-700">
                      <span className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-orange/10">
                        <svg className="w-3 h-3 text-brand-orange" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      Compatible con autoconsumo solar
                    </li>
                  </ul>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
