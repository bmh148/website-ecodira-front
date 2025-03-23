"use client";

import Header from '@/components/Header'
import Hero from '@/components/Hero'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      
      {/* Section Avantages */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Pourquoi choisir ECODIRA ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Nous nous engageons à fournir des solutions énergétiques durables et efficaces pour votre maison.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  title: 'Expertise reconnue',
                  description: 'Notre équipe d\'experts qualifiés vous accompagne dans tous vos projets d\'amélioration énergétique.',
                },
                {
                  title: 'Solutions sur mesure',
                  description: 'Nous adaptons nos solutions à vos besoins spécifiques et à votre budget.',
                },
                {
                  title: 'Engagement écologique',
                  description: 'Nous contribuons activement à la réduction de l\'empreinte carbone de nos clients.',
                },
              ].map((advantage) => (
                <motion.div
                  key={advantage.title}
                  className="flex flex-col bg-white rounded-2xl p-8 shadow-sm ring-1 ring-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <dt className="text-xl font-semibold leading-7 text-gray-900">
                    {advantage.title}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{advantage.description}</p>
                  </dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Section CTA */}
      <section className="relative isolate overflow-hidden bg-ecodira-600 py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Passez aux énergies renouvelables
              </h2>
              <p className="mt-4 text-lg leading-8 text-gray-300">
                Réduisez vos factures d'énergie et contribuez à un avenir plus durable avec nos solutions écologiques.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <a
                  href="/contact"
                  className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-ecodira-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all"
                >
                  Contactez-nous
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6" aria-hidden="true">
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#16a34a] to-[#22c55e] opacity-30"
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
          />
        </div>
      </section>
    </main>
  )
}