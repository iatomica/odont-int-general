"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { List, X, Phone, MapPin, InstagramLogo, WhatsappLogo, CreditCard } from "@phosphor-icons/react";
import { clinicConfig } from "@/config/clinic";

export interface HeaderProps {
  onOpenBooking: (specialtyId?: string, profId?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Top micro-banner with real clinic contact and location */}
      <div className="bg-petrol-900 text-white text-[12px] py-2 px-4 sm:px-8 border-b border-petrol-800">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-block w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="font-medium text-slate-200 truncate">
              {clinicConfig.descriptor}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 text-slate-300">
            <a
              href={clinicConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <MapPin size={14} className="text-petrol-300" />
              <span>{clinicConfig.address}, {clinicConfig.neighborhood}</span>
            </a>
            <a
              href={`tel:${clinicConfig.phone}`}
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <Phone size={14} className="text-petrol-300" />
              <span>{clinicConfig.phoneDisplay}</span>
            </a>
            <a
              href={clinicConfig.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-white transition-colors"
            >
              <InstagramLogo size={15} className="text-pink-400" />
              <span>{clinicConfig.instagramHandle}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main sticky navigation */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-200 bg-surface/95 backdrop-blur-md ${
          isScrolled ? "shadow-soft border-b border-surface-muted" : "border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
          {/* Brand Logo & Name */}
          <Link href="/" className="flex items-center gap-3 group focus-visible:outline-none shrink-0">
            <div className="relative h-12 w-auto flex items-center">
              <img
                src="/images/logo-horizontal.svg"
                alt="Logo JO DENTAL - Dr. Jamil Ortiz"
                className="h-11 w-auto object-contain transition-transform group-hover:scale-102"
              />
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-6 text-sm font-medium text-charcoal-secondary">
            <Link
              href="#especialidades"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Especialidades
            </Link>
            <Link
              href="#armonizacion-facial"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none font-semibold text-petrol-800"
            >
              Armonización Facial
            </Link>
            <Link
              href="#dr-jamil-ortiz"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Dr. Jamil Ortiz
            </Link>
            <Link
              href="#cobertura-pagos"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Coberturas & Pagos
            </Link>
            <Link
              href="#ubicacion"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Recoleta (Paraná 851)
            </Link>
            <Link
              href="#faq"
              className="hover:text-petrol-700 transition-colors focus-visible:outline-none"
            >
              Preguntas
            </Link>
          </nav>

          {/* Right Action: Direct WhatsApp */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs sm:text-sm shadow-sm transition-all hover:shadow-md cursor-pointer"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>Turnos WhatsApp</span>
            </a>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex sm:hidden items-center gap-2">
            <a
              href={clinicConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-600 text-white font-semibold text-xs"
            >
              <WhatsappLogo size={16} weight="fill" />
              <span>Turno</span>
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menú principal de navegación"
              aria-expanded={mobileMenuOpen}
              className="p-2 rounded-lg text-charcoal-secondary hover:text-charcoal hover:bg-surface-subtle"
            >
              {mobileMenuOpen ? <X size={24} /> : <List size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-surface-muted bg-surface px-5 py-6 space-y-4 animate-fadeIn shadow-lg">
            <div className="flex flex-col space-y-3 font-medium text-sm text-charcoal">
              <Link
                href="#especialidades"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Especialidades Odontológicas
              </Link>
              <Link
                href="#armonizacion-facial"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted font-bold text-petrol-800"
              >
                Armonización Facial
              </Link>
              <Link
                href="#dr-jamil-ortiz"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Dr. Jamil Ortiz
              </Link>
              <Link
                href="#cobertura-pagos"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Coberturas & Medios de Pago
              </Link>
              <Link
                href="#ubicacion"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2 border-b border-surface-muted"
              >
                Ubicación (Paraná 851, Recoleta)
              </Link>
              <Link
                href="#faq"
                onClick={() => setMobileMenuOpen(false)}
                className="py-2"
              >
                Preguntas frecuentes
              </Link>
            </div>

            <div className="pt-2 space-y-2">
              <a
                href={clinicConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm shadow-sm"
              >
                <WhatsappLogo size={20} weight="fill" />
                <span>Pedir Turno por WhatsApp ({clinicConfig.phoneDisplay})</span>
              </a>

              <button
                type="button"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-2.5 px-4 rounded-xl border border-surface-muted text-charcoal text-xs font-semibold hover:bg-surface-subtle"
              >
                Coordinador de consulta online
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
