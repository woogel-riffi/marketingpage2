import type { Metadata } from 'next';
import { clubInfo } from '@/content/data';
import Button from '@/components/ui/Button';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import StructuredData from '@/components/StructuredData';
import Link from 'next/link';

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
      
      <Section id="hero" className="bg-gradient-to-b from-white to-gray-50">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-black">
            {clubInfo.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto">
            {clubInfo.geoKeyword} – Professionelles Training und Gemeinschaft
            für Bogensportbegeisterte
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/training" variant="primary">
              Training ansehen
            </Button>
            <Button href="/verein" variant="outline">
              Mehr erfahren
            </Button>
          </div>
        </div>
      </Section>

      <Section id="ueberblick" className="bg-white">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Willkommen bei Pfeil & Bogen</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Wir bieten {clubInfo.geoKeyword} für Anfänger und Fortgeschrittene.
            Unser Verein im Bezirk Affoltern steht für qualitativ hochwertiges
            Training und eine aktive Gemeinschaft.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card id="feature-training">
            <h3 className="text-2xl font-semibold mb-4 text-primary-green">
              Regelmäßiges Training
            </h3>
            <p className="text-gray-700 mb-4">
              Mehrfach wöchentlich finden Trainings für alle Leistungsniveaus
              statt. Unsere erfahrenen Trainer unterstützen Sie bei Ihrer
              Entwicklung.
            </p>
            <Button href="/training" variant="secondary" className="mt-4">
              Training
            </Button>
          </Card>

          <Card id="feature-verein">
            <h3 className="text-2xl font-semibold mb-4 text-primary-green">
              Moderne Anlagen
            </h3>
            <p className="text-gray-700 mb-4">
              Unsere Schießanlage bietet optimale Bedingungen für das
              Bogenschießen in Rifferswil. Verschiedene Distanzen und
              überdachte Bereiche stehen zur Verfügung.
            </p>
            <Button href="/verein" variant="secondary" className="mt-4">
              Verein
            </Button>
          </Card>

          <Card id="feature-gemeinschaft">
            <h3 className="text-2xl font-semibold mb-4 text-primary-green">
              Aktive Gemeinschaft
            </h3>
            <p className="text-gray-700 mb-4">
              Werden Sie Teil unserer Gemeinschaft. Wir freuen uns über neue
              Mitglieder, die ihre Leidenschaft für den Bogensport teilen.
            </p>
            <Button href="/ueber-uns" variant="secondary" className="mt-4">
              Über uns
            </Button>
          </Card>
        </div>
      </Section>

      <Section id="cta" className="bg-primary-green text-white">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-4">Interessiert?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Kontaktieren Sie uns für weitere Informationen oder besuchen Sie
            eines unserer Trainings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={`mailto:${clubInfo.email}`}
              variant="primary"
              className="bg-primary-gold text-primary-black hover:bg-yellow-500"
            >
              Kontakt per E-Mail
            </Button>
            <Button href="/preise" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-green">
              Preise ansehen
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
