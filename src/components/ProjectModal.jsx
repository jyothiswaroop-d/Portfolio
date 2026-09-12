import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle, Briefcase, Calendar } from 'lucide-react';
import { GithubIcon } from './BrandIcons';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className="modal-content" 
        onClick={(e) => e.stopPropagation()} 
        role="dialog" 
        aria-modal="true"
        aria-labelledby="modal-project-title"
      >
        {/* Modal Header */}
        <div className="modal-header">
          <div>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px', alignItems: 'center' }}>
              <span className="badge badge-secondary">
                {project.categoryName}
              </span>
              {project.company && (
                <span className="badge" style={{ backgroundColor: 'var(--primary-light)', color: 'var(--primary)', fontWeight: 700, borderColor: 'var(--secondary)' }}>
                  <Briefcase size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  Company: {project.company}
                </span>
              )}
              {(project.startDate || project.endDate) ? (
                <span className="badge" style={{ backgroundColor: '#F1F5F9', color: 'var(--text-muted)' }}>
                  <Calendar size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                  {project.startDate} - {project.endDate || 'Present'}
                </span>
              ) : (
                project.date && (
                  <span className="badge" style={{ backgroundColor: '#F1F5F9', color: 'var(--text-muted)' }}>
                    <Calendar size={12} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                    {project.date}
                  </span>
                )
              )}
            </div>
            <h3 id="modal-project-title" className="modal-title">
              {project.title}
            </h3>
          </div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
            <X size={24} />
          </button>
        </div>

        {/* Modal Body */}
        <div className="modal-body">
          <div>
            <h4 className="modal-section-h">Project Overview</h4>
            <p style={{ color: 'var(--text)', fontSize: '0.975rem', lineHeight: '1.6' }}>
              {project.shortDescription}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            <div style={{ background: 'var(--background)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <h4 className="modal-section-h">The Problem</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{project.problem}</p>
            </div>
            <div style={{ background: 'var(--background)', padding: '16px', borderRadius: 'var(--radius-sm)', border: '1px solid var(--border)' }}>
              <h4 className="modal-section-h">The Solution</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--muted)' }}>{project.solution}</p>
            </div>
          </div>

          <div>
            <h4 className="modal-section-h">Key Features & Accomplishments</h4>
            <ul className="modal-features-list">
              {project.keyFeatures.map((feat, idx) => (
                <li key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.925rem', color: 'var(--text)' }}>
                  <CheckCircle size={16} color="var(--secondary)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="modal-section-h">Technology Stack</h4>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {project.technologies.map((tech, idx) => (
                <span key={idx} className="badge">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {project.challengesLearnings && (
            <div>
              <h4 className="modal-section-h">Challenges & What I Learned</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.925rem', fontStyle: 'italic', background: 'var(--primary-light)', padding: '14px', borderRadius: 'var(--radius-sm)' }}>
                "{project.challengesLearnings}"
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="modal-footer">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
            >
              <GithubIcon size={16} /> GitHub Repository
            </a>
          )}

          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary btn-sm"
            >
              <ExternalLink size={16} /> Live Demo
            </a>
          )}

          <button className="btn btn-secondary btn-sm" onClick={onClose}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
