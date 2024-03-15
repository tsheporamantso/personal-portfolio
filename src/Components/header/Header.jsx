import React from 'react';
import CTA from './CTA';
import './header.css';

const Header = () => (
  <header>
    <div className="container header__container">
      <h5>Hello I&apos;m</h5>
      <h1>Gladwin Tshepo Ramantso</h1>
      <h5 className="text-light">FullStack Developer</h5>
      <CTA />
    </div>
  </header>
);

export default Header;
