import React from 'react';
import { Truck, Wrench, Store } from 'lucide-react';

const steps = [
  {
    icon: <Truck className="w-8 h-8 text-emerald-600" />,
    title: "Collecte",
    description: "Nous organisons des collectes régulières d'objets en collaboration avec des associations locales."
  },
  {
    icon: <Wrench className="w-8 h-8 text-emerald-600" />,
    title: "Réparation",
    description: "Les objets sont nettoyés, réparés et rénovés par nos équipes qualifiées."
  },
  {
    icon: <Store className="w-8 h-8 text-emerald-600" />,
    title: "Revente Solidaire",
    description: "Les objets sont revendus sur des marketplaces, générant des fonds pour les associations."
  }
];

export function Process() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">Comment ça marche ?</h2>
        <div className="grid md:grid-cols-3 gap-12">
          {steps.map((step, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm">
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}