import React from 'react';
import { Hero } from './components/Hero';
import { Process } from './components/Process';
import { Features } from './components/Features';
import { CTA } from './components/CTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <Process />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;