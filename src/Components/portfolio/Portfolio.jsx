import './portfolio.css';
import data from '../../utils/data';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) {
    return text;
  }
  return `${text.slice(0, maxLength)}...`;
};

const Portfolio = () => (
  <section id="portfolio">
    <h5>My Recent Work</h5>
    <h2>Portfolio</h2>

    <div className="container portfolio__container">
      {data.map(({ id, image, title, github, demo, description }) => (
        <article key={id} className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          {description && (
            <p style={{ marginBottom: '2rem' }}>
              {truncateText(description, 70)}
            </p>
          )}
          <div className="portfolio__item-cta">
            <a href={github} className="btn">
              GitHub
            </a>
            <a
              href={demo}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>
          </div>
        </article>
      ))}
    </div>
  </section>
);

export default Portfolio;
