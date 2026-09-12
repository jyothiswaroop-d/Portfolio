import React from 'react';
import SectionTitle from '../components/SectionTitle';
import { GraduationCap, Code, FileText, Download } from 'lucide-react';
import { profileData } from '../data/profile';

export default function About() {
  return (
    <section id="about" className="section section-alt">
      <div className="container">
        <SectionTitle title="About Me" subtitle="Background & Capabilities" />

        <div className="about-grid">
          {/* Bio Overview */}
          <div className="about-intro-card">
            {profileData.about.paragraphs.map((para, index) => (
              <p key={index}>{para}</p>
            ))}
          </div>

          {/* Education Timeline Cards */}
          <div>
            <h3 className="subsection-title">
              <GraduationCap size={22} color="var(--secondary)" /> Education
            </h3>
            <div className="education-list">
              {profileData.education.map((edu) => (
                <div key={edu.id} className="education-card">
                  <div className="edu-header">
                    <h4 className="edu-degree">{edu.degree}</h4>
                    <span className="edu-year">
                      {edu.startYear} - {edu.endYear}
                    </span>
                  </div>
                  <div className="edu-institution">
                    <span>{edu.institution} • {edu.location}</span>
                    {edu.cgpa && (
                      <span className="edu-cgpa-badge">CGPA: {edu.cgpa}</span>
                    )}
                  </div>
                  {edu.coursework && edu.coursework.length > 0 && (
                    <div>
                      <p className="edu-coursework-title">Relevant Coursework & Studies:</p>
                      <div className="coursework-badges">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="badge badge-secondary">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Technical Skills Grouped Categories */}
          <div>
            <h3 className="subsection-title">
              <Code size={22} color="var(--secondary)" /> Technical Skills
            </h3>
            <div className="skills-grid">
              {profileData.skills.map((skillGroup, index) => (
                <div key={index} className="skill-category-card">
                  <h4 className="category-header">{skillGroup.category}</h4>
                  <div className="skill-items-wrap">
                    {skillGroup.items.map((skill, i) => (
                      <span key={i} className="badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Resume Box Section */}
          <div className="resume-box-card">
            <div className="resume-box-text">
              <h3>Resume</h3>
              <p>Explore full academic records, project accomplishments, and technical experience.</p>
            </div>
            <div className="resume-box-actions">
              <a
                href={profileData.resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                <FileText size={18} /> View Resume
              </a>
              <a
                href={profileData.resumePath}
                download="D_Jyothi_Swaroop_Resume.pdf"
                className="btn btn-secondary"
              >
                <Download size={18} /> Download PDF
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
