import Link from 'next/link';
import { clubInfo } from '@/content/data';

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="text-2xl font-bold text-primary-black hover:text-primary-gold transition-colors"
            aria-label="Zur Startseite"
          >
            {clubInfo.name}
          </Link>
          <ul className="flex space-x-8" role="list">
            <li>
              <Link
                href="/"
                className="text-primary-black hover:text-primary-gold font-medium transition-colors"
              >
                Start
              </Link>
            </li>
            <li>
              <Link
                href="/verein"
                className="text-primary-black hover:text-primary-gold font-medium transition-colors"
              >
                Verein
              </Link>
            </li>
            <li>
              <Link
                href="/training"
                className="text-primary-black hover:text-primary-gold font-medium transition-colors"
              >
                Training
              </Link>
            </li>
            <li>
              <Link
                href="/preise"
                className="text-primary-black hover:text-primary-gold font-medium transition-colors"
              >
                Preise
              </Link>
            </li>
            <li>
              <Link
                href="/ueber-uns"
                className="text-primary-black hover:text-primary-gold font-medium transition-colors"
              >
                Über uns
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
