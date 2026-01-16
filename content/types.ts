export interface ClubInfo {
  name: string;
  address: {
    street: string;
    postalCode: string;
    city: string;
    country: string;
  };
  serviceArea: string;
  email: string;
  geoKeyword: string;
}

export interface TrainingEvent {
  id: string;
  day: string;
  time: string;
  location: string;
  description: string;
  level?: string;
}

export interface Price {
  id: string;
  category: string;
  amount: number;
  period: string;
  description: string;
}

export interface BoardMember {
  id: string;
  name: string;
  role: string;
  imagePath: string;
  description?: string;
}

export type TrainingCategory = 
  | 'Einführungskurs'
  | 'Kinderkurse'
  | 'Freies Training'
  | 'Vereinsausflüge';

export interface TrainingItem {
  id: string;
  title: string;
  category: TrainingCategory;
  startDate: string; // ISO date string
  startTime: string;
  endTime?: string;
  locationLabel?: string; // "Innen", "Aussen", etc.
  spotsTotal: number;
  spotsInfoText: string; // e.g., "max. 12 Plätze"
  notes?: string;
}

export interface PageMetadata {
  title: string;
  description: string;
  canonical: string;
}

export interface VereinContent {
  title: string;
  sections: Array<{
    id: string;
    heading: string;
    content: string;
  }>;
  amenities: string[];
}

export interface TrainingContent {
  title: string;
  intro: string;
  events: TrainingEvent[];
  lastUpdated: string;
}

export interface PreiseContent {
  title: string;
  intro: string;
  prices: Price[];
  lastUpdated: string;
}

export interface AboutContent {
  title: string;
  intro: string;
  members: BoardMember[];
}
