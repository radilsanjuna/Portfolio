import React, { useState } from 'react';
import { FaGithub } from 'react-icons/fa';
import '../css/Projects.css'; // Make sure to import your CSS file

const projectsData = [
  { id: 1, title: 'Portfolio Website', type: 'Web', github: 'https://github.com/radilsanjuna/Portfolio' },
  { id: 2, title: 'HR-System', type: 'Other', github: 'https://github.com/radilsanjuna/HR-System-' },
  { id: 3, title: 'Restaurant-Web', type: 'Web', github: 'https://github.com/radilsanjuna/Restaurant-Website' },
  { id: 4, title: 'Gym-Management-System', type: 'Web', github: 'https://github.com/radilsanjuna/Gym-Management-System' }
];

const filters = ['All', 'Web', 'Mobile', 'Other'];

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const filteredProjects =
    activeFilter === 'All' ? projectsData : projectsData.filter((project) => project.type === activeFilter);

  return (
    <section id="projects" className="projects-section">
      <div className="projects-container">
        <h2 className="projects-title">My Projects</h2>

        <div className="filters">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="project-card">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-type">{project.type} Project</p>
              </div>
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                <FaGithub className="github-icon" />
                View Code on GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
