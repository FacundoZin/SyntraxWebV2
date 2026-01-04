
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative hero-bg h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div className="relative z-10 px-6 animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight uppercase mb-8 leading-tight">
          BIENVENIDO A SYNTRAX
        </h1>
        <p className="mt-4 max-w-4xl mx-auto text-lg md:text-xl font-medium text-stone-200 leading-relaxed">
          Desarrollamos sistemas y optimizamos procesos complejos mediante soluciones integrales de software, para que tu empresa mejore su eficiencia y crezca sin límites.
        </p>
      </div>

      <a 
        href="#services" 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white/10 dark:bg-black/20 backdrop-blur-md flex items-center justify-center hover:bg-white/30 dark:hover:bg-black/40 transition-all duration-300 animate-bounce"
      >
        <span className="material-symbols-outlined text-white">arrow_downward</span>
      </a>
    </div>
  );
};

export default Hero;
