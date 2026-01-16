import type { Metadata } from 'next';
import { aboutContent, clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Über uns - Pfeil & Bogen',
  description:
    'Lernen Sie das Team von Pfeil & Bogen kennen. Unser Vorstand setzt sich für Bogenschießen in Rifferswil ein.',
  openGraph: {
    title: 'Über uns - Pfeil & Bogen',
    description: 'Lernen Sie das Team von Pfeil & Bogen kennen.',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/ueber-uns',
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <StructuredData type="persons" data={{ members: aboutContent.members }} />
      
      <Section id="ueber-uns-hero" className="bg-white pt-12">
        <div className="text-center mb-12">
          <h1>{aboutContent.title}</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            {aboutContent.intro}
          </p>
        </div>
      </Section>

      <Section id="ueber-uns-vorstand" className="bg-gray-50">
        <div className="grid md:grid-cols-2 gap-8">
          {aboutContent.members.map((member) => (
            <Card key={member.id} id={member.id}>
              <h2 className="text-2xl font-bold mb-2 text-primary-green">
                {member.name}
              </h2>
              <p className="text-lg text-primary-gold font-semibold mb-4">
                {member.role}
              </p>
              {member.description && (
                <p className="text-gray-700">{member.description}</p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section id="ueber-uns-info" className="bg-white">
        <Card id="ueber-uns-kontakt">
          <h2 className="text-2xl font-bold mb-4 text-primary-green">
            Kontakt
          </h2>
          <p className="text-gray-700 mb-4">
            Unser Vorstand steht Ihnen gerne für Fragen zur Verfügung. Für
            allgemeine Anfragen nutzen Sie bitte unsere E-Mail-Adresse.
          </p>
          <p className="text-gray-700">
            <strong>E-Mail:</strong>{' '}
            <a
              href={`mailto:${clubInfo.email}`}
              className="text-primary-gold hover:text-yellow-500 underline"
            >
              {clubInfo.email}
            </a>
          </p>
        </Card>
      </Section>
    </>
  );
}
