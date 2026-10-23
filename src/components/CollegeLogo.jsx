import React from 'react';
import ssecLogoFull from '../assets/ssec-logo.png';
import ssecEmblem from '../assets/ssec-emblem.png';

export default function CollegeLogo({ size = 46, className = '', variant = 'full' }) {
  if (variant === 'emblem') {
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
          borderRadius: '50%',
          flexShrink: 0,
        }}
        aria-label="Sree Sakthi Engineering College Emblem"
      >
        <img
          src={ssecEmblem}
          alt="Sree Sakthi Engineering College Official Emblem"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            display: 'block',
          }}
        />
      </div>
    );
  }

  // Default: full logo image shown fully without any cropping
  return (
    <div className={`navbar-college-logo-box ${className}`}>
      <img
        src={ssecLogoFull}
        alt="Sree Sakthi Engineering College Official Logo"
        className="navbar-college-logo"
        style={{
          height: size,
          width: 'auto',
          maxWidth: '100%',
          objectFit: 'contain',
          display: 'block',
        }}
      />
    </div>
  );
}
