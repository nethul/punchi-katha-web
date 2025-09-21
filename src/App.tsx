import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import HowItWorks from './components/HowItWorks';
import BookExamples from './components/BookExamples';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import CreateBookForm from './components/CreateBookForm';

function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create-book" element={<CreateBookForm />} />
      </Routes>
    </Router>
  );
}

export default App;