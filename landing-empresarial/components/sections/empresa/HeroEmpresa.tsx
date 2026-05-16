"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function HeroEmpresa() {
  return (
    <section className="relative w-full min-h-[720px] flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-transparent to-[#0d0d0d]/40 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/60 to-transparent z-10" />

        <Image
          src="/brujula.png"
          alt="Corporativo"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full px-6 md:px-16 pt-[14vh]">
        <div className="max-w-3xl space-y-6">
          <span className="text-[#c5a059] tracking-[0.3em] text-xs uppercase font-bold">
            Consultoría Organizacional
          </span>

          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl text-white font-serif italic leading-[1.1]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            No diagnosticamos problemas,
            <span className="text-[#3a8d61] font-bold not-italic block">
              diseñamos soluciones de ejecución inmediata
            </span>
          </motion.h1>

          <motion.p
            className="text-lg text-white/80 font-light leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Transformamos organizaciones a través de la integridad y el
            propósito. Diseñamos culturas corporativas sostenibles, enfocadas en
            confianza, liderazgo y resultados medibles.
          </motion.p>
        </div>
      </div>
    </section>
  );
}
