import {
  ClubInfo,
  TrainingEvent,
  Price,
  BoardMember,
  VereinContent,
  TrainingContent,
  PreiseContent,
  AboutContent,
} from './types';

export const clubInfo: ClubInfo = {
  name: 'Pfeil & Bogen',
  address: {
    street: 'Rifferswilerstrasse',
    postalCode: '8915',
    city: 'Hausen am Albis',
    country: 'Schweiz',
  },
  serviceArea: 'Bezirk Affoltern (ZH)',
  email: 'info@pfeil-bogen.ch',
  geoKeyword: 'Bogenschiessen in Rifferswil',
};

export const vereinContent: VereinContent = {
  title: 'Unser Verein',
  sections: [
    {
      id: 'verein-geschichte',
      heading: 'Geschichte',
      content:
        'Pfeil & Bogen ist ein etablierter Bogensportverein im Bezirk Affoltern. Wir bieten Bogenschiessen in Rifferswil für Anfänger und Fortgeschrittene an. Unser Verein fördert den Bogensport in der Region und bietet eine Gemeinschaft für alle Altersgruppen.',
    },
    {
      id: 'verein-ziele',
      heading: 'Unsere Ziele',
      content:
        'Wir möchten Bogenschiessen in Rifferswil und der gesamten Region zugänglich machen. Unser Ziel ist es, eine inklusive Gemeinschaft zu schaffen, die sowohl Wettkampf- als auch Freizeitsportler willkommen heisst.',
    },
    {
      id: 'verein-ausstattung',
      heading: 'Ausstattung',
      content:
        'Unser Verein verfügt über eine moderne Schiessanlage mit verschiedenen Distanzen. Die Anlage ist für alle Bogenarten geeignet und bietet optimale Bedingungen für Training und Wettkämpfe.',
    },
  ],
  amenities: [
    'Schiessanlage mit verschiedenen Distanzen',
    'Überdachte Schiessstände',
    'Ausleihbögen für Anfänger',
    'Parkplätze',
    'Sanitäre Anlagen',
  ],
};

export const trainingContent: TrainingContent = {
  title: 'Training',
  intro:
    'Unser Training findet regelmässig statt und ist für alle Leistungsniveaus geeignet. Bogenschiessen in Rifferswil bietet optimale Bedingungen für Ihr Training.',
  events: [
    {
      id: 'training-mittwoch',
      day: 'Mittwoch',
      time: '18:00 - 20:00',
      location: 'Schiessanlage Rifferswil',
      description: 'Wöchentliches Training für alle Mitglieder',
      level: 'Alle Niveaus',
    },
    {
      id: 'training-samstag',
      day: 'Samstag',
      time: '10:00 - 12:00',
      location: 'Schiessanlage Rifferswil',
      description: 'Wöchentliches Training für alle Mitglieder',
      level: 'Alle Niveaus',
    },
    {
      id: 'training-anfaenger',
      day: 'Donnerstag',
      time: '19:00 - 20:30',
      location: 'Schiessanlage Rifferswil',
      description: 'Spezielles Anfängertraining mit Leihbögen',
      level: 'Anfänger',
    },
  ],
  lastUpdated: '2024-01-15',
};

export const preiseContent: PreiseContent = {
  title: 'Preise',
  intro:
    'Transparente Preise für Bogenschiessen in Rifferswil. Wir bieten flexible Mitgliedschaftsmodelle für alle Interessierten.',
  prices: [
    {
      id: 'preis-jahresmitgliedschaft',
      category: 'Jahresmitgliedschaft',
      amount: 150,
      period: 'pro Jahr',
      description: 'Vollzugang zu allen Trainings und Veranstaltungen',
    },
    {
      id: 'preis-saisonmitgliedschaft',
      category: 'Saisonmitgliedschaft',
      amount: 100,
      period: 'pro Saison',
      description: 'Mitgliedschaft für eine Saison (6 Monate)',
    },
    {
      id: 'preis-schnupperkurs',
      category: 'Schnupperkurs',
      amount: 30,
      period: 'einmalig',
      description: 'Einmaliger Schnupperkurs mit Leihbogen',
    },
    {
      id: 'preis-einzelstunde',
      category: 'Einzelstunde',
      amount: 20,
      period: 'pro Stunde',
      description: 'Einzelstunde mit Trainer (exkl. Leihbogen)',
    },
  ],
  lastUpdated: '2024-01-15',
};

export const aboutContent: AboutContent = {
  title: 'Über uns',
  intro:
    'Lernen Sie das Team hinter Pfeil & Bogen kennen. Unser Vorstand setzt sich für die Förderung des Bogensports in Rifferswil ein.',
  members: [
    {
      id: 'vorstand-praesident',
      name: 'Max Mustermann',
      role: 'Präsident',
      imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Max+Mustermann',
      description: 'Verantwortlich für die strategische Ausrichtung des Vereins',
    },
    {
      id: 'vorstand-vizepraesident',
      name: 'Anna Schmidt',
      role: 'Vizepräsidentin',
      imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Anna+Schmidt',
      description: 'Unterstützt den Präsidenten und leitet Trainings',
    },
    {
      id: 'vorstand-kassier',
      name: 'Peter Müller',
      role: 'Kassier',
      imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Peter+Müller',
      description: 'Verwaltet die Finanzen des Vereins',
    },
    {
      id: 'vorstand-sekretaer',
      name: 'Lisa Weber',
      role: 'Sekretärin',
      imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Lisa+Weber',
      description: 'Zuständig für Kommunikation und Verwaltung',
    },
  ],
};
