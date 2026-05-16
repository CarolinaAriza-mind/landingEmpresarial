"use client";

import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phone = "5491166863363";
  const message = "Hola, quiero hacer una consulta.";

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-[9999] group"
    >
      <div className="relative flex items-center justify-center">
        {/* glow */}
        <span className="absolute w-24 h-24 rounded-full bg-[#25D366]/25 blur-2xl" />

        {/* botón */}
        <div className="relative w-[66px] h-[66px] md:w-[74px] md:h-[74px] rounded-full bg-[#25D366] shadow-[0_18px_45px_rgba(37,211,102,0.45)] flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <FaWhatsapp className="text-white w-9 h-9 md:w-10 md:h-10" />
        </div>
      </div>
    </a>
  );
}
