"use client";

import React from "react";
import { clinicConfig, PAYMENT_METHODS } from "@/config/clinic";
import {
  ShieldCheck,
  ArrowRight,
  CreditCard,
  MapPin,
  Sparkle,
  WhatsappLogo,
  CheckCircle
} from "@phosphor-icons/react";

const TRUST_TAGS = [
  {
    icon: Sparkle,
    label: "Armonización Facial & Estética Dental",
    color: "#C5AA7A"
  },
  {
    icon: MapPin,
    label: "Paraná 851 · Recoleta, Buenos Aires",
    color: "#70614F"
  },
  {
    icon: CreditCard,
    label: "Medios de Pago: Efectivo, Transferencia y Tarjetas",
    color: "#5C5144"
  },
  {
    icon: CheckCircle,
    label: "Atención Exclusiva Dr. Jamil Ortiz",
    color: "#2E7D32"
  },
  {
    icon: ShieldCheck,
    label: "Obras Sociales & Reintegros: Consultar por WhatsApp",
    color: "#1565C0"
  },
  {
    icon: WhatsappLogo,
    label: "Turnos WhatsApp: 11 2631-7923",
    color: "#25D366"
  }
];

export const ObrasSocialesMarquee: React.FC = () => {
  const loopList = [...TRUST_TAGS, ...TRUST_TAGS, ...TRUST_TAGS];

  return (
    <section className="py-6 bg-[#F4EFE6] border-y border-[#E8E2D5] relative overflow-hidden">
      {/* Ribbon Ticker Track with Lateral Fade Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#F4EFE6] to-transparent z-10 pointer-events-none" />
        
        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#F4EFE6] to-transparent z-10 pointer-events-none" />

        {/* The Animated Scrolling Cinta */}
        <div className="animate-marquee py-1.5 flex items-center gap-4 sm:gap-6">
          {loopList.map((item, index) => {
            const IconComp = item.icon;
            return (
              <div
                key={index}
                className="group shrink-0 px-4 py-2 rounded-xl border border-[#DFD7C7] bg-white/95 hover:bg-white shadow-2xs transition-all duration-200 flex items-center gap-2.5 select-none"
              >
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center text-xs shrink-0"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  <IconComp size={15} weight="fill" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#4A433C] tracking-tight">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
