'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { clubInfo } from '@/content/data';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="bg-white border-b-2 border-[#2D5016] sticky top-0 z-50 shadow-md">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Hauptnavigation">
        <div className="flex justify-between items-center h-20">
          <Link
            href="/"
            className="flex items-center group"
            aria-label="Zur Startseite"
            onClick={closeMenu}
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
          
          {/* Hamburger menu button - visible on mobile */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-primary-black hover:text-gray-700 transition-colors"
            aria-label="Menü öffnen"
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>

          {/* Desktop menu - hidden on mobile */}
          <ul className="hidden md:flex space-x-8" role="list">
            <li>
              <Link
                href="/"
                className="text-primary-black hover:text-gray-700 font-semibold transition-colors relative group"
              >
                Start
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/verein"
                className="text-primary-black hover:text-gray-700 font-semibold transition-colors relative group"
              >
                Verein
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/training"
                className="text-primary-black hover:text-gray-700 font-semibold transition-colors relative group"
              >
                Training
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/preise"
                className="text-primary-black hover:text-gray-700 font-semibold transition-colors relative group"
              >
                Preise
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/ueber-uns"
                className="text-primary-black hover:text-gray-700 font-semibold transition-colors relative group"
              >
                Über uns
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
            <li>
              <Link
                href="/faq"
                className="text-primary-black hover:text-gray-700 font-semibold transition-colors relative group"
              >
                FAQ
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            </li>
          </ul>
        </div>

        {/* Mobile menu - shown when hamburger is clicked */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-200">
            <ul className="flex flex-col py-4 space-y-4" role="list">
              <li>
                <Link
                  href="/"
                  className="block text-primary-black hover:text-gray-700 font-semibold transition-colors py-2"
                  onClick={closeMenu}
                >
                  Start
                </Link>
              </li>
              <li>
                <Link
                  href="/verein"
                  className="block text-primary-black hover:text-gray-700 font-semibold transition-colors py-2"
                  onClick={closeMenu}
                >
                  Verein
                </Link>
              </li>
              <li>
                <Link
                  href="/training"
                  className="block text-primary-black hover:text-gray-700 font-semibold transition-colors py-2"
                  onClick={closeMenu}
                >
                  Training
                </Link>
              </li>
              <li>
                <Link
                  href="/preise"
                  className="block text-primary-black hover:text-gray-700 font-semibold transition-colors py-2"
                  onClick={closeMenu}
                >
                  Preise
                </Link>
              </li>
              <li>
                <Link
                  href="/ueber-uns"
                  className="block text-primary-black hover:text-gray-700 font-semibold transition-colors py-2"
                  onClick={closeMenu}
                >
                  Über uns
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="block text-primary-black hover:text-gray-700 font-semibold transition-colors py-2"
                  onClick={closeMenu}
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
