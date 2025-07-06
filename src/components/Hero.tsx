import React from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    const element = document.getElementById('blog-content');
    element?.scrollIntoView({ behavior: 'smooth' });
  };


return (
    <section className="relative bg-gradient-primary text-white py-24 md:py-32 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#001B48] via-[#02457A] to-[#018ABE] opacity-100 mix-blend-multiply"></div>

        <div className="absolute inset-0 bg-[url('/images/try.jpeg')] bg-cover bg-center opacity-10"></div>

      </div>
      

      <div className="container mx-auto px-4 relative z-10 items-right">
        <div className="max-w-4xl mx-auto max-w-xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
            <Sparkles size={16} className="text-[#D6EBEE]" />
            <span className="text-sm font-medium text-[#D6EBEE]">Latest Insights & Stories</span>
          </div>
          
          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up leading-tight" style={{ animationDelay: '0.2s' }}>
            <span className="block text-balance">Discover Stories</span>
            <span className="block text-balance bg-gradient-to-r from-[#D6EBEE] to-white bg-clip-text text-transparent">
              That Matter
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-[#D6EBEE]/90 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in-up text-balance" style={{ animationDelay: '0.4s' }}>
            Insights, perspectives, and thought-provoking content from experts across technology, design, and beyond.
          </p>
          
          {/* CTA Button */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <button
              onClick={scrollToContent}
              className="group inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:transform hover:scale-105"
            >
              <span>Explore Articles</span>
              <ArrowDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-12"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
            className="fill-[#D6EBEE]/30"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;