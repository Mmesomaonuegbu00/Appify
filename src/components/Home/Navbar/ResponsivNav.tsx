'use client'
import React, { useState } from 'react';
import Nav from './Nav';
import MobileNav from './MobileNav';

const ResponsivNav = () => {
  const [showNav, setShowNav] = useState(false);

  const handleToggleNav = () => setShowNav(!showNav);

  return (
    <div>
      <Nav openNav={handleToggleNav} />
      {showNav && <MobileNav showNav={showNav} closeNav={handleToggleNav} />}
    </div>
  );
};

export default ResponsivNav;
