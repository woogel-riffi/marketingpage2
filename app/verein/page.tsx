import type { Metadata } from 'next';
import Image from 'next/image';
import { clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Verein Pfeil & Bogen',
  description:
    'Erfahren Sie mehr über unseren Verein, unsere Anlagen und Einrichtungen. Bogenschiessen in Rifferswil mit modernen Anlagen.',
  openGraph: {
    title: 'Verein Pfeil & Bogen',
    description: 'Erfahren Sie mehr über unseren Verein, unsere Anlagen und Einrichtungen. Bogenschiessen in Rifferswil mit modernen Anlagen.',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Pfeil & Bogen',
    url: 'https://www.pfeil-bogen.ch/verein',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/verein',
  },
};

const facilities = [
  {
    id: 'lokal',
    title: 'Lokal',
    description:
      'Unser Vereinslokal bietet einen gemütlichen Aufenthaltsbereich für Mitglieder und Gäste. Hier können Sie sich nach dem Training entspannen, sich mit anderen Bogenschützen austauschen und Veranstaltungen geniessen.',
    highlights: [
      'Gemütlicher Aufenthaltsbereich',
      'Küche für Veranstaltungen',
      'Sitzgelegenheiten für Gruppen',
      'Vereinsausstattung und Materiallager',
    ],
  },
  {
    id: 'innen',
    title: 'Trainingsbereich innen',
    description:
      'Der überdachte Innenbereich ermöglicht Training bei jedem Wetter. Die Halle ist mit modernen Zielscheiben ausgestattet und bietet optimale Bedingungen für das Training verschiedener Distanzen.',
    highlights: [
      'Wetterunabhängiges Training',
      'Moderne Zielscheiben',
      'Verschiedene Distanzen',
      'Beleuchtung für Abendtraining',
    ],
  },
  {
    id: 'aussen',
    title: 'Trainingsbereich aussen',
    description:
      'Unsere Aussenanlage bietet Platz für verschiedene Bogenarten und Distanzen. Die Schiessstände sind professionell ausgestattet und bieten optimale Bedingungen für Freilufttraining und Wettkämpfe.',
    highlights: [
      'Mehrere Schiessstände',
      'Verschiedene Distanzen',
      'Für alle Bogenarten geeignet',
      'Professionelle Ausstattung',
    ],
  },
  {
    id: 'grillstelle',
    title: 'Grillstelle',
    description:
      'Die Grillstelle lädt zu geselligen Veranstaltungen und gemeinsamen Aktivitäten ein. Perfekt für Vereinsfeste, Sommerfeiern und gesellige Zusammenkünfte nach dem Training.',
    highlights: [
      'Grillplatz mit Überdachung',
      'Sitzgelegenheiten im Freien',
      'Ideal für Vereinsfeste',
      'Gemeinsame Aktivitäten',
    ],
  },
];

export default function VereinPage() {
  const facilityNames = facilities.map((f) => f.title);

  return (
    <>
      <StructuredData
        type="sportsActivity"
        data={{ amenities: facilityNames }}
      />

      <Section id="verein-hero" className="bg-[#2D5016] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Verein Pfeil & Bogen
          </h1>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed mt-6">
            Unser Verein befindet sich in {clubInfo.address.city} im {clubInfo.serviceArea}. 
            Wir verfügen über moderne Anlagen mit einem Vereinslokal, einem überdachten 
            Innenbereich für wetterunabhängiges Training, einer Aussenanlage für Freilufttraining 
            und einer Grillstelle für gesellige Veranstaltungen.
          </p>
        </div>
      </Section>

      <Section id="verein-einrichtungen" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {facilities.map((facility) => (
              <article
                key={facility.id}
                id={facility.id}
                className="bg-white rounded-lg shadow-lg border-t-4 border-[#2D5016] hover:border-[#1a3a0d] overflow-hidden transform hover:scale-105 transition-all"
              >
                <div className="relative w-full h-64 bg-gray-200">
                  <Image
                    src={`https://placehold.co/800x600/4a5568/ffffff?text=${encodeURIComponent(facility.title)}`}
                    alt={`${facility.title} - Pfeil & Bogen`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-3xl font-bold mb-4 text-[#2D5016]">
                    {facility.title}
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {facility.description}
                  </p>
                  <ul className="space-y-2">
                    {facility.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-[#2D5016] mr-3 font-bold">•</span>
                        <span className="text-gray-700">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
