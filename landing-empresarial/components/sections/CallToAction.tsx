import Link from "next/link";

export default function CallToAction() {
  return (
    <section
      id="contacto"
      className="py-16 md:py-24 px-5 md:px-6 border-t border-primary/10"
    >
      <div className="max-w-5xl mx-auto bg-primary/10 rounded-2xl md:rounded-3xl p-8 md:p-20 text-center border border-primary/20">
        <h2 className="text-2xl md:text-5xl font-black text-white mb-6">
          ¿Listo para el Siguiente Nivel de{" "}
          <span className="text-primary">Liderazgo?</span>
        </h2>
        <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-12">
          La solicitud de consultoría es estrictamente selectiva. Solo nos
          asociamos con quienes están comprometidos con una transformación ética
          radical.
        </p>

        <Link
          href="personas/#contacto"
          className="bg-primary text-white px-8 md:px-12 py-4 md:py-5 text-sm font-bold uppercase rounded-lg"
        >
          Contactar
        </Link>
      </div>
    </section>
  );
}
