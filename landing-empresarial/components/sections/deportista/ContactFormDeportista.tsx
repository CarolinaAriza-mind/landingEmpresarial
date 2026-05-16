"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export function ContactFormDeportistas() {
  const [loading, setLoading] = useState(false);

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-[#0d0d0d] border-t border-white/5"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-6">
        <div className="bg-[#161616] border border-white/5 flex flex-col lg:flex-row rounded-2xl overflow-hidden">
          {/* Info lateral */}
          <aside className="lg:w-1/3 p-8 md:p-12 bg-[#3b8c5e]/5 border-b lg:border-b-0 lg:border-r border-white/5">
            <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 leading-tight">
              Hablemos de <br /> tu próximo nivel.
            </h2>

            <p className="text-slate-400 mb-10 md:mb-12 leading-relaxed text-sm md:text-base">
              Diseñado para deportistas de élite, entrenadores y managers. Tu
              privacidad y confidencialidad son la base del proceso.
            </p>

            <address className="not-italic space-y-6 md:space-y-8">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#3b8c5e]">
                  mail
                </span>
                <a
                  href="mailto:contacto@pablomgonzalez.com"
                  className="text-xs md:text-sm font-bold tracking-wider hover:text-[#3b8c5e] transition-colors break-all"
                >
                  pablo@pablomgonzalez.com
                </a>
              </div>

              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-[#3b8c5e]">
                  location_on
                </span>
                <span className="text-xs md:text-sm font-bold tracking-wider">
                  Buenos Aires · Remoto Global
                </span>
              </div>
            </address>
          </aside>

          {/* Formulario */}
          <div className="lg:w-2/3 p-8 md:p-12">
            <form
              onSubmit={async (e) => {
                e.preventDefault();

                const loadingToast = toast.loading("Enviando mensaje...");
                setLoading(true);

                try {
                  const form = e.currentTarget;
                  const formData = new FormData(e.currentTarget);

                  const data = {
                    type: "Deportes",
                    name: formData.get("name"),
                    disciplina: formData.get("disciplina"),
                    email: formData.get("email"),
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
                  placeholder="Juan Pérez"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-4 text-sm md:text-base transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Deporte */}
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Deporte / Disciplina
                </label>
                <input
                  type="text"
                  name="disciplina"
                  placeholder="Tenis, Fútbol, Natación..."
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-4 text-sm md:text-base transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Email */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Email Profesional <span className="text-[#3b8c5e]">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="juan@elite-sports.com"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-4 text-sm md:text-base transition-colors placeholder:text-slate-600"
                />
              </div>

              {/* Mensaje */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-bold tracking-[0.2em] text-slate-500 uppercase">
                  Mensaje / Objetivo
                </label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="¿Cuál es tu principal desafío actual?"
                  className="w-full bg-transparent border-b border-white/10 focus:border-[#3b8c5e] focus:outline-none text-white py-4 text-sm md:text-base transition-colors resize-none placeholder:text-slate-600"
                />
              </div>

              {/* Submit */}
              <div className="md:col-span-2 pt-2 md:pt-4">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto bg-[#3b8c5e] text-white px-10 md:px-12 py-4 md:py-5 text-xs md:text-sm font-bold tracking-widest uppercase hover:bg-[#3b8c5e]/90 transition-all disabled:opacity-60 flex items-center justify-center gap-3"
                >
                  {loading ? "Enviando..." : "Solicitar Sesión de Evaluación"}

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
