import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import WhatsAppButton from "@/components/sections/WhatsappBotton";
import Popup from "@/components/Popup";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pablo González | Consultoría de Liderazgo Ético",
  description:
    "Consultor de liderazgo ético para personas y organizaciones. Estrategias de alto impacto para quienes lideran el futuro.",
  openGraph: {
    title: "Pablo González | Consultoría de Liderazgo Ético",
    description:
      "Estrategias de alto impacto para líderes que buscan transformación auténtica.",
    url: "https://pablomgonzalez.com",
    siteName: "Pablo González",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://pablomgonzalez.com/LOGOTIPO1.png",
        width: 1200,
        height: 630,
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`dark ${manrope.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>

      <body className="font-display antialiased">
        <Popup />
        {children}
        {/* TOAST GLOBAL */}
        <WhatsAppButton />
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 3500,
            style: {
              background: "#3b8c5e",
              color: "#ffffff",
              border: "1px solid rgba(255,255,255,0.08)",
            },
          }}
        />
      </body>
    </html>
  );
}
