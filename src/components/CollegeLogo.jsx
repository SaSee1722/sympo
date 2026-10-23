import React from 'react';

export default function CollegeLogo({ size = 38, className = '' }) {
  return (
    <div
      className={`college-logo-badge ${className}`}
      style={{
        width: size,
        height: size,
        minWidth: size,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '10px',
        background: 'var(--brand-primary-gradient)',
        boxShadow: 'var(--brand-primary-glow)',
        position: 'relative',
        overflow: 'hidden'
      }}
      aria-label="Sree Sakthi Engineering College Emblem"
    >
      <svg
        width={size * 0.72}
        height={size * 0.72}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Shield background subtle contour */}
        <path
          d="M20 3L6 8V18C6 27.5 12 35 20 38C28 35 34 27.5 34 18V8L20 3Z"
          fill="#FFFFFF"
          fillOpacity="0.15"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        {/* Core emblem monogram: SSEC stylized */}
        <path
          d="M13 15C13 13.5 14.5 12 17 12H23C25.5 12 27 13.5 27 15C27 17.5 24 18.5 20 19C16 19.5 13 20.5 13 23C13 25.5 15 27 18 27H23C25.5 27 27 25.5 27 24"
          stroke="var(--brand-accent)"
          strokeWidth="2.4"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Academic star atop */}
        <circle cx="20" cy="8" r="1.5" fill="var(--brand-accent)" />
      </svg>
    </div>
  );
}
