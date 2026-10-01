"use client";

import React from "react";
import Image from "next/image";
import { PROFESSIONALS, SUPPORT_TEAM } from "@/data/professionals";
import {
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  ShieldCheck,
  InstagramLogo,
  MapPin
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface ProfessionalsProps {
  onSelectProfessional: (profId: string) => void;
}

export const Professionals: React.FC<ProfessionalsProps> = ({ onSelectProfessional }) => {
  return (
    <section id="dr-jamil-ortiz" className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F] flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-[#C5AA7A]" />
              Dirección Médica &amp; Especialista
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2621] mt-1">
              Atención personalizada con el Dr. Jamil Ortiz
            </h2>
            <p className="text-sm sm:text-base text-[#4A433C] mt-3 leading-relaxed">
              En JO DENTAL cada diagnóstico y procedimiento es guiado por un criterio estético de excelencia, integrando la salud dental de vanguardia con la armonía de tus facciones.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-[#5C5144] bg-[#F4EFE6] px-4 py-2.5 rounded-xl border border-[#DFD7C7]">
            <ShieldCheck size={18} className="text-emerald-600" />
            <span>Consultorio Habilitado en Recoleta</span>
          </div>
        </div>

        {/* Doctor Feature Card Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12">
          {/* Doctor Portrait */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden bg-white border border-[#DFD7C7] shadow-elevated group">
              <div className="relative h-[440px] sm:h-[480px] w-full bg-[#3E362F]">
                <Image
                  src="/images/dr_jamil_ortiz_hd.jpg"
                  alt="Dr. Jamil Ortiz - JO DENTAL Recoleta"
                  fill
                  className="object-cover object-[center_20%] group-hover:scale-103 transition-transform duration-700 ease-out"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="px-3 py-1 rounded-full bg-[#C5AA7A] text-slate-950 text-[10px] font-bold uppercase tracking-wider inline-block mb-1 shadow-sm">
                    Director Médico
                  </span>
                  <h3 className="text-xl font-bold">Dr. Jamil Ortiz</h3>
                  <p className="text-xs text-slate-300">Odontología Integral, Estética &amp; Armonización Facial</p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Bio and Highlights */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F4EFE6] text-xs font-bold text-[#5C5144]">
                <MapPin size={14} className="text-[#C5AA7A]" />
                <span>Paraná 851, Recoleta</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-[#2B2621]">
                Compromiso con la estética, la función y tu bienestar
              </h3>
              <p className="text-sm sm:text-base text-[#4A433C] leading-relaxed">
                El <strong>Dr. Jamil Ortiz</strong> lidera JO DENTAL bajo una filosofía de atención cercana y meticulosa. No creemos en tratamientos estandarizados: nos tomamos el tiempo para escuchar tus expectativas, evaluar tu estructura facial y diseñar una sonrisa luminosa, sana y equilibrada.
              </p>
            </div>

            {/* Specialties Badges */}
            <div className="space-y-2 pt-1">
              <span className="text-xs font-bold uppercase tracking-wider text-[#766C62]">
                Áreas de Especialización:
              </span>
              <div className="flex flex-wrap gap-2">
                {[
                  "Prótesis Dentales",
                  "Armonización Facial",
                  "Implantes Dentales",
                  "Operatoria & Estética",
                  "Endodoncia",
                  "Ortodoncia",
                  "Periodoncia",
                  "Odontopediatría"
                ].map((spec) => (
                  <span
                    key={spec}
                    className="text-xs font-semibold text-[#4A433C] bg-white px-3 py-1.5 rounded-xl border border-[#DFD7C7] shadow-2xs"
                  >
                    {spec}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions: WhatsApp + Instagram */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Consultar con el Dr. Jamil Ortiz</span>
              </a>

              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-white hover:bg-[#F4EFE6] text-[#4A433C] font-semibold text-sm border border-[#DFD7C7] transition-all shadow-2xs"
              >
                <InstagramLogo size={18} className="text-pink-600" />
                <span>{clinicConfig.instagramHandle}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Support Staff Banner: Reception & Care */}
        <div className="bg-white rounded-2xl border border-[#DFD7C7] p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h3 className="text-base sm:text-lg font-bold text-[#2B2621]">
              Atención al Paciente &amp; Protocolos Clínicos
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT_TEAM.map((staff, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-[#2B2621]">{staff.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-[#F4EFE6] text-[#5C5144]">
                      Recoleta
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-[#70614F] mb-2">
                    {staff.role}
                  </div>
                  <p className="text-xs text-[#4A433C] leading-relaxed">
                    {staff.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
