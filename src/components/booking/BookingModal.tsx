"use client";

import React, { useState, useEffect } from "react";
import {
  X,
  WhatsappLogo,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  User,
  Phone,
  ShieldCheck,
  CalendarBlank,
} from "@phosphor-icons/react";
import { SPECIALTIES } from "@/data/specialties";
import { PROFESSIONALS } from "@/data/professionals";
import { clinicConfig } from "@/config/clinic";

export interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSpecialtyId?: string | null;
  initialProfessionalId?: string | null;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSpecialtyId = null,
  initialProfessionalId = null,
}) => {
  const [step, setStep] = useState<number>(1);
  const [selectedSpecialtyId, setSelectedSpecialtyId] = useState<string>("");
  const [selectedProfessionalId, setSelectedProfessionalId] = useState<string>("any");
  const [patientName, setPatientName] = useState("");
  const [patientPhone, setPatientPhone] = useState("");
  const [patientCoverage, setPatientCoverage] = useState("Particular / A consultar reintegro");
  const [consultationReason, setConsultationReason] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    if (isOpen) {
      if (initialSpecialtyId) {
        setSelectedSpecialtyId(initialSpecialtyId);
        setStep(2);
      } else if (initialProfessionalId) {
        setSelectedProfessionalId(initialProfessionalId);
        setStep(3);
      } else {
        setSelectedSpecialtyId(SPECIALTIES[0].id);
        setSelectedProfessionalId("any");
        setStep(1);
      }
      setErrorMsg("");
    }
  }, [isOpen, initialSpecialtyId, initialProfessionalId]);

  // Lock body scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const selectedSpecialtyObj =
    SPECIALTIES.find((s) => s.id === selectedSpecialtyId) || SPECIALTIES[0];
  const selectedDoctorObj = PROFESSIONALS.find((p) => p.id === selectedProfessionalId);

  const handleSendToWhatsApp = () => {
    if (!patientName.trim()) {
      setErrorMsg("Por favor ingresá tu nombre completo");
      return;
    }

    const doctorName = selectedDoctorObj
      ? selectedDoctorObj.name
      : "Dr. Jamil Ortiz";

    const text =
      `*Solicitud de Turno · JO DENTAL*\n` +
      `--------------------------------\n` +
      `👤 *Paciente:* ${patientName.trim()}\n` +
      `📞 *Teléfono:* ${patientPhone || "No especificado"}\n` +
      `🦷 *Tratamiento:* ${selectedSpecialtyObj.name}\n` +
      `👨‍⚕️ *Profesional:* ${doctorName}\n` +
      `🏥 *Modalidad:* ${patientCoverage}\n` +
      (consultationReason ? `📝 *Motivo / Detalle:* ${consultationReason}\n` : "") +
      `📍 *Sede:* Paraná 851, Recoleta, Buenos Aires\n` +
      `--------------------------------\n` +
      `Hola Dr. Jamil Ortiz (JO DENTAL), quisiera coordinar una cita con estos datos. ¡Muchas gracias!`;

    const url = `https://wa.me/${clinicConfig.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, "_blank");
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-950/70 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-modal border border-[#DFD7C7] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#E8E2D5] bg-[#FAF8F5]">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-[#70614F] block">
              JO DENTAL · Dr. Jamil Ortiz
            </span>
            <h3 className="text-base font-bold text-[#2B2621]">
              {step === 1 && "Paso 1: Seleccioná el tratamiento"}
              {step === 2 && "Paso 2: Atención médica"}
              {step === 3 && "Paso 3: Tus datos de contacto"}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 rounded-full text-[#766C62] hover:text-[#2B2621] hover:bg-[#F4EFE6] transition-colors"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-[#E8E2D5] h-1">
          <div
            className="bg-[#C5AA7A] h-1 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {/* STEP 1: Specialty */}
          {step === 1 && (
            <div className="space-y-3">
              <p className="text-xs text-[#766C62]">
                ¿Qué tipo de atención o procedimiento estás buscando en Recoleta?
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SPECIALTIES.map((spec) => {
                  const isSelected = selectedSpecialtyId === spec.id;
                  return (
                    <button
                      key={spec.id}
                      type="button"
                      onClick={() => {
                        setSelectedSpecialtyId(spec.id);
                        setStep(2);
                      }}
                      className={`text-left p-3.5 rounded-xl border transition-all flex flex-col justify-between ${
                        isSelected
                          ? "border-[#5C5144] bg-[#F4EFE6] ring-1 ring-[#5C5144]"
                          : "border-[#E8E2D5] bg-white hover:border-[#DFD7C7]"
                      }`}
                    >
                      <span className="text-xs font-bold text-[#2B2621]">{spec.name}</span>
                      <span className="text-[11px] text-[#766C62] mt-1 line-clamp-1">
                        {spec.shortDesc}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 2: Professional */}
          {step === 2 && (
            <div className="space-y-3">
              <p className="text-xs text-[#766C62]">
                Tratamiento: <strong>{selectedSpecialtyObj.name}</strong>
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedProfessionalId("dr-jamil-ortiz");
                  setStep(3);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  selectedProfessionalId === "dr-jamil-ortiz" || selectedProfessionalId === "any"
                    ? "border-[#5C5144] bg-[#F4EFE6] ring-1 ring-[#5C5144]"
                    : "border-[#E8E2D5] hover:border-[#DFD7C7]"
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-[#2B2621] block">
                    Dr. Jamil Ortiz
                  </span>
                  <span className="text-[11px] text-[#766C62]">
                    Director Médico · Atención en Paraná 851, Recoleta
                  </span>
                </div>
                <span className="text-[10px] font-bold text-[#342C24] bg-[#EADBBE] px-2.5 py-0.5 rounded-full">
                  Exclusivo
                </span>
              </button>
            </div>
          )}

          {/* STEP 3: Patient Info & Confirmation */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="p-3 bg-[#FAF8F5] rounded-xl border border-[#E8E2D5] text-xs space-y-1">
                <div>
                  <span className="text-[#766C62]">Tratamiento: </span>
                  <strong className="text-[#2B2621]">{selectedSpecialtyObj.name}</strong>
                </div>
                <div>
                  <span className="text-[#766C62]">Profesional: </span>
                  <strong className="text-[#2B2621]">Dr. Jamil Ortiz</strong>
                </div>
                <div>
                  <span className="text-[#766C62]">Ubicación: </span>
                  <strong className="text-[#2B2621]">Paraná 851, Recoleta, CABA</strong>
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-[#2B2621] mb-1">
                    Nombre y Apellido *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3 text-[#766C62]" />
                    <input
                      type="text"
                      placeholder="Ej. Martín Rodríguez"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        setErrorMsg("");
                      }}
                      className="w-full pl-10 pr-3 py-2 text-sm bg-white border border-[#DFD7C7] rounded-xl focus-visible:ring-2 focus-visible:ring-[#5C5144] focus-visible:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B2621] mb-1">
                    Número de Celular
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3 text-[#766C62]" />
                    <input
                      type="tel"
                      placeholder="Ej. 11 1234-5678"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 text-sm bg-white border border-[#DFD7C7] rounded-xl focus-visible:ring-2 focus-visible:ring-[#5C5144] focus-visible:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B2621] mb-1">
                    Medio de pago o cobertura preferida
                  </label>
                  <select
                    value={patientCoverage}
                    onChange={(e) => setPatientCoverage(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-white border border-[#DFD7C7] rounded-xl focus-visible:ring-2 focus-visible:ring-[#5C5144] focus-visible:outline-none"
                  >
                    <option value="Particular / Pago en Efectivo">Particular / Pago en Efectivo</option>
                    <option value="Particular / Transferencia Bancaria">Particular / Transferencia Bancaria</option>
                    <option value="Particular / Tarjeta de Débito o Crédito">Particular / Tarjeta de Débito o Crédito</option>
                    <option value="Consulta sobre reintegro con Obra Social / Prepaga">Consulta sobre reintegro con Obra Social / Prepaga</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2B2621] mb-1">
                    Motivo o comentario adicional (opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej. Quisiera consultar por armonización facial / prótesis fija..."
                    value={consultationReason}
                    onChange={(e) => setConsultationReason(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-white border border-[#DFD7C7] rounded-xl focus-visible:ring-2 focus-visible:ring-[#5C5144] focus-visible:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 border-t border-[#E8E2D5] bg-[#FAF8F5] flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-[#766C62] hover:text-[#2B2621]"
            >
              <ArrowLeft size={14} /> Volver
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-[#766C62] hover:text-[#2B2621]"
            >
              Cancelar
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-[#5C5144] text-white text-xs font-semibold hover:bg-[#483E33] transition-colors"
            >
              <span>Continuar</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all cursor-pointer"
            >
              <WhatsappLogo size={18} weight="fill" />
              <span>Enviar por WhatsApp</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
