import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Quote, Heart } from 'lucide-react';
import ContactForm from './ContactForm';

const ContactSection = () => {
  const [currentQuote, setCurrentQuote] = useState(0);

  const quotes = [
    "In a world that constantly highlights our deficiencies and desires, gratitude emerges as a powerful, counter-cultural act.",
    "Gratitude is more than a brief feeling; it is a mindset, a way of life that transforms our interactions and perspectives.",
    "The essence of Gratitude begins by demystifying this deep emotion. Here, we delve into the origins and definitions of gratitude, weaving together scriptural insights, personal stories, and reflective explorations to uncover its multi-layered importance."
  ];

  return (
    <section className="contact-section">
      <div className="container">
        <motion.div 
          className="card contact-card" 
          initial={{ opacity: 0, y: 50 }} 
          whileInView={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.8 }} 
          viewport={{ once: true }}
        >
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-image">
                <img src="/images/eot_.png" alt="Eric Osae-Twum" className="contact-photo" />
              </div>
              <div className="contact-details">
                <h2>Feel free to contact me</h2>
                <div className="contact-item email-centered">
                  <Mail size={20} />
                  <a href="mailto:osaetwum@gmail.com">osaetwum@gmail.com</a>
                </div>
                
                {/* Quote Sliders */}
                <div className="quote-sliders">
                  <motion.div 
                    className="quote-bubble"
                    key={currentQuote}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Quote size={16} className="quote-icon-small" />
                    <p>
                      {currentQuote === 0 && `"${quotes[0]}"`}
                      {currentQuote === 1 && `"${quotes[1]}"`}
                      {currentQuote === 2 && `"${quotes[2]}"`}
                    </p>
                  </motion.div>
                  
                  <div className="quote-controls">
                    {[0, 1, 2].map((index) => (
                      <motion.button 
                        key={index}
                        className={`quote-nav-btn ${currentQuote === index ? 'active' : ''}`}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => {
                          setCurrentQuote(index);
                          // Store click count in localStorage
                          const clickCount = parseInt(localStorage.getItem(`quote_${index}_clicks`) || '0') + 1;
                          localStorage.setItem(`quote_${index}_clicks`, clickCount.toString());
                        }}
                      >
                        <Heart size={16} />
                        <span>{index + 1}</span>
                        <span className="click-count">
                          {parseInt(localStorage.getItem(`quote_${index}_clicks`) || '0')}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-form-container">
              <ContactForm />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
