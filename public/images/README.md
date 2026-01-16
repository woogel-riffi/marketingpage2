# Bilder für Pfeil & Bogen Website

## Geplante Bilder

### Hero-Bereich
- `hero-archery.jpg` - Hauptbild für die Startseite (Bogenschütze in Aktion)
- `hero-range.jpg` - Alternative: Schießanlage

### Verein
- `range-overview.jpg` - Übersicht über die Schießanlage
- `range-detail.jpg` - Detailaufnahme der Anlage
- `facilities.jpg` - Einrichtungen (überdachte Bereiche, etc.)

### Training
- `training-session.jpg` - Training in Aktion
- `beginners-training.jpg` - Anfängertraining

### Über uns
- `board-group.jpg` - Gruppenfoto des Vorstands (optional)
- `member-portrait-*.jpg` - Einzelporträts der Vorstandsmitglieder (optional)

### Allgemein
- `logo.png` - Vereinslogo (falls vorhanden)
- `favicon.ico` - Favicon

## Verwendung

Alle Bilder sollten mit Next.js Image-Komponente verwendet werden:

```tsx
import Image from 'next/image';

<Image
  src="/images/hero-archery.jpg"
  alt="Bogenschießen in Rifferswil"
  width={1200}
  height={600}
  priority
/>
```

## Bildanforderungen

- Format: JPG oder WebP
- Optimierung: Bilder sollten für Web optimiert sein
- Alt-Texte: Immer beschreibende Alt-Texte verwenden
- Responsive: Next.js Image-Komponente sorgt automatisch für responsive Bilder
