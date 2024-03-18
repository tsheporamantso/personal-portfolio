import React from 'react';
import ME from '../../assets/me.jpg';
import './about.css';

const About = () => (
  <section id="about">
    <h5>Get to know</h5>
    <h2>About Me</h2>

    <div className="container about__container">
      <div className="about__me">
        <div className="about__me-image">
          <img src={ME} alt="" />
        </div>
      </div>
    </div>
  </section>
);

export default About;
