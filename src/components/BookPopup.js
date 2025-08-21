import React from 'react';
import { motion } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';

const BookPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBuyClick = () => {
    window.open('https://www.amazon.com/Culture-Gratitude-90-DAY-DEVOTIONAL-FALLING/dp/B0DD4K256T', '_blank');
  };

  return (
    <motion.div
      className="modal-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="modal-content book-popup"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        <div className="book-popup-content">
          <img 
            src="/images/book_phone mockup.png" 
            alt="Culture of Gratitude" 
            className="book-popup-image" 
          />
          <div className="book-popup-info">
            <h3>Culture of Gratitude</h3>
            <p className="book-subtitle">90-Day Devotional for Falling in Love with Life</p>
            <p className="book-description2">
              Transform your perspective and discover the profound impact of gratitude in your daily life. 
              This 90-day devotional journey will guide you through practical exercises, spiritual insights... 
              {/* and personal reflections that will help you cultivate a deeper sense of appreciation and joy. */}
            </p>
            <div className="book-actions">
              <motion.button 
                onClick={handleBuyClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                <ShoppingCart size={20} />
                Buy on Amazon
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BookPopup;
