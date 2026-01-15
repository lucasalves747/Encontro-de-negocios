import React from 'react';
import { COPY } from '../constants';
import Button from './Button';
import { Star } from 'lucide-react';

const Testimonials: React.FC = () => {
  return (
    <section className="py-8 bg-brand-darker relative">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-4">O Que Dizem Quem Já Viveu</h2>
          <div className="h-1 w-20 bg-brand-gold mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          {COPY.TESTIMONIALS.map((t, i) => (
            <div key={i} className="bg-[#151515] p-8 rounded-xl border border-white/5 relative hover:-translate-y-2 transition-transform duration-300">
              <div className="flex text-brand-gold mb-4">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-lg text-gray-200 italic mb-6">"{t.text}"</p>
              <div className="flex items-center gap-4 border-t border-white/10 pt-4">
                <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold">
                  {t.author.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-bold">{t.author}</p>
                  <p className="text-sm text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button variant="primary">
            {COPY.TESTIMONIALS_CTA}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;