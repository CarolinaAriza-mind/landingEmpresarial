"use client";

import Image from "next/image";

const methodItems = [
  {
    title: "Mentalidad Competitiva",
    description:
      "Entrenamiento psicológico para sostener rendimiento bajo presión y atravesar momentos críticos como lesiones, transferencias o retiro.",
  },
  {
    title: "Cohesión de Equipo",
    description:
      "Optimización de dinámicas grupales y gestión de egos en equipos de alta competencia para mejorar el rendimiento colectivo.",
  },
  {
    title: "Estrategia Post-Carrera",
    description:
      "Planificación financiera y toma de decisiones para preservar el patrimonio y proyectar una nueva etapa con claridad.",
  },
];

export default function Methodology() {
  return (
    <section
      id="metodologia"
      className="py-24 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="mx-auto max-w-7xl px-6 flex flex-col lg:flex-row items-center gap-16">
        {/* IMAGE */}
        <div className="lg:w-1/2">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-[#3a8d61]/20 rounded-full blur-2xl" />
            <Image
              src="/Basquet.png"
              alt="Sesión de entrenamiento profesional de alto rendimiento"
              width={600}
              height={450}
              className="rounded-2xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-500 w-full"
            />
          </div>
        </div>

        {/* TEXT */}
        <div className="lg:w-1/2 space-y-10">
          {/* EYEBROW */}
          <div className="flex items-center gap-4">
            <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-[#3b8c5e] uppercase">
              Metodologia - Alto Rendimiento Deportivo
            </span>
          </div>

          {/* TITLE */}
          <h2
            className="text-2xl md:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            Gestión integral del <span className="text-[#C9A84C]">atleta</span>{" "}
            y su entorno
          </h2>

          {/* DESCRIPTION */}
          <p className="text-slate-300 leading-relaxed font-light">
            El rendimiento no depende solo del talento. Se construye desde la
            mentalidad, el entorno y las decisiones fuera del campo. Este
            proceso está diseñado para deportistas y equipos que buscan sostener
            resultados en contextos de máxima exigencia.
          </p>

          {/* LIST */}
          <ul className="space-y-6">
            {methodItems.map(({ title, description }) => (
              <li key={title} className="flex gap-4">
                <span
                  className="material-symbols-outlined text-[#3b8c5e] shrink-0"
                  aria-hidden="true"
                >
                  check_circle
                </span>

                <div>
                  <h3 className="font-bold text-white mb-1">{title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
