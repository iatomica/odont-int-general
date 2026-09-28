"use client";

import React from "react";
import {
  WhatsappLogo,
  Check,
  MapPin,
  Phone,
  InstagramLogo,
  ArrowRight,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface FinalCTAProps {
  onOpenBooking: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-[#062429] via-[#0b353c] to-[#07252a] text-white relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-20 left-10 w-80 h-80 bg-teal-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-6">
        <span className="inline-block px-3.5 py-1.5 rounded-full bg-white/10 text-cyan-200 text-xs font-semibold uppercase tracking-wider border border-white/10 backdrop-blur-md">
          Odontología Integral General
        </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          Cuidá tu salud bucal con especialistas <br className="hidden sm:inline" />
          y tecnología de vanguardia en Córdoba.
        </h2>

        <p className="text-sm sm:text-base text-slate-200 max-w-2xl mx-auto leading-relaxed">
          Coordiná tu consulta odontológica hoy mismo por WhatsApp. Atendemos más de 14 obras sociales y consultas particulares con diagnóstico digital en David Luque 90.
        </p>

        {/* Action Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-full bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold text-base shadow-xl shadow-emerald-950/50 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <WhatsappLogo size={24} weight="fill" className="text-slate-950" />
            <span>Solicitar Turno por WhatsApp</span>
          </a>

          <a
            href={clinicConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/20 text-white font-semibold text-sm border border-white/20 backdrop-blur-md transition-all"
          >
            <InstagramLogo size={20} className="text-pink-400" />
            <span>Seguinos en Instagram</span>
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
            <MapPin size={16} className="text-cyan-300" />
            <span>David Luque 90, B° General Paz, Córdoba</span>
          </a>
          <a
            href={`tel:${clinicConfig.phone}`}
            className="flex items-center gap-1.5 hover:text-white transition-colors"
          >
            <Phone size={16} className="text-cyan-300" />
            <span>Tel: 351 317-0792</span>
          </a>
          <span className="flex items-center gap-1.5 text-emerald-400 font-medium">
            <Check size={14} weight="bold" />
            14+ Obras Sociales Aceptadas
          </span>
        </div>
      </div>
    </section>
  );
};

