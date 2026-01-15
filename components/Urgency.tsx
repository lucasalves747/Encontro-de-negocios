import React from 'react';
import { COPY } from '../constants';
import Button from './Button';
import { AlertTriangle } from 'lucide-react';

const Urgency: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-b from-black to-[#1a1205]">
      <div className="container mx-auto px-4 max-w-4xl text-center">
        
        <div className="inline-flex items-center gap-2 bg-red-900/30 text-red-400 px-4 py-2 rounded-full border border-red-900/50 mb-8 animate-pulse">
          <AlertTriangle className="w-5 h-5" />
          <span className="font-bold uppercase tracking-wide text-sm">Últimas Vagas</span>
        </div>

        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
          {COPY.URGENCY.ALERT}
        </h2>

        <p className="text-xl text-gray-300 mb-12 leading-relaxed">
          {COPY.URGENCY.TEXT}
        </p>

        <div className="p-1 bg-gradient-to-r from-transparent via-brand-gold to-transparent rounded-lg mb-8 opacity-30"></div>

        <div className="flex flex-col items-center">
          <Button variant="primary" className="text-xl px-12 py-5 shadow-[0_0_50px_rgba(170,129,60,0.5)]">
            {COPY.URGENCY.CTA}
          </Button>
          <p className="mt-6 text-sm text-gray-500">
            Pagamento 100% seguro • Acesso imediato às informações
          </p>
        </div>
      </div>
    </section>
  );
};

export default Urgency;