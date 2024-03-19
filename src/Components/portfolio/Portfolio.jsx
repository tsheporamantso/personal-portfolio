import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/space.png';
import IMG2 from '../../assets/staysphare.png';
import IMG3 from '../../assets/recipe.png';
import IMG4 from '../../assets/leaderboard.png';
import IMG5 from '../../assets/bookstore.png';
import IMG6 from '../../assets/mathmagician.png';
import IMG7 from '../../assets/chatalpha.png';

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Space Travellers Hub',
    github: 'https://github.com/tsheporamantso/Space-Travelers',
    demo: 'https://space-travellers-6soy.onrender.com/',
  },
  {
    id: 2,
    image: IMG2,
    title: 'StaySphare',
    github: 'https://github.com/tsheporamantso/final-capstone-react-front-end',
    demo: 'https://github.com/tsheporamantso/final-capstone-react-front-end',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Recipe App',
    github: 'https://github.com/tsheporamantso/Recipe-App',
    demo: 'https://recipeapp-sxaw.onrender.com',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Leader Board',
    github: 'https://github.com/tsheporamantso/budget-app',
    demo: 'https://tsheporamantso.github.io/Leaderboard/dist',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Book Store',
    github: 'https://github.com/tsheporamantso/bookstore',
    demo: 'https://bookstore-hzhe.onrender.com/',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Math Magician',
    github: 'https://github.com/tsheporamantso/bookstore',
    demo: 'https://math-magicians-app-eljm.onrender.com',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Chat Alpha',
    github: 'https://github.com/tsheporamantso/Chat-Alpha',
    demo: 'https://github.com/tsheporamantso/Chat-Alpha',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {
        data.map(({
          id, image, title, github, demo,
        }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className="btn">GitHub</a>
              <a href={demo} className="btn btn-primary" target="_blank" rel="noreferrer">Live Demo</a>
            </div>
          </article>
        ))
}
    </div>
  </section>
);

export default Portfolio;
