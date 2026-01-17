import type { Metadata } from 'next';
import Image from 'next/image';
import { clubInfo } from '@/content/data';
import { LOVABLE_GAME_URL } from '@/content/site';
import Section from '@/components/ui/Section';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Pfeil & Bogen - Bogenschiessen in Rifferswil',
  description:
    'Bogenschiessen in Rifferswil erleben. Pfeil & Bogen bietet professionelles Training, moderne Anlagen und eine aktive Gemeinschaft für Bogensportbegeisterte im Bezirk Affoltern.',
  openGraph: {
    title: 'Pfeil & Bogen - Bogenschiessen in Rifferswil',
    description:
      'Bogenschiessen in Rifferswil erleben. Professionelles Training und moderne Anlagen.',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Pfeil & Bogen',
    url: 'https://www.pfeil-bogen.ch',
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
      
      <Section id="ueberblick" className="bg-[#2D5016] text-white relative overflow-hidden">
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
        ></div>
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <div className="mb-6 flex justify-center">
            <Image
              src="/images/Pfeil-Bogen Logo Text.png"
              alt="Pfeil & Bogen Logo"
              width={600}
              height={200}
              className="w-[330px] h-[200px] drop-shadow-lg"
              priority
            />
          </div>
          <p className="text-xl md:text-2xl text-white/95 mb-8 leading-relaxed">
            Unser Verein bietet Bogenschiessen in Rifferswil für Anfänger und Fortgeschrittene. 
            Wir führen regelmässige Trainings durch und bieten verschiedene Kursformate wie Einführungskurse, 
            Kinderkurse und freies Training an. Unsere Schiessanlage befindet sich im Bezirk Affoltern 
            und steht allen Interessierten offen.
          </p>
          <p className="text-lg text-white/90 mb-8">
            <a 
              href={`mailto:${clubInfo.email}`}
              className="inline-block bg-primary-black text-white px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg"
              aria-label={`Kontaktieren Sie uns per E-Mail: ${clubInfo.email}`}
            >
              Wir freuen uns über neue Mitglieder
            </a>
          </p>
        </div>
      </Section>

      <Section id="kurzinfos" className="bg-gradient-to-br from-[#2D5016]/10 via-white to-[#2D5016]/10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold mb-4 text-[#2D5016]">Kurzinfos</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#2D5016] transform hover:scale-105 transition-transform">
              <div className="text-3xl mb-3">📍</div>
              <h3 className="font-bold text-[#2D5016] mb-2">Standort</h3>
              <p className="text-gray-700">
                {clubInfo.address.city}, {clubInfo.serviceArea}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#2D5016] transform hover:scale-105 transition-transform">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-bold text-[#2D5016] mb-2">Zielgruppe</h3>
              <p className="text-gray-700">
                Erwachsene und Kinder ab 6 Jahren, Anfänger und Fortgeschrittene
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-6 border-t-4 border-[#2D5016] transform hover:scale-105 transition-transform">
              <div className="text-3xl mb-3">🎯</div>
              <h3 className="font-bold text-[#2D5016] mb-2">Trainingsarten</h3>
              <p className="text-gray-700">
                Einführungskurse, Kinderkurse, Freies Training, Vereinsausflüge
              </p>
            </div>
          </div>
        </div>
      </Section>

      <Section id="spiel" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <p className="text-xl md:text-2xl text-gray-700 mb-6 max-w-2xl mx-auto leading-relaxed">
              Wenn du das nächste Training nicht erwarten kannst, dann spiele hier online. Wenn du alle acht Level geschafft hast gibts einen gratis Kafi im Vereinslokal.
              <br /><br />
              Anleitung: Bogen in Schussrichtung aufziehen, dann Pfeilwinkel wählen (nach oben/unten ziehen).
              <br /><br />
              Du kannst das Spiel <a href={LOVABLE_GAME_URL} target="_blank" rel="noopener noreferrer" className="text-[#2D5016] underline font-medium hover:no-underline">hier</a> in einem eigenen Fenster öffnen. Spiele am besten im Querformat.
            </p>
          </div>
          <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-2 border-gray-300">
            <iframe
              src={LOVABLE_GAME_URL}
              title="Bogenschiess-Spiel - Interaktives Bogenschiessen"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              aria-label="Interaktives Bogenschiess-Spiel"
            />
          </div>
        </div>
      </Section>

      <Section id="kontakt" className="bg-[#2D5016] text-white">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">Kontakt</h2>
          <p className="text-lg text-white/95 mb-8">
            Haben Sie Fragen oder möchten Sie mehr erfahren? Wir freuen uns über Ihre Nachricht.
          </p>
          <a
            href={`mailto:${clubInfo.email}`}
            className="inline-block bg-primary-black text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all transform hover:scale-105 shadow-lg text-lg"
            aria-label={`Kontaktieren Sie uns per E-Mail: ${clubInfo.email}`}
          >
            {clubInfo.email}
          </a>
        </div>
      </Section>
    </>
  );
}
