import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Heart } from 'lucide-react';

const WaitlistModal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name.trim() && formData.email.trim()) {
      // Store in localStorage
      const waitlist = JSON.parse(localStorage.getItem('waitlist') || '[]');
      waitlist.push({
        name: formData.name,
        email: formData.email,
        date: new Date().toISOString()
      });
      localStorage.setItem('waitlist', JSON.stringify(waitlist));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '' });
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isSubmitted) {
    return (
      <motion.div
        className="modal-overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          className="modal-content waitlist-modal"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
        >
          <button className="modal-close" onClick={onClose}>
            <X size={24} />
          </button>
          <div className="waitlist-content">
            <Heart size={60} color="#d6941b" />
            <h3>Thank You!</h3>
            <p>You've been added to the waitlist for "The Mess is the Map". We'll notify you as soon as the book is available!</p>
            <motion.button 
              onClick={onClose}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn btn-primary"
            >
              Close
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content waitlist-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="waitlist-content">
          <div className="waitlist-form">
            <div className="book-image-container">
              <img 
                src="/images/book_ekot_bg.webp" 
                alt="The Mess is the Map" 
                className="waitlist-book-image"
              />
            </div>
            <h4>Join the Waitlist</h4>
            <p>Be the first to know when "The Mess is the Map" becomes available!</p>
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <label htmlFor="name">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="input-group">
                <label htmlFor="email">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <motion.button 
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                <Heart size={20} />
                Join Waitlist
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default WaitlistModal;
