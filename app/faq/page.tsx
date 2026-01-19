import type { Metadata } from 'next';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';

export const metadata: Metadata = {
  title: 'FAQ - Pfeil & Bogen',
  description:
    'Häufig gestellte Fragen zum Bogenschiessen in Rifferswil. Erfahren Sie mehr über Einstieg, Training und Ausrüstung.',
  openGraph: {
    title: 'FAQ - Pfeil & Bogen',
    description: 'Häufig gestellte Fragen zum Bogenschiessen in Rifferswil.',
    type: 'website',
    locale: 'de_CH',
    siteName: 'Pfeil & Bogen',
    url: 'https://www.pfeil-bogen.ch/faq',
  },
  alternates: {
    canonical: 'https://www.pfeil-bogen.ch/faq',
  },
};

const faqs = [
  {
    question: 'Für wen ist Bogenschiessen geeignet?',
    answer:
      'Bogenschiessen ist für fast jedes Alter, Geschlecht oder Fitnesslevel geeignet, da es sowohl als entspannter Ausgleich, therapeutische Massnahme und auch als Wettkampfsport betrieben werden kann. Der Fokus liegt auf Haltung und Achtsamkeit und nicht roher Kraft. Es bietet ausserdem ein ein Naturerlebnis in der Gemeinschaft oder allein.',
  },
  {
    question: 'Kann man jederzeit einsteigen?',
    answer:
      'Ja, ein Einstieg ist jederzeit möglich. Falls gerade keine Einführungstermine verfügbar sind meldet euch kurz per Mail.',
  },
  {
    question: 'Kann man auch ausserhalb der Trainingszeiten trainieren?',
    answer:
      'Ja, aussen könnt ihr jederzeit trainieren. Indoor Trainings sind nach Absprache ebenfalls möglich.',
  },
];

export default function FAQPage() {
  return (
    <>
      <Section id="faq-hero" className="bg-[#2D5016] text-white pt-12 relative overflow-hidden">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
        <div className="text-center mb-12 relative z-10">
          <h1 className="text-white">FAQ</h1>
          <p className="text-lg text-white/95 max-w-3xl mx-auto mt-6">
            Hier finden Sie Antworten auf häufig gestellte Fragen zum Bogenschiessen
            und unserem Verein.
          </p>
        </div>
      </Section>

      <Section id="faq-content" className="bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <Card key={index} id={`faq-${index + 1}`}>
              <h2 className="text-2xl font-bold mb-4 text-[#2D5016]">
                {faq.question}
              </h2>
              <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
            </Card>
          ))}
        </div>
      </Section>
    </>
  );
}
