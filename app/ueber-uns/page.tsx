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
    'Lernen Sie das Team von Pfeil & Bogen kennen. Unser Vorstand setzt sich für Bogenschiessen in Rifferswil ein.',
  openGraph: {
    title: 'Über uns - Pfeil & Bogen',
    description: 'Lernen Sie das Team von Pfeil & Bogen kennen. Unser Vorstand setzt sich für Bogenschiessen in Rifferswil ein.',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Pfeil & Bogen',
    url: 'https://www.pfeil-bogen.ch/ueber-uns',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/ueber-uns',
  },
};

export default function UeberUnsPage() {
  return (
    <>
      <StructuredData type="persons" data={{ members: boardMembers }} />
      
      <Section id="ueber-uns-hero" className="bg-[#2D5016] text-white pt-12 relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-white">Über uns</h1>
          <p className="text-lg text-white/95 max-w-3xl mx-auto mt-6">
            Pfeil & Bogen ist ein Bogensportverein, der sich durch das Engagement 
            ehrenamtlicher Mitglieder auszeichnet. Unser Verein lebt von der 
            freiwilligen Mitarbeit und dem Einsatz unserer Mitglieder, die sich 
            für die Förderung des Bogensports in Rifferswil einsetzen.
          </p>
        </div>
      </Section>

      <Section id="ueber-uns-vorstand" className="bg-gradient-to-b from-gray-50 to-white">
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
              <h2 className="text-2xl font-bold mb-2 text-[#2D5016]">
                {member.name}
              </h2>
              <p className="text-lg text-[#2D5016] font-semibold mb-4">
                {member.role}
              </p>
              {member.description && (
                <p className="text-gray-700">{member.description}</p>
              )}
            </Card>
          ))}
        </div>
      </Section>

      <Section id="ueber-uns-info" className="bg-gradient-to-br from-[#2D5016]/10 to-[#2D5016]/5">
        <Card id="ueber-uns-kontakt" className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-[#2D5016]">
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
              className="text-[#2D5016] hover:text-[#1a3a0d] underline"
            >
              {clubInfo.email}
            </a>
          </p>
        </Card>
      </Section>
    </>
  );
}
