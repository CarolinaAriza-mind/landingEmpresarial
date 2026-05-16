"use client";

import Image from "next/image";

const pillars = [
  {
    number: "01",
    title: "Rendimiento bajo presión",
    description:
      "Entrenamiento mental para competir en momentos decisivos sin perder claridad, foco ni control emocional.",
    image: "/Futbol.png",
    alt: "Atleta compitiendo bajo presión",
  },
  {
    number: "02",
    title: "Gestión emocional",
    description:
      "Dominio del estado interno en contextos de alta exigencia: errores, frustración, competencia y exposición.",
    image: "/ICONO.png",
    alt: "Gestión emocional en deporte",
  },
  {
    number: "03",
    title: "Mentalidad de élite",
    description:
      "Construcción de patrones mentales que sostienen disciplina, consistencia y mentalidad ganadora.",
    image: "/Tenis.png",
    alt: "Mentalidad deportiva",
  },
  {
    number: "04",
    title: "Transición y carrera",
    description:
      "Acompañamiento estratégico en decisiones clave: cambios de equipo, lesiones o retiro profesional.",
    image: "/ICONO.png",
    alt: "Carrera deportiva",
  },
];

export default function CorePillarsDeport() {
  return (
    <section id="programas" className="py-20 bg-[#0d0d0d]">
      <div className="w-full px-4 md:px-10">
        <div className="bg-white/5 backdrop-blur-md rounded-2xl md:rounded-3xl p-6 md:p-10">
          {/* HEADER */}
          <div className="max-w-3xl mx-auto text-center mb-12 md:mb-20">
            <div className="flex items-center justify-center gap-4 mb-5">
              <span className="w-6 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] tracking-[0.2em] text-[#3b8c5e] uppercase">
                Programas
              </span>
              <span className="w-6 h-px bg-[#3b8c5e] opacity-60" />
            </div>

            <h2
              className="text-xl md:text-4xl font-black text-white uppercase leading-tight mb-4"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Alto rendimiento en <span className="text-[#C9A84C]">acción</span>
            </h2>

            <p className="text-sm text-slate-400 font-light">
              Preparación integral para competir al más alto nivel
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

                {/* OVERLAY */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:from-[#0d0d0d] md:via-[#0d0d0d]/60" />

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
                    className="text-lg md:text-xl font-bold text-white mb-2 leading-tight"
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

                {/* EFECTOS DESKTOP */}
                <div className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.35)_0%,transparent_70%)]" />

                <div className="hidden md:block absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />
              </div>
            ))}
          </div>

          {/* FRASE FINAL */}
          <div className="mt-12 md:mt-24 text-center max-w-2xl mx-auto px-4">
            <p
              className="text-base md:text-2xl text-slate-300 font-light italic leading-relaxed"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              El rendimiento no es casualidad. Es el resultado de una mentalidad
              entrenada, decisiones precisas y consistencia bajo presión.
            </p>

            <div className="w-10 h-px bg-[#C9A84C] mx-auto mt-6 opacity-60" />
          </div>
        </div>
      </div>
    </section>
  );
}
