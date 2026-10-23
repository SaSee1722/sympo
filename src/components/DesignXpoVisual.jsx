import React, { useState } from 'react';
import { MousePointer, Layout, ToggleLeft, ToggleRight } from 'lucide-react';

export default function DesignXpoVisual({ interactive = false }) {
  const [isHifi, setIsHifi] = useState(true);

  const toggleMode = (e) => {
    if (e) e.stopPropagation();
    setIsHifi((prev) => !prev);
  };

  return (
    <div className="dx-art-container" style={{ width: '100%', height: '100%', minHeight: '280px', position: 'relative' }}>
      {/* Background Soft Glow */}
      <div
        className="anim-pulse-glow"
        style={{
          position: 'absolute',
          width: '260px',
          height: '260px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, var(--dx-light) 0%, transparent 75%)',
          filter: 'blur(30px)',
          zIndex: 0
        }}
      />

      {/* Mode Switcher Pill */}
      {interactive && (
        <button
          onClick={toggleMode}
          title="Toggle between Wireframe and Polished UI"
          style={{
            position: 'absolute',
            top: '16px',
            right: '18px',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            background: isHifi ? 'var(--dx-light)' : 'var(--bg-subtle)',
            color: isHifi ? 'var(--dx-color)' : 'var(--text-secondary)',
            padding: '5px 12px',
            borderRadius: '9999px',
            border: isHifi ? '1px solid var(--dx-color)' : '1px solid var(--border-medium)',
            boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
            cursor: 'pointer',
            transition: 'all 0.2s ease'
          }}
        >
          {isHifi ? <ToggleRight size={16} color="var(--dx-color)" /> : <ToggleLeft size={16} />}
          <span>{isHifi ? 'Hi-Fi UI' : 'Wireframe'}</span>
        </button>
      )}

      {/* Main Floating Design Canvas Mockup */}
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '2.5rem 1.5rem 2rem'
        }}
      >
        <div
          style={{
            width: '260px',
            borderRadius: '12px',
            background: 'var(--bg-surface)',
            border: '1px solid var(--border-light)',
            boxShadow: '0 10px 24px -6px rgba(0, 0, 0, 0.08)',
            overflow: 'hidden',
            position: 'relative',
            zIndex: 2
          }}
        >
          {/* Mock Window Header */}
          <div
            style={{
              padding: '8px 12px',
              borderBottom: '1px solid var(--border-light)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-subtle)'
            }}
          >
            <div style={{ display: 'flex', gap: '5px' }}>
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--dx-color)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--brand-accent)' }} />
              <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--border-light)' }} />
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.62rem', color: 'var(--text-muted)' }}>
              design-canvas.fig
            </span>
          </div>

          {/* Canvas Content */}
          <div style={{ padding: '14px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {/* Header placeholder */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <div
                style={{
                  width: '42%',
                  height: '10px',
                  borderRadius: '4px',
                  background: isHifi ? 'var(--dx-color)' : 'var(--border-medium)'
                }}
              />
              <div
                style={{
                  width: '22%',
                  height: '8px',
                  borderRadius: '4px',
                  background: isHifi ? 'var(--brand-accent)' : 'var(--border-light)'
                }}
              />
            </div>

            {/* Feature hero card inside mock */}
            <div
              style={{
                borderRadius: '8px',
                padding: '10px',
                background: isHifi ? 'var(--dx-light)' : 'var(--bg-subtle)',
                border: isHifi ? '1px solid var(--dx-color)' : '1px dashed var(--border-medium)'
              }}
            >
              <div
                style={{
                  width: '70%',
                  height: '8px',
                  borderRadius: '3px',
                  background: isHifi ? 'var(--text-primary)' : 'var(--text-muted)',
                  marginBottom: '6px'
                }}
              />
              <div
                style={{
                  width: '90%',
                  height: '6px',
                  borderRadius: '3px',
                  background: 'var(--border-light)'
                }}
              />
            </div>

            {/* Two column card layout */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
              <div
                style={{
                  height: '36px',
                  borderRadius: '6px',
                  background: isHifi ? 'var(--bg-subtle)' : 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: '6px'
                }}
              >
                <div style={{ width: '50%', height: '6px', borderRadius: '3px', background: isHifi ? 'var(--dx-color)' : 'var(--border-light)', marginBottom: '4px' }} />
                <div style={{ width: '80%', height: '4px', borderRadius: '2px', background: 'var(--border-light)' }} />
              </div>
              <div
                style={{
                  height: '36px',
                  borderRadius: '6px',
                  background: isHifi ? 'var(--bg-subtle)' : 'var(--bg-surface)',
                  border: '1px solid var(--border-light)',
                  padding: '6px'
                }}
              >
                <div style={{ width: '50%', height: '6px', borderRadius: '3px', background: isHifi ? 'var(--brand-accent)' : 'var(--border-light)', marginBottom: '4px' }} />
                <div style={{ width: '80%', height: '4px', borderRadius: '2px', background: 'var(--border-light)' }} />
              </div>
            </div>
          </div>

          {/* Designer Cursor Overlay */}
          <div
            style={{
              position: 'absolute',
              bottom: '22px',
              right: '28px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              zIndex: 8
            }}
          >
            <MousePointer size={16} fill="var(--dx-color)" color="#FFFFFF" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                background: 'var(--dx-color)',
                color: '#FFFFFF',
                padding: '2px 6px',
                borderRadius: '4px',
                boxShadow: '0 2px 4px rgba(0,0,0,0.15)'
              }}
            >
              UX Lead
            </span>
          </div>
        </div>
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
        <span>DIGITAL PRODUCT • UI/UX SPRINT</span>
        <span style={{ color: 'var(--dx-color)', fontWeight: 600 }}>100% VECTOR</span>
      </div>
    </div>
  );
}
