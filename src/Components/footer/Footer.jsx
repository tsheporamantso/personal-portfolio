/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './footer.css';

const Footer = () => (
  <footer id="footer">
    <a href="#home" className="footer__logo">
      GLADWIN
    </a>

    <ul className="permalinks">
      <li>
        <a href="#home">Home</a>
      </li>
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#experience">Experience</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#portfolio">Portfolio</a>
      </li>
      <li>
        <a href="#testimonials">Testimonials</a>
      </li>
      <li>
        <a href="#contact">Contact</a>
      </li>
    </ul>

    <div className="footer__socials">
      <a href="https://facebook.com/" target="_blank" rel="noreferrer">
        <FaFacebookF />
      </a>
      <a href="https://twitter.com/ramgt001" target="_blank" rel="noreferrer">
        <FaTwitter />
      </a>
      <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
        <FaInstagram />
      </a>
    </div>

    <div className="footer__copyright">
      <small>&copy; Gladwin Tshepo Ramantso. All rights reserved</small>
    </div>
  </footer>
);

export default Footer;
