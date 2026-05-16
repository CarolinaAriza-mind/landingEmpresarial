"use client";

export function GastronomiaSection() {
  const strategicBlocks = [
    {
      icon: "settings",
      title: "Ingeniería de Procesos y Operaciones",
      items: [
        "Manuales de Procedimiento (SOPs): Estandarización de procesos desde la recepción de mercadería hasta el servicio al cliente para garantizar calidad constante.",
        "Optimización de Flujos de Trabajo: Rediseño operativo en cocina y salón para reducir tiempos de espera y maximizar la rotación de mesas.",
      ],
    },
    {
      icon: "monitoring",
      title: "Control de Gestión y Rentabilidad",
      items: [
        "Análisis de Costos y Food Cost: Auditoría de recetas y mermas para asegurar márgenes de utilidad óptimos.",
        "Ingeniería de Menú: Análisis estratégico de la carta para destacar los productos más rentables y populares (Menú Engineering).",
        "Tableros de Comando: Implementación de indicadores clave (KPIs) para monitorear el desempeño del negocio en tiempo real.",
      ],
    },
    {
      icon: "groups",
      title: "Gestión de Equipos y Motivación",
      items: [
        "Estructuración de Organigramas: Definición clara de roles, responsabilidades y perfiles de puesto.",
        "Programas de Liderazgo y Retención: Capacitación para mandos medios en gestión de equipos bajo presión y cultura de excelencia.",
      ],
    },
    {
      icon: "trending_up",
      title: "Expansión y Nuevos Proyectos",
      items: [
        "Project Management para Aperturas: Coordinación integral desde proveedores hasta ejecución operativa.",
        "Modelos de Franquicia y Escalabilidad: Estructuración del negocio para replicabilidad sin perder identidad.",
      ],
    },
    {
      icon: "verified_user",
      title: "Auditoría y Monitoreo Externo",
      items: [
        "Consultoría Externa de Control: Supervisión periódica de procesos y cumplimiento de estándares.",
      ],
    },
  ];

  return (
    <>
      {/* ───────────────────────────── */}
      {/* CONTENIDO */}
      {/* ───────────────────────────── */}
      <section className="py-24 bg-[#0d0d0d] ">
        <div className="max-w-7xl mx-auto px-6 space-y-20">
          {/* HEADER */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="w-6 md:w-8 h-px bg-[#3a8d61] opacity-60" />
                <span className="text-[11px] tracking-[0.25em] text-[#3a8d61] uppercase">
                  Consultoria Estrategica Gastronómica
                </span>
              </div>

              <h2
                className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tight leading-none"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Transformando la gastronomía en{" "}
                <span className="text-[#C9A84C]">
                  negocios de alto rendimiento
                </span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              En el sector gastronómico, la pasión por el producto es el motor,
              pero la eficiencia en la gestión es lo que garantiza la
              permanencia. Un proyecto exitoso es aquel donde la visión
              culinaria se apoya en una estructura operativa sólida.
            </p>
          </div>

          {/* TEXTO */}
          <div className="grid md:grid-cols-2 gap-10 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              Nos especializamos en profesionalizar la gestión de proyectos
              gastronómicos, trasladando la disciplina del alto rendimiento y la
              arquitectura organizacional al corazón de la cocina y el salón.
            </p>

            <p>
              Nuestra misión es clara: optimizar cada recurso para que la
              operación sea fluida, el equipo esté motivado y el negocio sea
              rentable y escalable.
            </p>
          </div>

          {/* CARDS */}
          <div className="grid md:grid-cols-3 gap-6">
            {strategicBlocks.map(({ icon, title, items }) => (
              <div
                key={title}
                className="group relative overflow-hidden p-6 md:p-7 
                rounded-2xl 
                bg-[#1a1a1a] 
                border border-white/5
                shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
                transition-all duration-500
                hover:-translate-y-2 hover:scale-[1.01]"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.12),transparent_60%)]" />

                <span className="material-symbols-outlined text-[#3a8d61] mb-4 block group-hover:text-[#C9A84C] transition">
                  {icon}
                </span>

                <h3 className="text-white text-lg font-semibold mb-4">
                  {title}
                </h3>

                <ul className="space-y-3">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed"
                    >
                      <span className="w-1.5 h-1.5 bg-[#3a8d61] mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* FRASE */}
          <div className="max-w-3xl mx-auto text-center">
            <p
              className="text-lg md:text-2xl text-slate-300 italic font-light leading-relaxed"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              La gastronomía no falla por falta de talento. Falla por falta de
              estructura.
            </p>

            <div className="w-12 h-px bg-[#C9A84C] mx-auto mt-6 opacity-60" />
          </div>
        </div>
      </section>
    </>
  );
}
