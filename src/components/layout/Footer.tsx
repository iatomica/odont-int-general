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
} from "@phosphor-icons/react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#051c20] text-slate-300 pt-16 pb-12 border-t border-teal-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-teal-900/40">
          {/* Column 1 & 2: Brand info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden bg-white/10 p-1 border border-white/20 shrink-0">
                <Image
                  src="/images/logo.webp"
                  alt="Logo Odontología Integral General"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <span className="text-base sm:text-lg font-bold tracking-tight text-white block leading-tight">
                  {clinicConfig.shortName}
                </span>
                <span className="text-xs text-cyan-300 font-medium">
                  {clinicConfig.tagline}
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              Consultorio odontológico multidisciplinario en Córdoba Capital. Diagnóstico digital con escáner 3D, laboratorio propio y atención personalizada por especialistas.
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

            <div className="p-3 bg-teal-950/60 rounded-xl border border-teal-800/40 text-[11px] text-slate-300 space-y-1">
              <div className="font-semibold text-cyan-200 flex items-center gap-1.5">
                <ShieldCheck size={14} className="text-emerald-400" />
                <span>Matrículas Profesionales del Equipo</span>
              </div>
              <p className="text-slate-400 text-[10px] leading-tight">
                Dra. Karina Orpianesi MP 8489 · Dra. Romina Guzmán MP 8631 · Dra. Danae Gomez MP 11251 · Dr. Alejandro Moyano MP 6595
              </p>
            </div>
          </div>

          {/* Column 3: Specialties */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Especialidades
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Escaneo 3D & Diagnóstico
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Endodoncia Mecanizada
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Implantología & Cirugía
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Ortodoncia & Ortopedia
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Odontopediatría (Niños)
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Estética & Prótesis Dental
                </Link>
              </li>
              <li>
                <Link href="#especialidades" className="hover:text-white transition-colors">
                  Bruxismo & ATM
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Información Pacientes
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-400">
              <li>
                <Link href="#obras-sociales" className="hover:text-white transition-colors">
                  14+ Obras Sociales
                </Link>
              </li>
              <li>
                <Link href="#equipo" className="hover:text-white transition-colors">
                  Cuerpo Profesional
                </Link>
              </li>
              <li>
                <Link href="#tecnologia" className="hover:text-white transition-colors">
                  Laboratorio en Gabinete
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
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-100">
              Ubicación & Contacto
            </h4>
            <div className="space-y-2.5 text-xs text-slate-400">
              <a
                href={clinicConfig.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2 hover:text-white transition-colors"
              >
                <MapPin size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                <span>David Luque 90, B° General Paz, Córdoba</span>
              </a>
              <a
                href={`tel:${clinicConfig.phone}`}
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <Phone size={16} className="text-cyan-400 shrink-0" />
                <span>{clinicConfig.phoneDisplay}</span>
              </a>
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-medium"
              >
                <WhatsappLogo size={16} weight="fill" className="shrink-0" />
                <span>+54 9 351 317-0792</span>
              </a>
              <a
                href={clinicConfig.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white transition-colors"
              >
                <InstagramLogo size={16} className="text-pink-400 shrink-0" />
                <span>{clinicConfig.instagramHandle}</span>
              </a>
              <div className="flex items-start gap-2 pt-1 border-t border-teal-900/40">
                <Clock size={16} className="text-slate-400 shrink-0 mt-0.5" />
                <span>{clinicConfig.hours}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>© 2026 {clinicConfig.name}. Todos los derechos reservados.</p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>David Luque 90, Córdoba Capital</span>
            <span>·</span>
            <span>Odontología Integral con Enfoque Digital</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

