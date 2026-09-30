"use client";

import React from "react";
import {
  CalendarCheck,
  Sparkle,
  WhatsappLogo,
  ShieldCheck,
  CreditCard
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const CareFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Coordinación Ágil por WhatsApp",
      description: `Escribinos directamente al ${clinicConfig.phoneDisplay}. Coordinamos tu día y horario con el Dr. Jamil Ortiz en nuestro consultorio de Paraná 851, Recoleta.`,
      icon: WhatsappLogo,
    },
    {
      number: "02",
      title: "Diagnóstico Clínico & Facial",
      description: "Evaluación integral en tu primera cita. Analizamos tu salud dental, armonía orofacial y expectativas estéticas con instrumental de máxima precisión.",
      icon: CalendarCheck,
    },
    {
      number: "03",
      title: "Plan a Medida & Facilidades",
      description: "Presupuesto claro y transparente sin costos sorpresa. Opciones de pago flexibles en efectivo, transferencia bancaria o tarjeta.",
      icon: CreditCard,
    },
    {
      number: "04",
      title: "Resultados Armónicos & Naturales",
      description: "Tratamientos indoloros y seguros de prótesis, implantes, estética y armonización facial para que sonrías con plena confianza.",
      icon: Sparkle,
    },
  ];

  return (
    <section id="como-atendemos" className="py-20 bg-white border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F]">
            Paso a Paso en Consultorio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2621] mt-1">
            Una experiencia odontológica moderna y sin estrés
          </h2>
          <p className="text-sm sm:text-base text-[#4A433C] mt-3">
            Cuidamos cada detalle desde tu primer mensaje hasta el resultado final en Recoleta.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] transition-all hover:bg-white hover:shadow-soft group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-[#8F7D67]/30 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-[#5C5144] flex items-center justify-center border border-[#DFD7C7] shadow-sm group-hover:scale-105 transition-transform">
                      <Icon size={20} weight="duotone" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-[#2B2621] tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#766C62] mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#E8E2D5] flex items-center text-[11px] font-semibold text-[#5C5144]">
                  <span>Etapa {index + 1} de 4</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
