import type { Metadata } from 'next';
import { trainings, trainingCategories } from '@/content/trainings';
import { clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Training - Pfeil & Bogen',
  description:
    'Trainingszeiten und -angebote für Bogenschiessen in Rifferswil. Regelmässige Trainings für alle Leistungsniveaus.',
  openGraph: {
    title: 'Training - Pfeil & Bogen',
    description: 'Trainingszeiten und -angebote für Bogenschiessen in Rifferswil. Regelmässige Trainings für alle Leistungsniveaus.',
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
      
      <Section id="training-hero" className="bg-[#73985a] text-white pt-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-white">Training</h1>
          <div className="text-lg text-white/95 max-w-3xl mx-auto space-y-4 mt-6">
            <p>
              Um an unseren Trainings teilzunehmen, melden Sie sich bitte per E-Mail an. 
              Wir bieten verschiedene Trainingsformate für alle Altersgruppen und Leistungsniveaus.
            </p>
            <p className="font-semibold text-white bg-primary-gold/20 px-4 py-2 rounded-lg inline-block">
              Bitte beachten Sie: Die Termine sind festgelegt und können nicht verschoben werden.
            </p>
          </div>
        </div>
      </Section>

      <Section id="training-schedule" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="space-y-12">
          {trainingsByCategory.map(({ category, items }, index) => (
            <div key={category}>
              <h2 className="text-3xl font-bold mb-6 text-[#73985a]">
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
                        <p className="text-sm text-[#73985a] font-semibold">
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
