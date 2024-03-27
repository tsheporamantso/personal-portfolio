/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';
import { RiServiceFill } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <nav>
      <a href="#home" onClick={() => { setActiveNav('#home'); }} className={activeNav === '#home' ? 'active' : ''}><FaHome /></a>
      <a href="#about" onClick={() => { setActiveNav('#about'); }} className={activeNav === '#about' ? 'active' : ''}><FaRegUser /></a>
      <a href="#services" onClick={() => { setActiveNav('#services'); }} className={activeNav === '#services' ? 'active' : ''}><RiServiceFill /></a>
      <a href="#portfolio" onClick={() => { setActiveNav('#portfolio'); }} className={activeNav === '#portfolio' ? 'active' : ''}><IoBookSharp /></a>
      <a href="#contact" onClick={() => { setActiveNav('#contact'); }} className={activeNav === '#contact' ? 'active' : ''}><TiMessages /></a>
    </nav>
  );
};

export default Nav;
