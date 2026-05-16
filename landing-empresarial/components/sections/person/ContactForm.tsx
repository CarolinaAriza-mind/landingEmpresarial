"use client";

import { useState } from "react";
import toast from "react-hot-toast";

const advisoryOptions = [
  "Liderazgo y Carrera",
  "Propósito y Visión de Vida",
  "Gestión del Rendimiento",
  "Superación de Adicciones",
  "Otros intereses",
];

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contacto"
      className="py-24 md:py-32 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl xl:max-w-[1400px] mx-auto px-4 sm:px-6">
        <div className="bg-[#161616] border border-white/5 flex flex-col lg:flex-row rounded-2xl overflow-hidden">
          {/* ASIDE */}
          <aside className="lg:w-[35%] p-6 sm:p-8 md:p-10 lg:p-12 bg-[#3b8c5e]/5 border-b lg:border-b-0 lg:border-r border-white/5 space-y-5 md:space-y-6">
            <div className="flex items-center gap-4">
              <span className="w-6 md:w-8 h-px bg-[#3b8c5e] opacity-60" />
              <span className="text-[10px] tracking-[0.25em] text-[#3b8c5e] uppercase">
                Contacto
              </span>
            </div>

            <h2
              className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-black text-white uppercase tracking-tighter leading-tight"
              style={{ fontFamily: "'Libre Baskerville', Georgia, serif" }}
            >
              Iniciá una <span className="text-[#C9A84C]">conversación</span>
            </h2>

            <p className="text-sm md:text-base text-slate-300 leading-relaxed">
              Contame tu situación actual. Analizo personalmente cada caso para
              ver si este proceso es el adecuado para vos.
            </p>
          </aside>

          {/* FORM */}
          <div className="lg:w-[65%] p-6 sm:p-8 md:p-10 lg:p-12">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const loadingToast = toast.loading("Enviando mensaje...");
                setLoading(true);

                try {
                  const form = e.currentTarget;
                  const formData = new FormData(e.currentTarget);

                  const data = {
                    type: "Persona",
                    name: formData.get("name"),
                    email: formData.get("email"),
                    interest: formData.get("interest"),
                    message: formData.get("message"),
                  };

                  const res = await fetch("/api/contact", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify(data),
                  });

                  const result = await res.json();

                  if (result.success) {
                    toast.success("Mensaje enviado correctamente", {
                      id: loadingToast,
                    });

                    form.reset();
                  } else {
                    toast.error("No se pudo enviar", {
                      id: loadingToast,
                    });
                  }
                } catch (error) {
                  toast.error("Error de conexión", {
                    id: loadingToast,
                  });
                } finally {
                  setLoading(false);
                }
              }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
            >
              {/* Nombre */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Nombre Completo
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Tu nombre..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="tu@email.com"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3"
                />
              </div>

              {/* Select */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Intereses de Asesoría
                </label>

                <select
                  name="interest"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3"
                >
                  {advisoryOptions.map((opt) => (
                    <option key={opt} value={opt} className="bg-[#161616]">
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mensaje */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Mensaje
                </label>

                <textarea
                  name="message"
                  rows={4}
                  placeholder="Contame tu situación..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-3 resize-none"
                />
              </div>

              {/* CTA */}
              <div className="md:col-span-2 pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto bg-[#3b8c5e] text-white px-10 py-4 text-sm font-bold uppercase tracking-widest hover:bg-[#3b8c5e]/90 transition-all disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {loading ? "Enviando..." : "Enviar Solicitud"}

                  <span className="material-symbols-outlined text-sm">
                    north_east
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
