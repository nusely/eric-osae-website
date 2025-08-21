import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Target, Brain, Eye } from 'lucide-react';
import SkillBar from './SkillBar';

const InsightsSection = ({ onWaitlistClick }) => {
  return (
    <section className="insights-section">
      <div className="container">
        <motion.div 
          className="insights-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2>THE MIND'S LENS SHAPES OUR WORLD</h2>
          <h3>IT CAN ILLUMINATE PATHS OR CAST SHADOWS</h3>
          <div className="insights-grid">
            <div className="upcoming-book-section">
              <div className="upcoming-book-card">
                <div className="book-cover-placeholder">
                  <img 
                    src="/images/book_ekot.jpg" 
                    alt="The Mess is the Map" 
                    style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} 
                  />
                </div>
                <h3>The Mess is the Map</h3>
                <p className="book-description">
                  An upcoming book that explores how life's challenges and chaos can actually guide us 
                  toward our true purpose and potential. Discover the hidden wisdom in life's messiest moments.
                </p>
                <div className="book-actions">
                  <motion.button 
                    onClick={onWaitlistClick}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn btn-primary"
                  >
                    <Heart size={20} /> Join Waitlist
                  </motion.button>
                </div>
              </div>
            </div>
            <div className="skills-section">
              <div className="insight-text">
                <p>Understanding our divine identity is an inward voyage to where God placed eternity.</p>
              </div>
              <div className="skills-container">
                <SkillBar skill="COACHING" percentage={95} icon={Target} />
                <SkillBar skill="CONSULTING" percentage={90} icon={Brain} />
                <SkillBar skill="SELF DEVELOPMENT" percentage={100} icon={Eye} />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InsightsSection;
