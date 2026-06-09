"use client";

import { useState } from "react";
import Image from "next/image";

const faqs = [
  {
    question: "¿Cuánto cuesta instalar suelo radiante y aerotermia?",
    answer:
      "El precio depende del tamaño de la vivienda, el tipo de suelo y las necesidades de cada proyecto. En general, la inversión se amortiza en 5–7 años gracias al ahorro energético. Solicita tu estudio gratuito y te damos un presupuesto ajustado sin compromiso.",
  },
  {
    question: "¿Se puede instalar suelo radiante en una vivienda ya habitada?",
    answer:
      "Sí, aunque es más sencillo en obra nueva o reformas integrales. En viviendas habitadas valoramos cada caso: existen soluciones de suelo radiante de bajo espesor que minimizan las obras. Te asesoramos sin compromiso.",
  },
  {
    question: "¿La aerotermia funciona cuando hace mucho frío?",
    answer:
      "Absolutamente. Las bombas de calor que instalamos están preparadas para trabajar eficientemente incluso a temperaturas de -15 °C. Extraen energía del aire exterior y la multiplican para calentar tu hogar con un consumo mínimo.",
  },
  {
    question: "¿Necesito mantenimiento anual?",
    answer:
      "Recomendamos una revisión anual para garantizar el máximo rendimiento y prolongar la vida útil del equipo. Ofrecemos planes de mantenimiento con revisiones programadas, soporte técnico propio y descuentos en futuras ampliaciones.",
  },
  {
    question: "¿Puedo combinar aerotermia con placas solares?",
    answer:
      "Sí, y es una combinación excelente. La aerotermia consume muy poca electricidad, por lo que con unos pocos paneles solares puedes cubrir gran parte —o la totalidad— de su consumo. Asesoramos también proyectos de autoconsumo solar integrados.",
  },
];

export default function Preguntas() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 md:py-32 bg-brand-blue-dark/90">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <span className="text-brand-orange uppercase font-semibold tracking-[0.2em]">
              preguntas frecuentes
            </span>
            <h2 className="text-white mt-3 font-serif text-4xl md:text-5xl font-semibold">
              Resolvemos tus dudas.
            </h2>
            <div className="mt-12">
              {faqs.map((faq, index) => {
                const isOpen = openIndex === index;
                return (
                  <div key={index} className="border-b border-white/10">
                    <button
                      onClick={() => toggle(index)}
                      className="w-full flex items-center justify-between gap-4 py-6 text-left text-white group"
                    >
                      <div className="flex items-start gap-4">
                        <span className="mt-0.5 text-sm font-bold text-white font-mono">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <span className="font-serif text-xl md:text-2xl font-semibold leading-snug transition-colors text-white">
                          {faq.question}
                        </span>
                      </div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className={`w-5 h-5 shrink-0 text-white transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        aria-hidden="true"
                      >
                        <path d="m6 9 6 6 6-6"></path>
                      </svg>
                    </button>
                    <div
                      className={`overflow-hidden transition-all duration-300 ease-out ${
                        isOpen ? "max-h-96 opacity-100 pb-8" : "max-h-0 opacity-0"
                      }`}
                    >
                      <p className="pl-10 text-gray-300 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hidden lg:flex justify-center items-start">
            <div className="relative aspect-4/5 w-80 rounded-3xl overflow-hidden">
              <Image
                src="/preguntas.png"
                alt="Instalación de suelo radiante y aerotermia"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
