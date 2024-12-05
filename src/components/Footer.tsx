import React from 'react';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-white mb-4">RéVal</h3>
            <p className="text-sm">
              Revalorisation Solidaire et Transparente des Objets
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>Collecte d'objets</li>
              <li>Réparation</li>
              <li>Revente solidaire</li>
              <li>Suivi des dons</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">À propos</h4>
            <ul className="space-y-2 text-sm">
              <li>Notre mission</li>
              <li>Impact social</li>
              <li>Partenaires</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Légal</h4>
            <ul className="space-y-2 text-sm">
              <li>Mentions légales</li>
              <li>Politique de confidentialité</li>
              <li>CGU</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          © {new Date().getFullYear()} RéVal. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}