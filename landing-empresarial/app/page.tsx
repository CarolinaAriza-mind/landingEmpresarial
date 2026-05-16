import { Hero } from "@/components/sections/Hero";
import { NavigationPaths } from "@/components/sections/NavigationPaths";
import { BrandPositioning } from "@/components/sections/BrandPositioning";
import { Footer } from "@/components/sections/Footer";

import CallToAction from "@/components/sections/CallToAction";
import { Navbar } from "@/components/sections";

export default function Home() {
  return (
    <main className="bg-background-dark text-slate-100 overflow-x-hidden">
      <Navbar
        links={[
          { label: "Inicio", href: "#top" },
          { label: "¿Quienes Somos?", href: "#quienesSomos" },
          { label: "Equipo", href: "#equipo" },
          { label: "Metodologia", href: "#metodologia" },
          { label: "Servicios", href: "#servicios" },
        ]}
        ctaLabel="Contactar"
        ctaHref="#contacto"
      />
      <Hero />
      <BrandPositioning />
      <NavigationPaths />
      <CallToAction />
      <Footer />
    </main>
  );
}
