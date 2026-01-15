import React from 'react';
import { COPY } from '../constants';
import Button from './Button';
import { CheckCircle2 } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section className="py-8 relative bg-black overflow-hidden">
      {/* Subtle Background Texture */}
      <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          
          {/* Text Content - Centered Layout since image is removed */}
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white mb-6">
              {COPY.EXPERIENCE.HEADLINE}
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              {COPY.EXPERIENCE.SUBHEAD}
            </p>
            <div className="h-1 w-24 bg-brand-gold mx-auto rounded-full opacity-60"></div>
          </div>

          <div className="max-w-2xl mx-auto bg-white/5 rounded-2xl p-8 md:p-10 border border-white/5 hover:border-brand-gold/20 transition-colors">
            <ul className="space-y-6 mb-10">
              {COPY.EXPERIENCE.CHECKLIST.map((item, index) => (
                <li key={index} className="flex items-start group text-left">
                  <CheckCircle2 className="w-6 h-6 text-brand-gold mr-4 flex-shrink-0 mt-1 group-hover:text-white transition-colors" />
                  <span className="text-gray-200 text-lg group-hover:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>

            <div className="text-center pt-4">
               <Button variant="outline" className="w-full md:w-auto">
                {COPY.EXPERIENCE.CTA}
              </Button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Experience;