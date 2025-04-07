'use client';

import { useState, useEffect } from 'react';

interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

export default function Popup({ isOpen, onClose, title }: PopupProps) {
  const [nom, setNom] = useState('');
  const [telephone, setTelephone] = useState('');
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    // Vérifie si le popup a déjà été affiché dans cette session
    const hasBeenShown = sessionStorage.getItem('popupShown');
    
    if (!hasBeenShown && isOpen) {
      setShouldShow(true);
      // Marque le popup comme affiché pour cette session
      sessionStorage.setItem('popupShown', 'true');
    }
  }, [isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulaire soumis:', { nom, telephone });
    handleClose();
  };

  const handleClose = () => {
    setShouldShow(false);
    onClose();
  };

  if (!shouldShow) return null;

  return (
    <div className="popup-overlay" onClick={handleClose}>
      <div 
        className="popup-content"
        onClick={e => e.stopPropagation()}
      >
        <button 
          className="popup-close" 
          onClick={handleClose}
          aria-label="Fermer"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-eco-gray mb-2 gradient-text">
            {title}
          </h2>
          <p className="text-eco-gray/80">
            Laissez-nous vos coordonnées, nous vous recontacterons rapidement
          </p>
        </div>

        <form onSubmit={handleSubmit} className="popup-form">
          <div className="space-y-1">
            <label htmlFor="nom" className="form-label">
              Nom
            </label>
            <input
              type="text"
              id="nom"
              value={nom}
              onChange={(e) => setNom(e.target.value)}
              className="popup-input"
              placeholder="Votre nom"
              required
            />
          </div>

          <div className="space-y-1">
            <label htmlFor="telephone" className="form-label">
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              value={telephone}
              onChange={(e) => setTelephone(e.target.value)}
              className="popup-input"
              placeholder="Votre numéro de téléphone"
              required
            />
          </div>

          <button type="submit" className="popup-button group">
            <span className="relative inline-flex items-center">
              Je souhaite être recontacté
              <svg 
                className="w-5 h-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M13 7l5 5m0 0l-5 5m5-5H6" 
                />
              </svg>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
} 