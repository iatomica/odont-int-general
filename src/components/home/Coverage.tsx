"use client";

import React, { useState } from "react";
import { OBRAS_SOCIALES } from "@/config/clinic";
import {
  WhatsappLogo,
  CheckCircle,
  CreditCard,
  FileText,
  ShieldCheck,
  MagnifyingGlass,
  ArrowRight,
  Info,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const Coverage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedOS, setSelectedOS] = useState<string>("osde");

  const filteredObrasSociales = OBRAS_SOCIALES.filter((os) =>
    os.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const currentOS = OBRAS_SOCIALES.find((os) => os.id === selectedOS) || OBRAS_SOCIALES[0];

  const whatsappInquiryUrl = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(
    `Hola equipo de Odontología Integral General, quisiera consultar la cobertura y requisitos para atenderme con mi obra social ${currentOS.name}.`
  )}`;

  return (
    <section id="obras-sociales" className="py-20 bg-background border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700 flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} weight="fill" className="text-petrol-600" />
            Convenios y Obras Sociales Aceptadas
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-1">
            Atendemos las principales obras sociales y prepagas
          </h2>
          <p className="text-sm sm:text-base text-charcoal-secondary mt-3">
            Trabajamos con convenios directos y reintegros ágiles para que puedas acceder a la mejor odontología en Córdoba Capital sin trámites engorrosos.
          </p>
        </div>

        {/* Interactive Coverage Explorer */}
        <div className="max-w-4xl mx-auto bg-surface rounded-3xl border border-surface-muted p-6 sm:p-8 shadow-soft">
          {/* Search Input */}
          <div className="relative mb-6">
            <MagnifyingGlass size={18} className="absolute left-4 top-3.5 text-charcoal-muted" />
            <input
              type="text"
              placeholder="Buscá tu obra social o prepaga (ej. OSDE, Swiss Medical, Medifé...)"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-surface-muted bg-surface-subtle/50 text-sm text-charcoal focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:outline-none transition-all"
            />
          </div>

          {/* Obras Sociales Pills Grid */}
          <div className="flex flex-wrap gap-2.5 mb-8">
            {filteredObrasSociales.map((os) => {
              const isSelected = selectedOS === os.id;
              return (
                <button
                  key={os.id}
                  type="button"
                  onClick={() => setSelectedOS(os.id)}
                  className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-2 ${
                    isSelected
                      ? "bg-petrol-800 text-white shadow-sm ring-2 ring-petrol-600/30"
                      : "bg-surface-subtle text-charcoal-secondary border border-surface-muted hover:border-slate-300 hover:text-charcoal"
                  }`}
                >
                  <span
                    className="w-2 h-2 rounded-full shrink-0"
                    style={{ backgroundColor: os.color }}
                  />
                  <span>{os.name}</span>
                </button>
              );
            })}
          </div>

          {/* Detailed Selected Coverage Card */}
          <div className="rounded-2xl bg-surface-subtle/60 border border-slate-200/80 p-6 sm:p-7 space-y-5">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-surface-muted pb-4">
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-bold text-white text-base shadow-sm"
                  style={{ backgroundColor: currentOS.color }}
                >
                  {currentOS.name.slice(0, 2).toUpperCase()}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-charcoal">{currentOS.name}</h3>
                  <span className="text-xs text-emerald-700 font-medium flex items-center gap-1">
                    <CheckCircle size={14} weight="fill" />
                    Convenio activo en consultorio
                  </span>
                </div>
              </div>

              <a
                href={whatsappInquiryUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-sm transition-all"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Validar mi plan por WhatsApp</span>
                <ArrowRight size={13} />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
              <div className="p-3.5 bg-surface rounded-xl border border-surface-muted">
                <span className="font-semibold text-charcoal block mb-1">
                  Atención Primaria & Limpieza
                </span>
                <p className="text-charcoal-muted leading-relaxed">
                  Diagnóstico general, profilaxis ultrasónica, inactivación de caries y radiografías de control.
                </p>
              </div>

              <div className="p-3.5 bg-surface rounded-xl border border-surface-muted">
                <span className="font-semibold text-charcoal block mb-1">
                  Especialidades & Complejidad
                </span>
                <p className="text-charcoal-muted leading-relaxed">
                  Endodoncia, periodoncia, ortodoncia e implantes según el plan y módulo contratado en {currentOS.name}.
                </p>
              </div>

              <div className="p-3.5 bg-surface rounded-xl border border-surface-muted">
                <span className="font-semibold text-charcoal block mb-1">
                  ¿Qué documentación traer?
                </span>
                <p className="text-charcoal-muted leading-relaxed">
                  Credencial digital en el celular + DNI. Gestionamos la autorización en recepción para tu comodidad.
                </p>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-2 text-[11px] text-charcoal-muted">
              <Info size={14} className="text-petrol-600 shrink-0" />
              <span>
                ¿Tenés otra cobertura o consulta particular? También emitimos factura electrónica para reintegros inmediatos.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

