import { clubInfo } from '@/content/data';

export default function Footer() {
  return (
    <footer className="bg-primary-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-xl font-bold mb-4 text-primary-gold">{clubInfo.name}</h2>
            <address className="not-italic text-gray-300">
              <p>{clubInfo.address.street}</p>
              <p>
                {clubInfo.address.postalCode} {clubInfo.address.city}
              </p>
              <p>{clubInfo.address.country}</p>
            </address>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4 text-primary-gold">Kontakt</h3>
            <p className="text-gray-300 mb-4">
              <a
                href={`mailto:${clubInfo.email}`}
                className="text-primary-gold hover:text-yellow-400 transition-colors underline font-medium"
              >
                Kontakt per E-Mail
              </a>
            </p>
            <p className="text-sm text-gray-400">
              Servicegebiet: {clubInfo.serviceArea}
            </p>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-primary-gold/30 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} {clubInfo.name}. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  );
}
