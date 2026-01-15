import React from 'react';
import { CHECKOUT_URL } from '../constants';
import { ArrowRight } from 'lucide-react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'sticky';
  className?: string;
  fullWidth?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '',
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold uppercase tracking-wider transition-all duration-300 transform active:scale-95 group focus:outline-none focus:ring-2 focus:ring-brand-gold focus:ring-offset-2 focus:ring-offset-black";
  
  const variants = {
    primary: "bg-brand-gold text-black hover:bg-white hover:text-black py-4 px-8 rounded shadow-[0_0_20px_rgba(170,129,60,0.4)] hover:shadow-[0_0_30px_rgba(170,129,60,0.6)] text-sm md:text-base",
    outline: "border-2 border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-black py-3 px-8 rounded text-sm md:text-base",
    sticky: "bg-brand-gold text-black py-3 px-6 rounded-full font-bold shadow-lg text-sm"
  };

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <a 
      href={CHECKOUT_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${widthClass} ${className}`}
    >
      <span>{children}</span>
      {variant !== 'sticky' && (
        <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
      )}
    </a>
  );
};

export default Button;