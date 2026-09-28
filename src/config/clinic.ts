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
}

export const clinicConfig: ClinicConfig = {
  name: "Odontología Integral General",
  shortName: "Odontología Integral General",
  tagline: "Odontología Integral & Enfoque Digital",
  descriptor: "Centro Odontológico Especializado y Odontología Digital en Córdoba Capital",
  director: "Dra. Karina Orpianesi",
  directorTitle: "Directora General · MP 8489 · Especialista en Endodoncia",
  phone: "+543513170792",
  phoneDisplay: "351 317-0792",
  whatsapp: "+54 9 351 317-0792",
  whatsappClean: "5493513170792",
  whatsappUrl: "https://wa.me/5493513170792?text=Hola%20Odontolog%C3%ADa%20Integral%20General,%20quisiera%20consultar%20por%20un%20turno%20en%20el%20consultorio.",
  email: "odontologiaintegralgeneral@gmail.com",
  address: "David Luque 90",
  neighborhood: "Barrio General Paz",
  city: "Córdoba Capital",
  province: "Córdoba, Argentina",
  mapsUrl: "https://maps.google.com/?q=David+Luque+90,+Cordoba+Capital",
  hours: "Lunes a Viernes de 09:00 a 19:30 hs",
  instagram: "https://www.instagram.com/odkarinaorpianesi/",
  instagramHandle: "@odkarinaorpianesi",
};

export const OBRAS_SOCIALES = [
  { id: "osde", name: "OSDE", color: "#004B87" },
  { id: "medife", name: "Medifé", color: "#00838F" },
  { id: "sancor", name: "Sancor Salud", color: "#003A70" },
  { id: "swiss-medical", name: "Swiss Medical", color: "#E53935" },
  { id: "unimed", name: "Unimed", color: "#00897B" },
  { id: "nobis", name: "Nobis", color: "#5E35B1" },
  { id: "sadaic", name: "SADAIC", color: "#1565C0" },
  { id: "galeno", name: "Galeno", color: "#0D47A1" },
  { id: "prevencion-salud", name: "Prevención Salud", color: "#2E7D32" },
  { id: "avalian", name: "Avalian", color: "#0277BD" },
  { id: "federada-salud", name: "Federada Salud", color: "#C62828" },
  { id: "poder-judicial", name: "Poder Judicial", color: "#37474F" },
  { id: "caja-notarial", name: "Caja Notarial", color: "#4E342E" },
  { id: "cpce", name: "CPCE", color: "#6A1B9A" },
];
