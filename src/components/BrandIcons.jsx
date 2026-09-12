import React from 'react';

export function LinkedinIcon({ size = 22, src = "/Portfolio/assets/icons/linkedin.svg" }) {
  return (
    <img
      src={src}
      alt="LinkedIn Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}

export function GithubIcon({ size = 22, src = "/Portfolio/assets/icons/github.svg" }) {
  return (
    <img
      src={src}
      alt="GitHub Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}

export function LeetCodeIcon({ size = 22, src = "/Portfolio/assets/icons/leetcode.svg" }) {
  return (
    <img
      src={src}
      alt="LeetCode Logo"
      width={size}
      height={size}
      style={{ objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}

export function GfgIcon({ size = 22, src = "/Portfolio/assets/icons/gfg.svg" }) {
  return (
    <img
      src={src}
      alt="GeeksforGeeks Logo"
      width={Math.round(size * 1.6)}
      height={size}
      style={{ objectFit: 'contain', display: 'inline-block', verticalAlign: 'middle' }}
    />
  );
}
