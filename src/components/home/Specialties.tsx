"use client";

import React, { useState } from "react";
import { SPECIALTIES } from "@/data/specialties";
import {
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  ArrowRight,
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
    <section id="especialidades" className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F] flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-[#C5AA7A]" />
              Especialidades &amp; Armonización Facial
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2621] mt-1">
              Tratamientos integrales para tu salud y estética
            </h2>
            <p className="text-sm sm:text-base text-[#4A433C] mt-3 leading-relaxed">
              Desde prótesis fijas e implantes dentales hasta armonización facial y ortodoncia. Planes clínicos individualizados en Paraná 851, Recoleta.
            </p>
          </div>

          {/* Quick Filter Pills */}
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSelectedFilter("all")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === "all"
                  ? "bg-[#5C5144] text-white shadow-sm"
                  : "bg-white text-[#4A433C] border border-[#DFD7C7] hover:border-slate-300"
              }`}
            >
              Todas las áreas ({SPECIALTIES.length})
            </button>
            <button
              type="button"
              onClick={() => setSelectedFilter("featured")}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                selectedFilter === "featured"
                  ? "bg-[#5C5144] text-white shadow-sm"
                  : "bg-white text-[#4A433C] border border-[#DFD7C7] hover:border-slate-300"
              }`}
            >
              Tratamientos destacados
            </button>
          </div>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredSpecialties.map((spec) => {
            const whatsappText = `Hola Dr. Jamil Ortiz (JO DENTAL), quisiera consultar por un turno para ${spec.name} en el consultorio de Recoleta.`;
            const whatsappLink = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={spec.id}
                className={`bg-white rounded-2xl border transition-all duration-200 hover:shadow-elevated flex flex-col justify-between group ${
                  spec.featured
                    ? "border-[#C5AA7A]/70 ring-1 ring-[#C5AA7A]/20 shadow-soft"
                    : "border-[#E8E2D5] hover:border-[#DFD7C7]"
                }`}
              >
                <div className="p-6">
                  {/* Top Badge & Lead Doctor */}
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <span className="text-[11px] font-semibold px-2.5 py-1 rounded-md bg-[#F4EFE6] text-[#5C5144] border border-[#DFD7C7] flex items-center gap-1">
                      <UserCheck size={13} weight="bold" />
                      {spec.leadDoctor}
                    </span>
                    {spec.featured && (
                      <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-[#EADBBE] text-[#342C24]">
                        Destacado
                      </span>
                    )}
                  </div>

                  {/* Title & Short Desc */}
                  <h3 className="text-lg font-bold text-[#2B2621] tracking-tight group-hover:text-[#5C5144] transition-colors">
                    {spec.name}
                  </h3>

                  <p className="text-xs font-medium text-[#70614F] mt-1">
                    {spec.shortDesc}
                  </p>

                  <p className="text-xs text-[#4A433C] mt-3 leading-relaxed">
                    {spec.fullDesc}
                  </p>

                  {/* Key Benefits List */}
                  <div className="mt-4 pt-4 border-t border-[#F0ECE1] space-y-1.5">
                    {spec.benefits.map((b, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[#766C62]">
                        <CheckCircle size={14} weight="fill" className="text-emerald-600 shrink-0" />
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
                    className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-[#FAF8F5] hover:bg-emerald-600 text-[#4A433C] hover:text-white border border-[#DFD7C7] hover:border-emerald-600 font-semibold text-xs transition-all shadow-2xs group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
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
