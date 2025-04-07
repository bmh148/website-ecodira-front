'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-eco-gray text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* À propos */}
          <div>
            <h3 className="text-xl font-bold mb-4">À propos d'ECODIRA</h3>
            <p className="text-gray-300">
              Expert en solutions énergétiques renouvelables, nous vous accompagnons
              dans votre transition écologique avec des solutions adaptées à vos besoins.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services" className="text-gray-300 hover:text-eco-cream">
                  Pompe à chaleur
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-eco-cream">
                  Isolation extérieure
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-eco-cream">
                  Ballon thermodynamique
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-300">
              <li>17 rue de Paris</li>
              <li>75019 Paris</li>
              <li>
                <a href="tel:3000309104" className="hover:text-eco-cream">
                  30 00 30 91 04
                </a>
              </li>
              <li>
                <a href="mailto:contact@ecodira.fr" className="hover:text-eco-cream">
                  contact@ecodira.fr
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-bold mb-4">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Restez informé de nos dernières actualités et offres spéciales.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Votre email"
                className="w-full p-2 rounded-lg bg-white bg-opacity-10 border border-gray-600 text-white placeholder-gray-400"
              />
              <button
                type="submit"
                className="w-full bg-eco-green text-white py-2 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                S'abonner
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300">
          <p>© {new Date().getFullYear()} ECODIRA. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
} 