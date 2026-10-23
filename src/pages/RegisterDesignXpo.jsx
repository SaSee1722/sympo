import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, ArrowLeft, ShieldCheck } from 'lucide-react';
import RegistrationForm from '../components/RegistrationForm';
import ScrollReveal from '../components/ScrollReveal';

export default function RegisterDesignXpo() {
  return (
    <div className="register-designxpo-page" style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)', paddingBottom: '6rem' }}>
      <div className="container">
        {/* Navigation Breadcrumb */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link to="/events/designxpo" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <ArrowLeft size={15} />
            <span>Back to Design-Xpo Showcase</span>
          </Link>
        </div>

        {/* Header Summary Strip */}
        <ScrollReveal>
          <div
            style={{
              maxWidth: '720px',
              margin: '0 auto 2rem',
              background: 'var(--brand-red-light)',
              border: '1px solid rgba(163, 15, 27, 0.2)',
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
              <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'var(--brand-red)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Layout size={18} />
              </div>
              <div>
                <strong style={{ fontSize: '1rem', color: 'var(--text-primary)', display: 'block' }}>Design-Xpo Registration</strong>
                <span style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>Saturday, October 31, 2026 • 09:30 AM IST</span>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.82rem', color: 'var(--text-primary)', background: '#FFFFFF', padding: '6px 12px', borderRadius: '9999px', border: '1px solid rgba(163, 15, 27, 0.2)' }}>
              <ShieldCheck size={14} color="var(--brand-red)" />
              <span>₹250 Entry Fee • Teams of 1–3</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Dedicated Registration Form */}
        <ScrollReveal delay={0.1}>
          <RegistrationForm eventType="designxpo" />
        </ScrollReveal>
      </div>
    </div>
  );
}
