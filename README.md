# Pfeil & Bogen - Bogenschiessen in Rifferswil

Website für den Bogensportverein Pfeil & Bogen in Hausen am Albis.

## Projektbeschreibung und Zielsetzung

Dieses Projekt umfasst die Entwicklung einer modernen, SEO/GEO-optimierten Marketing-Website für den Bogensportverein "Pfeil & Bogen" im Bezirk Affoltern. Die Website dient als zentrale Informationsplattform für Interessierte und Mitglieder und soll die Sichtbarkeit des Vereins im lokalen Raum erhöhen. Sie enthält ausserdem ein Bogenschiessen Spiel, welches der Gamification und der Verbindung der digitalen und analogen Welt dient.

### Hauptziele:

1. **Lokale Sichtbarkeit**: Optimierung für lokale Suchanfragen wie "Bogenschiessen in Rifferswil" und "Bogensport Bezirk Affoltern"
2. **Information & Unterhaltung**: Klare Darstellung von Trainingszeiten, Preisen, Vereinsinformationen und Kontaktmöglichkeiten sowie dem Game als Unterhaltung
3. **SEO-Optimierung**: Implementierung von Schema.org Structured Data für bessere Auffindbarkeit in Suchmaschinen
4. **Moderne Technologie**: Nutzung aktueller Web-Technologien (Next.js 14, TypeScript) für Performance und Wartbarkeit
5. **Benutzerfreundlichkeit**: Responsive Design für alle Geräte und klare Navigation

Die Website umfasst fünf Hauptseiten: Landing Page, Verein, Training, Preise und Über uns, sowie eine FAQ-Sektion. Anstelle von Bildern wurden Platzhalter verwendet

## Dokumentation der wichtigsten Prompts

Im Folgenden sind die wichtigsten Prompts dokumentiert, die während der Entwicklung verwendet wurden: (erstellt von ChatGPT, die ganzen Prompts sind etwas lang, daher hier nur die Header)

### 1. Initiale Projektstruktur

**Prompt**: "Erstelle eine Next.js Website mit App Router für einen Bogensportverein. Die Website soll SEO/GEO-optimiert sein mit Schema.org Structured Data. Strukturiere das Projekt mit klarer Trennung von Components, Content und Pages."

#### 2. Content-Daten (Training/Preise/Vorstand) als Code-Strukturen

#### 3. Landingpage mit Lovable-Spiel (iframe + GEO)

#### 4. Content Prompt für jede Seite 

#### 6. Meta Tags und Open Graph

#### 9. SEO/GEO Infrastruktur (robots/sitemap/metadata)

## Beschreibung des Entwicklungsprozesses

### Für die Webseite: 
Mit Hilfe von ChatGPT wurden 8 individuelle Prompts erstellt. Bei Cursor eingegeben erschien darauf eine funktionierende Webseite, die ich gar nicht mehr gross ändern musste. Das Fine-tuning betraf hauptsächlich das Erscheinungsbild, Layout, Wording, etc. Dies ist in Curser nicht optimal, da immer publiziert werden muss bevor das Ergebnis erscheint.

### Für die App


**Aha-Moment 1: Super, solange es funktionert**

Ohne entsprechendes Coding Wissen ist es schwierig zu sagen die geschriebenen Zeilen Hand und Fuss haben. Zwar konnte Cursor Fehler selbst beheben wenn sie auftraten - ob der Code sinnvoll geschrieben ist weiss ich allerdings nicht.


### Neu gewonnene Learnings 

1. **Perfekt für einfache Websites**: Grundsätzlich ist das Vibe Coden mit Curser super. Kleine statische Seiten, für die sich Wordpress nicht lohnt kann man unkompliziert erstellen. Die einzelnen Files und die Architektur sind ersichtlich und editierbar.

2. **ChatGPT prompts**: Ohne ChatGPT wären meine Prompts nicht so ausführlich ausgefallen. Es macht Sinn die Prompts so vorzubereiten bevor man sie bei Cursor eingibt.

3. **Alerts auf Vercel**: Vercel weist daraufhin, wenn der Code Fehler erzeugt. Die Fehlermeldung kann man direkt wieder bei Cursor eingeben und - in meinem Fall - wurden sie behoben.

4. **Auf Englisch geht's besser**: Gefühlt funktioniert prompten auf Englisch besser. Das liegt vielleicht auch an meinem Vokabular.


## SEO-Strategie und Keyword-Recherche

### Keyword-Strategie

Das Haupt-GEO-Keyword **"Bogenschiessen in Rifferswil"** wurde durch folgende Überlegungen identifiziert:

1. **Lokale Relevanz**: Rifferswil ist der spezifische Standort des Vereins
2. **Suchintention**: Personen, die nach Bogenschiessen in dieser Region suchen, haben eine klare Absicht
3. **Wettbewerb**: Lokale, spezifische Keywords haben weniger Konkurrenz als generische Begriffe

### Weitere relevante Keywords:

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
   - Interne Verlinkung zwischen relevanten Seiten

2. **Technical SEO**:
   - Automatisch generierte Sitemap (`sitemap.ts`)
   - Robots.txt Konfiguration (`robots.ts`)
   - Canonical URLs zur Vermeidung von Duplicate Content
   - Optimierte Ladezeiten durch Next.js Optimierungen

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

### Keyword-Dichte und Platzierung:

Das Hauptkeyword "Bogenschiessen in Rifferswil" erscheint:
- In Meta Descriptions aller Hauptseiten
- In Hero-Sections der Landing Page und Verein-Seite
- Natürlich im Content, ohne Keyword-Stuffing
- In Structured Data als Teil der Beschreibungen

Die Keyword-Dichte wurde bewusst niedrig gehalten (ca. 1-2%), um natürliche, lesbare Texte zu gewährleisten und Google Penalties zu vermeiden.

## Persönliche Reflexion

Dieses Projekt war eine wertvolle Lernerfahrung im Bereich der AI-gestützten Webentwicklung und SEO/GEO-Optimierung. 

### Lernerkenntnisse:

1. **Balance zwischen SEO und User Experience**: Die Herausforderung lag darin, SEO-Optimierungen vorzunehmen, ohne die Benutzerfreundlichkeit zu beeinträchtigen. Die Lösung war, SEO als integralen Bestandteil des Designs zu betrachten, nicht als nachträgliche Optimierung.

2. **SEO ist mehr als Keywords**: Structured Data, technische Optimierungen und Content-Qualität sind mindestens genauso wichtig wie Keyword-Optimierung.





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
