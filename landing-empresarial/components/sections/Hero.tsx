"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const subtitle =
  "Consultoría en autodesarrollo, liderazgo, procesos y alto rendimiento";

const subtitle2 =
  "Diseño de sistemas y desarrollo humano para contextos de alta exigencia en personas, empresas y deportistas";

export function Hero() {
  return (
    <section className="relative w-full min-h-[707px] flex items-center overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* sombras */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-background-dark/30 z-10" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.7),transparent_60%)] z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0d0d0d]/90 via-[#0d0d0d]/50 to-transparent z-10" />
        <Image
          src="/Resiliencia.png"
          alt="Liderazgo"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* CONTENT */}
      <div className="relative z-20 w-full h-full flex items-start justify-start px-6 md:px-16 pt-[12vh]">
        <div className="max-w-3xl space-y-4 md:space-y-6 text-left">
          {/* EYEBROW */}
          <span className="text-[#c5a059] font-bold tracking-[0.3em] text-[10px] md:text-xs uppercase block">
            Consultoria Estrategica
          </span>

          {/* TITULO */}
          <motion.h2
            className="font-serif text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] italic drop-shadow-[0_4px_20px_rgba(0,0,0,0.8)]"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            No gestionamos la suerte{" "}
            <span className="text-[#3b8c5e] not-italic font-bold">
              diseñamos sistemas de resultados
            </span>
          </motion.h2>

          {/* SUBTEXTO */}
          <motion.div
            className="space-y-2 md:space-y-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.5 }}
          >
            <p className="text-sm sm:text-base md:text-xl text-white font-light leading-relaxed italic font-serif">
              {subtitle}
            </p>

            <p className="text-xs sm:text-sm md:text-base text-white/80 leading-relaxed font-light">
              {subtitle2}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
