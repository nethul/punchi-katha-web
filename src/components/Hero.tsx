import React from 'react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[url('/hero-background.png')] bg-cover bg-center relative overflow-hidden pt-20">

      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-700 mb-6 leading-tight">
              Your Child,{' '}
              <br />
              <span className="text-slate-700">
                The Hero
              </span>{' '}
              <br />
              Of Their Own Story
            </h1>
            <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mb-8">
              Create Your Book
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;