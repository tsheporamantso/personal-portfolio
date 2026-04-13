import React from 'react';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { LuFolderGit2 } from 'react-icons/lu';
import useSpeech from '../../hooks/useSpeech';
import ME from '../../assets/headshot.png';
import './about.css';

const About = () => {
  const { toggle, stop, isPaused, isSpeaking } = useSpeech();
  const text =
    'Full Stack Web Developer with experience building responsive and scalable web applications using JavaScript, React, Node.js, and Ruby on Rails. Trained in modern development practices, including RESTful API’s, authentication systems, and collaborative Git workflows. Passionate about building clean user interfaces and reliable backend systems while continuously improving technical skills.';

  let buttonLabel = '🔊 Listen';

  if (isSpeaking && isPaused) {
    buttonLabel = '▶️ Resume';
  } else if (isSpeaking) {
    buttonLabel = '⏸️ Pause';
  }

  return (
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
          {/* 🔊 Speech buttons */}
          <div className="speech-controls">
            <button
              className="voice-btn"
              type="button"
              onClick={() => toggle(text)}
            >
              {buttonLabel}
            </button>

            <button
              className="stop-btn"
              type="button"
              onClick={stop}
              disabled={!isSpeaking}
            >
              ⛔ Stop
            </button>
          </div>

          <p>{text}</p>

          <a href="#contact" className="btn btn-primary">
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
