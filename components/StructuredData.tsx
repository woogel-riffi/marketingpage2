import { clubInfo } from '@/content/data';
import { TrainingEvent, TrainingItem, Price, BoardMember } from '@/content/types';

interface StructuredDataProps {
  type: 'organization' | 'sportsActivity' | 'events' | 'offers' | 'persons';
  data?: {
    events?: TrainingEvent[];
    trainingItems?: TrainingItem[];
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
    // Handle TrainingItem[] (new format)
    if (data?.trainingItems) {
      return data.trainingItems.map((item) => {
        const startDateTime = `${item.startDate}T${item.startTime}:00`;
        const endDateTime = item.endTime 
          ? `${item.startDate}T${item.endTime}:00`
          : null;
        
        return {
          '@context': 'https://schema.org',
          '@type': 'Event',
          name: item.title,
          startDate: startDateTime,
          ...(endDateTime && { endDate: endDateTime }),
          eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
          eventStatus: 'https://schema.org/EventScheduled',
          location: {
            '@type': 'Place',
            address: {
              '@type': 'PostalAddress',
              streetAddress: clubInfo.address.street,
              addressLocality: clubInfo.address.city,
              postalCode: clubInfo.address.postalCode,
              addressCountry: clubInfo.address.country,
            },
          },
          maximumAttendeeCapacity: item.spotsTotal,
          organizer: {
            '@type': 'Organization',
            name: clubInfo.name,
          },
        };
      });
    }
    
    // Handle TrainingEvent[] (legacy format)
    if (data?.events) {
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
    }
    
    return null;
  };

  const getOffersSchema = () => {
    if (!data?.prices) return null;
    
    // Create individual offers
    const offers = data.prices
      .filter((price) => price.amount >= 0) // Include all offers (including free ones)
      .map((price) => {
        const offer: any = {
          '@type': 'Offer',
          name: price.category,
          description: price.description,
          priceCurrency: 'CHF',
          availability: 'https://schema.org/InStock',
          seller: {
            '@type': 'Organization',
            name: clubInfo.name,
          },
        };
        
        // Only include price if > 0
        if (price.amount > 0) {
          offer.price = price.amount;
        } else {
          offer.price = 0;
          offer.priceSpecification = {
            '@type': 'UnitPriceSpecification',
            price: 0,
            priceCurrency: 'CHF',
          };
        }
        
        return offer;
      });

    // Return as OfferCatalog containing the offers
    return {
      '@context': 'https://schema.org',
      '@type': 'OfferCatalog',
      name: 'Preise - Pfeil & Bogen',
      url: `${baseUrl}/preise`,
      numberOfItems: offers.length,
      itemListElement: offers.map((offer, index) => ({
        '@type': 'Offer',
        position: index + 1,
        ...offer,
      })),
    };
  };

  const getPersonsSchema = () => {
    if (!data?.members) return null;
    return data.members.map((member) => ({
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: member.name,
      jobTitle: member.role,
      worksFor: {
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

  // For events, emit a single script tag with an array
  if (type === 'events' && Array.isArray(schema)) {
    return (
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    );
  }

  // For other array types, emit multiple script tags (legacy behavior)
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
