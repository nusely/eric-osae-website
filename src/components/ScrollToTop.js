import React from 'react';
import { motion } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = ({ showScrollTop, scrollToTop }) => {
  return (
    <motion.button
      className="scroll-top-btn"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: showScrollTop ? 1 : 0, scale: showScrollTop ? 1 : 0 }}
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <ChevronUp size={24} />
    </motion.button>
  );
};

export default ScrollToTop;
