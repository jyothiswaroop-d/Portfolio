import React, { useState, useRef } from 'react';
import SectionTitle from '../components/SectionTitle';
import { Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { LinkedinIcon, GithubIcon } from '../components/BrandIcons';
import { profileData } from '../data/profile';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const alertRef = useRef(null);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name.';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email format (e.g. name@domain.com).';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Please enter a subject.';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message.';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setStatusMessage(null);

    try {
      // Use FormData format for Web3Forms API to ensure seamless submission
      const body = new FormData();
      body.append("access_key", profileData.web3formsAccessKey);
      body.append("name", formData.name);
      body.append("email", formData.email);
      body.append("subject", formData.subject);
      body.append("message", formData.message);
      body.append("from_name", `${formData.name} via Portfolio`);

      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: body
      });

      const result = await response.json();

      if (result.success) {
        setStatusMessage({
          type: 'success',
          text: 'Thank you! Your message has been sent directly to D. Jyothi Swaroop’s inbox.'
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatusMessage({
          type: 'error',
          text: result.message || 'Unable to deliver message automatically. You can click below to dispatch via your mail client.',
          fallbackSubject: formData.subject,
          fallbackBody: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
        });
      }
    } catch (error) {
      setStatusMessage({
        type: 'error',
        text: 'Network connection issue. Click below to open your email application.',
        fallbackSubject: formData.subject,
        fallbackBody: `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
      });
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        if (alertRef.current) {
          alertRef.current.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 50);
    }
  };

  return (
    <section id="contact" className="section section-alt">
      <div className="container">
        <SectionTitle title="Contact Me" subtitle="Get In Touch" />

        <div className="contact-grid">
          {/* Left Column: Let's Connect */}
          <div className="contact-info-side">
            <h3 className="contact-info-title">Let's Connect</h3>
            <p className="contact-info-text">
              I enjoy working on impactful systems that combine software, AI, and real-world problem solving.
              <br></br>
              Currently open to internships, full-time roles, and collaborative projects.
              <br></br>
              Feel free to reach out — whether it’s collaboration or discussion.
            </p>

            <div className="contact-detail-cards">
              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <Mail size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>Email Communication</span>
                  <a
                    href={`mailto:${profileData.email}?subject=Inquiry%20via%20Portfolio`}
                  >
                    Send Direct Email
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <LinkedinIcon size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>LinkedIn Profile</span>
                  <a href={profileData.socialLinks.linkedin} target="_blank" rel="noopener noreferrer">
                    Connect on LinkedIn
                  </a>
                </div>
              </div>

              <div className="contact-detail-item">
                <div className="contact-detail-icon">
                  <GithubIcon size={20} />
                </div>
                <div className="contact-detail-text">
                  <span>GitHub Repositories</span>
                  <a href={profileData.socialLinks.github} target="_blank" rel="noopener noreferrer">
                    View GitHub Projects
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="contact-form-side">
            {statusMessage && (
              <div ref={alertRef} className={`form-alert ${statusMessage.type}`}>
                {statusMessage.type === 'success' ? (
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <CheckCircle2 size={20} style={{ flexShrink: 0, marginTop: '2px', color: '#059669' }} />
                    <div>
                      <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '2px' }}>Message Sent Successfully!</strong>
                      <span>{statusMessage.text}</span>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <AlertCircle size={20} style={{ flexShrink: 0, marginTop: '2px', color: '#DC2626' }} />
                      <div>
                        <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '2px' }}>Submission Alert</strong>
                        <span>{statusMessage.text}</span>
                      </div>
                    </div>
                    {statusMessage.fallbackSubject && (
                      <a
                        href={`mailto:${profileData.email}?subject=${encodeURIComponent(statusMessage.fallbackSubject)}&body=${encodeURIComponent(statusMessage.fallbackBody)}`}
                        className="btn btn-secondary btn-sm"
                        style={{ alignSelf: 'flex-start', marginTop: '4px' }}
                      >
                        <Mail size={14} /> Send via Email Application
                      </a>
                    )}
                  </div>
                )}
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate>
              {/* Name Field */}
              <div className="form-group">
                <label htmlFor="contact-name">Name *</label>
                <input
                  type="text"
                  id="contact-name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="form-input"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && <span className="form-error-msg">{errors.name}</span>}
              </div>

              {/* Email Field */}
              <div className="form-group">
                <label htmlFor="contact-email">Email Address *</label>
                <input
                  type="email"
                  id="contact-email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="form-input"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && <span className="form-error-msg">{errors.email}</span>}
              </div>

              {/* Subject Field */}
              <div className="form-group">
                <label htmlFor="contact-subject">Subject *</label>
                <input
                  type="text"
                  id="contact-subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Enter message subject"
                  className="form-input"
                  aria-invalid={errors.subject ? "true" : "false"}
                />
                {errors.subject && <span className="form-error-msg">{errors.subject}</span>}
              </div>

              {/* Message Field */}
              <div className="form-group">
                <label htmlFor="contact-message">Message *</label>
                <textarea
                  id="contact-message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  className="form-textarea"
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && <span className="form-error-msg">{errors.message}</span>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn btn-primary"
                style={{ width: '100%', marginTop: '8px' }}
              >
                {isSubmitting ? (
                  'Sending Message...'
                ) : (
                  <>
                    Send Message <Send size={16} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

