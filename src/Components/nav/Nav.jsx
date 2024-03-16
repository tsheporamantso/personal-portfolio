/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaHome, FaRegUser } from 'react-icons/fa';
import { IoBookSharp } from 'react-icons/io5';
import { RiServiceFill } from 'react-icons/ri';
import { TiMessages } from 'react-icons/ti';
import './nav.css';

const Nav = () => (
  <nav>
    <a href="#home" className="active"><FaHome /></a>
    <a href="#about"><FaRegUser /></a>
    <a href="#portfolio"><IoBookSharp /></a>
    <a href="#services"><RiServiceFill /></a>
    <a href="#contact"><TiMessages /></a>
  </nav>
);

export default Nav;
