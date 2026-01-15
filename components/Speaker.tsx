import React from 'react';
import { COPY, IMAGES } from '../constants';
import Button from './Button';
import { Quote } from 'lucide-react';
import santiago from "@/assets/santiago.png"

const Speaker: React.FC = () => {
  return (
    <section className="py-8 bg-gradient-to-br from-brand-card to-brand-darker border-y border-white/5">
      <div className="container mx-auto px-4">
        {/* Layout: Mobile = Image Top (col-reverse), Desktop = Text Left / Image Right (row) */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-24">
          
          {/* Content - Left side on desktop */}
          <div className="lg:w-7/12 text-left">
             <div className="inline-block px-3 py-1 bg-brand-gold text-black font-bold text-xs uppercase tracking-widest rounded mb-6">
               Keynote Speaker
             </div>
             
             <h2 className="text-4xl lg:text-5xl font-bold text-white mb-2">{COPY.SPEAKER.NAME}</h2>
             <p className="text-xl text-brand-gold mb-6">{COPY.SPEAKER.TITLE}</p>
             
             <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-2xl">
               {COPY.SPEAKER.DESC}
             </p>

             <blockquote className="border-l-4 border-brand-gold pl-6 py-4 my-8 bg-white/5 rounded-r-lg relative max-w-2xl">
               <Quote className="absolute -top-4 -left-3 text-brand-gold w-8 h-8 bg-brand-dark rounded-full p-1 border border-brand-gold/20" />
               <p className="text-xl lg:text-2xl font-serif italic text-white leading-relaxed">
                 {COPY.SPEAKER.QUOTE}
               </p>
             </blockquote>

             <div className="mt-8 mb-10 max-w-2xl">
               <h4 className="text-white font-bold mb-2 uppercase text-sm tracking-wide flex items-center gap-2">
                 <span className="w-1 h-1 bg-brand-gold rounded-full"></span>
                 Também estarão presentes:
               </h4>
               <p className="text-gray-400 text-sm leading-relaxed border-t border-white/10 pt-4">
                 {COPY.SPEAKER.OTHERS}
               </p>
             </div>

             <Button variant="primary">
               {COPY.SPEAKER.CTA}
             </Button>
          </div>

          {/* Speaker Image - Right side on desktop */}
          <div className="lg:w-5/12 w-full max-w-sm relative mx-auto lg:mx-0 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[320px] lg:max-w-sm">
              <div className="aspect-[3/4] rounded-sm overflow-hidden border-2 border-brand-gold/20 relative shadow-[0_0_50px_rgba(0,0,0,0.5)] z-10">
                <img 
                  src={santiago} 
                  alt={COPY.SPEAKER.NAME} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent p-6">
                  <h3 className="text-2xl font-serif font-bold text-white lg:hidden">{COPY.SPEAKER.NAME}</h3>
                  <p className="text-brand-gold font-medium uppercase tracking-wider text-xs mt-1 lg:hidden">Presença Confirmada</p>
                </div>
              </div>
              {/* Decoration Element behind image */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-brand-gold/20 -z-0 hidden lg:block"></div>
              <div className="absolute -bottom-4 -left-4 w-full h-full bg-brand-gold/5 -z-0 hidden lg:block"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Speaker;