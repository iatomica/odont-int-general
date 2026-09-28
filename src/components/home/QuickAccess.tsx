"use client";

import React, { useState } from "react";
import {
  CalendarBlank,
  VideoCamera,
  FileText,
  WhatsappLogo,
  ArrowUpRight,
  CheckCircle,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface QuickAccessProps {
  onOpenBooking: () => void;
}

export const QuickAccess: React.FC<QuickAccessProps> = ({ onOpenBooking }) => {
  const [resultsModalOpen, setResultsModalOpen] = useState(false);

  return (
    <section className="py-10 bg-surface border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-2">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700">
              Gestiones Rápidas
            </span>
            <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-charcoal">
              Autogestión para pacientes
            </h2>
          </div>
          <p className="text-xs text-charcoal-muted max-w-sm">
            Accedé de forma directa a reservas, videoconsultas, órdenes médicas y contacto directo con recepción.
          </p>
        </div>

        {/* Asymmetrical Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Primary Action Card: Reservar Turno (Width: 5 cols) */}
          <div
            onClick={onOpenBooking}
            className="md:col-span-5 bg-gradient-to-br from-petrol-800 to-petrol-900 text-white rounded-2xl p-6 cursor-pointer hover:shadow-elevated transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white">
                  <CalendarBlank size={24} weight="duotone" />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-white/10 text-petrol-100 flex items-center gap-1">
                  Recomendado <ArrowUpRight size={14} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg font-bold mt-4 text-white">
                Turnos online autogestionables
              </h3>
              <p className="text-xs text-petrol-200 mt-1 leading-relaxed">
                Elegí especialidad, profesional, día y horario sin llamadas telefónicas ni esperas de recepción.
              </p>
            </div>
            <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs font-semibold text-white">
              <span>Iniciar reserva inmediata</span>
              <span className="text-petrol-200">24/7 disponible</span>
            </div>
          </div>

          {/* Secondary Card: Teleconsulta (Width: 3 cols) */}
          <div
            onClick={onOpenBooking}
            className="md:col-span-3 bg-surface rounded-2xl p-6 border border-surface-muted hover:border-petrol-400 hover:shadow-soft transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center">
                <VideoCamera size={22} weight="duotone" />
              </div>
              <h3 className="text-base font-bold text-charcoal mt-4 group-hover:text-petrol-700 transition-colors">
                Teleconsulta médica
              </h3>
              <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                Consultas a distancia por videollamada para clínica médica, psicología y nutrición.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-1 text-xs font-semibold text-petrol-700">
              <span>Ver disponibilidad</span>
              <ArrowUpRight size={14} />
            </div>
          </div>

          {/* Third Card: Estudios & Resultados (Width: 2 cols or 4 cols split) */}
          <div
            onClick={() => setResultsModalOpen(true)}
            className="md:col-span-2 bg-surface rounded-2xl p-6 border border-surface-muted hover:border-slate-300 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-slate-100 text-charcoal flex items-center justify-center">
                <FileText size={22} weight="duotone" />
              </div>
              <h3 className="text-base font-bold text-charcoal mt-4">
                Estudios y recetas
              </h3>
              <p className="text-xs text-charcoal-muted mt-1 leading-relaxed">
                Acceso digital y descarga de órdenes médicas emitidas.
              </p>
            </div>
            <div className="mt-6 text-xs text-charcoal-secondary font-medium">
              Portal paciente →
            </div>
          </div>

          {/* Fourth Card: WhatsApp Recepción (Width: 2 cols) */}
          <a
            href={clinicConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="md:col-span-2 bg-emerald-50/50 rounded-2xl p-6 border border-emerald-200/80 hover:bg-emerald-50 hover:border-emerald-400 transition-all duration-200 group flex flex-col justify-between"
          >
            <div>
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <WhatsappLogo size={24} weight="duotone" />
              </div>
              <h3 className="text-base font-bold text-emerald-950 mt-4">
                WhatsApp
              </h3>
              <p className="text-xs text-emerald-800/80 mt-1 leading-relaxed">
                Recepción y consultas puntuales con secretaría.
              </p>
            </div>
            <div className="mt-6 text-xs font-semibold text-emerald-700 flex items-center gap-1">
              <span>Chatear ahora</span>
              <ArrowUpRight size={14} />
            </div>
          </a>
        </div>

        {/* Demo modal for "Estudios y recetas" */}
        {resultsModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/50 backdrop-blur-sm">
            <div className="bg-surface rounded-2xl p-6 max-w-md w-full border border-surface-muted shadow-modal space-y-4">
              <div className="flex items-center gap-2 text-petrol-700">
                <CheckCircle size={22} weight="fill" />
                <h4 className="font-bold text-charcoal text-base">Portal de Estudios (Módulo Demo)</h4>
              </div>
              <p className="text-xs text-charcoal-secondary leading-relaxed">
                En la versión final conectada al centro de salud, los pacientes ingresan con DNI y código de seguridad para visualizar informes de laboratorio, ecografías y recetas electrónicas emitidas en consulta.
              </p>
              <div className="p-3 bg-surface-subtle rounded-xl text-[11px] text-charcoal-muted">
                Este módulo se personaliza según el sistema de gestión del centro médico o laboratorio asociado.
              </div>
              <button
                onClick={() => setResultsModalOpen(false)}
                className="w-full py-2 px-4 rounded-full bg-charcoal text-white text-xs font-medium hover:bg-black transition-colors"
              >
                Cerrar vista previa
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
