import React from 'react';
import { Smartphone, Heart, Target, MessageCircle, Users, TrendingUp, Zap } from 'lucide-react';

interface DirectSalesProps {
  onCtaClick: () => void;
}

export const DirectSales: React.FC = () => {
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
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 sm:mb-6">
            Pare de "alugar" clientes. É hora de construir sua própria audiência.
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-100 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                    Ecossistema de Vendas Diretas
                  </h3>
                  <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Criamos seu canal de vendas próprio com Cardápio Digital e atendimento inteligente no WhatsApp. Retome o controle dos marketplaces.
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-black to-gray-900 p-4 sm:p-6 rounded-2xl text-white">
                <div className="text-center mb-4 sm:mb-6">
                  <Smartphone className="w-8 h-8 sm:w-12 sm:h-12 mx-auto mb-2 sm:mb-3 text-red-500" />
                  <h3 className="text-lg sm:text-xl font-bold text-red-500">Vendas Diretas</h3>
                </div>
                
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div className="text-xs sm:text-sm">Cardápio Digital Próprio</div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div className="text-xs sm:text-sm">WhatsApp Business Otimizado</div>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full flex-shrink-0"></div>
                    <div className="text-xs sm:text-sm">Sistema de Pedidos Integrado</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative order-1 lg:order-2">
              {/* Ecossistema Circular - Mobile Friendly */}
              <div className="relative w-72 h-60 sm:w-80 sm:h-64 md:w-96 md:h-80 mx-auto">
                {/* Círculo Central */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-red-600 rounded-full flex items-center justify-center z-10">
                  <Target className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 text-white" />
                </div>
                
                {/* Elementos do Ecossistema */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <Users className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Funis Marketing + Comercial</div>
                </div>
                
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Produtos & Ofertas</div>
                </div>
                
                <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-2 sm:p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <Heart className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Fidelização</div>
                </div>
                
                <div className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white p-2 sm:p-3 rounded-lg shadow-lg border-2 border-red-200">
                  <Zap className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-red-600 mx-auto mb-1" />
                  <div className="text-xs font-semibold text-center text-gray-800">Automação</div>
                </div>
                
                {/* Linhas conectoras - Responsivas */}
                <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 1 }} viewBox="0 0 288 240">
                  <circle cx="144" cy="120" r="75" fill="none" stroke="#ef4444" strokeWidth="2" strokeDasharray="5,5" opacity="0.3" />
                </svg>
              </div>
              
              <div className="text-center mt-6 sm:mt-8">
                <h3 className="text-xl sm:text-2xl font-bold text-black mb-2 sm:mb-3">
                  Sistema de Fidelização e Recorrência
                </h3>
                <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
                  Implementamos estratégias para transformar compradores de uma única vez em fãs leais que pedem de novo e de novo, aumentando drasticamente o valor de cada cliente (LTV).
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO FIDELIZAR MEUS CLIENTES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};