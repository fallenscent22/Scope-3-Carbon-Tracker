import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-[600px] md:h-[700px] w-full overflow-hidden">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent"></div>
      </div>

      {/* Hero Content */}
      <div className="relative container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Scope 3 Emission Monitoring
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200">
            For Sustainable Supply Chain
          </p>
          <button
            onClick={() =>
              document.getElementById('pricing')?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="px-8 py-4 bg-cta-green text-black font-bold text-lg rounded-full hover:bg-green-400 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;