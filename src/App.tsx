import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import BookExamples from './components/BookExamples';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <HowItWorks />
      <BookExamples />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;