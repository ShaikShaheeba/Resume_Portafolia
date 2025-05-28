import { useState } from 'react';
import resourceHubImage from "../assets/resource_hub.jpg";
import aiImage from "../assets/ai.jpg";
import portafoliaImage from "../assets/portafolia.jpg";

import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: "CSE Resource Hub",
      category: "web",
      image: resourceHubImage,
      description: "Developed a full-stack CSE Resource Hub web application using HTML, CSS, and SQL.",
      technologies: ["HTML", "CSS", "SQL"]
    },
    {
      id: 2,
      title: "FSA Attack through Adversarial Images",
      category: "ai",
      image: aiImage,
      description: "Implemented Feature Space Attack using adversarial images and enhanced model robustness with defensive distillation and classical classifiers.",
      technologies: ["Python", "PyTorch", "Scikit-learn", "NumPy", "ML clasifiers", "DL model"]
    },
    {
      id: 3,
      title: "Resume Portfolio Website",
      category: "web",
      image: portafoliaImage,
      description: "Designed and developed a personal resume portfolio website.",
      technologies: ["React", "CSS3", "JavaScript", "HTML"]
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI/ML' }
  ];

  const filteredProjects = filter === 'all'
    ? projectsData
    : projectsData.filter(project => project.category === filter);

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <h2 className="section-title">My Projects</h2>

        <div className="project-filters fade-in">
          {filters.map(filterItem => (
            <button
              key={filterItem.id}
              className={`filter-button ${filter === filterItem.id ? 'active' : ''}`}
              onClick={() => setFilter(filterItem.id)}
            >
              {filterItem.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.length === 0 ? (
            <p>No projects to show.</p>
          ) : (
            filteredProjects.map((project, index) => (
              <div
                key={project.id}
                className="project-card fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="project-image">
                  <img src={project.image} alt={project.title} />
                </div>
                <div className="project-info">
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-description">{project.description}</p>
                  <div className="project-tech">
                    {project.technologies.map(tech => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
