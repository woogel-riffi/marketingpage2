import { clubInfo } from '@/content/data';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-primary-black via-[#1a1a1a] to-primary-green/20 text-white py-12 relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
      ></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
