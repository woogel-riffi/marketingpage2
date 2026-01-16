import { ReactNode } from 'react';

interface JsonLdProps {
  data: object | object[];
}

/**
 * Generic JSON-LD helper component that safely injects structured data
 * as a script tag with type="application/ld+json"
 */
export default function JsonLd({ data }: JsonLdProps): ReactNode {
  if (!data) return null;

  // Handle arrays by creating multiple script tags
  if (Array.isArray(data)) {
    return (
      <>
        {data.map((item, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(item) }}
          />
        ))}
      </>
    );
  }

  // Handle single object
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
