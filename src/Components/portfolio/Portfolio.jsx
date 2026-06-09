/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/no-array-index-key */
import { useState } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import './portfolio.css';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import techIcons from '../../utils/techIcons';
import API, { BASE_URL } from '../../utils/api';
import SkeletonCard from './PortfolioSkeletonCard';

/**
 * Truncate the length of the string
 * @param {string} text
 * @param {number} maxLength
 * @returns {string} length formatted to 70 characters
 */

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [sortOrder, setSortOrder] = useState('-title');

  const {
    data: projects,
    isLoading,
    error,
  } = useQuery({
    queryKey: ['projects', sortOrder],
    queryFn: async () => {
      const { data } = await axios.get(`${API.projects}?sort=${sortOrder}`);
      return data;
    },
  });

  if (isLoading) {
    return (
      <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>
        <div className="container portfolio__container">
          {[...Array(6)].map((_, i) => (
            <SkeletonCard key={i} />
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return <h2 className="error">{error.message}</h2>;
  }

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container">
        <div className="portfolio__controls">
          <label htmlFor="sort">Sort by Title:</label>
          <div className="select-wrapper">
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="-title">Desc</option>
              <option value="title">Asc</option>
            </select>
          </div>
        </div>
      </div>

      <div className="container portfolio__container">
        {projects.data.map((project) => (
          <article key={project._id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={`${BASE_URL}${project.image}`} alt={project.title} />
            </div>
            <h3>{project.title}</h3>
            {project.description && (
              <p style={{ marginBottom: '2rem' }}>
                {truncateText(project.description, 70)}
              </p>
            )}
            <div className="portfolio__item-cta">
              <button
                type="button"
                className="btn btn-primary"
                onClick={() => {
                  setSelectedProject(project);
                }}
              >
                View Details
              </button>
            </div>
          </article>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="portfolio__modal">
          <div className="portfolio__modal-content">
            <img
              src={`${BASE_URL}${selectedProject.image}`}
              alt={selectedProject.title}
              className="modal-image"
            />

            <h2>{selectedProject.title}</h2>

            <p>{selectedProject.description}</p>

            <h3>Tech Stack</h3>
            <ul className="tech-stack">
              {selectedProject.stack?.map((tech) => (
                <li className="tech-badge" key={tech}>
                  {techIcons[tech]}
                  <span>{tech}</span>
                </li>
              ))}
            </ul>

            <div className="modal-buttons">
              <a
                href={selectedProject.github}
                className="btn"
                target="_blank"
                rel="noreferrer"
              >
                GitHub
              </a>

              <a
                href={selectedProject.demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>

            <button
              type="button"
              className="modal-close"
              aria-label="Close modal"
              onClick={() => setSelectedProject(null)}
            >
              <IoCloseSharp />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
