import { BoardMember } from './types';

export const boardMembers: BoardMember[] = [
  {
    id: 'board-praesident',
    name: 'Max Mustermann',
    role: 'Präsident',
    imagePath: '/images/board/praesident.jpg', // PLACEHOLDER
    description: 'Verantwortlich für die strategische Ausrichtung des Vereins',
  },
  {
    id: 'board-kassier',
    name: 'Anna Schmidt',
    role: 'Kassier',
    imagePath: '/images/board/kassier.jpg', // PLACEHOLDER
    description: 'Verwaltet die Finanzen des Vereins',
  },
  {
    id: 'board-aktuar',
    name: 'Peter Müller',
    role: 'Aktuar',
    imagePath: '/images/board/aktuar.jpg', // PLACEHOLDER
    description: 'Zuständig für Protokolle und Verwaltung',
  },
  {
    id: 'board-trainer',
    name: 'Lisa Weber',
    role: 'Trainer',
    imagePath: '/images/board/trainer.jpg', // PLACEHOLDER
    description: 'Leitet Trainings und Kurse für alle Niveaus',
  },
];
