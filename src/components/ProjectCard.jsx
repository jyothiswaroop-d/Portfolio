import React from 'react';
import { ExternalLink, Info, Briefcase, Calendar } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectCard({ project, onOpenModal }) {
  if (!project) return null;

  return (
    <div className="project-card">
      {/* Company Name Above Image (For Experience items) */}
      {project.company && (
        <div className="project-company-name">
          <Briefcase size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
          {project.company}
        </div>
      )}

      {/* 1. Project / Experience Image Container */}
      <div className="project-card-image-container">
        <div className="project-card-image-wrap">
          <img src={project.image} alt={project.title} loading="lazy" />
        </div>
      </div>

      <div className="project-card-body">
        {/* 2. Project Title */}
        <h3 className="project-card-title">{project.title}</h3>

        {/* 3. Date & Description Logic:
            - Experience: From Date - To Date (Month YYYY format e.g. April 2026 - Present)
            - Normal Projects (Web, AI/ML): Single Month YYYY Date (e.g. March 2024) + Description
        */}
        {project.category === 'experience' || project.startDate ? (
          <p className="project-card-desc project-card-dates">
            <Calendar size={13} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '5px' }} />
            {project.startDate} - {project.endDate || 'Present'}
          </p>
        ) : (
          <div>
            {project.date && (
              <div className="project-date-pill">
                <Calendar size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                {project.date}
              </div>
            )}
            <p className="project-card-desc">{project.shortDescription}</p>
          </div>
        )}

        {/* 4. Skills Section */}
        <div className="project-skills-wrapper">
          <span className="skills-subtitle">Skills</span>
          <div className="project-tech-stack">
            {project.technologies.map((tech, idx) => (
              <span key={idx} className="project-skill-pill">
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* 5. Action Buttons Footer */}
        <div className="project-card-footer">
          <div className="project-links">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-outline"
                title="View Source Code on GitHub"
              >
                <GithubIcon size={14} /> Source Code
              </a>
            )}

            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-btn project-btn-outline"
                title="View Live Demo"
              >
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="project-btn project-btn-solid"
            title="View Full Details"
          >
            <Info size={14} /> Details
          </button>
        </div>
      </div>
    </div>
  );
}
