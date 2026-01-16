import type { Metadata } from 'next';
import { clubInfo } from '@/content/data';
import { LOVABLE_GAME_URL } from '@/content/site';
import Section from '@/components/ui/Section';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Pfeil & Bogen - Bogenschießen in Rifferswil',
  description:
    'Bogenschießen in Rifferswil erleben. Pfeil & Bogen bietet professionelles Training, moderne Anlagen und eine aktive Gemeinschaft für Bogensportbegeisterte im Bezirk Affoltern.',
  openGraph: {
    title: 'Pfeil & Bogen - Bogenschießen in Rifferswil',
    description:
      'Bogenschießen in Rifferswil erleben. Professionelles Training und moderne Anlagen.',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Pfeil & Bogen',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch',
  },
};

export default function HomePage() {
  return (
    <>
      <StructuredData type="organization" />
      <StructuredData type="sportsActivity" />
      
      <Section id="ueberblick" className="bg-gradient-to-b from-white to-gray-50">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-black">
            Pfeil & Bogen – Bogenschießen in Rifferswil
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 leading-relaxed">
            Unser Verein bietet Bogenschießen in Rifferswil für Anfänger und Fortgeschrittene. 
            Wir führen regelmäßige Trainings durch und bieten verschiedene Kursformate wie Einführungskurse, 
            Kinderkurse und freies Training an. Unsere Schießanlage befindet sich im Bezirk Affoltern 
            und steht allen Interessierten offen.
          </p>
          <p className="text-lg text-gray-600 mb-8">
            <a 
              href={`mailto:${clubInfo.email}`}
              className="text-primary-green hover:text-primary-gold transition-colors underline"
              aria-label={`Kontaktieren Sie uns per E-Mail: ${clubInfo.email}`}
            >
              Wir freuen uns über neue Mitglieder
            </a>
          </p>
        </div>
      </Section>

      <Section id="spiel" className="bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center">Bogenschieß-Spiel</h2>
          <p className="text-lg text-gray-700 mb-6 text-center max-w-2xl mx-auto">
            Probieren Sie unser interaktives Bogenschieß-Spiel aus und testen Sie Ihre Fähigkeiten.
          </p>
          <div className="relative w-full aspect-video">
            <iframe
              src={LOVABLE_GAME_URL}
              title="Bogenschieß-Spiel - Interaktives Bogenschießen"
              className="w-full h-full border-0 rounded-lg shadow-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label="Interaktives Bogenschieß-Spiel"
            />
          </div>
          <div className="mt-4 text-center">
            <a
              href={LOVABLE_GAME_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-green hover:text-primary-gold transition-colors underline"
              aria-label="Spiel in neuem Tab öffnen"
            >
              Spiel öffnen
            </a>
          </div>
        </div>
      </Section>

      <Section id="kurzinfos" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-8 text-center">Kurzinfos</h2>
          <ul className="space-y-4 text-lg text-gray-700 max-w-2xl mx-auto">
            <li className="flex items-start">
              <span className="text-primary-green mr-3 font-bold">•</span>
              <span>
                <strong>Standort:</strong> {clubInfo.address.city}, {clubInfo.serviceArea}
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-green mr-3 font-bold">•</span>
              <span>
                <strong>Zielgruppe:</strong> Alle Altersgruppen, Anfänger und Fortgeschrittene
              </span>
            </li>
            <li className="flex items-start">
              <span className="text-primary-green mr-3 font-bold">•</span>
              <span>
                <strong>Trainingsarten:</strong> Einführungskurse, Kinderkurse, Freies Training, Vereinsausflüge
              </span>
            </li>
          </ul>
        </div>
      </Section>

      <Section id="kontakt" className="bg-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">Kontakt</h2>
          <p className="text-lg text-gray-700 mb-6">
            Haben Sie Fragen oder möchten Sie mehr erfahren? Wir freuen uns über Ihre Nachricht.
          </p>
          <a
            href={`mailto:${clubInfo.email}`}
            className="inline-block text-primary-green hover:text-primary-gold transition-colors underline text-lg"
            aria-label={`Kontaktieren Sie uns per E-Mail: ${clubInfo.email}`}
          >
            {clubInfo.email}
          </a>
        </div>
      </Section>
    </>
  );
}
