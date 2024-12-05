import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <header className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80"
          alt="Sustainable items background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl font-bold mb-6">
            RéVal: Revalorisation Solidaire et Transparente des Objets
          </h1>
          <p className="text-xl mb-8">
            Transformez vos objets inutilisés en ressources précieuses pour les associations caritatives, tout en bénéficiant d'avantages fiscaux.
          </p>
          <button className="btn btn-primary flex items-center gap-2 text-lg">
            Faire un don <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}