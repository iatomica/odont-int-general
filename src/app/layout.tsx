import type { Metadata } from "next";
import { clinicConfig } from "@/config/clinic";
import "./globals.css";

export const metadata: Metadata = {
  title: `${clinicConfig.name} · ${clinicConfig.tagline}`,
  description: `${clinicConfig.descriptor}. Diagnóstico 3D con escáner intraoral, laboratorio propio, endodoncia, ortodoncia, implantes y 14+ obras sociales en David Luque 90, Córdoba Capital.`,
  openGraph: {
    title: `${clinicConfig.name} · Odontología Integral con Enfoque Digital`,
    description: "Consultorio odontológico en Córdoba Capital. Endodoncia, ortodoncia, escaneo 3D y convenios con más de 14 obras sociales.",
    locale: "es_AR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-background text-charcoal">
        {children}
      </body>
    </html>
  );
}
