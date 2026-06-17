import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import AboutUs from './components/AboutUs';
import ContactCard from './components/ContactCard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-brand-white flex flex-col justify-between overflow-x-hidden selection:bg-brand-yellow selection:text-brand-black font-sans" id="app-root">
      
      {/* 1. Navigation Header */}
      <Header />

      {/* Main Structural Page Flow */}
      <main className="flex-1" id="main-content">
        
        {/* 2. Chicago Construction Inspiration Hero */}
        <Hero />

        {/* 3. "What We Do" Panel with Card Grid */}
        <Services />

        {/* 4. "Who We Are" Panel with Values */}
        <AboutUs />

        {/* 5. "Contact" / Bidding Form */}
        <ContactCard />

      </main>

      {/* Elegant Corporate Footer */}
      <Footer />

    </div>
  );
}
