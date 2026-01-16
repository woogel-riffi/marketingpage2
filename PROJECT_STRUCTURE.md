# Projektstruktur - Pfeil & Bogen

## Vollständige Dateistruktur

```
marketingpage/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root Layout mit Header/Footer
│   ├── page.tsx                 # Landing Page (/)
│   ├── globals.css              # Globale Styles (Tailwind)
│   ├── robots.ts                # Robots.txt Generator
│   ├── sitemap.ts               # Sitemap Generator
│   ├── verein/
│   │   └── page.tsx            # Verein Page (/verein)
│   ├── training/
│   │   └── page.tsx            # Training Page (/training)
│   ├── preise/
│   │   └── page.tsx            # Preise Page (/preise)
│   └── ueber-uns/
│       └── page.tsx            # Über uns Page (/ueber-uns)
│
├── components/                   # React Komponenten
│   ├── layout/
│   │   ├── Header.tsx          # Hauptnavigation
│   │   └── Footer.tsx          # Footer mit Kontakt
│   ├── ui/                      # Design System
│   │   ├── Button.tsx          # Button Komponente
│   │   ├── Card.tsx            # Card Komponente
│   │   └── Section.tsx         # Section Container
│   └── StructuredData.tsx       # Schema.org JSON-LD
│
├── content/                      # Inhalt & Daten
│   ├── types.ts                 # TypeScript Typen
│   └── data.ts                  # Alle Inhaltsdaten
│
├── public/                       # Statische Assets
│   └── images/
│       └── README.md            # Bildplan & Anleitung
│
├── package.json                  # Dependencies
├── tsconfig.json                 # TypeScript Config
├── next.config.js                # Next.js Config
├── tailwind.config.js            # Tailwind Config
├── postcss.config.js             # PostCSS Config
├── .eslintrc.json                # ESLint Config
├── .gitignore                    # Git Ignore
├── README.md                     # Projekt Dokumentation
└── PROJECT_STRUCTURE.md          # Diese Datei
```

## Technische Features

### ✅ Next.js 14 App Router
- Moderne App Router Architektur
- TypeScript Support
- Server Components

### ✅ SEO & Meta Tags
- Eindeutige Meta Titles/Descriptions pro Seite
- Open Graph Tags
- Canonical URLs
- Robots.txt (allow all)
- Sitemap.xml (automatisch generiert)

### ✅ Schema.org Structured Data
- **Landing**: Organization + SportsActivityLocation
- **Verein**: SportsActivityLocation (mit Amenities)
- **Training**: Event Liste (jedes Training als Event)
- **Preise**: Offer Liste (mit CHF Währung)
- **Über uns**: Person Einträge (Vorstand)

### ✅ Semantic HTML
- Header/Nav/Main/Section/Article/Footer
- Einzelnes H1 pro Seite
- ARIA Labels wo nötig

### ✅ LLM Citation Readiness
- Kurze, faktenbasierte Absätze
- Explizite Labels
- Stabile IDs/Anchors
- "Stand: <date>" auf Training/Preise Seiten

### ✅ Design System
- Button (primary/secondary/outline)
- Card Komponente
- Section Container
- Konsistente Farben (black/gold/green)

### ✅ Responsive Design
- Mobile-first Approach
- Tailwind CSS
- Moderne Typografie
- Viel Whitespace

## Seitenübersicht

1. **Landing (/)**
   - Hero Section mit CTA
   - Feature Cards
   - Kontakt CTA

2. **Verein (/verein)**
   - Geschichte, Ziele, Ausstattung
   - Amenities Liste
   - SportsActivityLocation Schema

3. **Training (/training)**
   - Trainingszeiten Liste
   - Event Schema für jedes Training
   - Stand-Datum

4. **Preise (/preise)**
   - Preisliste mit CHF
   - Offer Schema
   - Stand-Datum

5. **Über uns (/ueber-uns)**
   - Vorstandsmitglieder
   - Person Schema
   - Kontaktinformationen

## GEO Keyword Integration

"Bogenschiessen in Rifferswil" ist natürlich integriert in:
- Landing Page Hero
- Verein Page Intro
- Training Page Intro
- Meta Descriptions

## Deployment

Das Projekt ist Vercel-ready:
- `next.config.js` konfiguriert
- Optimale Bildformate (AVIF/WebP)
- Production Build optimiert

## Nächste Schritte

1. `npm install` ausführen
2. Bilder in `/public/images` hinzufügen
3. E-Mail-Adresse in `content/data.ts` anpassen
4. Vorstandsmitglieder in `content/data.ts` aktualisieren
5. `npm run dev` für Entwicklung
6. Auf Vercel deployen
