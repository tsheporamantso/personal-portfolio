/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';
import { RiServiceFill, RiLoginBoxLine } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import { Link } from 'react-router-dom';

import './nav.css';

const Nav = () => {
  const [activeNav, setActiveNav] = useState('home');

  return (
    <nav>
      <a
        href="#home"
        title="Home"
        onClick={() => {
          setActiveNav('#home');
        }}
        className={activeNav === '#home' ? 'active' : ''}
      >
        <FaHome />
      </a>
      <a
        href="#about"
        title="About"
        onClick={() => {
          setActiveNav('#about');
        }}
        className={activeNav === '#about' ? 'active' : ''}
      >
        <FaRegUser />
      </a>
      <a
        href="#services"
        title="Services"
        onClick={() => {
          setActiveNav('#services');
        }}
        className={activeNav === '#services' ? 'active' : ''}
      >
        <RiServiceFill />
      </a>
      <a
        href="#portfolio"
        title="Portfolio"
        onClick={() => {
          setActiveNav('#portfolio');
        }}
        className={activeNav === '#portfolio' ? 'active' : ''}
      >
        <IoBookSharp />
      </a>
      <a
        href="#contact"
        title="Contact Me"
        onClick={() => {
          setActiveNav('#contact');
        }}
        className={activeNav === '#contact' ? 'active' : ''}
      >
        <TiMessages />
      </a>
      <li>
        <Link to="/login" title="Admin Login">
          <RiLoginBoxLine />
        </Link>
      </li>
    </nav>
  );
};

export default Nav;
