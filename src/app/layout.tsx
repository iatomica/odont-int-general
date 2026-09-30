import type { Metadata } from "next";
import { clinicConfig } from "@/config/clinic";
import "./globals.css";

export const metadata: Metadata = {
  title: `${clinicConfig.name} · ${clinicConfig.tagline}`,
  description: `${clinicConfig.descriptor}. Prótesis dentales, endodoncia, implantes, estética dental y armonización facial en Paraná 851, Recoleta, Buenos Aires. WhatsApp: ${clinicConfig.phoneDisplay}.`,
  openGraph: {
    title: `${clinicConfig.name} · Odontología & Armonización Facial`,
    description: "Consultorio odontológico y estética orofacial en Recoleta, Buenos Aires. Dr. Jamil Ortiz. Atención exclusiva con turno previo.",
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
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
      </head>
      <body className="min-h-[100dvh] flex flex-col bg-background text-charcoal">
        {children}
      </body>
    </html>
  );
}
