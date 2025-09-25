import React from 'react';
import { Calculator, FileText } from 'lucide-react';

export const Foundation: React.FC = () => {
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
    <section id="foundation" className="py-12 sm:py-16 md:py-20 bg-black text-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            A base de tudo: Transformando seu delivery em uma operação lucrativa e eficiente.
          </h2>
        </div>
        
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center mb-12 sm:mb-16">
            <div className="space-y-6 sm:space-y-8">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <FileText className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-2 sm:mb-3">
                    Ficha Técnica e Processos
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Padronizamos sua operação para garantir qualidade máxima com o mínimo de desperdício.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="bg-red-600 p-2 sm:p-3 rounded-lg flex-shrink-0">
                  <Calculator className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-2 sm:mb-3">
                    Gestão Financeira Inteligente
                  </h3>
                  <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                    Com nossas ferramentas, você saberá o custo exato de cada prato (CMV) e precificará para ter lucro de verdade.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 sm:p-8 rounded-2xl border border-red-600/30">
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 text-center text-red-500">Fórmula do Sucesso</h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                  <div className="bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-center border border-red-600/30 w-full sm:w-auto">
                    <div className="text-xs sm:text-sm text-gray-400">Processos</div>
                    <div className="text-lg sm:text-xl font-bold text-white">Padronizados</div>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold text-red-500">+</div>
                  <div className="bg-white/10 px-3 sm:px-4 py-2 rounded-lg text-center border border-red-600/30 w-full sm:w-auto">
                    <div className="text-xs sm:text-sm text-gray-400">Finanças</div>
                    <div className="text-lg sm:text-xl font-bold text-white">Controladas</div>
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold text-red-500">=</div>
                </div>
                
                <div className="bg-red-600 px-4 sm:px-6 py-3 sm:py-4 rounded-lg text-center">
                  <div className="text-xl sm:text-2xl font-bold text-white">Quero Uma Base Sólida</div>
                  <div className="text-xs sm:text-sm text-red-100">Para crescimento sustentável</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO TER CONTROLE DOS MEUS NÚMEROS
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};