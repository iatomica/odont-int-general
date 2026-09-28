export interface TimeSlot {
  time: string;
  available: boolean;
}

export interface DayAvailability {
  dateString: string; // YYYY-MM-DD
  displayDate: string; // e.g. "Jueves 24 Sep"
  slots: TimeSlot[];
}

export const mockUpcomingDays: DayAvailability[] = [
  {
    dateString: "2026-09-24",
    displayDate: "Jueves 24 Sep",
    slots: [
      { time: "09:00", available: true },
      { time: "09:45", available: false },
      { time: "11:00", available: true },
      { time: "12:15", available: true },
      { time: "15:30", available: false },
      { time: "17:00", available: true },
      { time: "18:30", available: true },
    ],
  },
  {
    dateString: "2026-09-25",
    displayDate: "Viernes 25 Sep",
    slots: [
      { time: "08:30", available: true },
      { time: "10:00", available: true },
      { time: "11:30", available: false },
      { time: "14:00", available: true },
      { time: "16:15", available: true },
      { time: "17:45", available: false },
    ],
  },
  {
    dateString: "2026-09-28",
    displayDate: "Lunes 28 Sep",
    slots: [
      { time: "09:15", available: true },
      { time: "10:45", available: true },
      { time: "12:00", available: true },
      { time: "15:00", available: true },
      { time: "16:30", available: false },
      { time: "18:00", available: true },
    ],
  },
  {
    dateString: "2026-09-29",
    displayDate: "Martes 29 Sep",
    slots: [
      { time: "09:30", available: false },
      { time: "11:15", available: true },
      { time: "13:00", available: true },
      { time: "15:45", available: true },
      { time: "17:15", available: true },
    ],
  },
];
