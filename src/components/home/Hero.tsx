"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  WhatsappLogo,
  CheckCircle,
  MapPin,
  Phone,
  Sparkle,
  ArrowRight,
  ShieldCheck,
  CreditCard,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#2D2620] via-[#3E362F] to-[#251F1A] text-white">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C5AA7A]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 -right-32 w-[32rem] h-[32rem] bg-[#8F7D67]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(#C5AA7A_1px,transparent_1px)] [background-size:32px_32px] opacity-10 pointer-events-none" />

      {/* Main Banner Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 sm:pt-14 pb-12 lg:pb-16 relative z-10">
        {/* Top Eyebrow Badge */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-[#EADBBE] text-xs font-semibold tracking-wide uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Consultorio Odontológico &amp; Estética Facial</span>
          </div>

          <span className="hidden sm:inline-block text-xs font-medium text-[#D3C5B1]">
            Paraná 851 · Recoleta, Buenos Aires
          </span>
        </div>

        {/* Banner Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column: Big Typographic Banner Title & Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#C5AA7A] flex items-center gap-2">
                <Sparkle size={16} weight="fill" className="text-[#C5AA7A]" />
                Dr. Jamil Ortiz
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-[3.3rem] font-extrabold tracking-tight text-white leading-[1.1]">
                ODONTOLOGÍA INTEGRAL &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4EFE6] via-[#EADBBE] to-[#C5AA7A] drop-shadow-sm">
                  ARMONIZACIÓN FACIAL
                </span>
              </h1>
            </div>

            <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-xl font-normal">
              Atención dental de excelencia y estética orofacial en Recoleta. Especialistas en prótesis dentales, implantes, estética y armonización facial, en un espacio moderno y confortable a cargo del <strong>Dr. Jamil Ortiz</strong>.
            </p>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/8 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#C5AA7A]/20 text-[#EADBBE] flex items-center justify-center shrink-0 border border-[#C5AA7A]/30">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">ESTÉTICA &amp; FACIAL</div>
                  <div className="text-[11px] text-slate-300">Armonización médica</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/8 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border border-emerald-500/30">
                  <CheckCircle size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">RECOLETA</div>
                  <div className="text-[11px] text-slate-300">Paraná 851 · CABA</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-xl bg-white/8 backdrop-blur-md border border-white/10">
                <div className="w-8 h-8 rounded-lg bg-[#B8A790]/20 text-[#EADBBE] flex items-center justify-center shrink-0 border border-[#B8A790]/30">
                  <CreditCard size={18} weight="fill" />
                </div>
                <div>
                  <div className="text-xs font-bold text-white leading-tight">MEDIOS DE PAGO</div>
                  <div className="text-[11px] text-slate-300">Efectivo, Transf. y Tarjeta</div>
                </div>
              </div>
            </div>

            {/* Action Buttons: Direct WhatsApp Consultation */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base shadow-lg shadow-black/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
              >
                <WhatsappLogo size={22} weight="fill" className="text-white" />
                <span>Pedir Consulta por WhatsApp</span>
              </a>

              <Link
                href="#especialidades"
                className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/20 backdrop-blur-sm transition-all"
              >
                <span>Ver Especialidades</span>
                <ArrowRight size={16} />
              </Link>
            </div>

            {/* Micro Trust Points */}
            <div className="pt-2 flex flex-wrap items-center gap-6 text-xs text-slate-300/90">
              <span className="flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-emerald-400" />
                Atención con turno programado
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin size={16} className="text-[#C5AA7A]" />
                Paraná 851, Recoleta, Buenos Aires
              </span>
              <span className="flex items-center gap-1.5">
                <Phone size={16} className="text-[#C5AA7A]" />
                WhatsApp: {clinicConfig.phoneDisplay}
              </span>
            </div>
          </div>

          {/* Right Column: Panoramic Dental Clinic Banner Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-white/15 to-white/5 p-2 backdrop-blur-md border border-white/20 shadow-2xl group">
              <div className="relative rounded-[22px] overflow-hidden bg-[#2D2620] h-[360px] sm:h-[420px]">
                {/* Modern High-Tech Clinic Banner Image */}
                <Image
                  src="/images/hero_dental_banner.webp"
                  alt="JO DENTAL - Odontología & Armonización Facial Dr. Jamil Ortiz en Recoleta"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle gradient vignette to blend typography and cards */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                {/* Top Status Pill */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-[11px] font-bold text-[#EADBBE] border border-white/15 shadow-sm flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    JO DENTAL · Dr. Jamil Ortiz
                  </span>

                  <span className="px-2.5 py-1 rounded-full bg-white/90 text-[#483E33] text-[10px] font-extrabold uppercase tracking-wider shadow-sm">
                    Recoleta
                  </span>
                </div>

                {/* Floating Bottom Card: Clinic Location & Care Commitment */}
                <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-md p-4 rounded-2xl border border-white/15 text-left shadow-xl space-y-2">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs font-bold text-white tracking-wide flex items-center gap-1.5">
                        <MapPin size={14} className="text-[#C5AA7A]" />
                        Paraná 851, Recoleta
                      </div>
                      <div className="text-[11px] font-medium text-slate-300 mt-0.5">
                        Ciudad Autónoma de Buenos Aires
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-bold border border-emerald-500/30 shrink-0">
                      Turno Previo
                    </span>
                  </div>

                  <div className="pt-2 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-300">
                    <span className="text-[#EADBBE] font-semibold">Odontología &amp; Armonización Facial</span>
                    <span>Pagos con Tarjeta, Efectivo o Transf.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Banner Info Bar */}
      <div className="bg-[#1C1713] border-t border-white/10 py-3 px-4 text-xs text-slate-300">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-emerald-400 font-bold">●</span>
            <span className="font-medium text-white">Consultas y turnos inmediatos:</span>
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#C5AA7A] hover:text-white underline font-semibold flex items-center gap-1"
            >
              WhatsApp {clinicConfig.phoneDisplay}
            </a>
          </div>

          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <span>Paraná 851, Recoleta, CABA</span>
            <span>·</span>
            <span>{clinicConfig.hours}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
