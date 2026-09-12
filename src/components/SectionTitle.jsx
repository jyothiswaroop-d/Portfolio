import React from 'react';

export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="section-title-wrapper">
      {subtitle && <span className="section-subtitle">{subtitle}</span>}
      <h2 className="section-title">{title}</h2>
      <div className="title-underline"></div>
    </div>
  );
}
