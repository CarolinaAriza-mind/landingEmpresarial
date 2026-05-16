"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroGastronomia() {
  return (
    <section
      id="gastronomia"
      className="relative w-full min-h-[720px] flex items-center overflow-hidden"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* overlays (mismos que empresa para consistencia) */}
        <div className="absolute inset-0 z-10 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.85),rgba(0,0,0,0.4),transparent_60%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/60 to-transparent z-10" />

        <Image
          src="/gastronomía.png" // 👉 poné una cocina profesional / restaurante
          alt="Consultoría gastronómica"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full px-6 md:px-16 pt-[14vh]">
        <div className="max-w-3xl space-y-6">
          {/* TAG */}
          <span className="text-[#C9A84C] tracking-[0.3em] text-xs uppercase font-bold">
            Consultoría Gastronómica
          </span>

          {/* TITLE */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl text-white font-serif italic leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Del caos operativo,
            <span className="text-[#3a8d61] font-bold not-italic block">
              a la rentabilidad sostenible
            </span>
          </motion.h1>

          {/* DESC */}
          <motion.p
            className="text-lg text-white/80 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Transformamos proyectos gastronómicos en estructuras eficientes,
            rentables y escalables. Profesionalizamos la operación para que la
            cocina, el equipo y la gestión trabajen como un sistema de alto
            rendimiento.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
