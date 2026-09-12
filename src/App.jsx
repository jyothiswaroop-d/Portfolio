import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profile';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  // Scroll to top when changing pages
  const handleNavigate = (pageId) => {
    setCurrentPage(pageId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Fixed document title across all pages
    document.title = `${profileData.name} | Full Stack Developer & AI/ML Engineer`;
  }, []);

  const renderPageContent = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'contact':
        return <Contact />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="app-container">
      {/* Page Navigation Header */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
      />

      {/* Dynamic Page View Container */}
      <main className="page-content-wrapper" key={currentPage}>
        {renderPageContent()}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}
