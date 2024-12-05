import React from 'react';

export function CTA() {
  return (
    <section className="bg-emerald-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Rejoignez le mouvement RéVal</h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Participez à la création d'un cycle vertueux autour des objets usagés tout en soutenant des causes qui vous tiennent à cœur.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="btn bg-white text-emerald-900 hover:bg-gray-100">
            Faire un don
          </button>
          <button className="btn border-2 border-white hover:bg-white/10">
            En savoir plus
          </button>
        </div>
      </div>
    </section>
  );
}