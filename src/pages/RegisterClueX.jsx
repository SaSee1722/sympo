import React from 'react';
import { Link } from 'react-router-dom';
import { Puzzle, ArrowLeft, ShieldCheck } from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';
import ScrollReveal from '../components/ScrollReveal';

export default function RegisterClueX() {
  return (
    <div className="register-cluex-page" style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link to="/events/cluex" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <ArrowLeft size={15} />
            <span>Back to ClueX Showcase</span>
          </Link>
        </div>

        {/* Header Summary Strip */}
        <ScrollReveal>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto 2rem',
              background: 'var(--cx-gold-light)',
              border: '1px solid rgba(245, 201, 40, 0.4)',
              borderRadius: 'var(--radius-lg)',
              padding: '1.25rem 1.5rem',
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--cx-gold)', color: '#171717', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Puzzle size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '1rem', color: '#171717', display: 'block' }}>ClueX Registration</strong>
                <span style={{ fontSize: '0.82rem', color: '#555555' }}>Saturday, October 31, 2026 • 01:45 PM IST</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: '#171717', background: '#FFFFFF', padding: '6px 12px', borderRadius: '9999px', border: '1px solid rgba(245, 201, 40, 0.5)' }}>
              <ShieldCheck size={14} color="var(--brand-red)" />
              <span>₹250 Entry Fee • Teams of 2–4</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Dedicated Registration Form */}
        <ScrollReveal delay={0.1}>
          <RegistrationForm eventType="cluex" />
        </ScrollReveal>
      </div>
    </div>
  );
}
