# Odontología Integral General · Centro Odontológico Especializado y Odontología Digital

Sitio web y plataforma de atención para **Odontología Integral General** (David Luque 90, Córdoba Capital). Directora General: Dra. Karina Orpianesi (MP 8489).

Desarrollada con **Next.js (App Router)**, **TypeScript**, **Tailwind CSS** y siguiendo los estándares de diseño y anti-slop de **Taste Skill** (`design-taste-frontend`).

---

## 1. Quick Start & Setup

### Requisitos previos
- Node.js 18+ o 20+
- npm o pnpm

### Instalación y Ejecución

```bash
# Navegar al directorio del proyecto
cd clientes/consultorio

# Instalar dependencias
npm install

# Iniciar entorno de desarrollo local (http://localhost:3000)
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start
```

---

## 2. Taste Skill Utilizada

Esta demo fue construida aplicando rigurosamente la habilidad:
**`design-taste-frontend`** (Taste Skill v2).

### Diales de Diseño Calibrados para Salud:
- **`DESIGN_VARIANCE: 5`**: Estructura asimétrica y rítmica pero sobria y contenida, evitando cuadrículas repetitivas sin caer en layouts caóticos incompatibles con la salud.
- **`MOTION_INTENSITY: 4`**: Transiciones funcionales en la turnera, reveals suaves al entrar en viewport, feedback activo en botones y cero scroll-hijacking o animaciones que distraigan.
- **`VISUAL_DENSITY: 4`**: Espaciado amplio, descanso visual, tipografía sobria con alta legibilidad y jerarquía clara.

### Reglas Anti-Slop Aplicadas:
- **Sin gradientes violetas/azules de IA**: Paleta clínica contemporánea basada en fondo off-white frío (`#f8fafc`), superficies limpias y un único acento de marca: **Deep Petrol / Teal** (`#0f4c5c` / `#164e63`).
- **Sin estética de spa beige/café**: Evita intencionalmente los tonos crema/brass/clay cliché de bienestar genérico para mantener autoridad médica y psicológica.
- **Sin falsos testimonios ni promesas médicas**: Reemplazados por señales de confianza operativas reales (turnos programados sin demoras, recordatorios automáticos por WhatsApp, pautas claras previas a la consulta).
- **Hero asimétrico editorial**: Titular conciso (*"Tu salud, con tiempo para vos."*), indicador funcional de turnos disponibles y fotografía editorial cálida sin poses forzadas de médicos mirando a cámara con brazos cruzados.
- **Sin íconos decorativos genéricos de cruces o electrocardiogramas**: Uso de iconografía funcional uniforme `@phosphor-icons/react` a 1.5/2px de stroke.

---

## 3. Cómo Adaptar Esta Demo a un Consultorio Real

Toda la lógica de presentación está desacoplada de los datos del cliente. Para personalizar esta demo para un nuevo cliente en menos de 15 minutos:

### Paso 1: Configuración de Marca y Contacto
Edita el archivo `src/config/clinic.ts`:
- Reemplaza `name` por el nombre del cliente (ej. *“Clínica Dental OdontoBelgrano”* o *“Espacio Terapéutico Palermo”*).
- Actualiza `phone`, `phoneDisplay`, `whatsapp` y `address`.
- Desactiva o ajusta el disclaimer `demoNotice` una vez conectado a datos reales.

### Paso 2: Especialidades y Tratamientos
Edita `src/data/specialties.ts`:
- Para **Odontología**: Configura especialidades como *Ortodoncia Invisible, Implantes Dentales, Estética Dental, Limpieza y Prevención*.
- Para **Psicología**: Configura modalidades como *Terapia Individual Adultos, Terapia de Pareja, Terapia Online, Orientación Vocacional*.
- Para **Kinesiología & Osteopatía**: Configura *Rehabilitación Postural Global (RPG), Fisioterapia Deportiva, Dolor Crónico, Drenaje Linfático*.
- Para cada servicio podés ajustar la duración estimada (`estimatedDuration`), modalidades habilitadas (`Presencial` y/o `Teleconsulta`) y los tópicos de consulta frecuente.

### Paso 3: Profesionales y Equipo
Edita `src/data/professionals.ts`:
- Añade los nombres, fotos reales, matrículas provinciales o nacionales verídicas, cargos y pequeñas biografías de los especialistas del centro.

### Paso 4: Conexión del Flujo de Reserva
En `src/components/booking/BookingModal.tsx`:
- Actualmente opera con datos simulados y validaciones locales completas.
- Para conectar a una base de datos real (ej. PostgreSQL, Supabase, Google Calendar, o API de Turnera/Doctoralia), conecta el `POST` en el paso 6 a tu endpoint de API (`/api/bookings`).
- Para enviar mensaje directo de confirmación por WhatsApp, utiliza el webhook de WhatsApp Business API o genera el link dinámico con el resumen del turno.

### Paso 5: Coberturas y Preguntas Frecuentes
- Edita `src/components/home/Coverage.tsx` para listar las prepagas y obras sociales con las que trabaja el consultorio (o la modalidad de factura para reintegro).
- Actualiza `src/data/faq.ts` con los requisitos específicos (ej. estudios de imágenes, ayuno para análisis, derivaciones requeridas).

---

## 4. Arquitectura de Código

```
src/
├── app/
│   ├── globals.css          # Estilos globales, tokens, WCAG focus y prefers-reduced-motion
│   ├── layout.tsx           # Metadata SEO y layout raíz
│   └── page.tsx             # Orquestación de secciones y estado del modal de reserva
├── components/
│   ├── booking/
│   │   └── BookingModal.tsx # Flujo modal interactivo en 7 pasos
│   ├── home/
│   │   ├── CareFlow.tsx     # Proceso en 4 pasos ("Cómo atendemos")
│   │   ├── ClinicExperience.tsx # Galería editorial y valores del espacio
│   │   ├── Coverage.tsx     # Pestañas de aranceles, reintegros y teleconsulta
│   │   ├── FinalCTA.tsx     # Bloque de cierre con reserva y WhatsApp
│   │   ├── Hero.tsx         # Hero asimétrico con disponibilidad semanal
│   │   ├── Professionals.tsx# Fichas de profesionales con próximo turno demo
│   │   ├── QuickAccess.tsx  # Accesos rápidos (Turnos, Teleconsulta, Estudios, WhatsApp)
│   │   ├── Specialties.tsx  # Grilla variada de especialidades integradas
│   │   └── TrustAndFAQ.tsx  # Compromiso operativo + Acordeón de FAQs
│   ├── layout/
│   │   ├── Header.tsx       # Barra sticky, selector y menú móvil accesible
│   │   └── Footer.tsx       # Pie institucional con avisos demo y legales
│   └── ui/
│       ├── Badge.tsx        # Etiquetas calibradas
│       ├── Button.tsx       # Botones pill accesibles con estados interactivos
│       └── Container.tsx    # Contenedor responsivo
├── config/
│   └── clinic.ts            # Datos configurables del cliente/consultorio
└── data/
    ├── availability.ts      # Slots horarios y disponibilidad mock
    ├── faq.ts               # Preguntas y respuestas
    ├── professionals.ts     # Fichas de médicos y terapeutas
    └── specialties.ts       # Catálogo de especialidades
```

---

## 5. Cumplimiento de Accesibilidad y Performance

- Cumple con los criterios **WCAG AA** de contraste cromático en todos los textos e interactivos.
- Soporte para navegación completa por teclado con anillos de foco visibles (`focus-visible`).
- Respeta la directiva del sistema operativo `prefers-reduced-motion: reduce`.
- Componentes interactivos con áreas táctiles mínimas de 44px para dispositivos móviles.
- Sin layout shifts (`CLS < 0.1`) y optimizado para carga ágil sin dependencias de streaming pesadas.
