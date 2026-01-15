import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-8 border-t border-white/5 text-center">
      <div className="container mx-auto px-4">
        <p className="text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Encontro de Negócios. Todos os direitos reservados.
        </p>
        <p className="text-gray-700 text-xs mt-2">
          Jacksonville, FL
        </p>
      </div>
    </footer>
  );
};

export default Footer;