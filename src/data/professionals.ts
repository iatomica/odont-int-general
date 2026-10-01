export interface Professional {
  id: string;
  name: string;
  role: string;
  license: string;
  specialties: string[];
  bio: string;
  image: string;
  badge?: string;
  isDirector?: boolean;
}

export interface SupportStaff {
  name: string;
  role: string;
  description: string;
}

export const PROFESSIONALS: Professional[] = [
  {
    id: "dr-jamil-ortiz",
    name: "Dr. Jamil Ortiz",
    role: "Director Médico & Odontólogo",
    license: "Odontología Integral & Estética",
    specialties: [
      "Prótesis Dentales",
      "Implantes Dentales",
      "Operatoria & Estética Dental",
      "Armonización Facial",
      "Endodoncia"
    ],
    bio: "Director de JO DENTAL. Especialista en rehabilitación estética, prótesis y armonización orofacial en Recoleta. Brinda una atención meticulosa y personalizada con un enfoque multidisciplinario orientado a la belleza y salud integral.",
    image: "/images/dr_jamil_ortiz.png",
    badge: "Director Médico",
    isDirector: true,
  },
  {
    id: "equipo-especialistas",
    name: "Equipo de Especialidades",
    role: "Ortodoncia, Periodoncia & Odontopediatría",
    license: "Staff Clínico JO DENTAL",
    specialties: [
      "Ortodoncia & Alineadores",
      "Odontopediatría",
      "Periodoncia & Profilaxis"
    ],
    bio: "Profesionales dedicados a la ortodoncia integral para todas las edades, cuidado odontopediátrico con enfoque lúdico y preventivo, y salud periodontal para garantizar la máxima durabilidad de cada tratamiento.",
    image: "/images/dental_care_patient.webp",
    badge: "Especialidades Clínicas",
  }
];

export const SUPPORT_TEAM: SupportStaff[] = [
  {
    name: "Recepción & Coordinación",
    role: "Atención al Paciente & Turnos",
    description: "Gestión directa de citas por WhatsApp, asesoramiento sobre medios de pago y seguimiento personalizado para que tu experiencia en Paraná 851 sea confortable.",
  },
  {
    name: "Asistencia Quirúrgica & Clínica",
    role: "Soporte Operatorio",
    description: "Protocolos estrictos de bioseguridad, esterilización y confort del paciente en cada procedimiento dental y de armonización facial.",
  },
];
