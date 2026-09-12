import React from 'react';
import { ArrowRight, FileText } from 'lucide-react';
import { profileData } from '../data/profile';

export default function Home({ onNavigate }) {
  return (
    <section id="home" className="hero-section">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Circular Profile Frame */}
          <div className="hero-image-wrapper">
            <div className="avatar-frame">
              <img
                src={profileData.profileImage}
                alt={profileData.name}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '/assets/profile/avatar.svg';
                }}
              />
            </div>
          </div>

          {/* Right Column: Hero Content */}
          <div className="hero-content">
            <span className="hero-greeting">Hello,</span>
            <h1 className="hero-name">I am {profileData.name}</h1>
            <h2 className="hero-title">{profileData.title}</h2>
            
            <p className="hero-bio">
              {profileData.shortIntro}
            </p>

            {/* CTA Buttons */}
            <div className="hero-actions">
              <button
                onClick={() => onNavigate && onNavigate('projects')}
                className="btn btn-primary"
              >
                View Projects <ArrowRight size={18} />
              </button>

              {/* View Resume: Opens in browser window without forcing download */}
              <a
                href={profileData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                View Resume <FileText size={18} />
              </a>
            </div>

            {/* Compact Skills Line */}
            {profileData.heroSkills && profileData.heroSkills.length > 0 && (
              <div className="hero-skills-line">
                <span className="skills-label">Core Focus:</span>
                {profileData.heroSkills.map((skill, index) => (
                  <span key={index} className="badge">
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
