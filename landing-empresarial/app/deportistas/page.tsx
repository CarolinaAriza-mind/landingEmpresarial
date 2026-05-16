import { Footer, Navbar } from "@/components/sections";
import { ContactFormDeportistas } from "@/components/sections/deportista/ContactFormDeportista";
import HeroDeport from "@/components/sections/deportista/HeroDeport";

import Methodology from "@/components/sections/deportista/Metodology";
import CorePillarsDeport from "@/components/sections/deportista/PillarsDeport";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alto Rendimiento Deportivo",
  description:
    "Forjando la mentalidad de campeón bajo presión extrema. Herramientas psicológicas y estratégicas para deportistas que no aceptan menos que la excelencia.",
};

export default function DeportistasPage() {
  return (
    <>
      <Navbar
        accent="green"
        links={[
          { label: "Inicio", href: "#top" },
          { label: "Programas", href: "#programas" },
          { label: "Metodología", href: "#metodologia" },
        ]}
        ctaLabel="Optimizar mi Rendimiento"
        ctaHref="#contacto"
      />
      <main className="pb-16 md:pb-0">
        <HeroDeport />
        <CorePillarsDeport />
        <Methodology />
        <ContactFormDeportistas />
      </main>
      <Footer />
    </>
  );
}
