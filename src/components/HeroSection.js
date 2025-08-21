import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Sparkles, ArrowRight } from 'lucide-react';

const HeroSection = ({ onGiftClick, onBookClick }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="hero-badge"
            >
              <Sparkles size={16} />
              <span>Eric Osae-Twum</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span style={{ color: 'white' }}>WELCOME TO</span> MY PERSONAL PAGE
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="hero-description"
            >
              Dear Valued Reader,<br />
              I'm Eric Osae-Twum, an author passionate about personal development and spiritual growth.
              Through my writings, I aim to inspire and guide you on your journey of self-discovery and gratitude.
            </motion.p>

            <motion.div
              className="hero-buttons"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <motion.button
                onClick={onGiftClick}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(214, 148, 27, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary hero-btn-primary"
              >
                <Sparkles size={18} />
                Receive Gift
                <ArrowRight size={16} />
              </motion.button>

              <motion.button
                onClick={onBookClick}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(1, 68, 94, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-secondary hero-btn-secondary"
              >
                <BookOpen size={18} />
                Buy the Book
                <ArrowRight size={16} />
              </motion.button>
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-image"
            initial={{ opacity: 0, x: 50, scale: 0.8 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <motion.div
              className="profile-image"
              whileHover={{
                scale: 1.02,
                boxShadow: "0 20px 60px rgba(214, 148, 27, 0.2)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img src="/images/Eric-Osae_Twum-slider-pic1.png" alt="Eric Osae-Twum" className="profile-photo" />
              <motion.div
                className="profile-glow"
                animate={{
                  opacity: [0.5, 1, 0.5],
                  scale: [1, 1.05, 1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            <motion.div
              className="floating-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <BookOpen size={24} />
              <span>Author & Coach</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
