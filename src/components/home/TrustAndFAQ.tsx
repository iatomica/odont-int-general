"use client";

import React, { useState } from "react";
import { faqData } from "@/data/faq";
import {
  CaretDown,
  CheckCircle,
  ShieldCheck,
  CalendarBlank,
  Scan,
  Cpu,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const TrustAndFAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const trustSignals = [
    {
      title: "Atención Programada y Puntual",
      description: "Intervalos dedicados para atenderte en el horario pautado en David Luque 90, sin antesalas colmadas.",
      icon: CalendarBlank,
    },
    {
      title: "Escaneo Digital 3D en Consultorio",
      description: "Diagnóstico de precisión sin pastas desagradables ni demoras en la visualización de tu boca.",
      icon: Scan,
    },
    {
      title: "Laboratorio Propio en Gabinete",
      description: "Técnico protesista en el consultorio para ajustes inmediatos, diseño oclusal y estética dental.",
      icon: Cpu,
    },
    {
      title: "Más de 14 Obras Sociales",
      description: "Convenios directos con OSDE, Swiss Medical, Medifé, Sancor, Galeno y las principales coberturas de Córdoba.",
      icon: ShieldCheck,
    },
  ];

  return (
    <section id="faq" className="py-20 bg-surface border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Signals Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700">
              Compromiso Clínico & Profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal mt-1">
              Odontología de confianza con enfoque digital
            </h2>
            <p className="text-xs sm:text-sm text-charcoal-muted mt-2">
              Bases funcionales que garantizan previsibilidad, bienestar y comodidad en cada visita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.title}
                  className="p-5 rounded-2xl bg-surface-subtle/80 border border-surface-muted flex flex-col justify-between hover:bg-surface hover:shadow-soft transition-all"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white text-petrol-700 flex items-center justify-center border border-surface-muted shadow-sm mb-3">
                      <Icon size={18} weight="duotone" />
                    </div>
                    <h3 className="text-sm font-bold text-charcoal">{signal.title}</h3>
                    <p className="text-xs text-charcoal-muted mt-1.5 leading-relaxed">
                      {signal.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* FAQ Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700">
              Dudas Frecuentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-charcoal leading-tight">
              Preguntas habituales sobre turnos y atención
            </h3>
            <p className="text-xs sm:text-sm text-charcoal-secondary leading-relaxed">
              Encontrá respuestas rápidas sobre coberturas, tratamientos y la preparación para tu consulta en el consultorio.
            </p>

            <div className="pt-4 p-5 rounded-2xl bg-petrol-50/70 border border-petrol-200/80 space-y-3">
              <h4 className="text-xs font-bold text-petrol-900 uppercase tracking-wider">
                ¿Tenés una consulta específica?
              </h4>
              <p className="text-xs text-petrol-800 leading-relaxed">
                Escribinos de forma directa por WhatsApp y nuestro equipo de secretaría te responderá al instante.
              </p>
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Chatear al 351 317-0792</span>
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {faqData.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.question}
                  className="rounded-2xl border border-surface-muted bg-surface overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-charcoal hover:text-petrol-700 focus-visible:outline-none"
                  >
                    <span>{item.question}</span>
                    <CaretDown
                      size={16}
                      className={`text-charcoal-muted shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-petrol-700" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-charcoal-secondary leading-relaxed border-t border-slate-100 bg-surface-subtle/30">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

