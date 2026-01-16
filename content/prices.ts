import { Price } from './types';

export const prices: Price[] = [
  // Membership
  {
    id: 'preis-mitgliedschaft-einzel',
    category: 'Mitgliedschaft Einzel',
    amount: 40,
    period: 'pro Jahr',
    description: 'Jahresmitgliedschaft für Einzelpersonen. Zugang zu allen Trainings und Veranstaltungen.',
  },
  {
    id: 'preis-mitgliedschaft-familie',
    category: 'Mitgliedschaft Familie',
    amount: 100,
    period: 'pro Jahr',
    description: 'Jahresmitgliedschaft für Familien. Zugang zu allen Trainings und Veranstaltungen für alle Familienmitglieder.',
  },

  // Courses
  {
    id: 'preis-kurs-einfuehrung',
    category: 'Einführungskurs',
    amount: 0,
    period: 'einmalig',
    description: 'Gratis für Mitglieder. Einführung in die Grundlagen des Bogenschießens mit Leihbogen.',
  },
  {
    id: 'preis-kurs-kinder',
    category: 'Kinderkurs',
    amount: 100,
    period: 'pro Semester',
    description: 'Kurs für Kinder und Jugendliche. Leihbögen werden gestellt.',
  },

  // Equipment rental
  {
    id: 'preis-ausruestung-miete',
    category: 'Ausrüstung mieten',
    amount: 50, // PLACEHOLDER - leicht zu ändern
    period: 'pro Jahr',
    description: 'Jahresmiete für komplette Bogenausrüstung (Bogen, Pfeile, Köcher). PLACEHOLDER Preis - bitte anpassen.',
  },
];

export const pricesLastUpdated = 'Januar 2026';
