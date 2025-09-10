import React, { useState, useEffect } from 'react';
import { Target, Users, Share2, Gift, MessageSquare, TrendingUp, Zap, ChevronLeft, ChevronRight } from 'lucide-react';

export const CaptationFunnels: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  
  const onCtaClick = () => {
    const formSection = document.getElementById('diagnostico-gratuito');
    if (formSection) {
      formSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % funnels.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + funnels.length) % funnels.length);
  };

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  const funnels = [
    {
      icon: <Target className="w-8 h-8 text-white" />,
      title: "Funil de Aquisição",
      description: "Atração de novos clientes através de múltiplos canais"
    },
    {
      icon: <Gift className="w-8 h-8 text-white" />,
      title: "Funil de Lançamento",
      description: "Combos irresistíveis que aumentam o ticket médio"
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-white" />,
      title: "Funil de Social Selling",
      description: "Vendas através de relacionamento nas redes sociais"
    },
    {
      icon: <Share2 className="w-8 h-8 text-white" />,
      title: "Funil de Indicação",
      description: "Sistema de recompensas para clientes que indicam"
    },
    {
      icon: <Users className="w-8 h-8 text-white" />,
      title: "Funil de Farming",
      description: "Reconquista de clientes inativos com ofertas especiais"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-white" />,
      title: "Funil de Upsell",
      description: "Aumento do valor do pedido com sugestões inteligentes"
    }
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isHovered) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % funnels.length);
      }, 4000); // Change slide every 4 seconds

      return () => clearInterval(interval);
    }
  }, [isHovered, funnels.length]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 right-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-red-600 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 sm:w-64 md:w-96 h-48 sm:h-64 md:h-96 bg-white rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Inovação que gera pedidos
            <span className="hidden sm:inline">: Múltiplos funis para nunca mais depender de uma única fonte de clientes.</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-4xl mx-auto">
            Enquanto outros usam apenas 1 ou 2 modelos, nós trabalhamos com um ecossistema completo de 10 funis que atuam em diferentes frentes para maximizar vendas e previsibilidade.
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Ecossistema de Funis - Representação Visual */}
          <div className="relative mb-12 sm:mb-16">
            {/* Mobile Carousel - Netflix Style */}
            <div className="block sm:hidden">
              <div 
                className="relative overflow-hidden rounded-xl"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
              >
                <div 
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                  {funnels.map((funnel, index) => (
                    <div key={index} className="w-full flex-shrink-0 px-1">
                      <div className="bg-gradient-to-br from-red-600 to-red-700 p-4 rounded-xl shadow-xl border border-red-500/30 mx-1">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="bg-white/20 p-2 rounded-lg flex-shrink-0">
                            <div className="w-6 h-6 flex items-center justify-center">
                              {funnel.icon}
                            </div>
                          </div>
                          <h3 className="text-lg font-bold text-white truncate">
                            {funnel.title}
                          </h3>
                        </div>
                        <p className="text-red-100 leading-relaxed text-sm line-clamp-3">
                          {funnel.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                {/* Preview Cards - Netflix Style */}
                <div className="absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-gray-900/80 to-transparent pointer-events-none z-10"></div>
                <div className="absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-gray-900/80 to-transparent pointer-events-none z-10"></div>
                
                {/* Navigation Arrows - Netflix Style */}
                <button
                  onClick={prevSlide}
                  className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20 opacity-0 hover:opacity-100"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-all duration-300 z-20 opacity-0 hover:opacity-100"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
                
                {/* Progress Bar - Netflix Style */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-white transition-all duration-100 ease-linear"
                    style={{ width: `${((currentSlide + 1) / funnels.length) * 100}%` }}
                  ></div>
                </div>
                
                {/* Dots Indicator - Smaller */}
                <div className="flex justify-center mt-3 space-x-1">
                  {/* {funnels.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentSlide ? 'bg-white' : 'bg-white/30'
                      }`}
                    />
                  ))} */}
                </div>
              </div>
            </div>
            
            {/* Desktop Grid */}
            <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {funnels.map((funnel, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-br from-red-600 to-red-700 p-4 sm:p-6 rounded-xl shadow-xl border border-red-500/30 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center space-x-3 sm:space-x-4 mb-3 sm:mb-4">
                    <div className="bg-white/20 p-2 sm:p-3 rounded-lg flex-shrink-0">
                      <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 flex items-center justify-center">
                        {funnel.icon}
                      </div>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white">
                      {funnel.title}
                    </h3>
                  </div>
                  <p className="text-red-100 leading-relaxed text-sm sm:text-base">
                    {funnel.description}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Central Hub - Mobile Friendly */}
            {/* <div className="flex justify-center mb-8 lg:hidden">
              <div className="bg-white p-4 sm:p-6 rounded-full shadow-2xl border-4 border-red-600">
                <Zap className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-red-600" />
              </div>
            </div> */}
            
            {/* Central Hub - Desktop */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-full shadow-2xl border-4 border-red-600 z-10 hidden lg:block">
              <Zap className="w-12 h-12 text-red-600" />
            </div>
            
            {/* Connecting Lines - Desktop Only */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block" style={{ zIndex: 1 }}>
              <defs>
                <radialGradient id="connectionGradient" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0.1" />
                </radialGradient>
              </defs>
              <circle cx="50%" cy="50%" r="200" fill="url(#connectionGradient)" />
            </svg>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-white/20 mb-8 sm:mb-12">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 text-center">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">6+</div>
                <div className="text-base sm:text-lg text-gray-300">Funis Diferentes</div>
                <div className="text-xs sm:text-sm text-gray-400">Trabalhando simultaneamente</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">300%</div>
                <div className="text-base sm:text-lg text-gray-300">Mais Leads</div>
                <div className="text-xs sm:text-sm text-gray-400">Comparado a estratégias únicas</div>
              </div>
              <div className="sm:col-span-2 lg:col-span-1">
                <div className="text-3xl sm:text-4xl font-bold text-red-500 mb-2">24/7</div>
                <div className="text-base sm:text-lg text-gray-300">Captação Ativa</div>
                <div className="text-xs sm:text-sm text-gray-400">Mesmo quando você dorme</div>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <button 
              onClick={onCtaClick}
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white text-base sm:text-lg font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              QUERO INOVAR NA MINHA CAPTAÇÃO
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};