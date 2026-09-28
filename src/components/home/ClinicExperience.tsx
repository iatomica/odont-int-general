"use client";

import React from "react";
import Image from "next/image";
import {
  Scan,
  ShieldCheck,
  Sparkle,
  Clock,
  WhatsappLogo,
  CheckCircle,
  Cpu,
} from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export const ClinicExperience: React.FC = () => {
  return (
    <section id="tecnologia" className="py-20 bg-surface border-b border-surface-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photographic Gallery with WebP Dental Images */}
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-56 sm:h-64 bg-slate-100">
                <Image
                  src="/images/dental_tech_scanner.webp"
                  alt="Escáner intraoral 3D en Odontología Integral General"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Escaneo Intraoral 3D
                </div>
              </div>

              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-40 sm:h-48 bg-slate-100">
                <Image
                  src="/images/dental_care_patient.webp"
                  alt="Atención odontológica personalizada y confortable"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Gabinete de Alta Precisión
                </div>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="relative rounded-2xl overflow-hidden shadow-soft border border-surface-muted h-40 sm:h-48 bg-slate-100">
                <Image
                  src="/images/dental_smile_healthy.webp"
                  alt="Rehabilitación estética y sonrisas saludables"
                  fill
                  className="object-cover"
                />
                <div className="absolute bottom-2 left-2 right-2 bg-slate-900/80 backdrop-blur-sm px-2.5 py-1 rounded-lg text-[10px] text-white font-medium">
                  Resultados Naturales
                </div>
              </div>

              {/* Lab Highlight Box */}
              <div className="rounded-2xl p-5 bg-gradient-to-br from-petrol-800 to-petrol-900 text-white flex flex-col justify-between h-56 sm:h-64 border border-petrol-700 shadow-soft">
                <div>
                  <div className="w-9 h-9 rounded-xl bg-white/10 text-cyan-300 flex items-center justify-center mb-3">
                    <Cpu size={20} weight="duotone" />
                  </div>
                  <h4 className="text-sm font-bold text-white leading-tight">
                    Laboratorio Propio en Gabinete
                  </h4>
                  <p className="text-xs text-petrol-200 mt-2 leading-relaxed">
                    Técnico protesista dental en el consultorio. Ajustes, coronas y carillas sin esperas prolongadas de terceros.
                  </p>
                </div>
                <div className="text-[11px] font-semibold text-emerald-300 flex items-center gap-1.5 pt-2 border-t border-white/10">
                  <CheckCircle size={14} weight="fill" />
                  <span>Ajuste y personalización en el acto</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Values & Environmental description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-petrol-700 flex items-center gap-1.5">
              <Sparkle size={14} weight="fill" className="text-petrol-600" />
              Tecnología & Confort del Paciente
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-charcoal leading-tight">
              Precisión milimétrica desde un enfoque 100% digital
            </h2>

            <p className="text-sm sm:text-base text-charcoal-secondary leading-relaxed">
              En Odontología Integral General dejamos atrás las molestias tradicionales. Incorporamos tecnología digital de diagnóstico y confección protésica para que tu tratamiento sea rápido, exacto y sin dolor.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <Scan size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Escáner Intraoral 3D de Alta Resolución
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Adiós a las pastas y moldes de silicona que causan nauseas. Obtenemos un modelo digital 3D de tus dientes en segundos para planificar ortodoncia, coronas o implantes con total exactitud.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <ShieldCheck size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Endodoncia Mecanizada sin Dolor
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Instrumentación rotatoria de última generación que desinfecta y sella los conductos radiculares con máxima seguridad y rapidez, conservando la pieza dental natural.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3 rounded-xl bg-surface-subtle/80 border border-slate-100">
                <div className="w-9 h-9 rounded-xl bg-petrol-50 text-petrol-700 flex items-center justify-center shrink-0 border border-petrol-100">
                  <Clock size={20} weight="duotone" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-charcoal">
                    Puntualidad y Consultas Programadas
                  </h4>
                  <p className="text-xs text-charcoal-muted mt-0.5 leading-relaxed">
                    Respetamos tu tiempo: coordinamos turnos con intervalos reales para evitar salas de espera llenas y brindarte atención tranquila y dedicada en David Luque 90.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Consultar por un diagnóstico digital</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

