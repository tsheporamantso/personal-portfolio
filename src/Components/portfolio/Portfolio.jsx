import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/Space.png';

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Space Travellors" />
        </div>
        <h3>Space Travellers&apos; Hub</h3>
        <a href="https://github.com/tsheporamantso/Space-Travelers" className="btn">GitHub</a>
        <a href="https://space-travellers-6soy.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Space Travellors" />
        </div>
        <h3>Space Travellers&apos; Hub</h3>
        <a href="https://github.com/tsheporamantso/Space-Travelers" className="btn">GitHub</a>
        <a href="https://space-travellers-6soy.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Space Travellors" />
        </div>
        <h3>Space Travellers&apos; Hub</h3>
        <a href="https://github.com/tsheporamantso/Space-Travelers" className="btn">GitHub</a>
        <a href="https://space-travellers-6soy.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Space Travellors" />
        </div>
        <h3>Space Travellers&apos; Hub</h3>
        <a href="https://github.com/tsheporamantso/Space-Travelers" className="btn">GitHub</a>
        <a href="https://space-travellers-6soy.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Space Travellors" />
        </div>
        <h3>Space Travellers&apos; Hub</h3>
        <a href="https://github.com/tsheporamantso/Space-Travelers" className="btn">GitHub</a>
        <a href="https://space-travellers-6soy.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
      <article className="portfolio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="Space Travellors" />
        </div>
        <h3>Space Travellers&apos; Hub</h3>
        <a href="https://github.com/tsheporamantso/Space-Travelers" className="btn">GitHub</a>
        <a href="https://space-travellers-6soy.onrender.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
      </article>
    </div>
  </section>
);

export default Portfolio;
