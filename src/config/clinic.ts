export interface ClinicConfig {
  name: string;
  shortName: string;
  tagline: string;
  descriptor: string;
  director: string;
  directorTitle: string;
  phone: string;
  phoneDisplay: string;
  whatsapp: string;
  whatsappClean: string;
  whatsappUrl: string;
  email: string;
  address: string;
  neighborhood: string;
  city: string;
  province: string;
  mapsUrl: string;
  hours: string;
  instagram: string;
  instagramHandle: string;
  paymentMethods: string[];
}

export const clinicConfig: ClinicConfig = {
  name: "JO DENTAL - Dr. Jamil Ortiz",
  shortName: "JO DENTAL",
  tagline: "Odontología Integral & Armonización Facial",
  descriptor: "Consultorio Odontológico Especializado y Armonización Facial en Recoleta, Buenos Aires",
  director: "Dr. Jamil Ortiz",
  directorTitle: "Director Médico · Odontología Integral, Estética & Armonización Facial",
  phone: "+5491126317923",
  phoneDisplay: "11 2631-7923",
  whatsapp: "+54 9 11 2631-7923",
  whatsappClean: "5491126317923",
  whatsappUrl: "https://wa.me/5491126317923?text=Hola%20Dr.%20Jamil%20Ortiz%20(JO%20DENTAL),%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio%20de%20Recoleta.",
  email: "contacto@jodental.com.ar",
  address: "Paraná 851",
  neighborhood: "Recoleta",
  city: "Ciudad Autónoma de Buenos Aires",
  province: "Buenos Aires, Argentina",
  mapsUrl: "https://maps.google.com/?q=Parana+851,+Recoleta,+Buenos+Aires",
  hours: "Lunes a Viernes de 09:00 a 19:30 hs (atención con turno previo)",
  instagram: "https://www.instagram.com/dr.jamil_ortiz/",
  instagramHandle: "@dr.jamil_ortiz",
  paymentMethods: ["Efectivo", "Transferencia bancaria", "Tarjeta de débito y crédito"],
};

export const PAYMENT_METHODS = [
  {
    id: "efectivo",
    name: "Efectivo",
    desc: "Abono directo en recepción al momento de la consulta.",
    badge: "Descuento en efectivo"
  },
  {
    id: "transferencia",
    name: "Transferencia Bancaria",
    desc: "Acreditación instantánea por CBU / CVU o Alias bancario.",
    badge: "Inmediata"
  },
  {
    id: "tarjeta",
    name: "Tarjetas de Débito y Crédito",
    desc: "Cobro con terminal segura y opciones de financiación.",
    badge: "Todas las tarjetas"
  }
];

export const TRUST_HIGHLIGHTS = [
  {
    id: "ubicacion",
    title: "Recoleta, Buenos Aires",
    desc: "Paraná 851 · Consultorio privado exclusivo de fácil acceso.",
  },
  {
    id: "atencion",
    title: "Atención con el Dr. Jamil Ortiz",
    desc: "Diagnóstico personalizado y seguimiento directo por el profesional.",
  },
  {
    id: "estetica",
    title: "Odontología & Armonización Facial",
    desc: "Tratamientos integrales que combinan salud bucal y armonía estética.",
  },
  {
    id: "pagos",
    title: "Múltiples Medios de Pago",
    desc: "Efectivo, transferencia y tarjetas con total flexibilidad.",
  }
];
