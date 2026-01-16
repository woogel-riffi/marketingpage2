import type { Metadata } from 'next';
import { prices, pricesLastUpdated } from '@/content/prices';
import { clubInfo } from '@/content/data';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import StructuredData from '@/components/StructuredData';

export const metadata: Metadata = {
  title: 'Preise - Pfeil & Bogen',
  description:
    'Transparente Preise für Bogenschiessen in Rifferswil. Mitgliedschaften, Kurse und Ausrüstungsmiete.',
  openGraph: {
    title: 'Preise - Pfeil & Bogen',
    description: 'Transparente Preise für Bogenschiessen in Rifferswil. Mitgliedschaften, Kurse und Ausrüstungsmiete.',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Pfeil & Bogen',
    url: 'https://www.pfeil-bogen.ch/preise',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/preise',
  },
};

export default function PreisePage() {
  const membershipPrices = prices.filter((p) => p.id.startsWith('preis-mitgliedschaft'));
  const coursePrices = prices.filter((p) => p.id.startsWith('preis-kurs'));
  const equipmentPrice = prices.find((p) => p.id === 'preis-ausruestung-miete');

  return (
    <>
      <StructuredData type="offers" data={{ prices }} />
      
      <Section id="preise-hero" className="bg-gradient-to-br from-primary-green to-[#3a6a1f] text-white pt-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white">
            Preise
          </h1>
          <div className="w-24 h-1 bg-primary-gold mx-auto"></div>
        </div>
      </Section>

      <Section id="preise-mitgliedschaft" className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary-green">Mitgliedschaft</h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {membershipPrices.map((price) => (
              <Card key={price.id} id={price.id}>
                <h3 className="text-xl font-bold mb-3 text-primary-black">
                  {price.category}
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary-green">
                    {price.amount} CHF
                  </span>
                  <span className="text-gray-600 ml-2">/Jahr</span>
                </div>
                <p className="text-gray-700">{price.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="preise-kurse" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary-green">Kurse</h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {coursePrices.map((price) => (
              <Card key={price.id} id={price.id}>
                <h3 className="text-xl font-bold mb-3 text-primary-black">
                  {price.category}
                </h3>
                <div className="mb-3">
                  {price.amount === 0 ? (
                    <span className="text-2xl font-bold text-primary-green">
                      Gratis
                    </span>
                  ) : (
                    <>
                      <span className="text-3xl font-bold text-primary-green">
                        {price.amount} CHF
                      </span>
                      <span className="text-gray-600 ml-2">/Semester</span>
                    </>
                  )}
                </div>
                <p className="text-gray-700">{price.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section id="preise-ausruestung" className="bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 text-primary-green">Ausrüstung mieten</h2>
            <div className="w-24 h-1 bg-primary-gold mx-auto"></div>
          </div>
          {equipmentPrice && (
            <Card id={equipmentPrice.id}>
              <h3 className="text-xl font-bold mb-3 text-primary-black">
                {equipmentPrice.category}
              </h3>
              <div className="mb-3">
                <span className="text-3xl font-bold text-primary-green">
                  CHF
                </span>
                <span className="text-gray-600 ml-2">/Jahr</span>
              </div>
              <p className="text-gray-700">{equipmentPrice.description}</p>
            </Card>
          )}
        </div>
      </Section>

      <Section id="preise-footer" className="bg-gradient-to-br from-primary-green to-[#3a6a1f] text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-white/80 mb-6">
            Stand: {pricesLastUpdated}
          </p>
          <p className="text-lg text-white/95 mb-4">
            Fragen zu unseren Preisen?
          </p>
          <Button
            href={`mailto:${clubInfo.email}`}
            variant="primary"
          >
            Kontakt per E-Mail
          </Button>
        </div>
      </Section>
    </>
  );
}
