import { useState, useEffect } from 'react';
import { IoCloseSharp } from 'react-icons/io5';
import techIcons from '../../utils/techIcons';
import './portfolio.css';
// import data from '../../utils/data';
import fetchData from '../../utils/fetchdata';

const url = 'http://localhost:3000/api/v1/projects';

const truncateText = (text, maxLength) => {
  if (text.length <= maxLength) return text;
  return `${text.slice(0, maxLength)}...`;
};

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProjects = async () => {
      setLoading(true);
      const data = await fetchData(url);
      if (data) {
        setProjects(data.data);
      }
      setLoading(false);
    };
    getProjects();
  }, []);

  if (loading) {
    return (
      <section id="portfolio">
        <h5>Fetching data...</h5>
        <div className="loader" />
      </section>
    );
  }

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {projects.map((project) => (
          <article key={project._id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img
                src={`http://localhost:3000${project.image}`}
                alt={project.title}
              />
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
              src={`http://localhost:3000${selectedProject.image}`}
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
