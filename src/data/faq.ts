export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "turnos" | "pagos" | "cobertura" | "tratamientos";
}

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "ubicacion-turnos",
    question: "¿Dónde queda el consultorio y cómo agendo mi turno?",
    answer: "Estamos ubicados en Paraná 851, en el barrio de Recoleta, Ciudad Autónoma de Buenos Aires. Atendemos con turno programado para garantizar puntualidad y dedicación exclusiva. Podés coordinar tu cita directamente por WhatsApp al 11 2631-7923.",
    category: "turnos",
  },
  {
    id: "medios-pago",
    question: "¿Cuáles son los medios de pago aceptados?",
    answer: "Aceptamos efectivo, transferencia bancaria inmediata y tarjetas de débito y crédito. Podés consultar por opciones de financiación y facilidades de pago para tratamientos integrales.",
    category: "pagos",
  },
  {
    id: "obras-sociales-consulta",
    question: "¿Atienden con obras sociales o prepagas?",
    answer: "La cobertura y reintegros se gestionan consultando directamente al consultorio. Escribinos por WhatsApp indicando tu cobertura o plan para que el equipo te informe la modalidad de atención y emisión de facturación oficial para reintegros.",
    category: "cobertura",
  },
  {
    id: "armonizacion-facial",
    question: "¿En qué consiste la armonización facial odontológica?",
    answer: "Son procedimientos estéticos seguros y ambulatorios realizados por el Dr. Jamil Ortiz en consultorio, diseñados para equilibrar y resaltar tus rasgos faciales en conjunto con tu sonrisa: perfilado de labios, relleno con ácido hialurónico y toxina botulínica con resultados naturales.",
    category: "tratamientos",
  },
  {
    id: "urgencias",
    question: "¿Atienden situaciones de dolor o urgencias dentales?",
    answer: "Sí, si presentás dolor agudo, fractura de una pieza o molestia intensa, escribinos de inmediato por WhatsApp para asignarte un sobreturno de evaluación prioritaria en Recoleta.",
    category: "turnos",
  },
  {
    id: "protesis-implantes",
    question: "¿Cómo es el proceso para colocar implantes o prótesis dentales?",
    answer: "Iniciamos con una evaluación clínica completa y diagnóstico por imágenes para diseñar un plan a medida. El Dr. Jamil Ortiz te explicará los tiempos, materiales (libres de metal, zirconio o titanio) y opciones de presupuesto detalladas.",
    category: "tratamientos",
  },
];
