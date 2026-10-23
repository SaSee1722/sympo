import React, { useState } from 'react';
import { Sparkles, Terminal, Layers, RefreshCw } from 'lucide-react';

const samplePrompts = [
  {
    text: "hyper-dimensional crimson bloom :: volumetric rim light, architectural depth --v 6.0",
    theme: "Crimson Bloom",
    seed: "8941029",
    colors: ["#8B1422", "#D51C2B", "#F5C928", "#FFF5F5"]
  },
  {
    text: "neural synaptic network, amber luminescence, speculative geometry, 8k render",
    theme: "Neural Mesh",
    seed: "4392015",
    colors: ["#A30F1B", "#8B1422", "#E8B800", "#FAF9F6"]
  },
  {
    text: "floating origami prism folding through quantum spacetime, minimal editorial framing",
    theme: "Geometric Space",
    seed: "7128492",
    colors: ["#6B0D18", "#A30F1B", "#F5C928", "#FDFCFB"]
  }
];

export default function PromptXVisual({ interactive = false }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const [isSynthesizing, setIsSynthesizing] = useState(false);
  const current = samplePrompts[activeIdx];

  const handleNextPrompt = (e) => {
    if (e) e.stopPropagation();
    setIsSynthesizing(true);
    setTimeout(() => {
      setActiveIdx((prev) => (prev + 1) % samplePrompts.length);
      setIsSynthesizing(false);
    }, 400);
  };

  return (
    <div className="px-art-container" style={{ width: '100%', height: '100%', minHeight: '280px', position: 'relative' }}>
      {/* Background Soft Glow */}
      <div
        className="anim-pulse-glow"
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: `radial-gradient(circle, ${current.colors[0]}33 0%, ${current.colors[2]}15 60%, transparent 80%)`,
          filter: 'blur(30px)',
          transition: 'background 0.8s ease'
        }}
      />

      {/* Floating Prompt Pill */}
      <div
        className="glass-panel"
        style={{
          position: 'absolute',
          top: '16px',
          left: '16px',
          right: '16px',
          padding: '8px 12px',
          borderRadius: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '8px',
          zIndex: 5,
          border: '1px solid rgba(139, 20, 34, 0.15)',
          background: 'rgba(255, 255, 255, 0.85)'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px', overflow: 'hidden' }}>
          <Terminal size={14} color="var(--px-color)" style={{ flexShrink: 0 }} />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--text-secondary)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          >
            {current.text}
          </span>
        </div>

        {interactive && (
          <button
            onClick={handleNextPrompt}
            title="Cycle Sample Prompt"
            style={{
              background: 'none',
              border: 'none',
              padding: '2px',
              display: 'flex',
              cursor: 'pointer',
              color: 'var(--px-color)'
            }}
          >
            <RefreshCw size={14} className={isSynthesizing ? 'anim-spin-slow' : ''} />
          </button>
        )}
      </div>

      {/* Main Generative Canvas Graphic */}
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingTop: '2.5rem'
        }}
      >
        <svg
          viewBox="0 0 320 220"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: '85%', maxHeight: '200px' }}
        >
          <defs>
            <linearGradient id="pxGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="var(--px-color)" />
              <stop offset="100%" stopColor="var(--brand-accent)" />
            </linearGradient>
            <linearGradient id="meshGrad" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--px-color)" stopOpacity="0.25" />
              <stop offset="100%" stopColor="var(--brand-accent)" stopOpacity="0.45" />
            </linearGradient>
          </defs>

          {/* Generative Concentric Rings */}
          <circle cx="160" cy="110" r="85" stroke="var(--border-light)" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="160" cy="110" r="60" stroke="var(--px-color)" strokeOpacity="0.3" strokeWidth="1.2" />
          <circle cx="160" cy="110" r="35" stroke="var(--brand-accent)" strokeOpacity="0.5" strokeWidth="1.5" strokeDasharray="2 3" />

          {/* Organic AI Synthesis Flow Polygon */}
          <path
            d="M 160 30 Q 230 55 245 110 T 160 190 Q 80 160 85 110 T 160 30 Z"
            fill="url(#meshGrad)"
            stroke="url(#pxGrad)"
            strokeWidth="2.5"
          />

          {/* Inner Seed Aperture */}
          <circle cx="160" cy="110" r="16" fill="var(--px-color)" />
          <circle cx="160" cy="110" r="6" fill="var(--brand-accent)" />

          {/* Coordinate Marks */}
          <line x1="160" y1="15" x2="160" y2="25" stroke="var(--px-color)" strokeWidth="1.5" />
          <line x1="160" y1="195" x2="160" y2="205" stroke="var(--px-color)" strokeWidth="1.5" />
          <line x1="65" y1="110" x2="75" y2="110" stroke="var(--px-color)" strokeWidth="1.5" />
          <line x1="245" y1="110" x2="255" y2="110" stroke="var(--px-color)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Bottom Parameter Overlay */}
      <div
        style={{
          position: 'absolute',
          bottom: '12px',
          left: '16px',
          right: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.68rem',
          color: 'var(--text-muted)'
        }}
      >
        <span>AI SYNTHESIS • {current.theme}</span>
        <span style={{ color: 'var(--px-color)', fontWeight: 600 }}>SEED #{current.seed}</span>
      </div>
    </div>
  );
}
