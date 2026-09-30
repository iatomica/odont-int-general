"use client";

import React, { useState } from "react";
import {
  CalendarBlank,
  Sparkle,
  WhatsappLogo,
  ArrowUpRight,
  CreditCard,
  MapPin,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface QuickAccessProps {
  onOpenBooking: () => void;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-10 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F]">
              Gestiones Rápidas
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-[#2B2621]">
              Atención directa para pacientes
            </h2>
          </div>
          <p className="text-xs text-[#766C62] max-w-sm">
            Accedé de forma directa a reservas de turnos, consultas sobre coberturas y ubicación de nuestro consultorio en Recoleta.
          </p>
        </div>

        {/* Asymmetrical Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Primary Action Card: Reservar Turno (Width: 5 cols) */}
          <div
            onClick={onOpenBooking}
            className="md:col-span-5 bg-gradient-to-br from-[#483E33] to-[#251F1A] text-white rounded-2xl p-6 cursor-pointer hover:shadow-elevated transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#EADBBE]">
                  <CalendarBlank size={24} weight="duotone" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-[#EADBBE] flex items-center gap-1">
                  Atención Exclusiva <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg font-bold mt-4 text-white">
                Coordiná tu turno con el Dr. Jamil Ortiz
              </h3>
              <p className="text-xs text-[#D3C5B1] mt-1 leading-relaxed">
                Seleccioná la especialidad odontológica o consulta de armonización facial y agendá tu cita en Recoleta.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
              <span>Iniciar reserva online</span>
              <span className="text-[#C5AA7A]">Paraná 851</span>
            </div>
          </div>

          {/* Secondary Card: Armonización Facial (Width: 3 cols) */}
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-3 bg-white rounded-2xl p-6 border border-[#DFD7C7] hover:border-[#C5AA7A] hover:shadow-soft transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#5C5144] flex items-center justify-center">
                <Sparkle size={22} weight="duotone" />
              </div>
              <h3 className="text-base font-bold text-[#2B2621] mt-4 group-hover:text-[#5C5144] transition-colors">
                Armonización Facial
              </h3>
              <p className="text-xs text-[#766C62] mt-1 leading-relaxed">
                Procedimientos estéticos de perfilado, labios y armonía orofacial en consultorio habilitado.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-[#5C5144]">
              <span>Consultar valoración</span>
              <ArrowUpRight size={14} />
            </div>
          </a>

          {/* Third Card: Medios de Pago (Width: 2 cols) */}
          <div
            className="md:col-span-2 bg-white rounded-2xl p-6 border border-[#DFD7C7] flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-[#F4EFE6] text-[#5C5144] flex items-center justify-center">
                <CreditCard size={22} weight="duotone" />
              </div>
              <h3 className="text-base font-bold text-[#2B2621] mt-4">
                Medios de Pago
              </h3>
              <p className="text-xs text-[#766C62] mt-1 leading-relaxed">
                Efectivo, transferencia bancaria y tarjetas de débito/crédito.
              </p>
            </div>
            <div className="mt-6 text-xs text-[#5C5144] font-medium">
              Opciones flexibles
            </div>
          </div>

          {/* Fourth Card: WhatsApp Directo (Width: 2 cols) */}
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 bg-emerald-50/70 rounded-2xl p-6 border border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <WhatsappLogo size={24} weight="duotone" />
              </div>
              <h3 className="text-base font-bold text-emerald-950 mt-4">
                WhatsApp
              </h3>
              <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">
                {clinicConfig.phoneDisplay} · Respuestas ágiles.
              </p>
            </div>
            <div className="mt-6 text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <span>Chatear ahora</span>
              <ArrowUpRight size={14} />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};
