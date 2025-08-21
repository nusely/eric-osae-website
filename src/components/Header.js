import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + "/images/ekot-nurturing_logo_white.png"} alt="Eric Osae-Twum Logo" width="160" />
        </div>
      </div>
    </header>
  );
};

export default Header;
