"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

type NavbarProps = {
  accent?: "green";
  links: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
};

export function Navbar({
  accent = "green",
  links,
  ctaLabel,
  ctaHref,
}: NavbarProps) {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-[#131313]/70 backdrop-blur-xl shadow-2xl shadow-black/20">
      <nav className="flex justify-between items-center px-5 md:px-10 py-4 md:py-5 max-w-[1400px] mx-auto">
        {/* IZQUIERDA: Logo */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-neutral-300"
            onClick={() => setOpen(!open)}
          >
            <span className="material-symbols-outlined">
              {open ? "close" : "menu"}
            </span>
          </button>

          <Link href="/" className="flex items-center h-10 md:h-12">
            <Image
              src="/ICONO.3.png"
              alt="Logo"
              width={100}
              height={100}
              className="object-contain"
              priority
            />
          </Link>
        </div>

        {/* DERECHA: Links + CTA */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={`uppercase text-xs tracking-widest transition ${
                i === 0
                  ? "text-[#e6c35c] font-bold border-b border-[#e6c35c]"
                  : "text-[#c4c7c7] hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* CTA */}
          <Link
            href={ctaHref}
            className={`ml-4 px-8 py-3 text-sm font-bold uppercase rounded-lg ${
              accent === "green"
                ? "bg-primary text-white"
                : "bg-[#e6c35c] text-black"
            }`}
          >
            {ctaLabel}
          </Link>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#131313] border-t border-white/10 px-6 py-6 space-y-6">
          {links.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block uppercase text-sm ${
                i === 0 ? "text-[#e6c35c]" : "text-white/70"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <Link
            href={ctaHref}
            onClick={() => setOpen(false)}
            className="block w-full text-sm uppercase border border-white/20 py-2 text-center hover:bg-white hover:text-black transition"
          >
            {ctaLabel}
          </Link>
        </div>
      )}
    </header>
  );
}
