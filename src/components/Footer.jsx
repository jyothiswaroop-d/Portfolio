import React from 'react';
import { Mail } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from './BrandIcons';
import { profileData } from '../data/profile';

export default function Footer({ onNavigate }) {
  const pages = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        {/* Line 1: Centered Page Navigation Links */}
        <div className="footer-top-line">
          <div className="footer-nav-links">
            {pages.map((p) => (
              <button
                key={p.id}
                onClick={() => onNavigate && onNavigate(p.id)}
                className="footer-nav-btn"
              >
                {p.label}
              </button>
            ))}
          </div>
        </div>

        {/* Line 2: Copyright Text (Left) & Social Logos (Right) */}
        <div className="footer-bottom-line">
          <div className="footer-copyright">
            <p>© 2026 {profileData.name}. All Rights Reserved.</p>
          </div>

          <div className="footer-social">
            <div className="social-icons-bar">
              {profileData.socialLinks.linkedin && (
                <a
                  href={profileData.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn"
                >
                  <LinkedinIcon size={16} />
                </a>
              )}

              {profileData.socialLinks.github && (
                <a
                  href={profileData.socialLinks.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-btn"
                  aria-label="GitHub Profile"
                  title="GitHub"
                >
                  <GithubIcon size={16} />
                </a>
              )}

              {profileData.email && (
                <a
                  href={`mailto:${profileData.email}?subject=Inquiry%20via%20Portfolio`}
                  className="social-icon-btn"
                  aria-label="Send Direct Email"
                  title="Send Direct Email"
                >
                  <Mail size={16} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}



