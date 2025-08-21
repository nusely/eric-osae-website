import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const LogoIcon = () => (
  <img src="/images/ekot-nurturing_logo_white.png" alt="Eric Osae-Twum Logo" width="160" />
);

const Header = () => {
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 100], [1, 0.8]);

  return (
    <motion.header className="header" style={{ opacity: headerOpacity }}>
      <div className="container">
        <div className="logo">
          <LogoIcon />
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
