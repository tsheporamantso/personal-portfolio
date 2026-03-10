/* eslint-disable jsx-a11y/control-has-associated-label */
import React from 'react';
import { FaLinkedinIn, FaAngellist } from 'react-icons/fa';
import { FaGithub, FaDribbble } from 'react-icons/fa6';
import { AiOutlineCodeSandbox } from 'react-icons/ai';

const HeaderSocials = () => (
  <div className="header__socials">
    <>
      <a href="https://linkedin.com/in/gladwinramantso" target="_blank" rel="noreferrer">
        <FaLinkedinIn />
      </a>
      <a href="https://github.com/tsheporamantso" target="_blank" rel="noreferrer">
        <FaGithub />
      </a>
      <a href="https://wellfound.com/u/gladwin-tshepo-ramantso" target="_blank" rel="noreferrer">
        <FaAngellist />
      </a>
      <a href="https://dribbble.com/TshepoRamantso" target="_blank" rel="noreferrer">
        <FaDribbble />
      </a>
      <a href="https://codesandbox.io/dashboard/recent" target="_blank" rel="noreferrer">
        <AiOutlineCodeSandbox />
      </a>
    </>
  </div>
);

export default HeaderSocials;
