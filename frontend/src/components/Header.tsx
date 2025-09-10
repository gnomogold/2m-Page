import React from 'react';
import { ArrowDown } from 'lucide-react';

export const Header: React.FC = () => {
  const onCtaClick = () => {
    const formSection = document.getElementById('diagnostico-gratuito');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="bg-gradient-to-br from-black via-gray-900 to-black text-white relative overflow-hidden lg:min-h-screen">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 pt-6 pb-4 sm:py-16 md:py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center lg:min-h-screen">
          <div className="lg:w-1/2 mb-6 sm:mb-12 lg:mb-0 text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-8 leading-tight">
              Seu delivery <span className="text-red-500">fatura</span>, mas o lucro não aparece?
            </h1>
            
            <p className="text-lg sm:text-2xl lg:text-3xl mb-6 sm:mb-10 text-gray-300 leading-relaxed">
              Descubra o sistema para transformar sua operação em um negócio previsível, 
              lucrativo e que não dependa 100% de você.
            </p>
            
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-lg sm:text-xl lg:text-2xl font-bold px-6 sm:px-8 py-4 sm:py-5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO UM DIAGNÓSTICO
            </button>
          </div>
          
          <div className="lg:w-1/2 relative w-full max-w-md lg:max-w-none">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 shadow-2xl border border-white/20">
              <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-lg p-4 sm:p-6 mb-4 sm:mb-6">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-2 text-white">Faturamento Mensal</h3>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">R$ 120.000</div>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-red-600 rounded-lg p-4 sm:p-6">
                <h3 className="font-bold text-sm sm:text-base lg:text-lg mb-2 text-white">Lucro Real</h3>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">R$ 5.400</div>
                <div className="text-xs sm:text-sm lg:text-base opacity-80 text-white">Apenas 4.5%</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 sm:w-8 sm:h-8 text-red-500" />
        </div>
      </div>
    </section>
  );
};