import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-[url('/hero-background.png')] bg-cover bg-center relative overflow-hidden pt-20">
      {/* Gradient fade at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10"></div>
      
      <div className="max-w-6xl mx-auto px-4 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2B4C6F] mb-8 leading-tight">
              Your Child,{' '}
              <br />
              <span className="text-[#2B4C6F]">
                The Hero Of
              </span>{' '}
              <br />
              Their Own Story
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Create magical personalized storybooks where your child becomes the 
              star of their own adventure. Watch their face light up as they discover 
              themselves in enchanting tales.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/create-book"
                className="bg-[#E17B47] hover:bg-[#D16A36] text-white font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5" />
                Create Your Book
              </Link>
              <button className="bg-white hover:bg-gray-50 text-gray-700 font-semibold py-4 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-200">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;