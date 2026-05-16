"use client";

import { motion } from "framer-motion";

export default function HeroPersons() {
  return (
    <header className="relative min-h-[707px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-10">
        {/* Sombra lateral */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(0,0,0,0.7),transparent_60%)]" />

        {/* 👇 Fade inferior */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d0d] via-[#0d0d0d]/70 to-transparent" />

        {/* Imagen */}
        <div
          className="w-full h-full bg-center bg-cover"
          role="img"
          aria-label="Portrait of a professional man"
          style={{
            backgroundImage: "url('/spartano.jpeg')",
          }}
        />
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
            Mentoring Individual
          </motion.span>

          {/* TITULO */}
          <motion.h1
            className="font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.1] mb-8 italic"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Tu Historia no es un Obstáculo,
            <br />
            <span className="text-[#3b8c5e] not-italic font-bold">
              Es tu Propósito
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
            Te guío para que conviertas el dolor en un poder y la adversidad en
            un camino hacia un propósito claro
          </motion.p>
        </div>
      </div>
    </header>
  );
}
