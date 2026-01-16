import type { Metadata } from 'next';
import { trainingContent, clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Training - Pfeil & Bogen',
  description:
    'Trainingszeiten und -angebote für Bogenschießen in Rifferswil. Regelmäßige Trainings für alle Leistungsniveaus.',
  openGraph: {
    title: 'Training - Pfeil & Bogen',
    description: 'Trainingszeiten und -angebote für Bogenschießen in Rifferswil.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/training',
  },
};

export default function TrainingPage() {
  return (
    <>
      <StructuredData type="events" data={{ events: trainingContent.events }} />
      
      <Section id="training-hero" className="bg-white pt-12">
        <div className="text-center mb-12">
          <h1>{trainingContent.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {trainingContent.intro}
          </p>
        </div>
      </Section>

      <Section id="training-events" className="bg-gray-50">
        <div className="space-y-6">
          {trainingContent.events.map((event) => (
            <Card key={event.id} id={event.id}>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div className="mb-4 md:mb-0">
                  <h2 className="text-2xl font-bold mb-2 text-primary-green">
                    {event.day}
                  </h2>
                  <p className="text-lg text-gray-700 mb-2">
                    <strong>Zeit:</strong> {event.time}
                  </p>
                  <p className="text-gray-700 mb-2">
                    <strong>Ort:</strong> {event.location}
                  </p>
                  <p className="text-gray-700 mb-2">{event.description}</p>
                  {event.level && (
                    <p className="text-sm text-primary-gold font-semibold">
                      {event.level}
                    </p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="training-info" className="bg-white">
        <Card id="training-hinweise">
          <h2 className="text-2xl font-bold mb-4 text-primary-green">
            Wichtige Hinweise
          </h2>
          <p className="text-gray-700 mb-4">
            Alle Trainings finden auf unserer Schießanlage in Rifferswil statt.
            Anfänger können Leihbögen nutzen. Bitte melden Sie sich vor dem
            ersten Besuch per E-Mail an.
          </p>
          <p className="text-sm text-gray-500 mt-6">
            <strong>Stand:</strong> {trainingContent.lastUpdated}
          </p>
        </Card>
      </Section>
    </>
  );
}
