import React from "react";
import Link from "next/link";
import Image from "next/image";
import { clinicConfig } from "@/config/clinic";
import {
  MapPin,
  Phone,
  Clock,
  InstagramLogo,
  WhatsappLogo,
  ShieldCheck,
  CreditCard,
  Sparkle
} from "@phosphor-icons/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1713] text-[#D3C5B1] pt-16 pb-12 border-t border-[#342C24]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-[#342C24]">
          {/* Column 1 & 2: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-auto shrink-0 bg-white/5 p-1 rounded-xl border border-white/10">
                <img
                  src="/images/logo-horizontal.svg"
                  alt="Logo JO DENTAL - Dr. Jamil Ortiz"
                  className="h-10 w-auto object-contain brightness-125"
                />
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A4998E] leading-relaxed max-w-sm">
              Consultorio odontológico boutique y centro de armonización facial en Recoleta, Buenos Aires. Más de 8 especialidades dedicadas a la salud, función y belleza natural de tu sonrisa.
            </p>

            <div className="flex items-center gap-3 pt-1">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-all border border-emerald-500/30"
                aria-label="WhatsApp"
              >
                <WhatsappLogo size={20} weight="fill" />
              </a>
              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-pink-600/20 text-pink-400 hover:bg-pink-600 hover:text-white flex items-center justify-center transition-all border border-pink-500/30"
                aria-label="Instagram"
              >
                <InstagramLogo size={20} />
              </a>
            </div>

            <div className="p-3 bg-white/5 rounded-xl border border-white/10 text-[11px] text-[#D3C5B1] space-y-1">
              <div className="font-semibold text-[#EADBBE] flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Dr. Jamil Ortiz · Dirección Médica</span>
              </div>
              <p className="text-[#A4998E] text-[10px] leading-tight">
                Odontología Integral, Prótesis, Implantes, Estética y Armonización Orofacial en Recoleta.
              </p>
            </div>
          </div>

          {/* Column 3: Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A4998E]">
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Prótesis Dentales
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Armonización Facial
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Implantes Dentales
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Operatoria &amp; Estética
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Endodoncia
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Ortodoncia
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Periodoncia
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Odontopediatría
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Información Pacientes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-[#A4998E]">
              <li>
                <Link href="#dr-jamil-ortiz" className="hover:text-white transition-colors">
                  Dr. Jamil Ortiz
                </Link>
              </li>
              <li>
                <Link href="#cobertura-pagos" className="hover:text-white transition-colors">
                  Coberturas &amp; Reintegros
                </Link>
              </li>
              <li>
                <Link href="#cobertura-pagos" className="hover:text-white transition-colors">
                  Medios de Pago Aceptados
                </Link>
              </li>
              <li>
                <Link href="#como-atendemos" className="hover:text-white transition-colors">
                  Cómo Atendemos
                </Link>
              </li>
              <li>
                <Link href="#faq" className="hover:text-white transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <a
                  href={clinicConfig.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:text-emerald-300 font-semibold flex items-center gap-1"
                >
                  <WhatsappLogo size={14} weight="fill" />
                  <span>Turnos por WhatsApp</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Contact & Location */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white">
              Ubicación &amp; Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-[#A4998E]">
              <a
                href={clinicConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="text-[#C5AA7A] shrink-0 mt-0.5" />
                <span>Paraná 851, Recoleta, CABA</span>
              </a>
              <a
                href={`tel:${clinicConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-[#C5AA7A] shrink-0" />
                <span>WhatsApp: {clinicConfig.phoneDisplay}</span>
              </a>
              <div className="flex items-center gap-2 text-[#EADBBE]">
                <CreditCard size={16} className="text-[#C5AA7A] shrink-0" />
                <span>Efectivo, Transf. y Tarjeta</span>
              </div>
              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <InstagramLogo size={16} className="text-pink-400 shrink-0" />
                <span>{clinicConfig.instagramHandle}</span>
              </a>
              <div className="flex items-start gap-2 pt-1 border-t border-white/10">
                <Clock size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <span>{clinicConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#766C62] gap-4">
          <p>© 2026 {clinicConfig.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>Paraná 851, Recoleta, Buenos Aires</span>
            <span>·</span>
            <span>Odontología Integral &amp; Armonización Facial</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
