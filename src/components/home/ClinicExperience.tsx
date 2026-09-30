"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkle,
  ShieldCheck,
  Clock,
  WhatsappLogo,
  CheckCircle,
  Heart,
  MapPin,
  CreditCard
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const ClinicExperience: React.FC = () => {
  return (
    <section id="armonizacion-facial" className="py-20 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Photographic Gallery with Aesthetic Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-[#DFD7C7] h-56 sm:h-64 bg-[#F4EFE6]">
                <Image
                  src="/images/hero_dental_banner.webp"
                  alt="Estética y armonización facial en JO DENTAL Recoleta"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Armonización Facial &amp; Estética
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-[#DFD7C7] h-40 sm:h-48 bg-[#F4EFE6]">
                <Image
                  src="/images/dental_care_patient.webp"
                  alt="Atención odontológica en Paraná 851, Recoleta"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Atención en Consultorio Privado
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-[#DFD7C7] h-40 sm:h-48 bg-[#F4EFE6]">
                <Image
                  src="/images/dental_smile_healthy.webp"
                  alt="Sonrisas naturales y luminosas"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-black/75 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Resultados Naturales
                </div>
              </div>

              {/* Aesthetic Card Highlight */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-[#483E33] to-[#251F1A] text-white flex flex-col justify-between h-56 sm:h-64 border border-[#5C5144] shadow-soft">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-[#EADBBE] flex items-center justify-center mb-3">
                    <Sparkle size={20} weight="fill" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Armonización Orofacial &amp; Sonrisa
                  </h4>
                  <p className="text-xs text-[#D3C5B1] mt-2 leading-relaxed">
                    Un enfoque integral que equilibra labios, mentón y líneas de expresión en total sintonía con tu diseño de sonrisa.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-[#EADBBE] flex items-center gap-1.5 pt-2 border-t border-white/10">
                  <CheckCircle size={14} weight="fill" className="text-emerald-400" />
                  <span>Procedimientos médicos seguros</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Experience & Care Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F] flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-[#C5AA7A]" />
              Experiencia Boutique en Recoleta
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2621] leading-tight">
              Excelencia clínica en un ambiente cálido y exclusivo
            </h2>

            <p className="text-sm sm:text-base text-[#4A433C] leading-relaxed">
              En <strong>JO DENTAL</strong> combinamos la ciencia odontológica más rigurosa con un agudo sentido de la estética facial. Nuestro objetivo es que te sientas cómodo y seguro en cada etapa de tu tratamiento en Paraná 851.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5]">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] text-[#5C5144] flex items-center justify-center shrink-0 border border-[#DFD7C7]">
                  <Sparkle size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2B2621]">
                    Armonización Facial &amp; Estética Dental
                  </h4>
                  <p className="text-xs text-[#766C62] mt-0.5 leading-relaxed">
                    Evaluamos las proporciones faciales completas para complementar tratamientos de carillas, blanqueamiento y prótesis con perfilado y rejuvenecimiento orofacial.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5]">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] text-[#5C5144] flex items-center justify-center shrink-0 border border-[#DFD7C7]">
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2B2621]">
                    Prótesis &amp; Rehabilitación Libre de Metal
                  </h4>
                  <p className="text-xs text-[#766C62] mt-0.5 leading-relaxed">
                    Utilizamos cerámicas de alta resistencia y zirconio puro que se adaptan con absoluta precisión a tus encías sin generar sombras grises.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[#FAF8F5] border border-[#E8E2D5]">
                <div className="w-9 h-9 rounded-xl bg-[#F4EFE6] text-[#5C5144] flex items-center justify-center shrink-0 border border-[#DFD7C7]">
                  <Clock size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#2B2621]">
                    Puntualidad &amp; Atención con Turno Exclusivo
                  </h4>
                  <p className="text-xs text-[#766C62] mt-0.5 leading-relaxed">
                    Respetamos tu tiempo personal. Trabajamos con turnos espaciados para brindarte dedicación plena en el corazón de Recoleta.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Consultar por un plan de tratamiento</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
