"use client";

import React, { useState } from "react";
import { SPECIALTIES, Specialty } from "@/data/specialties";
import {
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  UserCheck,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface SpecialtiesProps {
  onSelectSpecialty: (specialtyId: string) => void;
}

export const Specialties: React.FC<SpecialtiesProps> = ({ onSelectSpecialty }) => {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const filteredSpecialties = SPECIALTIES.filter((s) => {
    if (selectedFilter === "featured") return s.featured;
    return true;
  });

  return (
    <section id="especialidades" className="py-20 bg-background border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-petrol-600" />
              Especialidades y Servicios Integrados
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-1">
              Atención dental avanzada para cada necesidad
            </h2>
            <p className="text-sm sm:text-base text-charcoal-secondary mt-3 leading-relaxed">
              Un cuerpo profesional completo que aborda desde la prevención y estética dental hasta cirugías e implantes de alta complejidad, con tecnología de escaneo 3D y laboratorio propio.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === "all"
                  ? "bg-petrol-700 text-white shadow-sm"
                  : "bg-surface text-charcoal-secondary border border-surface-muted hover:border-slate-300"
              }`}
            >
              Todas las áreas ({SPECIALTIES.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter("featured")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === "featured"
                  ? "bg-petrol-700 text-white shadow-sm"
                  : "bg-surface text-charcoal-secondary border border-surface-muted hover:border-slate-300"
              }`}
            >
              Principales tratamientos
            </button>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSpecialties.map((spec) => {
            const whatsappText = `Hola equipo de Odontología Integral General, quisiera consultar por un turno para la especialidad de ${spec.name} en el consultorio.`;
            const whatsappLink = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={spec.id}
                className={`bg-surface rounded-2xl border transition-all duration-200 hover:shadow-elevated flex flex-col justify-between group ${
                  spec.featured
                    ? "border-petrol-300/80 ring-1 ring-petrol-500/10 shadow-soft"
                    : "border-surface-muted hover:border-slate-300"
                }`}
              >
                <div className="p-6">
                  {/* Top Badge & Lead Doctor */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-petrol-50 text-petrol-800 border border-petrol-100 flex items-center gap-1">
                      <UserCheck size={13} weight="bold" />
                      {spec.leadDoctor}
                    </span>
                    {spec.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg sm:text-xl font-bold text-charcoal tracking-tight group-hover:text-petrol-700 transition-colors">
                    {spec.name}
                  </h3>

                  <p className="text-xs sm:text-sm font-medium text-petrol-900/80 mt-1">
                    {spec.shortDesc}
                  </p>

                  <p className="text-xs text-charcoal-secondary mt-3 leading-relaxed">
                    {spec.fullDesc}
                  </p>

                  {/* Key Benefits List */}
                  <div className="mt-4 pt-4 border-t border-surface-muted space-y-1.5">
                    {spec.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-charcoal-muted">
                        <CheckCircle size={14} weight="fill" className="text-emerald-500 shrink-0" />
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Direct WhatsApp Consultation Button */}
                <div className="p-6 pt-0">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-petrol-50 hover:bg-emerald-600 text-petrol-800 hover:text-white border border-petrol-200/80 hover:border-emerald-600 font-semibold text-xs transition-all shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
                  >
                    <WhatsappLogo size={16} weight="fill" className="text-emerald-600 group-hover:text-white transition-colors" />
                    <span>Consultar por WhatsApp</span>
                    <ArrowRight size={13} className="ml-auto opacity-70" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

