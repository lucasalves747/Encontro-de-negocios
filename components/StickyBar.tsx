import React, { useState, useEffect } from 'react';
import Button from './Button';
import { COPY } from '../constants';

const StickyBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-50 p-4 bg-brand-darker/90 backdrop-blur-md border-t border-white/10 shadow-2xl animate-fade-in-up">
      <div className="container mx-auto flex justify-between items-center max-w-4xl">
        <div className="hidden md:block">
            <p className="text-white font-bold">Encontro de Negócios</p>
           
        </div>
        <div className="w-full md:w-auto">
          <Button variant="sticky" fullWidth={true} className="bg-gradient-to-r from-brand-gold to-[#d4af37] text-black">
            {COPY.STICKY_CTA}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default StickyBar;