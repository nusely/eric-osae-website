import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      text: "Eric's book 'Culture of Gratitude' completely transformed my perspective on life. His insights on gratitude have helped me find joy in everyday moments.",
      author: "Sarah Johnson",
      location: "New York, USA"
    },
    {
      text: "This devotional has been my daily companion for the past 90 days. The practical wisdom and spiritual depth have enriched my faith journey immensely.",
      author: "Michael Chen",
      location: "California, USA"
    },
    {
      text: "Eric's writing speaks directly to the heart. His approach to gratitude is both practical and profound. Highly recommended for anyone seeking personal growth.",
      author: "Emily Rodriguez",
      location: "Texas, USA"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section">
      <div className="container">
        <motion.div 
          className="testimonials-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>WHAT READERS ARE SAYING</h2>
          <div className="testimonials-slider">
            <motion.div
              key={currentTestimonial}
              className="testimonial-card"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <Quote size={40} className="quote-icon" />
              <p className="testimonial-text">"{testimonials[currentTestimonial].text}"</p>
              <div className="testimonial-author">
                <h4>{testimonials[currentTestimonial].author}</h4>
                <p>{testimonials[currentTestimonial].location}</p>
              </div>
            </motion.div>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`dot ${index === currentTestimonial ? 'active' : ''}`}
                  onClick={() => setCurrentTestimonial(index)}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
