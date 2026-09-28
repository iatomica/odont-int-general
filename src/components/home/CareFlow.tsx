"use client";

import React from "react";
import {
  Scan,
  CalendarCheck,
  Cpu,
  Sparkle,
  WhatsappLogo,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const CareFlow: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Coordinación Ágil por WhatsApp",
      description: "Escribinos directamente al 351 317-0792. Seleccionamos el horario más conveniente con el especialista indicado según tu motivo de consulta.",
      icon: WhatsappLogo,
    },
    {
      number: "02",
      title: "Diagnóstico con Escaneo 3D",
      description: "En tu primera visita realizamos una evaluación integral y escaneo intraoral digital sin pastas ni náuseas. Ves tu boca en 3D en pantalla.",
      icon: Scan,
    },
    {
      number: "03",
      title: "Plan Personalizado y Laboratorio Propio",
      description: "Planificamos con precisión milimétrica. Nuestro laboratorio dental propio en consultorio elabora coronas, placas y prótesis a medida con ajuste inmediato.",
      icon: Cpu,
    },
    {
      number: "04",
      title: "Tratamiento sin Dolor & Sonrisa Sana",
      description: "Procedimientos con tecnología mecanizada y anestesia precisa. Cuidado continuado para mantener tu boca saludable, funcional y armónica.",
      icon: Sparkle,
    },
  ];

  return (
    <section id="como-atendemos" className="py-20 bg-surface border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700">
            Paso a Paso en Consultorio
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal mt-1">
            Una experiencia odontológica moderna y sin estrés
          </h2>
          <p className="text-sm sm:text-base text-charcoal-secondary mt-3">
            Cuidamos cada detalle desde el primer mensaje hasta el resultado final para que disfrutes de una atención predecible, puntual y confortable.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative flex flex-col justify-between p-6 rounded-2xl bg-surface-subtle/80 border border-surface-muted transition-all hover:bg-surface hover:shadow-soft group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-black text-petrol-700/30 tracking-tighter">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-white text-petrol-700 flex items-center justify-center border border-surface-muted shadow-sm group-hover:scale-105 transition-transform">
                      <Icon size={20} weight="duotone" />
                    </div>
                  </div>

                  <h3 className="text-base font-bold text-charcoal tracking-tight">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-charcoal-muted mt-2.5 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-slate-200/70 flex items-center text-[11px] font-semibold text-petrol-800">
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

