import { BoardMember } from './types';

export const boardMembers: BoardMember[] = [
  {
    id: 'board-praesident',
    name: 'Max Mustermann',
    role: 'Präsident',
    imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Max+Mustermann',
    description: 'Verantwortlich für die strategische Ausrichtung des Vereins',
  },
  {
    id: 'board-kassier',
    name: 'Anna Schmidt',
    role: 'Kassier',
    imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Anna+Schmidt',
    description: 'Verwaltet die Finanzen des Vereins',
  },
  {
    id: 'board-aktuar',
    name: 'Peter Müller',
    role: 'Aktuar',
    imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Peter+Müller',
    description: 'Zuständig für Protokolle und Verwaltung',
  },
  {
    id: 'board-trainer',
    name: 'Lisa Weber',
    role: 'Trainer',
    imagePath: 'https://placehold.co/400x400/4a5568/ffffff?text=Lisa+Weber',
    description: 'Leitet Trainings und Kurse für alle Niveaus',
  },
];
