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
          Highly driven result-orientated Full-Stack Developer
          with a deep passion for creating seamless and engaging web applications,
          completed over 30 projects. Expertise in various technologies including
          React, Redux, Ruby, PostgreSQL, Rails, HTML5, CSS3, and JavaScript.
          Thrive in dynamic and fast-paced development environments.
        </p>
        <a href="#contact" className="btn btn-primary">Let&apos;s Talk</a>
      </div>
    </div>
  </section>
);

export default About;
