import React from 'react';
import { COPY } from '../constants';
import Button from './Button';
import heroBanner from '@/assets/imgHero.png';

const Hero: React.FC = () => {
  // 🔗 Lendo parâmetros da URL
  const searchParams = new URLSearchParams(window.location.search);
  const city = searchParams.get('city') || 'Jacksonville';

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl pt-8 pb-8">
        
        <div className="mb-6 inline-block animate-fade-in-down">
          <span className="bg-brand-gold/20 text-brand-gold border border-brand-gold/50 px-4 py-1 rounded-full text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
            Encontro de Negócios
          </span>
        </div>

        {/* Hero Image */}
        <div className="mb-8 flex justify-center animate-fade-in">
          <img
            src={heroBanner}
            alt="Encontro de Negócios Banner"
            className="rounded-xl shadow-[0_0_30px_rgba(170,129,60,0.2)] border border-brand-gold/20 w-full max-w-2xl object-cover hover:scale-[1.02] transition-transform duration-500"
          />
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl font-serif">
          {city} será o ponto de encontro dos{' '}
          <span className="text-brand-gold">empresários que mais crescem</span> nos EUA.
        </h1>

        <p className="text-lg md:text-2xl text-gray-300 mb-10 font-light max-w-2xl mx-auto leading-relaxed">
          {COPY.HERO.SUBHEAD}
        </p>

        <div className="flex justify-center animate-bounce-slow">
          <Button variant="primary" className="text-lg md:text-xl py-5 px-10">
            {COPY.HERO.CTA}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
