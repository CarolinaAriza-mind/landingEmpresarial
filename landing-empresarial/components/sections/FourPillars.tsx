"use client";

import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Mentoring Individual y de Alto Impacto",
    description:
      "Acompañamiento personalizado diseñado para desbloquear el potencial latente a través de sesiones estratégicas",
    image: "/ICONO.png",
    alt: "Mentoring Individual",
  },
  {
    number: "02",
    title: "Gestion Emocional y Mindfullnes",
    description:
      "Herramientas avanzadas para el dominio del estado interno y la presencia absoluta en entornos de alta presión",
    image: "/LOGOTIPO1.png",
    alt: "Gestion Emocional y Mindfullnes",
  },
  {
    number: "03",
    title: "Proposito y Valor",
    description:
      "Alineación estratégica de tu identidad personal con tus objetivos profesionales a largo plazo",
    image: "/ICONO.png",
    alt: "Proposito y Valor",
  },
  {
    number: "04",
    title: "Introspección aplicada al Liderazgo",
    description:
      "Identificación de patrones inconscientes que limitan el crecimiento profesional y personal",
    image: "/LOGOTIPO1.png",
    alt: "Introspección aplicada al Liderazgo",
  },
];

const bridgeQuote =
  "El camino hacia tu mejor versión ya existe. Solo necesita ser recorrido con el guía correcto.";

export function FourPillars() {
  return (
    <section id="pilares" className="py-16 md:py-10 bg-background-dark">
      <div className="w-full px-4 md:px-10">
        <div className="bg-white/3 backdrop-blur-md rounded-2xl md:rounded-3xl p-5 md:p-10">
          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-10 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="w-6 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] tracking-[0.2em] text-[#3b8c5e] uppercase">
                Pilares
              </span>
              <span className="w-6 h-px bg-[#3b8c5e] opacity-60" />
            </div>

            <h2
              className="text-xl md:text-4xl font-black text-white uppercase leading-tight mb-4"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Poder en <br />
              <span className="text-[#C9A84C]">Acción </span>
            </h2>

            <p className="text-sm text-slate-400 font-light">
              Mentoring y Autodesarrollo
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {pillars.map((pillar) => (
              <div
                key={pillar.number}
                className="group relative overflow-hidden rounded-xl md:rounded-2xl"
              >
                {/* IMAGEN */}
                <div className="relative w-full h-[220px] md:h-full md:aspect-[3/4]">
                  <Image
                    src={pillar.image}
                    alt={pillar.alt}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* OVERLAY FUERTE (clave mobile) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:from-background-dark md:via-background-dark/50" />

                {/* CONTENIDO */}
                <div className="absolute bottom-0 left-0 p-4 md:p-6 z-20">
                  {/* NUMERO */}
                  <span
                    className="text-3xl md:text-5xl font-light mb-2 block text-[#C9A84C]"
                    style={{
                      fontFamily: "'Libre Baskerville', Georgia, serif",
                    }}
                  >
                    {pillar.number}
                  </span>

                  {/* TITULO */}
                  <h3
                    className="text-lg md:text-xl font-bold text-white mb-2 leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]"
                    style={{
                      fontFamily: "'Libre Baskerville', Georgia, serif",
                    }}
                  >
                    {pillar.title}
                  </h3>

                  {/* LINEA */}
                  <div className="w-8 h-px bg-[#C9A84C] mb-2" />

                  {/* DESCRIPCION */}
                  <p className="text-sm text-white/80 leading-relaxed font-light md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
                    {pillar.description}
                  </p>
                </div>

                {/* EFECTOS SOLO DESKTOP */}
                <div
                  className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                  bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.35)_0%,transparent_70%)]"
                />

                <div
                  className="hidden md:block absolute bottom-0 left-0 right-0 h-px
                  bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                  scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
                />
              </div>
            ))}
          </div>

          {/* FRASE FINAL */}
          <div className="mt-12 md:mt-24 text-center max-w-2xl mx-auto px-4">
            <p
              className="text-base md:text-2xl text-slate-300 font-light italic leading-relaxed"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              {bridgeQuote}
            </p>

            <div className="w-10 h-px bg-[#C9A84C] mx-auto mt-6 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
