import React from 'react';
import tryImage from './try.jpeg';

const Hero: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-r from-[#001B48] to-[#02457A] text-white py-32 mt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-10"
          style={{ backgroundImage: `url(${tryImage})` }}
        ></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover Stories That Matter</h1>
          <p className="text-lg md:text-xl opacity-90 mb-8">
            Insights, perspectives, and thought-provoking content from experts across technology, design, and beyond.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
