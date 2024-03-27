import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/space.png';
import IMG2 from '../../assets/staysphare.png';
import IMG3 from '../../assets/recipe.png';
import IMG4 from '../../assets/leaderboard.png';
import IMG5 from '../../assets/bookstore.png';
import IMG6 from '../../assets/mathmagician.png';
import IMG7 from '../../assets/chatalpha.png';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Space Travellers Hub',
    github: 'https://github.com/tsheporamantso/Space-Travelers',
    demo: 'https://space-travellers-6soy.onrender.com/',
    description: 'Space Travellers Hub is a web application that allows users to book rockets and join selected missions to Mars. The app is built with React and Redux for state management. It also uses the SpaceX API to fetch data.',
  },
  {
    id: 2,
    image: IMG2,
    title: 'StaySphere',
    github: 'https://github.com/tsheporamantso/final-capstone-react-front-end',
    demo: 'https://github.com/tsheporamantso/final-capstone-react-front-end',
    description: 'Hotel booking CRUD application built with React and Redux for state management, and Ruby on Rails for the backend.',
  },
  {
    id: 3,
    image: IMG3,
    title: 'Recipe App',
    github: 'https://github.com/tsheporamantso/Recipe-App',
    demo: 'https://recipeapp-sxaw.onrender.com',
    description: 'Recipe App it\'s a Ruby on Rails application that keeps track of all your recipes, ingredients, and inventory. It allows you to save ingredients, keep track of what you have, create recipes, and generate a shopping list based on what you have and what you are missing from a recipe.',
  },
  {
    id: 4,
    image: IMG4,
    title: 'Leader Board',
    github: 'https://github.com/tsheporamantso/budget-app',
    demo: 'https://tsheporamantso.github.io/Leaderboard/dist',
    description: 'Leader Board is a web application that allows users to add, delete, and update scores. The app is built with HTML, CSS, JavaScript and Webpack.',
  },
  {
    id: 5,
    image: IMG5,
    title: 'Book Store',
    github: 'https://github.com/tsheporamantso/bookstore',
    demo: 'https://bookstore-hzhe.onrender.com/',
    description: 'Book Store it\'s a Single Page Application(SPA) that allows users to display, add, delete, and update books. The app is built with React and Redux for state management.',
  },
  {
    id: 6,
    image: IMG6,
    title: 'Math Magician',
    github: 'https://github.com/tsheporamantso/bookstore',
    demo: 'https://math-magicians-app-eljm.onrender.com',
    description: 'Math Magician it\'s a Single Page Web Application for math enthusiasts that allows users to perform simple calculations. The app is built with React.',
  },
  {
    id: 7,
    image: IMG7,
    title: 'Chat Alpha',
    github: 'https://github.com/tsheporamantso/Chat-Alpha',
    demo: 'https://github.com/tsheporamantso/Chat-Alpha',
    description: 'Ruby on Rails(MVC) Application that allows user to Create, Read, Update and Delete messages, styled wit bootstrap.',
  },
];

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {
        data.map(({
          id, image, title, github, demo, description,
        }) => (
          <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            {description && <p style={{ marginBottom: '2rem' }}>{truncateText(description, 70)}</p>}
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
