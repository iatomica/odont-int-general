"use client";

import React, { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { ObrasSocialesMarquee } from "@/components/home/ObrasSocialesMarquee";
import { Specialties } from "@/components/home/Specialties";
import { ClinicExperience } from "@/components/home/ClinicExperience";
import { Professionals } from "@/components/home/Professionals";
import { Coverage } from "@/components/home/Coverage";
import { CareFlow } from "@/components/home/CareFlow";
import { TrustAndFAQ } from "@/components/home/TrustAndFAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { BookingModal } from "@/components/booking/BookingModal";
import { FloatingWhatsApp } from "@/components/ui/FloatingWhatsApp";

export default function HomePage() {
  const [bookingOpen, setBookingOpen] = useState(false);
  const [targetSpecialtyId, setTargetSpecialtyId] = useState<string | null>(null);
  const [targetProfessionalId, setTargetProfessionalId] = useState<string | null>(null);

  const handleOpenBooking = (specialtyId?: string, professionalId?: string) => {
    setTargetSpecialtyId(specialtyId || null);
    setTargetProfessionalId(professionalId || null);
    setBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setBookingOpen(false);
    setTargetSpecialtyId(null);
    setTargetProfessionalId(null);
  };

  return (
    <>
      <Header onOpenBooking={() => handleOpenBooking()} />

      <main className="flex-1">
        {/* Banner-style Hero */}
        <Hero onOpenBooking={() => handleOpenBooking()} />

        {/* Subtle infinite marquee with 14 Obras Sociales logos */}
        <ObrasSocialesMarquee />

        {/* Dental Specialties */}
        <Specialties
          onSelectSpecialty={(specId) => handleOpenBooking(specId, undefined)}
        />

        {/* High-tech 3D scanning & in-house lab */}
        <ClinicExperience />

        {/* Doctor and staff team */}
        <Professionals
          onSelectProfessional={(profId) => handleOpenBooking(undefined, profId)}
        />

        {/* 14 Obras Sociales interactive explorer */}
        <Coverage />

        {/* Step by step patient journey */}
        <CareFlow />

        {/* Operational trust & FAQ */}
        <TrustAndFAQ />

        {/* Final banner CTA */}
        <FinalCTA onOpenBooking={() => handleOpenBooking()} />
      </main>

      <Footer />

      {/* WhatsApp Booking Coordinator Modal */}
      <BookingModal
        isOpen={bookingOpen}
        onClose={handleCloseBooking}
        initialSpecialtyId={targetSpecialtyId}
        initialProfessionalId={targetProfessionalId}
      />

      {/* Floating WhatsApp Action Button */}
      <FloatingWhatsApp />
    </>
  );
}

