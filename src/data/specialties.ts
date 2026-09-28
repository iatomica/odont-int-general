export interface Specialty {
  id: string;
  name: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  featured?: boolean;
  leadDoctor: string;
  benefits: string[];
}

export const SPECIALTIES: Specialty[] = [
  {
    id: "escaneo-digital",
    name: "Diagnóstico & Escaneo Digital 3D",
    shortDesc: "Precisión milimétrica sin pastas ni moldes incómodos.",
    fullDesc: "Implementamos tecnología de escaneo intraoral 3D de alta definición para capturar modelos digitales exactos de tu boca en segundos. Planificamos tratamientos con visualización previa y máxima comodidad para el paciente.",
    iconName: "Scan",
    featured: true,
    leadDoctor: "Dra. Karina Orpianesi",
    benefits: [
      "Sin moldes tradicionales de silicona",
      "Planificación digital interactiva 3D",
      "Resultados predictibles y exactos",
    ],
  },
  {
    id: "endodoncia",
    name: "Endodoncia (Tratamiento de Conducto)",
    shortDesc: "Preservación dental avanzada y alivio del dolor sin molestias.",
    fullDesc: "Especialidad insignia a cargo de la Directora Dra. Karina Orpianesi. Utilizamos instrumentación rotatoria mecanizada y protocolos modernos de desinfección y sellado tridimensional para salvar piezas dentales que antes se extraían.",
    iconName: "Activity",
    featured: true,
    leadDoctor: "Dra. Karina Orpianesi (MP 8489)",
    benefits: [
      "Instrumentación mecanizada sin dolor",
      "Preservación de la pieza dental original",
      "Resolución en sesiones ágiles",
    ],
  },
  {
    id: "implantologia",
    name: "Implantología & Cirugía Oral",
    shortDesc: "Reemplazo fijo de piezas con titanio biocompatible de alta gama.",
    fullDesc: "Recupera la capacidad masticatoria y estética natural con implantes dentales osteointegrados. Cirugía guiada por diagnóstico por imágenes para una fijación segura, estable y duradera de por vida.",
    iconName: "ShieldCheck",
    featured: true,
    leadDoctor: "Dra. Karina Orpianesi",
    benefits: [
      "Aspecto y función idéntica a dientes naturales",
      "Preservación del hueso maxilar",
      "Materiales certificados de titanio médico",
    ],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia & Ortopedia Maxilar",
    shortDesc: "Alineación y armonía oclusal para niños, jóvenes y adultos.",
    fullDesc: "Corrección de malposiciones dentarias y alteraciones del crecimiento de los maxilares. Opciones con brackets estéticos de zafiro, metálicos de autoligado y alineadores invisibles personalizados.",
    iconName: "Sparkles",
    featured: true,
    leadDoctor: "Dra. Romina Guzmán (MP 8631)",
    benefits: [
      "Opciones estéticas e imperceptibles",
      "Ortopedia temprana preventiva en niños",
      "Mejora estética facial y función masticatoria",
    ],
  },
  {
    id: "odontopediatria",
    name: "Odontopediatría",
    shortDesc: "Atención dental con calidez, paciencia y sin miedos para niños.",
    fullDesc: "Enfoque empático y lúdico para cuidar la salud bucodental desde los primeros dientes. Prevención de caries, selladores de fosas y fisuras, y educación en higiene para que visitar al odontólogo sea una experiencia feliz.",
    iconName: "HeartHandshake",
    featured: false,
    leadDoctor: "Dra. Romina Guzmán",
    benefits: [
      "Ambiente adaptado para generar confianza",
      "Prevención y cuidado de dentición temporal",
      "Orientación integral a los padres",
    ],
  },
  {
    id: "estetica-restauraciones",
    name: "Estética Dental & Restauraciones",
    shortDesc: "Carillas, resinas compuestas y blanqueamiento seguro.",
    fullDesc: "Armonización de la sonrisa respetando la biología dental. Restauraciones con resinas nanohíbridas que reproducen fielmente el brillo y translucidez del esmalte natural.",
    iconName: "Smile",
    featured: false,
    leadDoctor: "Dra. Danae Gomez Marquéz (MP 11251)",
    benefits: [
      "Blanqueamiento dental ambulatorio y en consultorio",
      "Carillas y micro-carillas estéticas",
      "Sellado biológico de alta durabilidad",
    ],
  },
  {
    id: "protesis-rehabilitacion",
    name: "Rehabilitación Oral & Prótesis",
    shortDesc: "Restitución funcional con laboratorio dental propio integrado.",
    fullDesc: "Coronas de porcelana pura y zirconio, prótesis fijas sobre implantes y removibles. La presencia de nuestro técnico protesista Eric Romero Sánchez en el consultorio asegura ajustes y acabados inmediatos de máxima fidelidad.",
    iconName: "Layers",
    featured: false,
    leadDoctor: "Dra. Danae Gomez Marquéz & Eric Romero Sánchez",
    benefits: [
      "Laboratorio propio para ajustes en el momento",
      "Materiales cerámicos libres de metal",
      "Devuelve la correcta masticación y dicción",
    ],
  },
  {
    id: "periodoncia",
    name: "Periodoncia & Cirugía Periodontal",
    shortDesc: "Tratamiento de encías, detartraje ultrasónico y soporte dental.",
    fullDesc: "Diagnóstico y control de gingivitis y periodontitis. Cuidado especializado de los tejidos que sostienen tus dientes para evitar la pérdida ósea y mantener encías rosadas, firmes y sanas.",
    iconName: "Shield",
    featured: false,
    leadDoctor: "Dr. Alejandro Moyano (MP 6595)",
    benefits: [
      "Eliminación profunda de sarro subgingival",
      "Detención del sangrado de encías",
      "Microcirugías de injerto y regeneración periodontal",
    ],
  },
  {
    id: "bruxismo-atm",
    name: "Bruxismo & Disfunciones de ATM",
    shortDesc: "Alivio del dolor mandibular, cefaleas y desgaste dental nocturno.",
    fullDesc: "Diagnóstico articular y diseño de placas miorrelajantes rígidas personalizadas. Evita la fractura de piezas dentales, relaja la musculatura facial y mejora la calidad del sueño de forma integral.",
    iconName: "Headphones",
    featured: false,
    leadDoctor: "Dra. Karina Orpianesi",
    benefits: [
      "Placas miorrelajantes de alta precisión",
      "Alivio de dolores de cabeza matutinos",
      "Protección contra el desgaste del esmalte",
    ],
  },
  {
    id: "odontologia-general",
    name: "Odontología General & Prevención",
    shortDesc: "Revisiones periódicas, limpiezas y cuidado preventivo para toda la familia.",
    fullDesc: "El punto de partida para una salud bucodental óptima. Detección temprana de patologías, profilaxis profunda con ultrasonido y planes de tratamiento personalizados para adultos y niños.",
    iconName: "CheckCircle",
    featured: false,
    leadDoctor: "Equipo Integral Orpianesi",
    benefits: [
      "Limpieza profunda con ultrasonido",
      "Diagnóstico precoz de lesiones cariosas",
      "Aceptación directa de las principales obras sociales",
    ],
  },
];
