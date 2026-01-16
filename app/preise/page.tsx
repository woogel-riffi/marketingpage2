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
    'Transparente Preise für Bogenschießen in Rifferswil. Mitgliedschaften, Kurse und Ausrüstungsmiete.',
  openGraph: {
    title: 'Preise - Pfeil & Bogen',
    description: 'Transparente Preise für Bogenschießen in Rifferswil. Mitgliedschaften, Kurse und Ausrüstungsmiete.',
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
      
      <Section id="preise-hero" className="bg-white pt-12">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-primary-black">
            Preise
          </h1>
        </div>
      </Section>

      <Section id="preise-mitgliedschaft" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-green">Mitgliedschaft</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {membershipPrices.map((price) => (
              <Card key={price.id} id={price.id}>
                <h3 className="text-xl font-bold mb-3 text-primary-black">
                  {price.category}
                </h3>
                <div className="mb-3">
                  <span className="text-3xl font-bold text-primary-black">
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

      <Section id="preise-kurse" className="bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-green">Kurse</h2>
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
                      <span className="text-3xl font-bold text-primary-black">
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

      <Section id="preise-ausruestung" className="bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-primary-green">Ausrüstung mieten</h2>
          {equipmentPrice && (
            <Card id={equipmentPrice.id}>
              <h3 className="text-xl font-bold mb-3 text-primary-black">
                {equipmentPrice.category}
              </h3>
              <div className="mb-3">
                <span className="text-3xl font-bold text-primary-black">
                  CHF
                </span>
                <span className="text-gray-600 ml-2">/Jahr</span>
              </div>
              <p className="text-gray-700">{equipmentPrice.description}</p>
            </Card>
          )}
        </div>
      </Section>

      <Section id="preise-footer" className="bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-gray-500 mb-6">
            Stand: {pricesLastUpdated}
          </p>
          <p className="text-lg text-gray-700 mb-4">
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
