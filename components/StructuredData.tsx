import { clubInfo } from '@/content/data';
import { TrainingEvent, Price, BoardMember } from '@/content/types';

interface StructuredDataProps {
  type: 'organization' | 'sportsActivity' | 'events' | 'offers' | 'persons';
  data?: {
    events?: TrainingEvent[];
    prices?: Price[];
    members?: BoardMember[];
    amenities?: string[];
  };
}

export default function StructuredData({ type, data }: StructuredDataProps) {
  const baseUrl = 'https://www.pfeil-bogen.ch';

  const getOrganizationSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: clubInfo.name,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clubInfo.address.street,
      addressLocality: clubInfo.address.city,
      postalCode: clubInfo.address.postalCode,
      addressCountry: clubInfo.address.country,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bezirk Affoltern',
    },
    email: clubInfo.email,
    sameAs: [],
  });

  const getSportsActivitySchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'SportsActivityLocation',
    name: clubInfo.name,
    url: baseUrl,
    address: {
      '@type': 'PostalAddress',
      streetAddress: clubInfo.address.street,
      addressLocality: clubInfo.address.city,
      postalCode: clubInfo.address.postalCode,
      addressCountry: clubInfo.address.country,
    },
    areaServed: {
      '@type': 'City',
      name: 'Bezirk Affoltern',
    },
    sport: 'Archery',
    email: clubInfo.email,
    sameAs: [],
    ...(data?.amenities && {
      amenityFeature: data.amenities.map((amenity) => ({
        '@type': 'LocationFeatureSpecification',
        name: amenity,
      })),
    }),
  });

  const getEventsSchema = () => {
    if (!data?.events) return null;
    return data.events.map((event) => ({
      '@context': 'https://schema.org',
      '@type': 'Event',
      name: `Bogenschießen Training - ${event.day}`,
      description: event.description,
      startDate: `2024-01-01T${event.time.split(' - ')[0]}:00`,
      endDate: `2024-01-01T${event.time.split(' - ')[1]}:00`,
      eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
      eventStatus: 'https://schema.org/EventScheduled',
      location: {
        '@type': 'Place',
        name: event.location,
        address: {
          '@type': 'PostalAddress',
          streetAddress: clubInfo.address.street,
          addressLocality: clubInfo.address.city,
          postalCode: clubInfo.address.postalCode,
          addressCountry: clubInfo.address.country,
        },
      },
      organizer: {
        '@type': 'Organization',
        name: clubInfo.name,
      },
    }));
  };

  const getOffersSchema = () => {
    if (!data?.prices) return null;
    return data.prices.map((price) => ({
      '@context': 'https://schema.org',
      '@type': 'Offer',
      name: price.category,
      description: price.description,
      price: price.amount,
      priceCurrency: 'CHF',
      availability: 'https://schema.org/InStock',
      seller: {
        '@type': 'Organization',
        name: clubInfo.name,
      },
    }));
  };

  const getPersonsSchema = () => {
    if (!data?.members) return null;
    return data.members.map((member) => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      memberOf: {
        '@type': 'Organization',
        name: clubInfo.name,
      },
      ...(member.description && { description: member.description }),
    }));
  };

  const getSchema = () => {
    switch (type) {
      case 'organization':
        return getOrganizationSchema();
      case 'sportsActivity':
        return getSportsActivitySchema();
      case 'events':
        return getEventsSchema();
      case 'offers':
        return getOffersSchema();
      case 'persons':
        return getPersonsSchema();
      default:
        return null;
    }
  };

  const schema = getSchema();

  if (!schema) return null;

  if (Array.isArray(schema)) {
    return (
      <>
        {schema.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </>
    );
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
