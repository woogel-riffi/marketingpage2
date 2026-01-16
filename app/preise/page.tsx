import type { Metadata } from 'next';
import { preiseContent, clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Preise - Pfeil & Bogen',
  description:
    'Transparente Preise für Bogenschießen in Rifferswil. Jahres- und Saisonmitgliedschaften, Schnupperkurse und Einzelstunden.',
  openGraph: {
    title: 'Preise - Pfeil & Bogen',
    description: 'Transparente Preise für Bogenschießen in Rifferswil.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/preise',
  },
};

export default function PreisePage() {
  return (
    <>
      <StructuredData type="offers" data={{ prices: preiseContent.prices }} />
      
      <Section id="preise-hero" className="bg-white pt-12">
        <div className="text-center mb-12">
          <h1>{preiseContent.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {preiseContent.intro}
          </p>
        </div>
      </Section>

      <Section id="preise-liste" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8">
          {preiseContent.prices.map((price) => (
            <Card key={price.id} id={price.id}>
              <h2 className="text-2xl font-bold mb-2 text-primary-green">
                {price.category}
              </h2>
              <div className="mb-4">
                <span className="text-4xl font-bold text-primary-black">
                  CHF {price.amount}
                </span>
                <span className="text-gray-600 ml-2">{price.period}</span>
              </div>
              <p className="text-gray-700 mb-6">{price.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="preise-info" className="bg-white">
        <Card id="preise-hinweise">
          <h2 className="text-2xl font-bold mb-4 text-primary-green">
            Weitere Informationen
          </h2>
          <p className="text-gray-700 mb-4">
            Alle Preise verstehen sich inklusive Zugang zu unseren
            Trainingsmöglichkeiten. Leihbögen sind für Anfänger verfügbar.
            Mitglieder erhalten zusätzliche Vorteile bei Veranstaltungen.
          </p>
          <p className="text-gray-700 mb-6">
            Für Fragen zu unseren Preisen oder individuellen Angeboten
            kontaktieren Sie uns gerne.
          </p>
          <Button
            href={`mailto:${clubInfo.email}`}
            variant="primary"
            className="mt-4"
          >
            Kontakt per E-Mail
          </Button>
          <p className="text-sm text-gray-500 mt-6">
            <strong>Stand:</strong> {preiseContent.lastUpdated}
          </p>
        </Card>
      </Section>
    </>
  );
}
