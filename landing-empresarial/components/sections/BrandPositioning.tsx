import Image from "next/image";

const features = [
  {
    icon: "corporate_fare",
    title: "Consultoría Estratégica",
    description:
      "Diseñamos y reestructuramos sistemas de gestión para operar con claridad, foco y eficiencia en entornos de alta exigencia.",
  },
  {
    icon: "psychology",
    title: "Crecimiento Personal",
    description:
      "Trabajamos sobre la mentalidad, la toma de decisiones y la gestión emocional para sostener resultados en contextos de presión.",
  },
  {
    icon: "gavel",
    title: "Ética y Liderazgo",
    description:
      "Fortalecemos liderazgos basados en integridad, criterio y responsabilidad en la toma de decisiones estratégicas.",
  },
  {
    icon: "auto_graph",
    title: "Resiliencia Operativa",
    description:
      "Desarrollamos estructuras y hábitos que permiten sostener el rendimiento incluso en escenarios de máxima exigencia.",
  },
];

const pillars = [
  {
    icon: "account_tree",
    title: "Arquitectura de Procesos",
    description:
      "Diseñamos y reestructuramos flujos de trabajo que eliminan cuellos de botella y aseguran la escalabilidad del negocio.",
  },
  {
    icon: "language",
    title: "Gestión Operativa Internacional",
    description:
      "Aportamos una experiencia sólida en la articulación de equipos multidisciplinarios y la coordinación de operaciones en mercados complejos.",
  },
  {
    icon: "emoji_events",
    title: "Liderazgo y Motivación",
    description:
      "Aplicamos principios de alto rendimiento para alinear a los equipos con los objetivos estratégicos de la dirección.",
  },
];

const pabloAreas = [
  {
    title: "Liderazgo con Propósito",
    description:
      "Utilizo la inteligencia interpersonal como una herramienta estratégica para gestionar equipos de alto rendimiento y desarrollar culturas organizacionales resilientes.",
  },
  {
    title: "Consultoría Estratégica Externa",
    description:
      "Colaboro con empresas de servicios y real estate —como mi actual trabajo con Buena Vida State— en la reingeniería de sus procesos, monitoreo de gestión y optimización estructural.",
  },
  {
    title: "Desarrollo de Negocios",
    description:
      "Como socio capitalista en proyectos de alto impacto como Excelsum, aporto visión estratégica y respaldo para el crecimiento de marcas que buscan un estándar de excelencia superior.",
  },
  {
    title: "Disciplina y Alto Rendimiento",
    description:
      "Mi vida está marcada por el deporte de alta competencia. Traslado diariamente la resiliencia, el enfoque y la disciplina del básquetbol al mundo de los negocios.",
  },
];

const carolinaPillars = [
  {
    title: "Articulación de Alto Nivel",
    description:
      "Especialista en el soporte estratégico para entornos C-Level y la coordinación de equipos multidisciplinarios.",
  },
  {
    title: "Visión Global y Bilingüe",
    description:
      "Dominio absoluto de la dinámica corporativa internacional y negociación multicultural.",
  },
  {
    title: "Precisión Operativa",
    description:
      "Expertiz en optimizar procesos, gestionar stakeholders internacionales y garantizar que cada detalle organizacional esté alineado con los objetivos de máxima jerarquía.",
  },
];

const p3 =
  "En un mundo saturado de teorías, nosotros elegimos la ejecución disciplinada. No trabajamos para cualquiera: colaboramos con líderes, organizaciones y atletas que tienen la valentía de cuestionar su status quo y el compromiso real de sostener el cambio en el tiempo. Si busca soluciones rápidas o superficiales, no somos para usted. Si busca una transformación estructural, está en el lugar correcto.";

const p4 =
  "Nuestra metodología parte de un principio claro: el alto rendimiento no es un accidente, es el resultado de sistemas diseñados con precisión y ejecutados con disciplina. Donde otros ven problemas aislados, nosotros identificamos fallas en el proceso, intervenimos en la estructura y optimizamos cada decisión hasta convertirla en resultado sostenible.";
export function BrandPositioning() {
  return (
    <section
      id="quienesSomos"
      className="relative py-16 md:py-24 px-5 md:px-6 bg-background-dark"
    >
      {/* ── FONDO ── */}
      <div className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 
          bg-[linear-gradient(to_bottom,rgba(0,0,0,0.95)_0%,rgba(0,0,0,0.6)_30%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.95)_100%)]"
        />
      </div>

      <div className="max-w-7xl mx-auto space-y-16 md:space-y-32">
        {/* ── BLOQUE 1: QUIÉNES SOMOS ── */}
        <div className="space-y-8 md:space-y-12">
          <div className="flex items-center gap-4">
            <span className="w-6 md:w-8 h-px bg-primary opacity-60" />
            <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-primary uppercase">
              ¿Quiénes somos?
            </span>
          </div>
          <h2
            className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none max-w-3xl"
            style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
          >
            Somos una consultora estratégica enfocada en{" "}
            <span className="text-[#C9A84C]">
              maximizar la eficiencia organizacional
            </span>
          </h2>
          <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light max-w-3xl">
            Combinamos una visión técnica avanzada en administración con una
            capacidad operativa probada en entornos corporativos de alta
            exigencia global. Nuestra propuesta se basa en tres pilares
            fundamentales:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group relative overflow-hidden p-5 md:p-6 
                   rounded-2xl 
                    bg-[#1a1a1a] 
                    border border-white/5
                    shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:scale-[1.02]"
              >
                <div
                  className="absolute inset-0 pointer-events-none
                    bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.15),transparent_60%)]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500"
                />
                <span
                  className="material-symbols-outlined text-[#3b8c5e] mb-3 md:mb-4 block 
                    transition-all duration-300 group-hover:scale-110 group-hover:text-[#C9A84C]"
                  style={{ fontSize: "24px" }}
                >
                  {p.icon}
                </span>
                <h3
                  className="text-sm md:text-base font-bold mb-2 text-[#3b8c5e] 
                    transition-colors duration-300 group-hover:text-[#E0BD6A]"
                >
                  {p.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                  {p.description}
                </p>
              </div>
            ))}
          </div>

          <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light max-w-3xl">
            Nos define la precisión en la ejecución y el compromiso con los
            resultados. No solo diseñamos la estrategia; nos aseguramos de que
            la organización tenga la estructura y la motivación necesarias para
            ejecutarla con excelencia.
          </p>
        </div>

        {/* ── BLOQUE 2: PABLO ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Imagen */}
          <div className="relative group order-2 lg:order-1 self-stretch">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-transparent opacity-20 group-hover:opacity-40 group-active:opacity-40 transition-opacity rounded-xl" />
            <div className="absolute inset-0 z-10 rounded-xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 z-10 opacity-0 
    group-hover:opacity-100 transition-opacity duration-700
    bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.18)_0%,transparent_70%)]"
              />
              <div
                className="absolute inset-0 z-10 pointer-events-none
    bg-[linear-gradient(105deg,transparent_40%,rgba(212,175,55,0.15)_50%,transparent_60%)]
    translate-x-[-120%] group-hover:translate-x-[120%]
    transition-transform duration-1000 ease-out"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px z-20
    bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent
    scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              />
            </div>
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full max-h-[700px]">
              <Image
                src="/Foto.jpg"
                alt="Pablo González"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top rounded-xl grayscale
    group-hover:grayscale-0 
    group-hover:scale-105 
    transition-all duration-700"
              />
            </div>
          </div>

          {/* Texto Pablo */}

          <div
            id="equipo"
            className="order-1 lg:order-2 space-y-4 md:space-y-6 scroll-mt-24 md:scroll-mt-32"
          >
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-primary opacity-60" />
              <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-primary uppercase">
                Equipo
              </span>
            </div>
            <h2
              className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Pablo Martín González{" "}
              <span className="text-[#C9A84C]">
                Consultoría Estratégica &amp; Liderazgo Ético
              </span>
            </h2>
            <blockquote className="border-l-2 border-[#3b8c5e] pl-4 md:pl-6 my-4 md:my-8">
              <p
                className="text-base md:text-lg lg:text-xl text-slate-000 font-light leading-relaxed italic"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Entiendo la gestión empresarial como un equilibrio preciso entre
                la{" "}
                <span className="text-[#3b8c5e] font-semibold relative">
                  disciplina operativa y la integridad humana.
                </span>
              </p>
            </blockquote>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              Mi propósito es ayudar a líderes y organizaciones a alcanzar su
              máximo potencial a través de una arquitectura organizacional
              eficiente. Me especializo en el asesoramiento estratégico externo,
              diseñando procesos que no solo optimizan la rentabilidad, sino que
              fortalecen el clima humano y la transparencia en la toma de
              decisiones.
            </p>

            <div className="space-y-3 md:space-y-4">
              {pabloAreas.map((area) => (
                <div key={area.title} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3b8c5e]" />
                  <div>
                    <span className="text-sm md:text-base font-semibold text-[#3b8c5e]">
                      {area.title}:{" "}
                    </span>
                    <span className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
                      {area.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              Creo firmemente que la excelencia no es un acto aislado, sino un
              hábito. Por ello, mi enfoque de consultoría se basa en la
              confidencialidad, el networking de valor y un compromiso total con
              la calidad. Mi objetivo es elevar el estándar de gestión de mis
              clientes, asegurando que su estructura sea tan sólida como su
              visión.
            </p>
          </div>
        </div>

        {/* ── BLOQUE 3: CAROLINA ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Texto Carolina */}
          <div className="space-y-4 md:space-y-6">
            <h2
              className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Carolina Garibaldi{" "}
              <span className="text-[#C9A84C]">
                Operaciones Estratégicas &amp; Executive Business Partner
              </span>
            </h2>
            <blockquote className="border-l-2 border-[#3b8c5e] pl-4 md:pl-6 my-4 md:my-8">
              <p
                className="text-base md:text-lg lg:text-xl text-slate-000 font-light leading-relaxed italic"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                En nuestro equipo, la excelencia operativa tiene{" "}
                <span className="text-[#3b8c5e] font-semibold relative">
                  un nombre propio.
                </span>
              </p>
            </blockquote>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              Con una trayectoria de más de dos décadas en la élite del sector
              corporativo, Carolina es la estratega responsable de transformar
              la visión ejecutiva en una realidad operativa impecable. Experta
              en la gestión de la complejidad, posee una capacidad única para
              gestionar y coordinar operaciones y procesos de alto nivel.
            </p>

            <div className="space-y-3 md:space-y-4">
              {carolinaPillars.map((pillar) => (
                <div key={pillar.title} className="flex gap-3">
                  <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-[#3b8c5e]" />
                  <div>
                    <span className="text-sm md:text-base font-semibold text-[#3b8c5e]">
                      {pillar.title}:{" "}
                    </span>
                    <span className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
                      {pillar.description}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
              Carolina representa el estándar de profesionalismo y eficiencia
              que define nuestra propuesta de valor, asegurando que la
              estructura de cada proyecto sea tan sólida como la estrategia que
              lo impulsa.
            </p>
          </div>

          {/* Imagen Carolina */}
          <div className="relative group self-stretch">
            <div className="absolute -inset-1 bg-gradient-to-r from-secondary to-transparent opacity-20 group-hover:opacity-40 group-active:opacity-40 transition-opacity rounded-xl" />
            <div className="absolute inset-0 z-10 rounded-xl overflow-hidden pointer-events-none">
              <div
                className="absolute inset-0 z-10 opacity-0 
    group-hover:opacity-100 transition-opacity duration-700
    bg-[radial-gradient(ellipse_at_bottom,rgba(212,175,55,0.18)_0%,transparent_70%)]"
              />
              <div
                className="absolute inset-0 z-10 pointer-events-none
    bg-[linear-gradient(105deg,transparent_40%,rgba(212,175,55,0.15)_50%,transparent_60%)]
    translate-x-[-120%] group-hover:translate-x-[120%]
    transition-transform duration-1000 ease-out"
              />
              <div
                className="absolute bottom-0 left-0 right-0 h-px z-20
    bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent
    scale-x-0 group-hover:scale-x-100 transition-transform duration-700"
              />
            </div>
            <div className="relative w-full h-[50vh] sm:h-[60vh] lg:h-full max-h-[700px]">
              <Image
                src="/Carolina.jpeg"
                alt="Carolina Garibaldi"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover object-top rounded-xl grayscale
      group-hover:grayscale-0 
      group-hover:scale-105 
      transition-all duration-700"
              />
            </div>
          </div>
        </div>

        {/* ── BLOQUE 4: METODOLOGÍA ── */}
        <div
          id="metodologia"
          className="space-y-6 md:space-y-10 scroll-mt-24 md:scroll-mt-32"
        >
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
            <div className="space-y-4 md:space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="w-6 md:w-8 h-px bg-primary opacity-60" />
                <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-primary uppercase">
                  Metodología
                </span>
              </div>
              <h2
                className="text-lg md:text-xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Nosotros no venimos a decirte que hacer{" "}
                <span className="text-[#C9A84C]">
                  {" "}
                  venimos a transformar cómo lo hacés
                </span>
              </h2>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
                {p3}
              </p>
              <p className="text-sm md:text-base text-slate-100 leading-relaxed font-light">
                {p4}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {features.map((f) => (
                <div
                  key={f.title}
                  className="group relative overflow-hidden p-5 md:p-6 
                   rounded-2xl 
                    bg-[#1a1a1a] 
                    border border-white/5
                    shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                    hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
                    transition-all duration-500 ease-out
                    hover:-translate-y-2 hover:scale-[1.02]"
                >
                  <div
                    className="absolute inset-0 pointer-events-none
                    bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.15),transparent_60%)]
                    opacity-0 group-hover:opacity-100
                    transition-opacity duration-500"
                  />
                  <span
                    className="material-symbols-outlined text-[#3b8c5e] mb-3 md:mb-4 block 
  transition-all duration-300 group-hover:scale-110 group-hover:text-[#C9A84C]"
                    style={{ fontSize: "24px" }}
                  >
                    {f.icon}
                  </span>
                  <h3
                    className="text-sm md:text-base font-bold mb-2 text-[#3b8c5e] 
transition-colors duration-300 group-hover:text-[#E0BD6A]"
                  >
                    {f.title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-300 leading-relaxed font-light">
                    {f.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
