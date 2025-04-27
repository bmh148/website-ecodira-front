'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Hero from './components/Hero';
import ProjectSteps from './components/ProjectSteps';
import Image from 'next/image';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopup(true);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de l\'envoi du message');
      }

      setSubmitStatus('success');
      setFormData({
        nom: '',
        prenom: '',
        email: '',
        telephone: '',
      });
      
      setTimeout(() => {
        setShowPopup(false);
      }, 2000);
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section avec vidéo */}
      <Hero />

      {/* Services Section */}
      <Services />

      {/* Project Steps Section */}
      <ProjectSteps />

      {/* Avis Clients Section */}
      <Testimonials />

      {/* CTA Section */}
      <section className="py-16 bg-eco-green text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl font-bold mb-6">
            Prêt à réduire vos factures d'énergie ?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contactez-nous dès aujourd'hui pour une estimation gratuite et découvrez comment nos solutions peuvent vous faire économiser.
          </p>
          <Link href="/contact" className="bg-white text-eco-green px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-all duration-300 inline-block">
            Demander un devis gratuit
          </Link>
        </div>
      </section>

      {/* Popup Form */}
      {showPopup && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-[60] px-4 animate-fadeIn"
          onClick={() => setShowPopup(false)}
        >
          <div 
            className="relative bg-gradient-to-br from-white to-gray-50 w-full max-w-lg rounded-2xl shadow-2xl transform transition-all duration-500 animate-scaleIn overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            {/* En-tête avec logo */}
            <div className="w-full bg-white py-6 px-8 border-b border-gray-100 relative">
              <div className="w-full flex justify-center items-center">
                <Image
                  src="/images/logo1.png"
                  alt="ECODIRA"
                  width={240}
                  height={80}
                  className="object-contain"
                  priority
                />
              </div>
              
              {/* Bouton fermer avec effet de survol */}
              <button 
                onClick={() => setShowPopup(false)}
                className="absolute top-4 right-4 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-gray-500 hover:text-eco-green hover:scale-110 transition-all duration-300 border border-gray-100"
                aria-label="Fermer"
              >
                ✕
              </button>
            </div>

            <div className="px-8 py-6">
              {/* En-tête avec animation */}
              <div className="text-center mb-8 animate-slideUp">
                <h2 className="text-3xl font-bold text-eco-green mb-4">
                  Diagnostic offert
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Profitez d'un diagnostic gratuit pour découvrir comment optimiser vos performances – une offre exclusive rien que pour vous !
                </p>
              </div>

              {/* Formulaire avec animations séquentielles */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="relative">
                    <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-1">
                      Nom
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        id="nom"
                        name="nom"
                        value={formData.nom}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 transition-all outline-none hover:border-gray-300"
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                  </div>
                  <div className="relative">
                    <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-1">
                      Prénom
                    </label>
                    <div className="relative">
                      <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </span>
                      <input
                        type="text"
                        id="prenom"
                        name="prenom"
                        value={formData.prenom}
                        onChange={handleChange}
                        className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 transition-all outline-none hover:border-gray-300"
                        placeholder="Votre prénom"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </span>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 transition-all outline-none hover:border-gray-300"
                      placeholder="votre@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="relative">
                  <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-1">
                    Téléphone
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400">
                      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </span>
                    <input
                      type="tel"
                      id="telephone"
                      name="telephone"
                      value={formData.telephone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-eco-green focus:ring-2 focus:ring-eco-green/20 transition-all outline-none hover:border-gray-300"
                      placeholder="Votre numéro de téléphone"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full bg-eco-green text-white py-4 rounded-lg font-semibold text-lg hover:scale-[1.02] transform transition-all duration-300 disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <svg className="animate-spin h-5 w-5 mr-2" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Envoi en cours...</span>
                    </>
                  ) : (
                    <>
                      <span>Obtenir mon diagnostic gratuit</span>
                      <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="bg-green-50 text-green-600 p-4 rounded-lg text-center animate-fadeIn">
                    Votre demande a été envoyée avec succès ! Nous vous recontacterons très rapidement.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center animate-fadeIn">
                    Une erreur est survenue. Veuillez réessayer ou nous contacter directement.
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      )}
    </main>
  );
} 