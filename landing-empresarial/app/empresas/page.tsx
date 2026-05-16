import { Footer, Navbar } from "@/components/sections";
import ContactFormEmpresa from "@/components/sections/empresa/ContactFormEmpresa";
import { GastronomiaSection } from "@/components/sections/empresa/Gastronomia";
import { HeroEmpresa } from "@/components/sections/empresa/HeroEmpresa";
import { HeroGastronomia } from "@/components/sections/empresa/HeroGastronomia";
import { StrategicServicesSection } from "@/components/sections/empresa/StrategicServices";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Consultoría Corporativa",
  description:
    "Transformamos organizaciones a través de la integridad y el propósito. Diseñamos culturas corporativas de alto rendimiento basadas en la confianza y la sostenibilidad humana.",
};

// ─── Types ────────────────────────────────────────────────────────────────────

type Pillar = {
  icon: string;
  title: string;
  description: string;
  items: string[];
  image: string;
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars: Pillar[] = [
  {
    icon: "verified_user",
    title: "Integridad como Estrategia",
    description:
      "Desarrollamos marcos de decisión ética que protegen la reputación y alinean los valores personales con los objetivos de negocio.",
    items: ["Códigos de conducta aplicados", "Gobernanza ética"],
    image: "/LOGOTIPO1.png",
  },
  {
    icon: "psychology",
    title: "Cultura de Confianza",
    description:
      "Fomentamos entornos de seguridad psicológica donde la innovación surge de la libertad y el respeto mutuo.",
    items: ["Comunicación asertiva", "Seguridad psicológica"],
    image: "/1.png",
  },
  {
    icon: "groups",
    title: "Liderazgo Consciente",
    description:
      "Formamos directivos capaces de inspirar, delegar con propósito y gestionar equipos híbridos y globales.",
    items: ["Soft skills ejecutivas", "Gestión del cambio"],
    image: "/2.png",
  },
];

// ─────────────────────────────────────────────────────────────────────────────

export function PillarCard({ icon, title, description, items }: Pillar) {
  return (
    <div className="group p-8 bg-[#161616] border border-slate-800 rounded-xl hover:border-[#3a8d61]/50 transition-all duration-300">
      <div className="w-14 h-14 rounded-lg bg-[#3a8d61]/10 flex items-center justify-center mb-6 group-hover:bg-[#3a8d61] transition-colors">
        <span
          className="material-symbols-outlined text-[#3a8d61] group-hover:text-white text-3xl"
          aria-hidden="true"
        >
          {icon}
        </span>
      </div>
      <h3 className="text-xl font-bold text-slate-100 mb-4">{title}</h3>
      <p className="text-slate-400 leading-relaxed mb-6">{description}</p>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-center gap-2 text-sm text-slate-300"
          >
            <span
              className="material-symbols-outlined text-[#3a8d61] text-base"
              aria-hidden="true"
            >
              check_circle
            </span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
function CorePillars() {
  return (
    <section id="metodologia" className="py-20 bg-[#0d0d0d]">
      <div className="max-w-7xl mx-auto px-6">
        {/* HEADER */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-5">
            <span className="w-6 h-px bg-[#3a8d61] opacity-60" />
            <span className="text-[10px] tracking-[0.25em] text-[#3a8d61] uppercase">
              Metodología
            </span>
            <span className="w-6 h-px bg-[#3a8d61] opacity-60" />
          </div>

          <h2
            className="text-2xl md:text-5xl font-black text-white uppercase leading-tight"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            Arquitectura <br />
            <span className="text-[#C9A84C]">Organizacional</span>
          </h2>

          <p className="text-sm text-slate-400 mt-4 font-light">
            Diseño estructural para rendimiento sostenible
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {pillars.map((pillar, i) => (
            <div
              key={pillar.title}
              className="group relative overflow-hidden rounded-xl md:rounded-2xl"
            >
              {/* IMAGEN */}
              <div className="relative w-full h-[260px] md:h-[340px]">
                <img
                  src={pillar.image}
                  alt={pillar.title}
                  className="w-full h-full object-cover transition duration-700 group-hover:scale-105"
                />
              </div>

              {/* OVERLAY PRO */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent md:from-black md:via-black/60" />

              {/* CONTENIDO */}
              <div className="absolute bottom-0 left-0 p-5 md:p-6 z-20">
                {/* NUMERO */}
                <span
                  className="text-3xl md:text-5xl font-light text-[#C9A84C] mb-2 block"
                  style={{
                    fontFamily: "'Libre Baskerville', Georgia, serif",
                  }}
                >
                  0{i + 1}
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

              {/* EFECTO GLOW */}
              <div
                className="hidden md:block absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700
                bg-[radial-gradient(ellipse_at_bottom,rgba(201,168,76,0.25)_0%,transparent_70%)]"
              />

              {/* LINEA HOVER */}
              <div
                className="hidden md:block absolute bottom-0 left-0 right-0 h-px
                bg-gradient-to-r from-transparent via-[#C9A84C] to-transparent
                scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              />
            </div>
          ))}
        </div>

        {/* FRASE FINAL */}
        <div className="mt-16 md:mt-24 text-center max-w-2xl mx-auto">
          <p
            className="text-lg md:text-2xl text-slate-300 italic font-light leading-relaxed"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            La estructura define el resultado. El liderazgo define el impacto.
          </p>

          <div className="w-10 h-px bg-[#C9A84C] mx-auto mt-6 opacity-60" />
        </div>
      </div>
    </section>
  );
}

export default function EmpresasPage() {
  return (
    <>
      <Navbar
        accent="green"
        links={[
          { label: "Inicio", href: "#top" },
          { label: "Servicios", href: "#servicios" },
          { label: "Metodologia", href: "#metodologia" },
          { label: "Gastronomia", href: "#gastronomia" },
        ]}
        ctaLabel="Agendar Diagnóstico"
        ctaHref="#contacto"
      />
      <main>
        <HeroEmpresa />
        <StrategicServicesSection />
        <CorePillars />
        <HeroGastronomia />
        <GastronomiaSection />
        <ContactFormEmpresa />
      </main>
      <Footer />
    </>
  );
}
