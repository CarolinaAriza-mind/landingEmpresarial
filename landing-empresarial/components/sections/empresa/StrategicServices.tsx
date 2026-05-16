"use client";

import Link from "next/link";

export function StrategicServicesSection() {
  return (
    <section id="servicios" className="py-24 bg-[#0d0d0d] ">
      <div className="max-w-7xl mx-auto px-6">
        <div className="space-y-16">
          {/* ── HEADER ── */}
          <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 md:gap-16 items-center">
            <div className="space-y-6 max-w-xl">
              <div className="flex items-center gap-4">
                <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
                <span className="text-[10px] md:text-xs font-medium tracking-[0.25em] text-[#3b8c5e] uppercase">
                  Servicios Estratégicos
                </span>
              </div>

              <h2
                className="text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-none"
                style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
              >
                Consultoría Organizacional:{" "}
                <span className="text-[#C9A84C]">
                  Eficiencia, Procesos y Liderazgo Ético
                </span>
              </h2>
            </div>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed font-light">
              Nuestra consultoría estratégica es un proceso de intervención
              profunda orientado a maximizar la rentabilidad y garantizar la
              sostenibilidad ética de la compañía. No entregamos manuales
              teóricos; instalamos una cultura de eficiencia operativa y
              liderazgo basado en resultados.
            </p>
            <p>
              A través de un equipo interdisciplinario, analizamos el ADN de tu
              organización para detectar fugas de capital, cuellos de botella en
              la toma de decisiones y debilidades en la cadena de mando.
            </p>
          </div>

          {/* ── SERVICIOS BASE ── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {[
              {
                icon: "account_tree",
                title: "Auditoría y Diagnóstico Operativo",
                text: "Auditoría de Procesos y Logística: Reingeniería de flujos de trabajo para eliminar redundancias. Optimizamos el uso de recursos para que cada movimiento de la empresa genere valor real.",
              },
              {
                icon: "leaderboard",
                title: "Rediseño de Procesos y Logística",
                text: "Diseño de Estructuras de Liderazgo: Implementamos modelos de Liderazgo Ético e Inteligencia Interpersonal",
              },
              {
                icon: "sync_alt",
                title: "Formación en Liderazgo Ético",
                text: "Gestión del Cambio y Resiliencia Corporativa: Preparamos a la organización para navegar entornos de incertidumbre, fortaleciendo la capacidad de respuesta de los mandos medios y la alta dirección.",
              },
              {
                icon: "verified_user",
                title: "Dinámicas de Equipo y Clima Laboral",
                text: "Blindaje de Transparencia: Aplicamos protocolos de auditoría interna que aseguran que el crecimiento del negocio sea sólido, legal y alineado con los valores fundacionales de la marca.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group relative overflow-hidden p-6 rounded-2xl 
                bg-[#1a1a1a] border border-white/5
                shadow-[0_4px_20px_rgba(0,0,0,0.4)]
                hover:shadow-[0_10px_40px_rgba(0,0,0,0.7)]
                transition-all duration-500 hover:-translate-y-2"
              >
                {/* Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition bg-[radial-gradient(circle_at_50%_100%,rgba(201,168,76,0.15),transparent_60%)]" />

                {/* ICON */}
                <span className="material-symbols-outlined text-[#3b8c5e] mb-4 block group-hover:text-[#C9A84C] transition">
                  {item.icon}
                </span>

                {/* TITLE */}
                <h3 className="text-white font-semibold text-base mb-2">
                  {item.title}
                </h3>

                {/* TEXT */}
                <p className="text-sm text-slate-300 leading-relaxed font-light">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* ── CTA ── */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 p-6 md:p-8 rounded-2xl border border-[#C9A84C]/20 bg-[#C9A84C]/5">
            <div>
              <h3 className="text-white font-bold text-xl mb-1">
                ¿Listo para optimizar tu organización?
              </h3>
              <p className="text-slate-400 text-sm">
                Comenzamos con un diagnóstico estratégico sin compromiso.
              </p>
            </div>

            <Link
              href="#contacto"
              className="bg-primary text-white px-8 md:px-12 py-4 md:py-5 text-sm font-bold uppercase rounded-lg flex items-center gap-2"
            >
              Agendar Diagnóstico
              <span className="material-symbols-outlined">north_east</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
