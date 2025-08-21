import React from 'react';
import { motion } from 'framer-motion';
import GiftForm from './GiftForm';

const BookIllustration = () => (
  <img
    src={process.env.PUBLIC_URL + "/images/ekotgift.jpg"}
    alt="Culture of Gratitude Book"
    width="450"
    height="350"
    style={{ borderRadius: '20px', objectFit: 'contain' }}
  />
);

const GiftSection = ({ onGiftSubmit }) => {
  return (
    <section id="gift-section" className="gift-section">
      <div className="container">
        <motion.div
          className="card gift-card"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="gift-content">
            <div className="gift-text">
              <h2>MY SPECIAL GIFT FOR YOU</h2>
              <p>As a token of appreciation for visiting my page, I'm offering you a special gift -
              a free chapter from my book "Culture of Gratitude". This chapter will introduce you to
              the transformative power of gratitude and how it can change your perspective on life.</p>
              <GiftForm onSubmit={onGiftSubmit} />
            </div>
            <div className="gift-illustration">
              <BookIllustration />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GiftSection;
