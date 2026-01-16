import Link from 'next/link';
import Image from 'next/image';
import { clubInfo } from '@/content/data';

export default function Header() {
  return (
    <header className="bg-white border-b-4 border-primary-gold sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Zur Startseite"
          >
            <Image
              src="/images/Pfeil-BogenLogo.png"
              alt={`${clubInfo.name} Logo`}
              width={144}
              height={48}
              className="h-12 w-auto transition-transform group-hover:scale-105"
              priority
            />
          </Link>
          <ul className="flex space-x-8" role="list">
            <li>
              <Link
                href="/"
                className="text-primary-green hover:text-primary-gold font-semibold transition-colors relative group"
              >
                Start
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/verein"
                className="text-primary-green hover:text-primary-gold font-semibold transition-colors relative group"
              >
                Verein
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/training"
                className="text-primary-green hover:text-primary-gold font-semibold transition-colors relative group"
              >
                Training
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/preise"
                className="text-primary-green hover:text-primary-gold font-semibold transition-colors relative group"
              >
                Preise
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/ueber-uns"
                className="text-primary-green hover:text-primary-gold font-semibold transition-colors relative group"
              >
                Über uns
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-gold group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
