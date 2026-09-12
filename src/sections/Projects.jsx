import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';
import { projectsData } from '../data/projects';
import { Layers, Globe, Cpu, Briefcase } from 'lucide-react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const fullstackProjects = projectsData.filter((p) => p.category === 'fullstack');
  const aimlProjects = projectsData.filter((p) => p.category === 'aiml');
  const experienceProjects = projectsData.filter((p) => p.category === 'experience');

  const filteredProjects = projectsData.filter((p) => {
    if (filter === 'all') return true;
    return p.category === filter;
  });

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionTitle
          title="My Projects & Experience"
          subtitle="Full Stack, AI/ML & Industry Experience"
        />

        {/* Filter Bar */}
        <div className="projects-filter-bar">
          <button
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            <Layers size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            All ({projectsData.length})
          </button>

          <button
            className={`filter-btn ${filter === 'fullstack' ? 'active' : ''}`}
            onClick={() => setFilter('fullstack')}
          >
            <Globe size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Full Stack / Web ({fullstackProjects.length})
          </button>

          <button
            className={`filter-btn ${filter === 'aiml' ? 'active' : ''}`}
            onClick={() => setFilter('aiml')}
          >
            <Cpu size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            AI / Machine Learning ({aimlProjects.length})
          </button>

          <button
            className={`filter-btn ${filter === 'experience' ? 'active' : ''}`}
            onClick={() => setFilter('experience')}
          >
            <Briefcase size={16} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '6px' }} />
            Experience ({experienceProjects.length})
          </button>
        </div>

        {/* Render By Category Sections when 'all' is selected */}
        {filter === 'all' ? (
          <div>
            {/* Category 1: Full Stack */}
            <div className="projects-category-header">
              <h3 className="projects-category-title">
                Full Stack Development / Web Projects
              </h3>
              <div className="category-line"></div>
            </div>
            <div className="projects-grid">
              {fullstackProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setSelectedProject}
                />
              ))}
            </div>

            {/* Category 2: AI / Machine Learning */}
            <div className="projects-category-header" style={{ marginTop: '50px' }}>
              <h3 className="projects-category-title">
                AI / Machine Learning Projects
              </h3>
              <div className="category-line"></div>
            </div>
            <div className="projects-grid">
              {aimlProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  onOpenModal={setSelectedProject}
                />
              ))}
            </div>

            {/* Category 3: Experience */}
            {experienceProjects.length > 0 && (
              <>
                <div className="projects-category-header" style={{ marginTop: '50px' }}>
                  <h3 className="projects-category-title">
                    Professional Experience
                  </h3>
                  <div className="category-line"></div>
                </div>
                <div className="projects-grid">
                  {experienceProjects.map((project) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      onOpenModal={setSelectedProject}
                    />
                  ))}
                </div>
              </>
            )}
          </div>
        ) : (
          /* Render Single Filter Grid */
          <div className="projects-grid">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProject}
              />
            ))}
          </div>
        )}

        {/* Detail Modal */}
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}

