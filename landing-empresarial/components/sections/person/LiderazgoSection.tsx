import Link from "next/link";

const liderazgoFeatures = [
  {
    icon: "center_focus_strong",
    title: "Claridad de Propósito",
    description:
      "Definí con precisión qué querés lograr y por qué. Sin ruido, sin distracciones.",
  },
  {
    icon: "psychology",
    title: "Mentalidad de Liderazgo",
    description:
      "Trabajamos los patrones mentales que te frenan y los reemplazamos con una arquitectura de pensamiento ganadora.",
  },
  {
    icon: "trending_up",
    title: "Sistemas de Alto Rendimiento",
    description:
      "Hábitos, rutinas y estructuras que sostienen el crecimiento a largo plazo sin quemarte.",
  },
];

export default function LiderazgoSection() {
  return (
    <section
      id="liderazgo"
      className="py-24 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-12">
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
                <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-[#3b8c5e] uppercase">
                  01 — Liderazgo Personal
                </span>
              </div>

              <h2
                className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Liderarte a vos <span className="text-[#C9A84C]">mismo</span> es
                el primer paso
              </h2>
            </div>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              Antes de liderar equipos, organizaciones o causas, hay que dominar
              el territorio más complejo: uno mismo. Este proceso está diseñado
              para quienes sienten que tienen más dentro de lo que están
              expresando.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
            {liderazgoFeatures.map(({ icon, title, description }) => (
              <div
                key={title}
                className="group relative overflow-hidden p-5 md:p-6 
                rounded-2xl 
                bg-[#1a1a1a] 
                border border-white/5
                shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
                transition-all duration-500 ease-out
                hover:-translate-y-2 hover:scale-[1.02]"
              >
                {/* Glow */}
                <div
                  className="absolute inset-0 pointer-events-none
                  bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.15),transparent_60%)]
                  opacity-0 group-hover:opacity-100
                  transition-opacity duration-500"
                />

                {/* Icon */}
                <span
                  className="material-symbols-outlined text-[#3b8c5e] mb-4 block 
                  transition-all duration-300 group-hover:scale-110 group-hover:text-[#C9A84C]"
                  style={{ fontSize: "24px" }}
                >
                  {icon}
                </span>

                {/* Title */}
                <h3
                  className="text-base font-bold mb-2 text-[#3b8c5e] 
                  transition-colors duration-300 group-hover:text-[#E0BD6A]"
                >
                  {title}
                </h3>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {description}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                ¿Listo para tomar las riendas?
              </h3>
              <p className="text-slate-400 text-sm">
                Comenzamos con una sesión de diagnóstico sin compromiso.
              </p>
            </div>

            <Link
              href="#contacto"
              className="bg-primary text-white px-8 md:px-12 py-4 md:py-5 text-sm font-bold uppercase rounded-lg"
            >
              Comenzar el proceso
              <span className="material-symbols-outlined">north_east</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
