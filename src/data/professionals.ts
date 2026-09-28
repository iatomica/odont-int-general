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
    id: "karina-orpianesi",
    name: "Dra. Karina Orpianesi",
    role: "Directora General & Especialista",
    license: "MP 8489",
    specialties: [
      "Endodoncia",
      "Implantología",
      "Bruxismo",
      "Disfunciones de ATM",
    ],
    bio: "Docente y formadora en Endodoncia clínica y restauración digital (Fundacos). Más de 15 años de trayectoria liderando tratamientos de alta complejidad y diagnóstico 3D con tecnología de vanguardia.",
    image: "/images/dra_karina_orpianesi.webp",
    badge: "Directora General",
    isDirector: true,
  },
  {
    id: "romina-guzman",
    name: "Dra. Romina Guzmán",
    role: "Especialista en Ortodoncia & Odontopediatría",
    license: "MP 8631",
    specialties: [
      "Ortodoncia",
      "Ortopedia Maxilar",
      "Odontopediatría",
      "Atención Integral Niños y Adultos",
    ],
    bio: "Especialista en alineación y desarrollo dental para niños, adolescentes y adultos. Combina técnicas de ortopedia funcional con ortodoncia invisible y brackets estéticos de alta precisión.",
    image: "/images/dra_romina_guzman.webp",
    badge: "Ortodoncia & Niños",
  },
  {
    id: "danae-gomez",
    name: "Dra. Danae Gomez Marquéz",
    role: "Odontología Integral & Estética",
    license: "MP 11251",
    specialties: [
      "Odontología General",
      "Restauraciones Estéticas",
      "Prótesis Dental",
      "Estética & Sonrisa",
    ],
    bio: "Enfocada en rehabilitación bioestética y preservación dental. Aplica protocolos de mínima invasión con resinas compuestas de última generación y restauraciones cerámicas.",
    image: "/images/dra_danae_gomez.webp",
    badge: "Estética & Restauraciones",
  },
  {
    id: "alejandro-moyano",
    name: "Dr. Alejandro Moyano",
    role: "Especialista en Periodoncia & Cirugía",
    license: "MP 6595",
    specialties: [
      "Periodoncia",
      "Cirugía Periodontal",
      "Salud Gingival",
      "Regeneración Ósea",
    ],
    bio: "Dedicado al diagnóstico y tratamiento de enfermedades periodontales, soporte de piezas dentales y procedimientos quirúrgicos de regeneración para devolver la salud y estabilidad a la encía.",
    image: "/images/dr_alejandro_moyano.webp",
    badge: "Periodoncia & Cirugía",
  },
];

export const SUPPORT_TEAM: SupportStaff[] = [
  {
    name: "Eric Romero Sánchez",
    role: "Laboratorio de Prótesis Dental & Primer Asistente",
    description: "Técnico protesista dental en gabinete integrado, permitiendo ajuste inmediato de piezas, diseño protésico personalizado y asistencia de alta precisión en cirugías.",
  },
  {
    name: "Evangelina Zdzylowski",
    role: "Secretaria & Segunda Ayudante",
    description: "Coordinación personalizada de turnos, gestión y validación de las 14+ obras sociales, y atención cálida a cada paciente desde el primer contacto.",
  },
];
