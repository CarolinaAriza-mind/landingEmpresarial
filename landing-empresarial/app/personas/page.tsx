import { Footer, FourPillars, Navbar } from "@/components/sections";
import { AdictionsSection } from "@/components/sections/person/AdictionSection";
import ContactForm from "@/components/sections/person/ContactForm";
import HeroPersons from "@/components/sections/person/HeroPersons";
import LiderazgoSection from "@/components/sections/person/LiderazgoSection";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Crecimiento Individual | Pablo M. González",
  description:
    "Asesoría individual de alto nivel. Transforma tu potencial en resultados extraordinarios a través de una evolución diseñada para el líder que busca propósito y claridad estratégica.",
};

function ValueProp() {
  return (
    <section id="valor" className="py-16 md:py-24 px-5 md:px-6 bg-[#0d0d0d] ">
      <div className="max-w-7xl mx-auto space-y-8 md:space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
          {/* TEXTO */}
          <div className="space-y-4 md:space-y-6 max-w-xl">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-[#3b8c5e] uppercase">
                Valor
              </span>
            </div>

            <h2
              className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              La resiliencia no es resistir{" "}
              <span className="text-[#C9A84C]">es renacer con intención</span>
            </h2>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              Entiendo que el camino del liderazgo y el crecimiento personal a
              menudo está marcado por cicatrices que preferiríamos ocultar. Sin
              embargo, en mi experiencia acompañando a cientos de personas, he
              descubierto que esas mismas heridas son la fuente de nuestra mayor
              autoridad y propósito.
            </p>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              Mi enfoque combina la profundidad de la introspección con
              herramientas prácticas de gestión emocional para que dejes de ver
              tu pasado como una carga y comiences a utilizarlo como el
              combustible de tu nueva identidad.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {/* CARD 1 */}
            <div
              className="group relative overflow-hidden p-6 rounded-2xl 
    bg-[#1a1a1a] border border-white/5
    h-[220px] md:h-[240px]
    flex flex-col justify-end
    shadow-[0_4px_20px_rgba(0,0,0,0.4)]
    hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
    transition-all duration-500 ease-out
    hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 pointer-events-none
      bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.12),transparent_60%)]
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500"
              />

              <span
                className="material-symbols-outlined text-[#c5a059] text-3xl mb-4 
      transition-all duration-300 group-hover:scale-110"
              >
                psychology
              </span>

              <h3 className="text-base font-bold text-white mb-2">
                Mentalidad
              </h3>

              <p className="text-sm text-slate-400">
                Reconfiguración de paradigmas limitantes.
              </p>
            </div>

            {/* CARD 2 */}
            <div
              className="group relative overflow-hidden p-6 rounded-2xl 
    bg-[#1a1a1a] border border-white/5
    h-[220px] md:h-[240px]
    flex flex-col justify-end
    shadow-[0_4px_20px_rgba(0,0,0,0.4)]
    hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
    transition-all duration-500 ease-out
    hover:-translate-y-2 hover:scale-[1.02]"
            >
              <div
                className="absolute inset-0 pointer-events-none
      bg-[radial-gradient(circle_at_50%_100%,rgba(59,140,94,0.15),transparent_60%)]
      opacity-0 group-hover:opacity-100
      transition-opacity duration-500"
              />

              <span
                className="material-symbols-outlined text-[#3b8c5e] text-3xl mb-4 
      transition-all duration-300 group-hover:scale-110 group-hover:text-[#C9A84C]"
              >
                trending_up
              </span>

              <h3 className="text-base font-bold text-white mb-2">Impacto</h3>

              <p className="text-sm text-slate-400">
                Escalamiento de resultados tangibles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sección: Elegí tu camino ─────────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────
const PATHS = [
  {
    href: "#liderazgo",
    title: "Personas",
    eyebrow: "Liderazgo Personal",
    description:
      "Para quienes buscan sanar, crecer y liderar su propia vida con propósito y autenticidad.",
    cta: "Explorar Crecimiento",
  },
  {
    href: "#adicciones",
    title: "Proceso de Acompañamiento en Adicciones",
    eyebrow: "Acompañamiento",
    description:
      "Para quienes buscan una salida real y sostenible. Acompañamiento humano, clínico y sin juicios.",
    cta: "Ver Acompañamiento",
  },
];

function ChoosePath() {
  return (
    <section
      id="servicios"
      className="relative z-30 px-5 md:px-6 py-16 md:py-24 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* HEADER */}
        <div className="mb-10 md:mb-16 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#3b8c5e] uppercase">
              ¿Dónde está tu batalla?
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-end">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Elegí tu <span className="text-[#C9A84C]">camino</span>
            </h2>

            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              Cada proceso es único. Cada historia merece un acompañamiento a
              medida.
            </p>
          </div>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
          {PATHS.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              className="group relative overflow-hidden 
      bg-[#161616] p-6 md:p-10 
      rounded-xl md:rounded-2xl 
      border border-white/5 
      hover:bg-white/[0.03] 
      transition-all duration-500

      flex flex-col justify-between
      min-h-[280px] md:min-h-[340px]" // 👈 clave
            >
              {/* Glow */}
              <div
                className="absolute inset-0 pointer-events-none
        bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.15),transparent_60%)]
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500"
              />

              {/* ── TOP ── */}
              <div>
                <span className="text-xs text-white/20 mb-4 block">
                  0{index + 1}
                </span>

                <span className="text-[10px] md:text-xs text-[#C9A84C] uppercase mb-3 block tracking-[0.25em]">
                  {path.eyebrow}
                </span>

                <h2
                  className="text-2xl md:text-4xl font-semibold text-white mb-4 leading-tight
          group-hover:text-[#E0BD6A] transition"
                  style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
                >
                  {path.title}
                </h2>

                <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-md">
                  {path.description}
                </p>
              </div>

              {/* ── BOTTOM ── */}
              <div className="flex items-center gap-2 text-[#3b8c5e] text-xs uppercase font-bold tracking-widest mt-8 group-hover:text-[#C9A84C] transition">
                {path.cta}
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>

              {/* Línea */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-[#C9A84C] group-hover:w-full transition-all duration-500" />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ─── Sección: Liderazgo Personal ─────────────────────────────────────────────
// ─────────────────────────────────────────────────────────────────────────────

export default function PersonasPage() {
  return (
    <main className="bg-[#0d0d0d] text-slate-100 selection:bg-[#3b8c5e]/30">
      <Navbar
        accent="green"
        links={[
          { label: "Inicio", href: "#top" },
          { label: "Valor", href: "#valor" },
          { label: "Pilares", href: "#pilares" },
          { label: "Elegí tu camino", href: "#servicios" },
          { label: "Liderazgo", href: "#liderazgo" },
          { label: "Acompañamiento", href: "#adicciones" },
        ]}
        ctaLabel="Contacto"
        ctaHref="#contacto"
      />
      <HeroPersons />
      <ValueProp />
      <FourPillars />
      <ChoosePath />
      <LiderazgoSection />
      <AdictionsSection />
      <ContactForm />
      <Footer />
    </main>
  );
}
