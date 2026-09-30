"use client";

import React from "react";
import {
  WhatsappLogo,
  Check,
  MapPin,
  Phone,
  InstagramLogo,
  CreditCard,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#2D2620] via-[#3E362F] to-[#251F1A] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#C5AA7A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-[#8F7D67]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-[#EADBBE] text-xs font-semibold uppercase tracking-wider border border-white/10 backdrop-blur-md">
          JO DENTAL · Dr. Jamil Ortiz
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Cuidá tu sonrisa y armonía facial <br className="hidden sm:inline" />
          con atención exclusiva en Recoleta.
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Coordiná tu cita con el Dr. Jamil Ortiz hoy mismo por WhatsApp. Planes personalizados en Paraná 851 con facilidades de pago en efectivo, transferencia y tarjetas.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-base shadow-xl shadow-black/50 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
          >
            <WhatsappLogo size={24} weight="fill" className="text-white" />
            <span>Solicitar Turno por WhatsApp</span>
          </a>

          <a
            href={clinicConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
          >
            <InstagramLogo size={20} className="text-pink-400" />
            <span>Seguinos en Instagram (@dr.jamil_ortiz)</span>
          </a>
        </div>

        {/* Contact Strip */}
        <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-300">
          <a
            href={clinicConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <MapPin size={16} className="text-[#C5AA7A]" />
            <span>Paraná 851, Recoleta, Buenos Aires</span>
          </a>
          <a
            href={`tel:${clinicConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={16} className="text-[#C5AA7A]" />
            <span>WhatsApp: {clinicConfig.phoneDisplay}</span>
          </a>
          <span className="flex items-center gap-1.5 text-[#EADBBE] font-medium">
            <CreditCard size={16} weight="fill" className="text-[#C5AA7A]" />
            Efectivo, Transferencia y Tarjetas
          </span>
        </div>
      </div>
    </section>
  );
};
