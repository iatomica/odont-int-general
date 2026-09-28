"use client";

import React from "react";
import Image from "next/image";
import { PROFESSIONALS, SUPPORT_TEAM, Professional } from "@/data/professionals";
import {
  WhatsappLogo,
  CheckCircle,
  Sparkle,
  IdentificationBadge,
  UserCheck,
  ShieldCheck,
  Stethoscope,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface ProfessionalsProps {
  onSelectProfessional: (profId: string) => void;
}

export const Professionals: React.FC<ProfessionalsProps> = ({ onSelectProfessional }) => {
  return (
    <section id="equipo" className="py-20 bg-background border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-petrol-600" />
              Cuerpo Profesional & Equipo Clínico
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-1">
              Especialistas con matrícula y formación continua
            </h2>
            <p className="text-sm sm:text-base text-charcoal-secondary mt-3 leading-relaxed">
              Profesionales especializados en cada rama odontológica, con dirección general de la Dra. Karina Orpianesi. Cada tratamiento es planificado con dedicación exclusiva y criterio multidisciplinario.
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-petrol-800 bg-petrol-50 px-4 py-2 rounded-xl border border-petrol-200">
            <ShieldCheck size={18} className="text-emerald-600" />
            <span>Matrículas Profesionales Verificadas</span>
          </div>
        </div>

        {/* 4 Doctors Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {PROFESSIONALS.map((prof) => {
            const whatsappText = `Hola Dra. Karina Orpianesi y equipo, quisiera solicitar un turno de atención con ${prof.name} (${prof.license}).`;
            const whatsappLink = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(whatsappText)}`;

            return (
              <div
                key={prof.id}
                className={`bg-surface rounded-2xl border overflow-hidden flex flex-col justify-between transition-all duration-200 hover:shadow-elevated group ${
                  prof.isDirector
                    ? "border-petrol-400 ring-1 ring-petrol-500/20 shadow-soft"
                    : "border-surface-muted hover:border-slate-300"
                }`}
              >
                <div>
                  {/* Doctor Photo */}
                  <div className="relative h-64 sm:h-60 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={prof.image}
                      alt={prof.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-md text-[11px] font-bold bg-white/95 text-petrol-900 shadow-sm backdrop-blur-sm">
                        {prof.badge}
                      </span>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-petrol-900/90 text-cyan-200 backdrop-blur-sm">
                        {prof.license}
                      </span>
                    </div>
                  </div>

                  {/* Doctor Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-bold text-charcoal tracking-tight group-hover:text-petrol-700 transition-colors">
                      {prof.name}
                    </h3>

                    <p className="text-xs text-petrol-800 font-semibold mt-0.5">
                      {prof.role}
                    </p>

                    <p className="text-xs text-charcoal-secondary mt-2.5 leading-relaxed line-clamp-3">
                      {prof.bio}
                    </p>

                    {/* Specialties pills */}
                    <div className="mt-4 pt-3 border-t border-surface-muted">
                      <div className="flex flex-wrap gap-1">
                        {prof.specialties.map((spec) => (
                          <span
                            key={spec}
                            className="inline-block text-[10px] font-medium text-slate-700 bg-surface-subtle px-2 py-0.5 rounded border border-surface-muted"
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct WhatsApp Consultation */}
                <div className="p-5 pt-0">
                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl bg-petrol-50 hover:bg-emerald-600 text-petrol-800 hover:text-white border border-petrol-200/80 hover:border-emerald-600 font-semibold text-xs transition-all shadow-sm group-hover:bg-emerald-600 group-hover:text-white group-hover:border-emerald-600"
                  >
                    <WhatsappLogo size={15} weight="fill" className="text-emerald-600 group-hover:text-white" />
                    <span>Pedir turno con {prof.name.split(" ")[1]}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Support Staff Banner: Dental Lab & Reception */}
        <div className="bg-surface rounded-2xl border border-surface-muted p-6 sm:p-8 shadow-soft">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
            <h3 className="text-base sm:text-lg font-bold text-charcoal">
              Equipo de Apoyo Clínico & Laboratorio Integrado
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {SUPPORT_TEAM.map((staff, idx) => (
              <div
                key={idx}
                className="p-5 rounded-xl bg-surface-subtle/80 border border-slate-200/80 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="text-sm font-bold text-charcoal">{staff.name}</h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-petrol-100/70 text-petrol-800">
                      Gabinete Activo
                    </span>
                  </div>
                  <div className="text-xs font-semibold text-petrol-700 mb-2">
                    {staff.role}
                  </div>
                  <p className="text-xs text-charcoal-secondary leading-relaxed">
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

