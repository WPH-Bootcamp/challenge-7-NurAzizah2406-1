import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import StatsSection from '../components/sections/StatsSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TeamSection from '../components/sections/TeamSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import ContactSection from '../components/sections/ContactSection';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased flex flex-col justify-between">
      {/* Header Navigation */}
      <Navbar />

      {/* Main content grid */}
      <main className="flex-grow">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <StatsSection />
        <PortfolioSection />
        <TeamSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      {/* Footer information */}
      <Footer />
    </div>
  );
};

export default Home;
