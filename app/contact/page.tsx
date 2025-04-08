'use client';

import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    adresse: '',
    departement: '',
    typeInstallation: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
        email: '',
        telephone: '',
        adresse: '',
        departement: '',
        typeInstallation: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-eco-cream section-padding">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-eco-green mb-12 text-center">
          Contactez-nous
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Formulaire */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nom" className="form-label">
                  Nom complet
                </label>
                <input
                  id="nom"
                  type="text"
                  name="nom"
                  value={formData.nom}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="telephone" className="form-label">
                  Téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  name="telephone"
                  value={formData.telephone}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="adresse" className="form-label">
                  Adresse
                </label>
                <input
                  id="adresse"
                  type="text"
                  name="adresse"
                  value={formData.adresse}
                  onChange={handleChange}
                  className="form-input"
                  required
                />
              </div>

              <div>
                <label htmlFor="departement" className="form-label">
                  Département
                </label>
                <select
                  id="departement"
                  name="departement"
                  value={formData.departement}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Sélectionnez votre département</option>
                  <optgroup label="Île-de-France">
                    <option value="75">75 - Paris</option>
                    <option value="77">77 - Seine-et-Marne</option>
                    <option value="78">78 - Yvelines</option>
                    <option value="91">91 - Essonne</option>
                    <option value="92">92 - Hauts-de-Seine</option>
                    <option value="93">93 - Seine-Saint-Denis</option>
                    <option value="94">94 - Val-de-Marne</option>
                    <option value="95">95 - Val-d'Oise</option>
                  </optgroup>
                  <optgroup label="Autres départements">
                    <option value="01">01 - Ain</option>
                    <option value="02">02 - Aisne</option>
                    <option value="03">03 - Allier</option>
                    <option value="04">04 - Alpes-de-Haute-Provence</option>
                    <option value="05">05 - Hautes-Alpes</option>
                    <option value="06">06 - Alpes-Maritimes</option>
                    <option value="07">07 - Ardèche</option>
                    <option value="08">08 - Ardennes</option>
                    <option value="09">09 - Ariège</option>
                    <option value="10">10 - Aube</option>
                    <option value="11">11 - Aude</option>
                    <option value="12">12 - Aveyron</option>
                    <option value="13">13 - Bouches-du-Rhône</option>
                    <option value="14">14 - Calvados</option>
                    <option value="15">15 - Cantal</option>
                    <option value="16">16 - Charente</option>
                    <option value="17">17 - Charente-Maritime</option>
                    <option value="18">18 - Cher</option>
                    <option value="19">19 - Corrèze</option>
                    <option value="2A">2A - Corse-du-Sud</option>
                    <option value="2B">2B - Haute-Corse</option>
                    <option value="21">21 - Côte-d'Or</option>
                    <option value="22">22 - Côtes-d'Armor</option>
                    <option value="23">23 - Creuse</option>
                    <option value="24">24 - Dordogne</option>
                    <option value="25">25 - Doubs</option>
                    <option value="26">26 - Drôme</option>
                    <option value="27">27 - Eure</option>
                    <option value="28">28 - Eure-et-Loir</option>
                    <option value="29">29 - Finistère</option>
                    <option value="30">30 - Gard</option>
                    <option value="31">31 - Haute-Garonne</option>
                    <option value="32">32 - Gers</option>
                    <option value="33">33 - Gironde</option>
                    <option value="34">34 - Hérault</option>
                    <option value="35">35 - Ille-et-Vilaine</option>
                    <option value="36">36 - Indre</option>
                    <option value="37">37 - Indre-et-Loire</option>
                    <option value="38">38 - Isère</option>
                    <option value="39">39 - Jura</option>
                    <option value="40">40 - Landes</option>
                    <option value="41">41 - Loir-et-Cher</option>
                    <option value="42">42 - Loire</option>
                    <option value="43">43 - Haute-Loire</option>
                    <option value="44">44 - Loire-Atlantique</option>
                    <option value="45">45 - Loiret</option>
                    <option value="46">46 - Lot</option>
                    <option value="47">47 - Lot-et-Garonne</option>
                    <option value="48">48 - Lozère</option>
                    <option value="49">49 - Maine-et-Loire</option>
                    <option value="50">50 - Manche</option>
                    <option value="51">51 - Marne</option>
                    <option value="52">52 - Haute-Marne</option>
                    <option value="53">53 - Mayenne</option>
                    <option value="54">54 - Meurthe-et-Moselle</option>
                    <option value="55">55 - Meuse</option>
                    <option value="56">56 - Morbihan</option>
                    <option value="57">57 - Moselle</option>
                    <option value="58">58 - Nièvre</option>
                    <option value="59">59 - Nord</option>
                    <option value="60">60 - Oise</option>
                    <option value="61">61 - Orne</option>
                    <option value="62">62 - Pas-de-Calais</option>
                    <option value="63">63 - Puy-de-Dôme</option>
                    <option value="64">64 - Pyrénées-Atlantiques</option>
                    <option value="65">65 - Hautes-Pyrénées</option>
                    <option value="66">66 - Pyrénées-Orientales</option>
                    <option value="67">67 - Bas-Rhin</option>
                    <option value="68">68 - Haut-Rhin</option>
                    <option value="69">69 - Rhône</option>
                    <option value="70">70 - Haute-Saône</option>
                    <option value="71">71 - Saône-et-Loire</option>
                    <option value="72">72 - Sarthe</option>
                    <option value="73">73 - Savoie</option>
                    <option value="74">74 - Haute-Savoie</option>
                    <option value="76">76 - Seine-Maritime</option>
                    <option value="79">79 - Deux-Sèvres</option>
                    <option value="80">80 - Somme</option>
                    <option value="81">81 - Tarn</option>
                    <option value="82">82 - Tarn-et-Garonne</option>
                    <option value="83">83 - Var</option>
                    <option value="84">84 - Vaucluse</option>
                    <option value="85">85 - Vendée</option>
                    <option value="86">86 - Vienne</option>
                    <option value="87">87 - Haute-Vienne</option>
                    <option value="88">88 - Vosges</option>
                    <option value="89">89 - Yonne</option>
                    <option value="90">90 - Territoire de Belfort</option>
                  </optgroup>
                </select>
              </div>

              <div>
                <label htmlFor="typeInstallation" className="form-label">
                  Type d'installation souhaitée
                </label>
                <select
                  id="typeInstallation"
                  name="typeInstallation"
                  value={formData.typeInstallation}
                  onChange={handleChange}
                  className="form-input"
                  required
                >
                  <option value="">Sélectionnez une option</option>
                  <option value="pompe-a-chaleur">Pompe à chaleur</option>
                  <option value="isolation">Isolation extérieure</option>
                  <option value="ballon">Ballon thermodynamique</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="form-input h-32 resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-eco-green text-white py-3 px-6 rounded-lg hover:bg-eco-green-dark transition-colors duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Envoi en cours...' : 'Envoyer'}
              </button>

              {submitStatus === 'success' && (
                <div className="text-green-600 text-center mt-4">
                  Message envoyé avec succès !
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="text-red-600 text-center mt-4">
                  Une erreur est survenue. Veuillez réessayer.
                </div>
              )}
            </form>
          </div>

          {/* Informations de contact */}
          <div className="space-y-8">
            <div className="card">
              <h2 className="text-2xl font-bold text-eco-green mb-6">Nos coordonnées</h2>
              <div className="space-y-4">
                <p className="flex items-center">
                  <span className="text-2xl mr-3">📞</span>
                  <a href="tel:3000309104" className="hover:text-eco-green transition-colors">
                    30 00 30 91 04
                  </a>
                </p>
                <p className="flex items-center">
                  <span className="text-2xl mr-3">📍</span>
                  <span>90 Rue d'Italie 13006 Marseille 6e Arrondissement </span>
                </p>
                <p className="flex items-center">
                  <span className="text-2xl mr-3">✉️</span>
                  <a href="mailto:contact@ecodira.fr" className="hover:text-eco-green transition-colors">
                    contact@ecodira.fr
                  </a>
                </p>
              </div>
            </div>

            <div className="card">
              <h2 className="text-2xl font-bold text-eco-green mb-6">Horaires d'ouverture</h2>
              <div className="space-y-2">
                <p>Lundi - Vendredi : 9h00 - 18h00</p>
                <p>Samedi : 9h00 - 12h00</p>
                <p>Dimanche : Fermé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 