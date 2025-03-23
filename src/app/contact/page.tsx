 "use client";

import Header from '@/components/Header'
import ContactForm from '@/components/ContactForm'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/outline'

const contactInfo = [
  {
    name: 'Téléphone',
    description: 'Du lundi au vendredi de 9h à 19h',
    icon: PhoneIcon,
    href: 'tel:0177889966',
    text: '01 77 88 99 66',
  },
  {
    name: 'Email',
    description: 'Nous vous répondons sous 24h',
    icon: EnvelopeIcon,
    href: 'mailto:baruch@ecodira.com',
    text: 'baruch@ecodira.com',
  },
  {
    name: 'Bureau',
    description: 'Venez nous rencontrer',
    icon: MapPinIcon,
    href: 'https://maps.google.com/?q=17+rue+de+Paris+75019+Paris',
    text: '17 rue de Paris, 75019 Paris',
  },
]

export default function Contact() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <div className="relative isolate bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2">
          <div className="relative px-6 pb-20 pt-24 sm:pt-32 lg:static lg:px-8 lg:py-32">
            <div className="mx-auto max-w-xl lg:mx-0 lg:max-w-lg">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <h1 className="text-3xl font-bold tracking-tight text-gray-900">Contactez-nous</h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                  Vous souhaitez réduire vos factures d'énergie ? Nos experts sont là pour vous accompagner dans votre projet d'installation de pompe à chaleur ou d'isolation.
                </p>
                
                <dl className="mt-10 space-y-4 text-base leading-7 text-gray-600">
                  {contactInfo.map((item) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      className="relative pl-9"
                    >
                      <dt className="inline font-semibold text-gray-900">
                        <item.icon className="absolute left-1 top-1 h-5 w-5 text-ecodira-600" aria-hidden="true" />
                        {item.name}
                      </dt>
                      <dd className="inline">
                        <br />
                        <a href={item.href} className="hover:text-ecodira-600 transition-colors">
                          {item.text}
                        </a>
                        <br />
                        <span className="text-sm text-gray-500">{item.description}</span>
                      </dd>
                    </motion.div>
                  ))}
                </dl>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="px-6 pb-24 pt-20 sm:pb-32 lg:px-8 lg:py-32"
          >
            <div className="mx-auto max-w-xl lg:mr-0 lg:max-w-lg">
              <ContactForm />
            </div>
          </motion.div>
        </div>

        {/* Décoration d'arrière-plan */}
        <div className="absolute left-0 right-0 top-0 -z-10 h-full w-full overflow-hidden">
          <svg
            className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="contact-pattern"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect width="100%" height="100%" strokeWidth={0} fill="url(#contact-pattern)" />
          </svg>
        </div>
      </div>
    </main>
  )
}