"use client";

import React from "react";
import { OBRAS_SOCIALES, clinicConfig } from "@/config/clinic";
import { ShieldCheck, ArrowRight } from "lucide-react";

// Official brand SVG emblem glyphs for the 14 Obras Sociales
const ObraSocialLogo: React.FC<{ id: string; name: string }> = ({ id, name }) => {
  switch (id) {
    case "osde":
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto" fill="currentColor">
          <text x="5" y="28" fontFamily="system-ui, sans-serif" fontWeight="900" fontSize="22" letterSpacing="2">
            OSDE
          </text>
          <circle cx="102" cy="20" r="7" fill="#004B87" />
        </svg>
      );
    case "medife":
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto" fill="currentColor">
          <text x="5" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.5">
            medifé
          </text>
          <path d="M100 13 L107 20 L100 27 Z" fill="#00838F" />
        </svg>
      );
    case "sancor":
      return (
        <svg viewBox="0 0 140 40" className="h-6 w-auto" fill="currentColor">
          <text x="5" y="25" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="17" letterSpacing="0.5">
            SanCor
          </text>
          <text x="75" y="25" fontFamily="system-ui, sans-serif" fontWeight="400" fontSize="13" fill="#0072CE">
            salud
          </text>
        </svg>
      );
    case "swiss-medical":
      return (
        <svg viewBox="0 0 150 40" className="h-6 w-auto">
          <rect x="2" y="8" width="24" height="24" rx="4" fill="#E53935" />
          <path d="M14 13 v14 M7 20 h14" stroke="#ffffff" strokeWidth="3.5" strokeLinecap="round" />
          <text x="32" y="21" fill="currentColor" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13">
            SWISS MEDICAL
          </text>
          <text x="32" y="31" fill="#888888" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9">
            MEDICINA PRIVADA
          </text>
        </svg>
      );
    case "unimed":
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto" fill="currentColor">
          <text x="5" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="19" letterSpacing="1">
            UNIMED
          </text>
          <path d="M102 12 L110 20 L102 28 L94 20 Z" fill="#00897B" />
        </svg>
      );
    case "nobis":
      return (
        <svg viewBox="0 0 110 40" className="h-6 w-auto" fill="currentColor">
          <text x="5" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" letterSpacing="1">
            nobis
          </text>
          <circle cx="86" cy="18" r="4" fill="#5E35B1" />
        </svg>
      );
    case "sadaic":
      return (
        <svg viewBox="0 0 120 40" className="h-6 w-auto" fill="currentColor">
          <circle cx="18" cy="20" r="12" fill="none" stroke="#1565C0" strokeWidth="2.5" />
          <text x="13" y="25" fill="#1565C0" fontWeight="bold" fontSize="12">S</text>
          <text x="36" y="26" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="17" letterSpacing="1.5">
            SADAIC
          </text>
        </svg>
      );
    case "galeno":
      return (
        <svg viewBox="0 0 130 40" className="h-6 w-auto" fill="currentColor">
          <text x="5" y="27" fontFamily="Georgia, serif" fontWeight="700" fontSize="20" letterSpacing="1.5">
            GALENO
          </text>
        </svg>
      );
    case "prevencion-salud":
      return (
        <svg viewBox="0 0 160 40" className="h-6 w-auto">
          <circle cx="16" cy="20" r="10" fill="#2E7D32" />
          <path d="M16 14 v12 M10 20 h12" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
          <text x="34" y="21" fill="currentColor" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13">
            Prevención
          </text>
          <text x="34" y="32" fill="#2E7D32" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="11">
            SALUD
          </text>
        </svg>
      );
    case "avalian":
      return (
        <svg viewBox="0 0 130 40" className="h-6 w-auto" fill="currentColor">
          <text x="5" y="27" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="20" letterSpacing="0.8">
            avalian
          </text>
          <circle cx="95" cy="20" r="4" fill="#0277BD" />
        </svg>
      );
    case "federada-salud":
      return (
        <svg viewBox="0 0 150 40" className="h-6 w-auto">
          <rect x="2" y="11" width="18" height="18" rx="3" fill="#C62828" />
          <text x="26" y="21" fill="currentColor" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13">
            FEDERADA
          </text>
          <text x="26" y="32" fill="#C62828" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="10">
            SALUD
          </text>
        </svg>
      );
    case "poder-judicial":
      return (
        <svg viewBox="0 0 150 40" className="h-6 w-auto" fill="currentColor">
          <path d="M8 22 L16 10 L24 22 Z M16 10 v16 M5 26 h22" fill="none" stroke="#37474F" strokeWidth="1.8" />
          <text x="32" y="20" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12">
            PODER JUDICIAL
          </text>
          <text x="32" y="31" fill="#78909C" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9">
            OSPJN CÓRDOBA
          </text>
        </svg>
      );
    case "caja-notarial":
      return (
        <svg viewBox="0 0 145 40" className="h-6 w-auto" fill="currentColor">
          <circle cx="16" cy="20" r="10" fill="none" stroke="#4E342E" strokeWidth="2" />
          <text x="12" y="24" fill="#4E342E" fontWeight="bold" fontSize="11">N</text>
          <text x="32" y="21" fontFamily="system-ui, sans-serif" fontWeight="700" fontSize="12">
            CAJA NOTARIAL
          </text>
          <text x="32" y="31" fill="#8D6E63" fontFamily="system-ui, sans-serif" fontWeight="500" fontSize="9">
            DE CÓRDOBA
          </text>
        </svg>
      );
    case "cpce":
      return (
        <svg viewBox="0 0 145 40" className="h-6 w-auto" fill="currentColor">
          <rect x="2" y="10" width="20" height="20" rx="3" fill="#6A1B9A" />
          <text x="4" y="24" fill="#ffffff" fontWeight="bold" fontSize="10">DSS</text>
          <text x="28" y="21" fontFamily="system-ui, sans-serif" fontWeight="800" fontSize="13">
            CPCE
          </text>
          <text x="28" y="31" fill="#8E24AA" fontFamily="system-ui, sans-serif" fontWeight="600" fontSize="9">
            CIENCIAS ECONÓMICAS
          </text>
        </svg>
      );
    default:
      return (
        <div className="flex items-center gap-1.5 font-bold text-sm tracking-wide">
          <span className="w-2 h-2 rounded-full bg-petrol-600" />
          <span>{name}</span>
        </div>
      );
  }
};

export const ObrasSocialesMarquee: React.FC = () => {
  // Duplicate array 3 times for a truly seamless infinite marquee loop
  const loopList = [...OBRAS_SOCIALES, ...OBRAS_SOCIALES, ...OBRAS_SOCIALES];

  return (
    <section className="py-10 bg-surface border-y border-slate-200/80 relative overflow-hidden">
      {/* Subtle background ambient light */}
      <div className="absolute inset-0 bg-gradient-to-r from-petrol-50/40 via-transparent to-petrol-50/40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <div className="p-1.5 rounded-lg bg-petrol-100 text-petrol-700">
              <ShieldCheck size={18} />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-charcoal-secondary font-mono">
                Cobertura &amp; Obras Sociales
              </h3>
              <p className="text-xs text-charcoal-muted">
                Atención directa con las principales mutuales y prepagas del país.
              </p>
            </div>
          </div>

          <a
            href={`https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(
              "Hola, quisiera consultar por la cobertura de mi obra social o plan particular para atención odontológica."
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-semibold text-petrol-700 hover:text-petrol-800 transition-colors inline-flex items-center justify-center gap-1 hover:underline"
          >
            <span>¿Tu obra social no figura? Consultar cobertura</span>
            <ArrowRight size={13} />
          </a>
        </div>
      </div>

      {/* Ribbon Ticker Track with Lateral Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-surface via-surface/80 to-transparent z-10 pointer-events-none" />
        
        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-surface via-surface/80 to-transparent z-10 pointer-events-none" />

        {/* The Animated Scrolling Cinta */}
        <div className="animate-marquee py-2 flex items-center gap-4 sm:gap-6">
          {loopList.map((item, index) => (
            <div
              key={`${item.id}-${index}`}
              className="group shrink-0 px-4 py-2.5 rounded-xl border border-slate-200/90 bg-white/90 hover:bg-white hover:border-petrol-300 shadow-2xs hover:shadow-soft transition-all duration-200 flex items-center gap-2 cursor-pointer select-none"
              title={`Atención odontológica con cobertura ${item.name}`}
            >
              <div className="text-charcoal-secondary group-hover:text-charcoal transition-colors opacity-80 group-hover:opacity-100 flex items-center">
                <ObraSocialLogo id={item.id} name={item.name} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
