"use client";

import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

type FormData = {
  name: string
  phone: string
  email: string
}

export default function Hero() {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>()

  const onSubmit = (data: FormData) => {
    console.log(data)
    // Ici, vous ajouterez la logique pour envoyer les données au CRM
  }

  return (
    <div className="relative isolate overflow-hidden bg-white">
      <svg
        className="absolute inset-0 -z-10 h-full w-full stroke-gray-200 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="0787a7c5-978c-4f66-83c7-11c213f99cb7"
            width={200}
            height={200}
            x="50%"
            y={-1}
            patternUnits="userSpaceOnUse"
          >
            <path d="M.5 200V.5H200" fill="none" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" strokeWidth={0} fill="url(#0787a7c5-978c-4f66-83c7-11c213f99cb7)" />
      </svg>
      <div className="mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pb-32 lg:flex lg:px-8 lg:py-40">
        <motion.div 
          className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mt-24 sm:mt-32 lg:mt-16">
            <a href="/services" className="inline-flex space-x-6">
              <span className="rounded-full bg-ecodira-600/10 px-3 py-1 text-sm font-semibold leading-6 text-ecodira-600 ring-1 ring-inset ring-ecodira-600/10">
                Dernières innovations
              </span>
            </a>
          </div>
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Votre partenaire en énergies renouvelables
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Découvrez comment ECODIRA peut transformer votre maison en un espace éco-responsable avec nos solutions de pompe à chaleur et d'isolation extérieure.
          </p>
        </motion.div>
        <motion.div 
          className="mx-auto mt-16 flex max-w-2xl sm:mt-24 lg:ml-10 lg:mr-0 lg:mt-0 lg:max-w-none lg:flex-none xl:ml-32"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="max-w-xl lg:max-w-lg">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl ring-1 ring-gray-200">
              <h2 className="text-2xl font-bold tracking-tight text-gray-900">Demandez votre devis gratuit</h2>
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                  Nom complet
                </label>
                <div className="mt-2">
                  <input
                    {...register("name", { required: true })}
                    type="text"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  />
                  {errors.name && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                  Téléphone
                </label>
                <div className="mt-2">
                  <input
                    {...register("phone", { required: true })}
                    type="tel"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  />
                  {errors.phone && <span className="text-red-500 text-sm">Ce champ est requis</span>}
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                    type="email"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  />
                  {errors.email && <span className="text-red-500 text-sm">Email invalide</span>}
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center items-center rounded-md bg-ecodira-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-ecodira-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ecodira-600 transition-all"
                >
                  Obtenir mon devis gratuit
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </button>
              </div>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
