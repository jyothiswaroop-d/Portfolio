import React, { useState, useEffect } from 'react';
import { Menu, X, Code } from 'lucide-react';
import SocialLinks from './SocialLinks';
import { profileData } from '../data/profile';

export default function Navbar({ currentPage, onNavigate }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleLinkClick = (id) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar-header ${scrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* Brand / Logo */}
        <button 
          className="brand-logo" 
          onClick={() => handleLinkClick('home')}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
        >
          <Code size={22} color="var(--secondary)" />
          {profileData.name}
        </button>

        {/* Desktop Navigation */}
        <div className="nav-desktop-right">
          <nav aria-label="Main Navigation">
            <ul className="nav-links">
              {navItems.map((item) => (
                <li key={item.id} className="nav-link-item">
                  <button
                    className={`nav-page-btn ${currentPage === item.id ? 'active' : ''}`}
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          <SocialLinks links={profileData.socialLinks} />
        </div>

        {/* Mobile Hamburger Button */}
        <button
          className="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <div className={`mobile-drawer ${mobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-links">
          {navItems.map((item) => (
            <li key={item.id}>
              <button
                className={`mobile-page-btn ${currentPage === item.id ? 'active' : ''}`}
                onClick={() => handleLinkClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
        <div style={{ paddingTop: '16px', borderTop: '1px solid var(--border)' }}>
          <SocialLinks links={profileData.socialLinks} />
        </div>
      </div>
    </header>
  );
}
