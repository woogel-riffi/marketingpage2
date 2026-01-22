# Pfeil & Bogen - Bogenschiessen in Rifferswil

Website für den Bogensportverein Pfeil & Bogen in Hausen am Albis.

## Projektbeschreibung und Zielsetzung

Dieses Projekt umfasst die Entwicklung einer modernen, SEO/GEO-optimierten Marketing-Website für den Bogensportverein "Pfeil & Bogen" im Bezirk Affoltern. Die Website dient als Informationsplattform für Interessierte und Mitglieder und soll die Sichtbarkeit des Vereins im lokalen Raum erhöhen. Sie enthält ausserdem ein Bogenschiessen Spiel als Gamification Element und zur Verbindung der digitalen und analogen Welt.

### Hauptziele:

1. **Lokale Sichtbarkeit**: Optimierung für lokale Suchanfragen wie "Bogenschiessen in Rifferswil" und "Bogensport Bezirk Affoltern"
2. **Information & Unterhaltung**: Klare Darstellung von Trainingszeiten, Preisen, Vereinsinformationen und Kontaktmöglichkeiten sowie dem Game als Unterhaltung und Call to Action für einen Vereinsbesuch
3. **SEO-Optimierung**: Implementierung von Schema.org Structured Data für bessere Auffindbarkeit in Suchmaschinen
4. **Moderne Technologie**: Nutzung aktueller Web-Technologien (Next.js 14, TypeScript) für Performance und Wartbarkeit
5. **Benutzerfreundlichkeit**: Responsive Design für alle Geräte und klare Navigation

Die Website umfasst fünf Hauptseiten: Landing Page, Verein, Training, Preise und Über uns, sowie eine FAQ-Sektion. Anstelle von Bildern wurden Platzhalter verwendet

## Entwicklungsprozess und Prompts der Webseite

Im Folgenden sind die Header der wichtigsten Prompts dokumentiert, die während der Entwicklung verwendet wurden (die Prompts selbst wurden von ChatGPT erzeugt und sind zu lang, ein Beispiel ist aufgelistet): 

#### 1. Initiale Projektstruktur der Webseite

**Prompt**: "ECreate a Next.js (latest) project using the App Router and TypeScript. Use Tailwind CSS. Deploy-ready for Vercel.

Build a website for an archery club:
Name: "Pfeil & Bogen"
Address: Rifferswilerstrasse, 8915 Hausen am Albis, Switzerland
Service area: Bezirk Affoltern (ZH)
Language: German only
Primary GEO keyword: "Bogenschießen in Rifferswil" (include naturally in key sections)
Audience: new + existing members, core 25–50 years
Style: modern, colors based on the provided logo (black/gold/green), lots of whitespace, strong typography.

Technical + GEO requirements:
- Use semantic HTML (header/nav/main/section/article/footer), clear headings (single H1 per page).
- Each page must include: unique meta title/description, Open Graph tags, canonical.
- Add robots.txt and sitemap.xml allowing crawling (no blocking).
- Add Schema.org JSON-LD:
  - Landing: Organization + SportsActivityLocation
  - Verein page: SportsActivityLocation (amenities)
  - Training page: Event list (each training item as Event)
  - Preise page: Offer + priceCurrency CHF
  - Über uns page: Person entries (board members)
- Add “LLM citation readiness”: short factual paragraphs, explicit labels, stable IDs/anchors, and a “Stand: <date>” note on Training/Prices.
- Put all structured data in a reusable component, and keep content in typed objects in /content (in-code).
- Pages required: Landing (/), Verein (/verein), Training (/training), Preise (/preise), Über uns (/ueber-uns).
- Add a shared layout with header navigation and footer including club name and address.
- Include a simple “Kontakt per E-Mail” CTA with mailto link (no form).

Also create:
- /public assets placeholders folder and a plan for images (using next/image).
- A minimal design system: button, card, section container components.

Output full file structure and implement the complete site.
"

#### 2. Content-Daten (Training/Preise/Vorstand) als Code-Strukturen

#### 3. Landingpage mit Lovable-Spiel (iframe + GEO)

#### 4. Content Prompt für jede Seite 

#### 5. Meta Tags und Open Graph

#### 6. SEO/GEO Infrastruktur (robots/sitemap/metadata)

Mit Hilfe von ChatGPT wurden die individuellen Prompts erstellt. Bei Cursor eingegeben erschien daraufhin eine funktionierende Webseite, die ich gar nicht mehr gross ändern musste. Das Fine-tuning betraf hauptsächlich das Erscheinungsbild, Layout, Wording, etc. Dies ist in Curser nicht optimal, da immer publiziert werden muss bevor das Ergebnis erscheint.

## Entwicklungsprozess und Prompts der App

Im Folgenden sind die Header der wichtigsten Prompts dokumentiert, die während der Entwicklung verwendet wurden: 

#### 1. Brainstorming mit ChatGPT, um Ideen zu finden
**Prompt**: "Gib mir Ideen für ein einfaches Bogenschiessen Spiel, welches als Web App programmiert werden kann. Mobile first. Es ist für die Webseite eines Bogenschützen Vereins"

#### 2. Idee anhand Fragenkatalog finetunen
**Prompt**: "Ich entscheide mich für Idee 1. Das Spiel soll von Lovable generiert werden. Ich möchte, dass du mir die Prompts für Lovable generierst, aber zuerst einen Katalog mit Fragen erstellst, um das Spiel genauer zu definieren."

#### 3. Prompt in ChatGPT erstellen und editieren
#### 4. Prompt n Lovable einfügen und finetunen

Beim Finetuning ging es vor allem um Design, Farben, Layout, Figuren, etc.
Die Darstellung auf Mobile ist leider nicht ideal (Full-screen Darstellung funktioniert nicht im Browser.) 
Lovable tat sich auch schwer mit dem Erkennen und Handling von Mobile usern, sprich anzeigen von bestimmten Text wenn es ein Mobile user ist, etc.

## Aha Momente

**Aha-Moment 1: Super, solange es funktionert**

Ohne entsprechendes Coding Wissen ist es schwierig zu sagen ob die geschriebenen Zeilen Hand und Fuss haben. Zwar konnte Cursor Fehler selbst beheben wenn sie auftraten - ob der Code sinnvoll geschrieben ist weiss ich allerdings nicht.

**Aha-Moment 2: Lovabe ist nicht gut in Physik**

Ich musste mehrere Spielideen ausprobieren, um eine zu finden, die so funktioniert wie ich es mir vorgestellt hatte. Das klassische Bogenschiessen Spiel, wobei auf eine Zielscheibe gezielt wird und der Pfeil je nach Windstärke und Atmung anders fliegt hat nicht funktioniert! Lovable konnte die Physik dafür nicht berechnen.

**Aha-Moment 3: Der erste Prompt muss gut sein**

Es macht Sinn Prompts mit ChatGPT vorzubereiten. Am ersten Prompt merkt man direkt ob eine Idee funktioniert oder nicht. 

**Aha-Moment 4: Wenn KI nicht will, dann will sie nicht**

Gewisse Prompts funktioneren nicht, egal wie oft man umschreibt. Wie zB das Mobile Handling von Lovable. Die Anwort ist nicht "ich kann es nicht", sondern "ja klar ich mach es", aber es funktioniert nicht.


## SEO/GEO-Strategie und Keyword-Recherche

GEO fokussiert sich auf Klarheit, Fakten und die Einbettung in breitere Web-Kontexte, während SEO Struktur Keywords und technische Präzision belohnt. Ich habe daher beides beachtet.

### Keyword-Strategie

Das Haupt-GEO-Keyword **"Bogenschiessen in Rifferswil"** wurde durch folgende Überlegungen identifiziert:

1. **Lokale Relevanz**: Rifferswil ist der spezifische Standort des Vereins
2. **Suchintention**: Personen, die nach Bogenschiessen in dieser Region suchen, haben eine klare Absicht
3. **Wettbewerb**: Lokale, spezifische Keywords haben weniger Konkurrenz als generische Begriffe

#### Weitere relevante Keywords:

- "Bogensport Bezirk Affoltern"
- "Bogenschiessen Hausen am Albis"
- "Bogensportverein Kanton Zürich"
- "Bogenschiessen Training"
- "Bogensport Anfänger"

### SEO-Implementierung:

1. **On-Page SEO**:
   - Individuelle, keyword-optimierte Meta Titles und Descriptions für jede Seite
   - Semantisches HTML mit korrekter Heading-Hierarchie (H1-H6)
   - Alt-Texte für alle Bilder

2. **Technical SEO**:
   - Automatisch generierte Sitemap (`sitemap.ts`)
   - Robots.txt Konfiguration (`robots.ts`)

3. **Structured Data (Schema.org)**:
   - **Organization Schema**: Für die Hauptseite, definiert den Verein als Organisation
   - **SportsActivityLocation Schema**: Für die Verein-Seite, kennzeichnet die Anlage als Sportstätte
   - **Event Schema**: Für jedes Training, ermöglicht Rich Snippets in Suchergebnissen
   - **Offer Schema**: Für Preise, kann in Google Shopping oder lokalen Suchen erscheinen
   - **Person Schema**: Für Vorstandsmitglieder, erhöht die Vertrauenswürdigkeit

4. **Lokale SEO**:
   - Klare Adressangaben in Structured Data
   - GEO-Keyword natürlich in Content integriert
   - Service Area Definition (Bezirk Affoltern)
   - Kontaktinformationen prominent platziert

5. **Content-Strategie**:
   - Keyword-optimierte, aber natürliche Texte
   - Regelmäßige Aktualisierungshinweise ("Stand: Januar 2026") für Aktualität
   - Klare Strukturierung für bessere Lesbarkeit und Crawling

### GEO Strategie:

- Klare, einfach formulierte Texte
- Klare Navigation
- FAQ Seite
- Keywords im Content ohne Keyword-stuffing


## Persönliche Reflexion

Dieses Projekt war eine wertvolle Lernerfahrung im Bereich der KI-gestützten Webentwicklung und SEO/GEO-Optimierung. 

### Lernerkenntnisse:

1. **Perfekt für einfache Websites**: Grundsätzlich ist das Vibe Coden mit Curser super. Kleine statische Seiten, für die sich Wordpress nicht lohnt kann man unkompliziert erstellen. Die einzelnen Files und die Architektur sind ersichtlich und editierbar.

2. **ChatGPT prompts**: Ohne ChatGPT wären meine Prompts nicht so ausführlich ausgefallen. Es macht Sinn die Prompts extern vorzubereiten und kritisch prüfen zu lassen bevor man sie bei Cursor eingibt.

3. **Balance zwischen SEO und User Experience**: Die Herausforderung liegt darin, SEO-Optimierungen vorzunehmen, ohne die Benutzerfreundlichkeit zu beeinträchtigen. SEO ist als ein integraler Bestandteil des Designs zu betrachten, nicht als nachträgliche Optimierung.

2. **SEO/GEO ist mehr als Keywords**: Structured Data, technische Optimierungen und Content-Qualität sind mindestens genauso wichtig wie Keyword-Optimierung.



## Quellen

### Technische Dokumentation:

- [Next.js 14 Documentation](https://nextjs.org/docs)
- [Schema.org Documentation](https://schema.org/)
- [Google Search Central - Structured Data](https://developers.google.com/search/docs/appearance/structured-data)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

### SEO-Ressourcen:

- [Google Search Central](https://developers.google.com/search)
- [Moz Beginner's Guide to SEO](https://moz.com/beginners-guide-to-seo)
- [Schema.org SportsActivityLocation](https://schema.org/SportsActivityLocation)
- [Schema.org Event](https://schema.org/Event)
- [Schema.org Offer](https://schema.org/Offer)

### Design und UX:

- [Web Content Accessibility Guidelines (WCAG)](https://www.w3.org/WAI/WCAG21/quickref/)
- [MDN Web Docs](https://developer.mozilla.org/)

---

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Vercel-ready

## Entwicklung

```bash
npm install
npm run dev
```

Öffne [http://localhost:3000](http://localhost:3000) im Browser.

## Deployment

Das Projekt ist für Vercel optimiert. Einfach mit Vercel verbinden und deployen.
