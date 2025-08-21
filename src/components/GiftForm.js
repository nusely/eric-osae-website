import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Gift } from 'lucide-react';
import emailjs from 'emailjs-com';

const GiftForm = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email.trim()) {
      setIsLoading(true);
      setError('');
      
      try {
        // Send email using EmailJS
        await emailjs.send(
          'service_your_service_id', // Replace with your EmailJS service ID
          'template_your_template_id', // Replace with your EmailJS template ID
          {
            to_email: email,
            gift_link: 'https://www.amazon.com/Culture-Gratitude-90-DAY-DEVOTIONAL-FALLING/dp/B0DD4K256T',
            book_title: 'Culture of Gratitude',
            author_name: 'Eric Osae-Twum'
          },
          'your_user_id' // Replace with your EmailJS user ID
        );

        // Store in localStorage
        onSubmit(email);
        setIsSubmitted(true);
        setEmail('');
      } catch (error) {
        console.error('Email sending failed:', error);
        setError('Failed to send email. Please try again.');
      } finally {
        setIsLoading(false);
      }
    }
  };

  if (isSubmitted) {
    return (
      <motion.div 
        className="success-message"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Gift size={60} color="#d6941b" />
        <h3>Thank You!</h3>
        <p>Your gift has been sent to your email. Please check your inbox and spam folder.</p>
        <motion.button 
          onClick={() => setIsSubmitted(false)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn btn-primary"
        >
          Send Another Gift
        </motion.button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="gift-form">
      <div className="input-group">
        <label htmlFor="email">Email Address *</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email address"
          required
          disabled={isLoading}
        />
      </div>
      {error && (
        <motion.p 
          className="form-note error"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ color: '#e74c3c' }}
        >
          {error}
        </motion.p>
      )}
      <motion.button 
        type="submit"
        whileHover={{ scale: isLoading ? 1 : 1.05 }}
        whileTap={{ scale: isLoading ? 1 : 0.95 }}
        className="btn btn-primary"
        disabled={isLoading}
      >
        <Gift size={20} />
        {isLoading ? 'Sending...' : 'Get My Gift'}
      </motion.button>
      <p className="form-note">* Your email will be used to send you the gift link</p>
    </form>
  );
};

export default GiftForm;
