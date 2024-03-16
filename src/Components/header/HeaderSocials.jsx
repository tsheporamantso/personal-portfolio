/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaLinkedinIn } from 'react-icons/fa';
import { FaGithub, FaSquareXTwitter, FaDribbble } from 'react-icons/fa6';

const HeaderSocials = () => (
  <div className="header__socials">
    <>
      <a href="https://linkedin.com/in/gladwinramantso" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/tsheporamantso" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://twitter.com/ramgt001" target="_blank" rel="noreferrer">
        <FaSquareXTwitter />
      </a>
      <a href="https://dribbble.com/TshepoRamantso" target="_blank" rel="noreferrer">
        <FaDribbble />
      </a>
    </>
  </div>
);

export default HeaderSocials;
