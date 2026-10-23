import React from 'react';
import cseDark from '../assets/cse-dept-logo-dark.png';
import cseLight from '../assets/cse-dept-logo-light.png';

export default function CseDeptLogo({ size = 20, className = '' }) {
  return (
    <span className={`cse-dept-logo-wrap ${className}`}>
      <img
        src={cseDark}
        alt="Department of Computer Science & Engineering Emblem"
        className="cse-logo-img cse-logo-dark"
        style={{
          height: size,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
      <img
        src={cseLight}
        alt="Department of Computer Science & Engineering Emblem"
        className="cse-logo-img cse-logo-light"
        style={{
          height: size,
          width: 'auto',
          objectFit: 'contain',
        }}
      />
    </span>
  );
}
