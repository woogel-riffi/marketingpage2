import type { Metadata } from 'next';
import Image from 'next/image';
import { clubInfo } from '@/content/data';
import { boardMembers } from '@/content/board';
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
      <StructuredData type="persons" data={{ members: boardMembers }} />
      
      <Section id="ueber-uns-hero" className="bg-white pt-12">
        <div className="text-center mb-12">
          <h1>Über uns</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Pfeil & Bogen ist ein Bogensportverein, der sich durch das Engagement 
            ehrenamtlicher Mitglieder auszeichnet. Unser Verein lebt von der 
            freiwilligen Mitarbeit und dem Einsatz unserer Mitglieder, die sich 
            für die Förderung des Bogensports in Rifferswil einsetzen.
          </p>
        </div>
      </Section>

      <Section id="ueber-uns-vorstand" className="bg-gray-50">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {boardMembers.map((member) => (
            <Card key={member.id} id={member.id}>
              <div className="relative w-full h-64 mb-4 bg-gray-200 rounded-lg overflow-hidden">
                <Image
                  src={member.imagePath}
                  alt={`${member.name} - ${member.role}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
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
