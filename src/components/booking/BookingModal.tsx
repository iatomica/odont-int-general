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
import { clinicConfig, OBRAS_SOCIALES } from "@/config/clinic";

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
  const [patientCoverage, setPatientCoverage] = useState("Particular / Consulta Privada");
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
      : "Primer profesional disponible";

    const text =
      `*Solicitud de Turno Odontológico*\n` +
      `--------------------------------\n` +
      `👤 *Paciente:* ${patientName.trim()}\n` +
      `📞 *Teléfono:* ${patientPhone || "No especificado"}\n` +
      `🦷 *Especialidad:* ${selectedSpecialtyObj.name}\n` +
      `👨‍⚕️ *Profesional solicitado:* ${doctorName}\n` +
      `🏥 *Cobertura / Obra Social:* ${patientCoverage}\n` +
      (consultationReason ? `📝 *Motivo:* ${consultationReason}\n` : "") +
      `📍 *Sede:* David Luque 90, Córdoba Capital\n` +
      `--------------------------------\n` +
      `Hola equipo de Odontología Integral General, quisiera coordinar un turno con estos datos. ¡Muchas gracias!`;

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
        className="relative w-full max-w-lg bg-surface rounded-3xl shadow-modal border border-surface-muted overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-surface-muted bg-surface-subtle/50">
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-petrol-700 block">
              Coordinador de Consulta Dental
            </span>
            <h3 className="text-base font-bold text-charcoal">
              {step === 1 && "Paso 1: Seleccioná la especialidad"}
              {step === 2 && "Paso 2: Elegí profesional preferido"}
              {step === 3 && "Paso 3: Tus datos de contacto"}
            </h3>
          </div>

          <button
            onClick={onClose}
            aria-label="Cerrar modal"
            className="p-2 rounded-full text-charcoal-muted hover:text-charcoal hover:bg-surface-muted transition-colors"
          >
            <X size={20} weight="bold" />
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full bg-surface-muted h-1">
          <div
            className="bg-emerald-500 h-1 transition-all duration-300"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto flex-1 space-y-4">
          {/* STEP 1: Specialty */}
          {step === 1 && (
            <div className="space-y-3">
              <p className="text-xs text-charcoal-muted">
                ¿Qué tipo de atención o tratamiento estás buscando?
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
                          ? "border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600"
                          : "border-surface-muted bg-surface hover:border-slate-300"
                      }`}
                    >
                      <span className="text-xs font-bold text-charcoal">{spec.name}</span>
                      <span className="text-[11px] text-charcoal-muted mt-1 line-clamp-1">
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
              <p className="text-xs text-charcoal-muted">
                Especialidad seleccionada: <strong>{selectedSpecialtyObj.name}</strong>
              </p>

              <button
                type="button"
                onClick={() => {
                  setSelectedProfessionalId("any");
                  setStep(3);
                }}
                className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center justify-between ${
                  selectedProfessionalId === "any"
                    ? "border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600"
                    : "border-surface-muted hover:border-slate-300"
                }`}
              >
                <div>
                  <span className="text-xs font-bold text-charcoal block">
                    Primer profesional disponible
                  </span>
                  <span className="text-[11px] text-charcoal-muted">
                    Asigna el turno más próximo del equipo
                  </span>
                </div>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded-full">
                  Más rápido
                </span>
              </button>

              <div className="space-y-2 pt-1">
                {PROFESSIONALS.map((prof) => {
                  const isSelected = selectedProfessionalId === prof.id;
                  return (
                    <button
                      key={prof.id}
                      type="button"
                      onClick={() => {
                        setSelectedProfessionalId(prof.id);
                        setStep(3);
                      }}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-center gap-3 ${
                        isSelected
                          ? "border-emerald-600 bg-emerald-50/50 ring-1 ring-emerald-600"
                          : "border-surface-muted hover:border-slate-300"
                      }`}
                    >
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-charcoal">{prof.name}</span>
                          <span className="text-[10px] font-mono text-petrol-700">
                            {prof.license}
                          </span>
                        </div>
                        <span className="text-[11px] text-charcoal-muted block truncate">
                          {prof.role}
                        </span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* STEP 3: Patient Info & Confirmation */}
          {step === 3 && (
            <div className="space-y-4">
              <div className="p-3 bg-surface-subtle rounded-xl border border-surface-muted text-xs space-y-1">
                <div>
                  <span className="text-charcoal-muted">Especialidad: </span>
                  <strong className="text-charcoal">{selectedSpecialtyObj.name}</strong>
                </div>
                <div>
                  <span className="text-charcoal-muted">Profesional: </span>
                  <strong className="text-charcoal">
                    {selectedDoctorObj ? selectedDoctorObj.name : "Primer disponible"}
                  </strong>
                </div>
              </div>

              {errorMsg && (
                <div className="p-2.5 bg-red-50 text-red-700 text-xs rounded-xl border border-red-200">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-3">
                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Nombre y Apellido *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-3 text-charcoal-muted" />
                    <input
                      type="text"
                      placeholder="Ej. Lucas Fernández"
                      value={patientName}
                      onChange={(e) => {
                        setPatientName(e.target.value);
                        setErrorMsg("");
                      }}
                      className="w-full pl-10 pr-3 py-2 text-sm bg-surface border border-surface-muted rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Número de Celular
                  </label>
                  <div className="relative">
                    <Phone size={16} className="absolute left-3.5 top-3 text-charcoal-muted" />
                    <input
                      type="tel"
                      placeholder="Ej. 351 123-4567"
                      value={patientPhone}
                      onChange={(e) => setPatientPhone(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 text-sm bg-surface border border-surface-muted rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Obra Social / Prepaga
                  </label>
                  <select
                    value={patientCoverage}
                    onChange={(e) => setPatientCoverage(e.target.value)}
                    className="w-full px-3 py-2 text-sm bg-surface border border-surface-muted rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                  >
                    <option value="Particular / Sin Obra Social">
                      Particular / Consulta Privada
                    </option>
                    {OBRAS_SOCIALES.map((os) => (
                      <option key={os.id} value={os.name}>
                        {os.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-charcoal mb-1">
                    Motivo o comentario adicional (opcional)
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Ej. Tengo dolor en una muela / Quisiera hacerme un escaneo 3D para ortodoncia..."
                    value={consultationReason}
                    onChange={(e) => setConsultationReason(e.target.value)}
                    className="w-full px-3 py-2 text-xs bg-surface border border-surface-muted rounded-xl focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer Navigation */}
        <div className="px-6 py-4 border-t border-surface-muted bg-surface-subtle/50 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s - 1)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-charcoal-muted hover:text-charcoal"
            >
              <ArrowLeft size={14} /> Volver
            </button>
          ) : (
            <button
              type="button"
              onClick={onClose}
              className="text-xs font-semibold text-charcoal-muted hover:text-charcoal"
            >
              Cancelar
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={() => setStep((s) => s + 1)}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-petrol-700 text-white text-xs font-semibold hover:bg-petrol-800 transition-colors"
            >
              <span>Continuar</span>
              <ArrowRight size={14} />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSendToWhatsApp}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-md transition-all"
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

