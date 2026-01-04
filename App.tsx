
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import ContactDetails from './components/ContactDetails';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';
import AssistantFab from './components/AssistantFab';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/30">
      <Navbar scrolled={scrolled} />
      
      <main className="flex-grow">
        <section id="home">
          <Hero />
        </section>

        <section id="services">
          <Services />
        </section>

        <section id="about">
          <About />
        </section>

        <section id="contact-details" className="bg-stone-100 dark:bg-stone-900">
          <ContactDetails />
        </section>

        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
      
      {/* Interactive AI Assistant to make the app "world-class" and Gemini-ready */}
      <AssistantFab />
    </div>
  );
};

export default App;
