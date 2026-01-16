import type { Metadata } from 'next';
import { trainings, trainingCategories } from '@/content/trainings';
import { clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Training - Pfeil & Bogen',
  description:
    'Trainingszeiten und -angebote für Bogenschießen in Rifferswil. Regelmäßige Trainings für alle Leistungsniveaus.',
  openGraph: {
    title: 'Training - Pfeil & Bogen',
    description: 'Trainingszeiten und -angebote für Bogenschießen in Rifferswil. Regelmäßige Trainings für alle Leistungsniveaus.',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Pfeil & Bogen',
    url: 'https://www.pfeil-bogen.ch/training',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/training',
  },
};

// Format date from YYYY-MM-DD to German format (e.g., "15. Februar 2026")
function formatDate(dateString: string): string {
  const date = new Date(dateString + 'T00:00:00');
  const months = [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];
  return `${date.getDate()}. ${months[date.getMonth()]} ${date.getFullYear()}`;
}

// Format time from HH:MM to HH:MM format (already correct, but ensure consistency)
function formatTime(timeString: string): string {
  return timeString;
}

export default function TrainingPage() {
  // Group trainings by category
  const trainingsByCategory = trainingCategories.map(category => ({
    category,
    items: trainings.filter(t => t.category === category),
  })).filter(group => group.items.length > 0);

  return (
    <>
      <StructuredData type="events" data={{ trainingItems: trainings }} />
      
      <Section id="training-hero" className="bg-white pt-12">
        <div className="text-center mb-12">
          <h1>Training</h1>
          <div className="text-lg text-gray-700 max-w-3xl mx-auto space-y-4">
            <p>
              Um an unseren Trainings teilzunehmen, melden Sie sich bitte per E-Mail an. 
              Wir bieten verschiedene Trainingsformate für alle Altersgruppen und Leistungsniveaus.
            </p>
            <p className="font-semibold text-gray-800">
              Bitte beachten Sie: Die Termine sind festgelegt und können nicht verschoben werden.
            </p>
          </div>
        </div>
      </Section>

      <Section id="training-schedule" className="bg-gray-50">
        <div className="space-y-12">
          {trainingsByCategory.map(({ category, items }) => (
            <div key={category}>
              <h2 className="text-3xl font-bold mb-6 text-primary-green">
                {category}
              </h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {items.map((training) => (
                  <Card key={training.id} id={`event-${training.id}`}>
                    <div className="space-y-3">
                      <h3 className="text-xl font-bold text-primary-black">
                        {training.title}
                      </h3>
                      <div className="space-y-2 text-gray-700">
                        <p>
                          <strong>Datum:</strong> {formatDate(training.startDate)}
                        </p>
                        <p>
                          <strong>Zeit:</strong> {formatTime(training.startTime)}
                          {training.endTime && ` - ${formatTime(training.endTime)}`}
                        </p>
                        {training.locationLabel && (
                          <p>
                            <strong>Ort:</strong> {training.locationLabel}
                          </p>
                        )}
                        <p>
                          <strong>Plätze:</strong> {training.spotsTotal}
                        </p>
                        {training.notes && (
                          <p className="text-sm text-gray-600 italic">
                            {training.notes}
                          </p>
                        )}
                        <p className="text-sm text-primary-green font-semibold">
                          Anmeldung per E-Mail
                        </p>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500">
            <strong>Stand:</strong> Januar 2026
          </p>
        </div>
      </Section>
    </>
  );
}
