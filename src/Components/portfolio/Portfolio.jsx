/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import techIcons from '../../utils/techIcons';
import './portfolio.css';
import fetchData from '../../utils/fetchdata';
import API, { BASE_URL } from '../../utils/api';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sortOrder, setSortOrder] = useState('-title');

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);

      const data = await fetchData(`${API.projects}?sort=${sortOrder}`);

      if (data) {
        setProjects(data.data);
        setError(false);
      } else {
        setError(true);
      }
      setLoading(false);
    };
    getProjects();
  }, [sortOrder]);

  if (error) {
    return <h2 className="error">Something went wrong loading projects...</h2>;
  }

  if (loading) {
    return (
      <section id="portfolio">
        <h5>Fetching projects...</h5>
        <div className="loader" />
      </section>
    );
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
        {projects.map((project) => (
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
