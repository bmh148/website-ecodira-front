import { useEffect, useState } from 'react';

const testimonials = [
  { name: 'Sophie L.', comment: "Service rapide et professionnel, je recommande vivement ECODIRA !", photo: 'https://i.pravatar.cc/100?img=26' },
  { name: 'Marc D.', comment: "Installation impeccable, équipe à l'écoute et très sympathique.", photo: 'https://i.pravatar.cc/100?img=18' },
  { name: 'Karim B.', comment: "Très satisfaite de la pompe à chaleur, économies visibles dès le premier mois.", photo: 'https://i.pravatar.cc/100?img=56' },
  { name: 'Julie P.', comment: "Excellent accompagnement du début à la fin, merci ECODIRA !", photo: 'https://i.pravatar.cc/100?img=23' },
  { name: 'Claire R.', comment: "Travail soigné, conseils personnalisés, je recommande.", photo: 'https://i.pravatar.cc/100?img=5' },
  { name: 'Nicolas V.', comment: "Très bon rapport qualité/prix et équipe réactive.", photo: 'https://i.pravatar.cc/100?img=6' },
  { name: 'Roger Z.', comment: "J'ai apprécié la transparence et la pédagogie de l'équipe.", photo: 'https://i.pravatar.cc/100?img=7' },
  { name: 'Jean-Michel T.', comment: "Entreprise sérieuse, résultat conforme à mes attentes.", photo: 'https://i.pravatar.cc/100?img=8' },
  { name: 'Lucie M.', comment: "Un suivi client irréprochable, je recommande !", photo: 'https://i.pravatar.cc/100?img=9' },
  { name: 'Emma S.', comment: "Des conseils clairs et une installation rapide.", photo: 'https://i.pravatar.cc/100?img=10' },
  { name: 'Gregory F.', comment: "Très satisfaite du service après-vente.", photo: 'https://i.pravatar.cc/100?img=11' },
  { name: 'Charles K.', comment: "Entreprise sérieuse et à l'écoute.", photo: 'https://i.pravatar.cc/100?img=12' },
  { name: 'Eric N.', comment: "Merci pour votre professionnalisme !", photo: 'https://i.pravatar.cc/100?img=13' },
  { name: 'Antoine G.', comment: "Je recommande sans hésiter ECODIRA.", photo: 'https://i.pravatar.cc/100?img=14' },
  { name: 'Sonia P.', comment: "Des économies visibles et un confort retrouvé.", photo: 'https://i.pravatar.cc/100?img=41' },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % testimonials.length);
        setFade(true);
      }, 400); // fade out duration
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const t = testimonials[current];

  return (
    <section className="w-full py-16" style={{background: 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)'}}>
      <div className="container-custom flex flex-col items-center">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-eco-green mb-12">Avis Clients</h2>
        <div className="w-full flex justify-center">
          <div
            className={`relative w-full max-w-xl bg-white rounded-3xl shadow-2xl p-8 flex flex-col items-center transition-all duration-500 ${fade ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'} hover:scale-105 hover:shadow-3xl`}
            style={{ minHeight: 320 }}
          >
            <img
              src={t.photo}
              alt={t.name}
              className="w-20 h-20 rounded-full object-cover border-4 border-eco-green shadow mb-4"
              loading="lazy"
            />
            <div className="flex items-center mb-3">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-2xl">★</span>
              ))}
            </div>
            <p className="text-gray-700 text-xl italic mb-6 text-center max-w-lg">“{t.comment}”</p>
            <div className="font-semibold text-eco-green text-lg">{t.name}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
