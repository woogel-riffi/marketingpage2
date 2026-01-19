import { Price } from './types';

export const prices: Price[] = [
  // Membership
  {
    id: 'preis-mitgliedschaft-einzel',
    category: 'Mitgliedschaft Einzel',
    amount: 40,
    period: 'pro Jahr',
    description: 'Jahresmitgliedschaft für Einzelpersonen.',
  },
  {
    id: 'preis-mitgliedschaft-familie',
    category: 'Mitgliedschaft Familie',
    amount: 100,
    period: 'pro Jahr',
    description: 'Jahresmitgliedschaft für Familien.',
  },

  // Courses
  {
    id: 'preis-kurs-einfuehrung',
    category: 'Einführungskurs',
    amount: 0,
    period: 'einmalig',
    description: 'Gratis für Mitglieder.',
  },
  {
    id: 'preis-kurs-kinder',
    category: 'Kinderkurs',
    amount: 100,
    period: 'pro Semester',
    description: 'Kurs für Kinder und Jugendliche.',
  },

  // Equipment rental
  {
    id: 'preis-ausruestung-miete',
    category: 'Ausrüstung mieten',
    amount: 50,
    period: 'pro Jahr',
    description: 'Jahresmiete für Bogenausrüstung.',
  },
];

export const pricesLastUpdated = 'Januar 2026';
