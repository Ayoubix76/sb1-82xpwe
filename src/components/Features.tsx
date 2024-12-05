import React from 'react';
import { Recycle, Heart, LineChart, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Recycle className="w-6 h-6" />,
    title: "Économie Circulaire",
    description: "Réduction des déchets et promotion d'une consommation responsable"
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Impact Social",
    description: "Création d'emplois et formations pour la réinsertion professionnelle"
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: "Avantages Fiscaux",
    description: "Bénéficiez de déductions fiscales sur vos dons"
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Transparence",
    description: "Suivi blockchain de chaque don et transaction"
  }
];

export function Features() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Nos Engagements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-12 h-12 mx-auto mb-4 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}