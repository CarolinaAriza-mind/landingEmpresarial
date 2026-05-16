import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full pt-16 pb-10 bg-[#0d0d0d] border-t border-white/10">
      <div className="max-w-[1200px] mx-auto px-5 md:px-6 flex flex-col gap-10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-10">
          <div className="flex flex-col items-center md:items-start text-center md:text-left max-w-[260px]">
            <Link href="/" className="h-12 flex items-center">
              <Image
                src="/ICONO.3.png"
                alt="Logo"
                width={160}
                height={80}
                className="object-contain"
              />
            </Link>

            <p className="mt-4 font-semibold text-sm">PABLO GONZALEZ</p>

            <p className="mt-3 text-[#c4c7c7] text-[11px] uppercase leading-relaxed">
              Consultoría de alto impacto para líderes que buscan la excelencia
              estructural.
            </p>
          </div>

          <div className="text-center md:text-left">
            <span className="text-white text-[11px] uppercase block mb-2">
              Ubicación
            </span>
            <span className="text-[#c4c7c7] text-[11px] uppercase">
              Buenos Aires / Remote
            </span>
          </div>
        </div>

        <div className="h-px bg-white/10" />

        <p className="text-center text-[#c4c7c7] text-[11px]  ">
          © 2026 Pablo González - Todos los Derechos Reservados
        </p>
      </div>
    </footer>
  );
}
