"use client";

import React from "react";
import { clinicConfig, PAYMENT_METHODS } from "@/config/clinic";
import {
  WhatsappLogo,
  CheckCircle,
  CreditCard,
  Bank,
  Money,
  ShieldCheck,
  ArrowRight,
  Info,
  MapPin,
  Clock,
  Sparkle
} from "@phosphor-icons/react";

export const Coverage: React.FC = () => {
  const whatsappCoverageUrl = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(
    "Hola Dr. Jamil Ortiz (JO DENTAL), quisiera consultar si atienden con mi obra social / prepaga o cómo es la modalidad de reintegro en consultorio."
  )}`;

  return (
    <section id="cobertura-pagos" className="py-20 bg-[#FAF8F5] border-b border-[#E8E2D5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold uppercase tracking-wider text-[#70614F] flex items-center justify-center gap-1.5">
            <ShieldCheck size={16} weight="fill" className="text-[#C5AA7A]" />
            Transparencia &amp; Comodidad
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#2B2621] mt-1.5">
            Coberturas, Reintegros &amp; Medios de Pago
          </h2>
          <p className="text-sm sm:text-base text-[#4A433C] mt-3 leading-relaxed">
            Te ofrecemos claridad y opciones flexibles para que el cuidado de tu sonrisa y armonía facial sea cómodo y sin complicaciones.
          </p>
        </div>

        {/* 2 Columns: Coberturas & Medios de Pago */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Col 1: Obras Sociales & Reintegros Notice */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#DFD7C7] p-6 sm:p-8 shadow-soft flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] text-[#5C5144] flex items-center justify-center font-bold text-lg">
                  <ShieldCheck size={26} weight="fill" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2621]">Obras Sociales &amp; Prepagas</h3>
                  <span className="text-xs font-semibold text-[#8F7D67]">
                    Atención personalizada &amp; Reintegros
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#5C5144]">
                  <Info size={16} weight="fill" />
                  <span>Consulta de cobertura individual</span>
                </div>
                <p className="text-xs text-[#4A433C] leading-relaxed">
                  Para saber si contamos con atención para tu obra social o plan particular, o para gestionar <strong>factura oficial de reintegro</strong> con tu prepaga, consultanos previamente por WhatsApp indicando tu cobertura.
                </p>
              </div>

              <ul className="space-y-2.5 text-xs text-[#4A433C]">
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} weight="fill" className="text-emerald-600 shrink-0" />
                  <span>Emisión de factura para reintegro ante prepagas</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} weight="fill" className="text-emerald-600 shrink-0" />
                  <span>Planes de tratamiento transparentes sin costos ocultos</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle size={15} weight="fill" className="text-emerald-600 shrink-0" />
                  <span>Presupuesto personalizado en tu primera consulta</span>
                </li>
              </ul>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE1]">
              <a
                href={whatsappCoverageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all"
              >
                <WhatsappLogo size={18} weight="fill" />
                <span>Consultar por mi cobertura en WhatsApp</span>
                <ArrowRight size={14} />
              </a>
            </div>
          </div>

          {/* Col 2: Medios de Pago */}
          <div className="lg:col-span-6 bg-white rounded-3xl border border-[#DFD7C7] p-6 sm:p-8 shadow-soft flex flex-col justify-between">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#F4EFE6] text-[#5C5144] flex items-center justify-center font-bold text-lg">
                  <CreditCard size={26} weight="fill" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#2B2621]">Medios de Pago Aceptados</h3>
                  <span className="text-xs font-semibold text-[#8F7D67]">
                    Opciones flexibles para tu comodidad
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] text-center space-y-1.5">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-white text-[#5C5144] flex items-center justify-center shadow-2xs">
                    <Money size={22} weight="fill" />
                  </div>
                  <h4 className="text-xs font-bold text-[#2B2621]">Efectivo</h4>
                  <p className="text-[11px] text-[#766C62]">Abono en consultorio</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] text-center space-y-1.5">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-white text-[#5C5144] flex items-center justify-center shadow-2xs">
                    <Bank size={22} weight="fill" />
                  </div>
                  <h4 className="text-xs font-bold text-[#2B2621]">Transferencia</h4>
                  <p className="text-[11px] text-[#766C62]">CBU / Alias bancario</p>
                </div>

                <div className="p-4 rounded-2xl bg-[#FAF8F5] border border-[#E8E2D5] text-center space-y-1.5">
                  <div className="w-10 h-10 mx-auto rounded-xl bg-white text-[#5C5144] flex items-center justify-center shadow-2xs">
                    <CreditCard size={22} weight="fill" />
                  </div>
                  <h4 className="text-xs font-bold text-[#2B2621]">Tarjetas</h4>
                  <p className="text-[11px] text-[#766C62]">Débito &amp; Crédito</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#F4EFE6]/70 border border-[#E8E2D5] text-xs text-[#4A433C] space-y-1">
                <p className="font-semibold text-[#2B2621] flex items-center gap-1.5">
                  <Sparkle size={14} weight="fill" className="text-[#C5AA7A]" />
                  Facilidades para tratamientos integrales
                </p>
                <p className="text-[#766C62] leading-relaxed">
                  Para procedimientos como implantes, prótesis dentales o armonización facial, coordinamos planes de pago escalonados acordes a la evolución de tus citas.
                </p>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-[#F0ECE1] flex items-center justify-between text-xs text-[#766C62]">
              <span className="flex items-center gap-1.5">
                <MapPin size={15} className="text-[#70614F]" />
                Paraná 851, Recoleta
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={15} className="text-[#70614F]" />
                Lunes a Viernes 09:00 a 19:30 hs
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
