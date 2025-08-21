import React, { useState, useEffect } from 'react';
import './App.css'; // Add this CSS import
import emailjs from 'emailjs-com';

// Import all components
import {
  FloatingElements,
  Header,
  HeroSection,
  GiftSection,
  Testimonials,
  InsightsSection,
  ContactSection,
  Footer,
  ScrollToTop,
  BookPopup,
  WaitlistModal
} from './components';

function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [showBookPopup, setShowBookPopup] = useState(false);
  const [showWaitlistModal, setShowWaitlistModal] = useState(false);

  useEffect(() => {
    // Initialize EmailJS
    emailjs.init('your_user_id'); // Replace with your EmailJS user ID

    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGiftSubmit = (email) => {
    // Store email in localStorage
    const giftEmails = JSON.parse(localStorage.getItem('giftEmails') || '[]');
    giftEmails.push({
      email,
      date: new Date().toISOString(),
      giftLink: 'https://www.amazon.com/Culture-Gratitude-90-DAY-DEVOTIONAL-FALLING/dp/B0DD4K256T'
    });
    localStorage.setItem('giftEmails', JSON.stringify(giftEmails));
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleGiftClick = () => {
    document.getElementById('gift-section').scrollIntoView({ behavior: 'smooth' });
  };

  const handleBookClick = () => {
    setShowBookPopup(true);
  };

  const handleWaitlistClick = () => {
    setShowWaitlistModal(true);
  };

  return (
    <div className="App">
      <FloatingElements />
      
      <Header />
      
      <HeroSection 
        onGiftClick={handleGiftClick}
        onBookClick={handleBookClick}
      />
      
      <GiftSection onGiftSubmit={handleGiftSubmit} />
      
      <Testimonials />
      
      <InsightsSection onWaitlistClick={handleWaitlistClick} />
      
      <ContactSection />
      
      <Footer />
      
      <ScrollToTop showScrollTop={showScrollTop} scrollToTop={scrollToTop} />
      
      {/* Modals */}
      <BookPopup isOpen={showBookPopup} onClose={() => setShowBookPopup(false)} />
      <WaitlistModal isOpen={showWaitlistModal} onClose={() => setShowWaitlistModal(false)} />
    </div>
  );
}

export default App;
