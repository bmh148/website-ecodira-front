 "use client";

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  postalCode: string;
  city: string;
  projectType: 'pac' | 'isolation' | 'both';
  homeType: 'house' | 'apartment';
  homeSize: string;
  currentHeating: string;
  ownerStatus: 'owner' | 'tenant';
  constructionYear: string;
  desiredTimeline: 'immediate' | '3months' | '6months' | 'info';
  message: string;
  consent: boolean;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, watch } = useForm<FormData>();
  const projectType = watch('projectType');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      // Ici, vous ajouterez la logique pour envoyer les données au CRM
      console.log(data);
      setSubmitSuccess(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white px-6 py-8 shadow-xl ring-1 ring-gray-200 rounded-2xl sm:px-8"
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
        {/* Informations personnelles */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold leading-7 text-gray-900">Informations personnelles</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium leading-6 text-gray-900">
                Prénom *
              </label>
              <div className="mt-2">
                <input
                  {...register("firstName", { required: "Ce champ est requis" })}
                  type="text"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                />
                {errors.firstName && <p className="mt-1 text-sm text-red-600">{errors.firstName.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="lastName" className="block text-sm font-medium leading-6 text-gray-900">
                Nom *
              </label>
              <div className="mt-2">
                <input
                  {...register("lastName", { required: "Ce champ est requis" })}
                  type="text"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                />
                {errors.lastName && <p className="mt-1 text-sm text-red-600">{errors.lastName.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email *
              </label>
              <div className="mt-2">
                <input
                  {...register("email", { 
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Adresse email invalide"
                    }
                  })}
                  type="email"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
              </div>
            </div>

            <div>
              <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">
                Téléphone *
              </label>
              <div className="mt-2">
                <input
                  {...register("phone", { 
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/,
                      message: "Numéro de téléphone invalide"
                    }
                  })}
                  type="tel"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Adresse */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold leading-7 text-gray-900">Adresse du projet</h3>
          <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                Adresse *
              </label>
              <div className="mt-2">
                <input
                  {...register("address", { required: "Ce champ est requis" })}
                  type="text"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address.message}</p>}
              </div>
            </div>

            <div className="sm:col-span-2">
              <label htmlFor="postalCode" className="block text-sm font-medium leading-6 text-gray-900">
                Code postal *
              </label>
              <div className="mt-2">
                <input
                  {...register("postalCode", { 
                    required: "Ce champ est requis",
                    pattern: {
                      value: /^[0-9]{5}$/,
                      message: "Code postal invalide"
                    }
                  })}
                  type="text"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                />
                {errors.postalCode && <p className="mt-1 text-sm text-red-600">{errors.postalCode.message}</p>}
              </div>
            </div>

            <div className="sm:col-span-3">
              <label htmlFor="city" className="block text-sm font-medium leading-6 text-gray-900">
                Ville *
              </label>
              <div className="mt-2">
                <input
                  {...register("city", { required: "Ce champ est requis" })}
                  type="text"
                  className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                />
                {errors.city && <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>}
              </div>
            </div>
          </div>
        </div>

        {/* Informations du projet */}
        <div className="space-y-6">
          <h3 className="text-lg font-semibold leading-7 text-gray-900">Informations du projet</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium leading-6 text-gray-900">Type de projet *</label>
              <div className="mt-2 grid grid-cols-1 gap-4 sm:grid-cols-3">
                <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                  <input
                    {...register("projectType", { required: "Ce champ est requis" })}
                    type="radio"
                    value="pac"
                    className="sr-only"
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <span className="block text-sm font-medium text-gray-900">Pompe à chaleur</span>
                    </span>
                  </span>
                  <span className="pointer-events-none absolute -inset-px rounded-lg ring-2 ring-transparent peer-checked:ring-ecodira-600" aria-hidden="true" />
                </label>

                <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                  <input
                    {...register("projectType", { required: "Ce champ est requis" })}
                    type="radio"
                    value="isolation"
                    className="sr-only"
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <span className="block text-sm font-medium text-gray-900">Isolation</span>
                    </span>
                  </span>
                  <span className="pointer-events-none absolute -inset-px rounded-lg ring-2 ring-transparent peer-checked:ring-ecodira-600" aria-hidden="true" />
                </label>

                <label className="relative flex cursor-pointer rounded-lg border bg-white p-4 shadow-sm focus:outline-none">
                  <input
                    {...register("projectType", { required: "Ce champ est requis" })}
                    type="radio"
                    value="both"
                    className="sr-only"
                  />
                  <span className="flex flex-1">
                    <span className="flex flex-col">
                      <span className="block text-sm font-medium text-gray-900">Les deux</span>
                    </span>
                  </span>
                  <span className="pointer-events-none absolute -inset-px rounded-lg ring-2 ring-transparent peer-checked:ring-ecodira-600" aria-hidden="true" />
                </label>
              </div>
              {errors.projectType && <p className="mt-1 text-sm text-red-600">{errors.projectType.message}</p>}
            </div>

            <div className="grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-2">
              <div>
                <label htmlFor="homeType" className="block text-sm font-medium leading-6 text-gray-900">
                  Type de logement *
                </label>
                <div className="mt-2">
                  <select
                    {...register("homeType", { required: "Ce champ est requis" })}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="house">Maison</option>
                    <option value="apartment">Appartement</option>
                  </select>
                  {errors.homeType && <p className="mt-1 text-sm text-red-600">{errors.homeType.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="homeSize" className="block text-sm font-medium leading-6 text-gray-900">
                  Surface habitable (m²) *
                </label>
                <div className="mt-2">
                  <input
                    {...register("homeSize", { 
                      required: "Ce champ est requis",
                      pattern: {
                        value: /^[0-9]+$/,
                        message: "Veuillez entrer un nombre valide"
                      }
                    })}
                    type="number"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  />
                  {errors.homeSize && <p className="mt-1 text-sm text-red-600">{errors.homeSize.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="currentHeating" className="block text-sm font-medium leading-6 text-gray-900">
                  Système de chauffage actuel *
                </label>
                <div className="mt-2">
                  <select
                    {...register("currentHeating", { required: "Ce champ est requis" })}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="electric">Électrique</option>
                    <option value="gas">Gaz</option>
                    <option value="fuel">Fioul</option>
                    <option value="wood">Bois</option>
                    <option value="other">Autre</option>
                  </select>
                  {errors.currentHeating && <p className="mt-1 text-sm text-red-600">{errors.currentHeating.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="constructionYear" className="block text-sm font-medium leading-6 text-gray-900">
                  Année de construction
                </label>
                <div className="mt-2">
                  <input
                    {...register("constructionYear", {
                      pattern: {
                        value: /^(19|20)\d{2}$/,
                        message: "Année invalide"
                      }
                    })}
                    type="number"
                    placeholder="AAAA"
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  />
                  {errors.constructionYear && <p className="mt-1 text-sm text-red-600">{errors.constructionYear.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="ownerStatus" className="block text-sm font-medium leading-6 text-gray-900">
                  Statut d'occupation *
                </label>
                <div className="mt-2">
                  <select
                    {...register("ownerStatus", { required: "Ce champ est requis" })}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="owner">Propriétaire</option>
                    <option value="tenant">Locataire</option>
                  </select>
                  {errors.ownerStatus && <p className="mt-1 text-sm text-red-600">{errors.ownerStatus.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="desiredTimeline" className="block text-sm font-medium leading-6 text-gray-900">
                  Délai souhaité *
                </label>
                <div className="mt-2">
                  <select
                    {...register("desiredTimeline", { required: "Ce champ est requis" })}
                    className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
                  >
                    <option value="">Sélectionnez</option>
                    <option value="immediate">Le plus tôt possible</option>
                    <option value="3months">Dans les 3 mois</option>
                    <option value="6months">Dans les 6 mois</option>
                    <option value="info">Je souhaite simplement des informations</option>
                  </select>
                  {errors.desiredTimeline && <p className="mt-1 text-sm text-red-600">{errors.desiredTimeline.message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium leading-6 text-gray-900">
            Message ou précisions complémentaires
          </label>
          <div className="mt-2">
            <textarea
              {...register("message")}
              rows={4}
              className="block w-full rounded-md border-0 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-ecodira-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>

        {/* Consentement RGPD */}
        <div className="relative flex items-start">
          <div className="flex h-6 items-center">
            <input
              {...register("consent", { required: "Vous devez accepter la politique de confidentialité" })}
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-ecodira-600 focus:ring-ecodira-600"
            />
          </div>
          <div className="ml-3">
            <label htmlFor="consent" className="text-sm text-gray-600">
              J'accepte que mes données soient utilisées pour être recontacté(e) *
            </label>
            {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent.message}</p>}
          </div>
        </div>

        <div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full justify-center rounded-md bg-ecodira-600 px-3 py-3 text-sm font-semibold text-white shadow-sm hover:bg-ecodira-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ecodira-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            {isSubmitting ? 'Envoi en cours...' : 'Envoyer ma demande'}
          </button>
        </div>

        {submitSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-md bg-green-50 p-4"
          >
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-green-800">
                  Votre demande a été envoyée avec succès ! Nous vous recontacterons dans les plus brefs délais.
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </form>
    </motion.div>
  );
}