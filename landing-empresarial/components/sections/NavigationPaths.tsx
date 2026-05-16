import Link from "next/link";

const PATHS = [
  {
    href: "/personas",
    title: "Personas",
    eyebrow: "Mentoring Individual",
    description:
      "Para quienes buscan claridad, motivación, propósito y autodesarrollo. Un viaje hacia el interior para proyectar autoridad hacia el exterior",
    cta: "Explorar Crecimiento",
  },
  {
    href: "/empresas",
    title: "Empresas",
    eyebrow: "Consultoría Organizacional",
    description:
      "Optimización de procesos para organizaciones que buscan trascender. Ingeniería organizacional enfocada en la eficiencia operativa",
    cta: "Servicios Corporativos",
  },
  {
    href: "/deportistas",
    title: "Deportistas",
    eyebrow: "Alto Rendimiento",
    description:
      "Gestión de activos y maximización del potencial atlético. Ciencia aplicada al éxito deportivo bajo presión",
    cta: "Ver Mentoría",
  },
];

const subtitle =
  "Sistemas integrales diseñados para la excelencia operativa y mental";

export function NavigationPaths() {
  return (
    <section
      id="servicios"
      className="scroll-mt-24 relative z-30 px-5 md:px-6 py-16 md:py-24 bg-white/[0.02] border-t border-white/5"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10 md:mb-16 space-y-4 md:space-y-6">
          <div className="flex items-center gap-4">
            <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
            <span className="text-[10px] md:text-xs tracking-[0.2em] text-[#3b8c5e] uppercase">
              Servicios
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-end">
            <h2 className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tight">
              Áreas de <span className="text-[#C9A84C]">Accion</span>
            </h2>

            <p className="text-sm md:text-base text-slate-400 leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 md:gap-6">
          {PATHS.map((path, index) => (
            <Link
              key={path.href}
              href={path.href}
              className="group bg-background-dark p-5 md:p-10 rounded-xl md:rounded-2xl border border-white/5 hover:bg-white/[0.03] transition"
            >
              <span className="text-xs text-white/20 mb-4 block">
                0{index + 1}
              </span>

              <span className="text-[10px] md:text-xs text-[#C9A84C] uppercase mb-2 block">
                {path.eyebrow}
              </span>

              <h2 className="text-xl md:text-3xl font-black text-white mb-3 group-hover:text-[#E0BD6A] transition">
                {path.title}
              </h2>

              <p className="text-slate-400 text-sm mb-6">{path.description}</p>

              <div className="text-[#3b8c5e] text-xs uppercase font-bold group-hover:text-[#C9A84C] transition">
                {path.cta} →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
