import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { LuFolderGit2 } from 'react-icons/lu';
import ME from '../../assets/about-me.jpg';
import './about.css';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="about me" />
        </div>
      </div>

      <div className="about__content">
        <div className="about__cards">
          <article className="about__card">
            <FaAward className="about__icon" />
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>

          <article className="about__card">
            <FiUsers className="about__icon" />
            <h5>Clients</h5>
            <small>20+ Clients Worldwide</small>
          </article>

          <article className="about__card">
            <LuFolderGit2 className="about__icon" />
            <h5>Projects</h5>
            <small>30+ Completed projects</small>
          </article>
        </div>
        <p>
          Certified Full-Stack Web Developer,
          I can help you build a product, feature or website.
          Look through some of my work and experience!
          If you like what you see and have a project you need coded,
          don&apos;t hesitate to contact me.
        </p>
        <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
      </div>
    </div>
  </section>
);

export default About;
