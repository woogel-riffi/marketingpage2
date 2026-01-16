import type { Metadata } from 'next';
import { vereinContent, clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Unser Verein - Pfeil & Bogen',
  description:
    'Erfahren Sie mehr über unseren Verein, unsere Geschichte, Ziele und Ausstattung. Bogenschießen in Rifferswil mit modernen Anlagen.',
  openGraph: {
    title: 'Unser Verein - Pfeil & Bogen',
    description: 'Erfahren Sie mehr über unseren Verein und unsere Anlagen.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/verein',
  },
};

export default function VereinPage() {
  return (
    <>
      <StructuredData
        type="sportsActivity"
        data={{ amenities: vereinContent.amenities }}
      />
      
      <Section id="verein-hero" className="bg-white pt-12">
        <div className="text-center mb-12">
          <h1>{vereinContent.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Unser Verein bietet {clubInfo.geoKeyword} mit modernen Anlagen und
            einer aktiven Gemeinschaft im Bezirk Affoltern.
          </p>
        </div>
      </Section>

      <Section id="verein-inhalt" className="bg-gray-50">
        <div className="space-y-12">
          {vereinContent.sections.map((section) => (
            <Card key={section.id} id={section.id}>
              <h2 className="text-3xl font-bold mb-4 text-primary-green">
                {section.heading}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {section.content}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section id="verein-ausstattung" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Unsere Ausstattung
          </h2>
          <ul className="grid md:grid-cols-2 gap-4" role="list">
            {vereinContent.amenities.map((amenity, index) => (
              <li
                key={index}
                className="flex items-center p-4 bg-gray-50 rounded-lg"
              >
                <span className="text-primary-gold mr-3 text-xl">✓</span>
                <span className="text-gray-700">{amenity}</span>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
}
