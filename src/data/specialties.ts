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
    id: "protesis-dentales",
    name: "Prótesis Dentales",
    shortDesc: "Rehabilitación protésica fija y removible con ajuste y naturalidad.",
    fullDesc: "Devolvemos la función masticatoria, fonética y la armonía estética mediante coronas cerámicas, incrustaciones y prótesis fijas o removibles de alta fidelidad, diseñadas a medida.",
    iconName: "Layers",
    featured: true,
    leadDoctor: "Dr. Jamil Ortiz",
    benefits: [
      "Materiales libres de metal y de alta resistencia",
      "Recuperación óptima de la función masticatoria",
      "Diseño anatómico personalizado y confortable",
    ],
  },
  {
    id: "endodoncia",
    name: "Endodoncia",
    shortDesc: "Tratamiento de conducto con tecnología mecanizada sin molestias.",
    fullDesc: "Preservamos tus piezas dentales naturales afectadas por caries profundas o traumatismos. Realizamos instrumentación rotatoria digital que reduce los tiempos y elimina el dolor de raíz.",
    iconName: "Activity",
    featured: true,
    leadDoctor: "Dr. Jamil Ortiz",
    benefits: [
      "Alivio inmediato del dolor dental agudo",
      "Conservación de la pieza dental biológica",
      "Procedimientos indoloros con anestesia localizada",
    ],
  },
  {
    id: "implantes-dentales",
    name: "Implantes Dentales",
    shortDesc: "Reposición fija y definitiva de piezas perdidas con titanio médico.",
    fullDesc: "Solución de máxima estabilidad y estética para reemplazar dientes ausentes. Fijaciones de titanio biocompatible de última generación que se integran al hueso devolviendo seguridad y estética.",
    iconName: "ShieldCheck",
    featured: true,
    leadDoctor: "Dr. Jamil Ortiz",
    benefits: [
      "Sensación y función idéntica a tus dientes naturales",
      "Fijación fija duradera que previene la pérdida ósea",
      "Planificación clínica precisa y mínimamente invasiva",
    ],
  },
  {
    id: "estetica-dental",
    name: "Operatoria & Estética Dental",
    shortDesc: "Carillas, restauraciones estéticas y blanqueamiento dental.",
    fullDesc: "Armonización integral de tu sonrisa mediante resinas de alta definición, carillas estéticas y aclaramiento dental. Logramos un aspecto luminoso, limpio y proporcionado cuidando el esmalte.",
    iconName: "Smile",
    featured: true,
    leadDoctor: "Dr. Jamil Ortiz",
    benefits: [
      "Blanqueamiento dental seguro de consultorio",
      "Carillas y restauraciones con resinas nanohíbridas",
      "Sonrisas luminosas y completamente naturales",
    ],
  },
  {
    id: "odontopediatria",
    name: "Odontopediatría",
    shortDesc: "Cuidado bucal empático, preventivo y sin temor para los más chicos.",
    fullDesc: "Atención cálida y especializada para niños desde edades tempranas. Promovemos la educación en higiene bucal, selladores protectores y seguimiento del desarrollo dental con total paciencia.",
    iconName: "HeartHandshake",
    featured: false,
    leadDoctor: "Dr. Jamil Ortiz & Equipo",
    benefits: [
      "Ambiente tranquilo y de confianza para los niños",
      "Prevención temprana de caries y maloclusiones",
      "Guía y asesoramiento integral a las familias",
    ],
  },
  {
    id: "ortodoncia",
    name: "Ortodoncia",
    shortDesc: "Alineación dental armónica y corrección funcional de la mordida.",
    fullDesc: "Corrección de apiñamientos, espacios y desalineaciones de mordida tanto para adolescentes como adultos. Brackets estéticos, metálicos y alineadores transparentes de alta discreción.",
    iconName: "Sparkles",
    featured: false,
    leadDoctor: "Dr. Jamil Ortiz & Equipo",
    benefits: [
      "Opciones estéticas y discretas para adultos",
      "Mejora notable de la masticación y armonía facial",
      "Tratamientos planificados paso a paso",
    ],
  },
  {
    id: "periodoncia",
    name: "Periodoncia",
    shortDesc: "Salud, desinfección y prevención de los tejidos de soporte y encías.",
    fullDesc: "Diagnóstico y tratamiento de gingivitis y periodontitis. Limpiezas ultrasónicas profundas y mantenimiento periódico para detener el sangrado, eliminar el sarro y proteger la raíz dental.",
    iconName: "Shield",
    featured: false,
    leadDoctor: "Dr. Jamil Ortiz",
    benefits: [
      "Control y eliminación del sangrado gingival",
      "Profilaxis ultrasónica profunda indolora",
      "Protección contra la pérdida de hueso de soporte",
    ],
  },
  {
    id: "armonizacion-facial",
    name: "Armonización Facial",
    shortDesc: "Tratamientos estéticos faciales que realzan la belleza natural de tu rostro.",
    fullDesc: "Procedimientos médico-odontológicos mínimamente invasivos para equilibrar facciones, perfilar labios, atenuar líneas de expresión y complementar una sonrisa deslumbrante en Recoleta.",
    iconName: "Sparkles",
    featured: true,
    leadDoctor: "Dr. Jamil Ortiz",
    benefits: [
      "Resultados naturales, elegantes y armoniosos",
      "Procedimientos seguros en consultorio habilitado",
      "Complemento estético ideal para tu sonrisa",
    ],
  },
];
