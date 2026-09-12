import React from 'react';
import { LinkedinIcon, GithubIcon, LeetCodeIcon, GfgIcon } from './BrandIcons';

export default function SocialLinks({ links, className = "" }) {
  if (!links) return null;

  return (
    <div className={`social-icons-bar ${className}`}>
      {links.linkedin && (
        <a
          href={links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="LinkedIn Profile"
          title="LinkedIn"
        >
          <LinkedinIcon size={18} />
        </a>
      )}

      {links.github && (
        <a
          href={links.github}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="GitHub Profile"
          title="GitHub"
        >
          <GithubIcon size={18} />
        </a>
      )}

      {links.leetcode && (
        <a
          href={links.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="LeetCode Profile"
          title="LeetCode"
        >
          <LeetCodeIcon size={18} />
        </a>
      )}

      {links.geeksforgeeks && (
        <a
          href={links.geeksforgeeks}
          target="_blank"
          rel="noopener noreferrer"
          className="social-icon-btn"
          aria-label="GeeksforGeeks Profile"
          title="GeeksforGeeks"
        >
          <GfgIcon size={18} />
        </a>
      )}
    </div>
  );
}
