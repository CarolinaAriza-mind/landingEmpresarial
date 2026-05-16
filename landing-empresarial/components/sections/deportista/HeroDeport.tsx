"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function HeroDeport() {
  return (
    <section
      id="top"
      className="relative min-h-[720px] flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-10">
        {/* Oscurecimiento general */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Sombra lateral fuerte (para texto) */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.85),transparent_65%)]" />

        {/* Fade inferior más suave */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/80 via-30% to-transparent" />
        <div className="absolute inset-0 z-10">
          {/* Imagen primero */}
          <Image
            src="/Hockey.png"
            alt="Atleta profesional concentrándose antes de una carrera"
            fill
            className="object-cover"
            priority
          />

          {/* Overlay oscuro general */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Sombra lateral (para legibilidad del texto) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.85),transparent_65%)]" />

          {/* Fade inferior (transición a la siguiente sección) */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/60 to-transparent" />
        </div>
      </div>
      {/* CONTENIDO */}
      <div className="relative z-20 w-full flex items-start justify-start px-6 md:px-16 pt-[12vh]">
        <div className="max-w-3xl">
          {/* EYEBROW */}
          <motion.span
            className="text-[#c5a059] font-bold tracking-[0.3em] text-xs uppercase mb-4 block"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Alto Rendimiento Deportivo
          </motion.span>

          {/* TITULO */}
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            La Presión no te define,
            <br />
            <span className="text-[#3a8d61] not-italic font-bold">
              te revela
            </span>
            .
          </motion.h1>

          {/* TEXTO */}
          <motion.p
            className="text-base md:text-lg text-slate-300 font-light leading-relaxed max-w-2xl mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
          >
            Entrená tu mente para competir al más alto nivel. Desarrollo
            psicológico y estratégico para deportistas que buscan sostener
            rendimiento bajo máxima exigencia.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          ></motion.div>
        </div>
      </div>
    </section>
  );
}
