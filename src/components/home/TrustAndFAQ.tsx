"use client";

import React, { useState } from "react";
import { FAQ_ITEMS } from "@/data/faq";
import {
  CaretDown,
  CheckCircle,
  ShieldCheck,
  CalendarBlank,
  Sparkle,
  CreditCard,
  MapPin,
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
      title: "Atención Exclusiva en Recoleta",
      description: "Consultorio privado en Paraná 851, con intervalos que garantizan puntualidad y confort.",
      icon: MapPin,
    },
    {
      title: "Dr. Jamil Ortiz",
      description: "Evaluación clínica meticulosa y seguimiento profesional de principio a fin.",
      icon: ShieldCheck,
    },
    {
      title: "Armonización Facial & Sonrisa",
      description: "Criterio estético integral para realzar la belleza natural de tu rostro y tus dientes.",
      icon: Sparkle,
    },
    {
      title: "Flexibilidad de Pagos",
      description: "Aceptamos efectivo, transferencias bancarias y tarjetas de débito y crédito.",
      icon: CreditCard,
    },
  ];

  return (
    <section id="faq" className="py-20 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Trust Signals Block */}
        <div className="mb-20">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F]">
              Compromiso Clínico &amp; Profesional
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2B2621] mt-1">
              Odontología de confianza en Recoleta
            </h2>
            <p className="text-xs sm:text-sm text-[#766C62] mt-2">
              Bases funcionales que garantizan previsibilidad, bienestar y comodidad en cada visita.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {trustSignals.map((signal) => {
              const Icon = signal.icon;
              return (
                <div
                  key={signal.title}
                  className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] flex flex-col justify-between hover:bg-white hover:shadow-soft transition-all"
                >
                  <div>
                    <div className="w-9 h-9 rounded-xl bg-white text-[#5C5144] flex items-center justify-center border border-[#DFD7C7] shadow-sm mb-3">
                      <Icon size={18} weight="duotone" />
                    </div>
                    <h3 className="text-sm font-bold text-[#2B2621]">{signal.title}</h3>
                    <p className="text-xs text-[#766C62] mt-1.5 leading-relaxed">
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
            <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F]">
              Dudas Frecuentes
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#2B2621] leading-tight">
              Preguntas habituales sobre turnos y atención
            </h3>
            <p className="text-xs sm:text-sm text-[#4A433C] leading-relaxed">
              Encontrá respuestas rápidas sobre medios de pago, ubicación en Recoleta, coberturas y armonización facial.
            </p>

            <div className="pt-4 p-5 rounded-2xl bg-[#F4EFE6] border border-[#DFD7C7] space-y-3">
              <h4 className="text-xs font-bold text-[#483E33] uppercase tracking-wider">
                ¿Tenés una consulta específica?
              </h4>
              <p className="text-xs text-[#5C5144] leading-relaxed">
                Escribinos de forma directa por WhatsApp al {clinicConfig.phoneDisplay} y te responderemos a la brevedad.
              </p>
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs shadow-sm transition-all"
              >
                <WhatsappLogo size={16} weight="fill" />
                <span>Chatear al {clinicConfig.phoneDisplay}</span>
              </a>
            </div>
          </div>

          {/* Accordion */}
          <div className="lg:col-span-7 space-y-3">
            {FAQ_ITEMS.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#E8E2D5] bg-white overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="w-full py-4 px-5 text-left flex items-center justify-between gap-4 font-semibold text-sm text-[#2B2621] hover:text-[#5C5144] focus-visible:outline-none"
                  >
                    <span>{item.question}</span>
                    <CaretDown
                      size={16}
                      className={`text-[#766C62] shrink-0 transition-transform duration-200 ${
                        isOpen ? "rotate-180 text-[#5C5144]" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#4A433C] leading-relaxed border-t border-[#F0ECE1] bg-[#FAF8F5]/50">
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
