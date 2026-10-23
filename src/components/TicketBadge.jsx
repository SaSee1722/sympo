import React from 'react';
import { Sparkles, Layout, Puzzle, CheckCircle2, QrCode, Download, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TicketBadge({ registration, onReset }) {
  const isPx = registration.eventId === 'promptx';
  const isDx = registration.eventId === 'designxpo';
  const isCx = registration.eventId === 'cluex';

  const badgeClass = isPx ? 'px' : isDx ? 'dx' : 'cx';
  const badgeIcon = isPx ? <Sparkles size={12} /> : isDx ? <Layout size={12} /> : <Puzzle size={12} />;

  const venueInfo = isPx
    ? { time: '09:30 AM – 01:00 PM', hall: 'CSE Seminar Hall' }
    : isDx
    ? { time: '09:30 AM – 01:30 PM', hall: 'CSE Seminar Hall & Lab' }
    : { time: '01:45 PM – 04:30 PM', hall: 'College Campus Grounds' };

  const downloadTicketData = () => {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(registration, null, 2));
    const downloadAnchor = document.createElement('a');
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `INTERO_FEST_${registration.ticketId}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  return (
    <div style={{ maxWidth: '640px', margin: '0 auto' }}>
      {/* Success Notification Banner */}
      <div
        style={{
          background: 'var(--success-bg)',
          border: '1px solid rgba(16, 185, 129, 0.3)',
          borderRadius: 'var(--radius-lg)',
          padding: '1.25rem 1.5rem',
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          marginBottom: '2rem'
        }}
      >
        <CheckCircle2 size={24} color="#10B981" style={{ flexShrink: 0 }} />
        <div>
          <h4 style={{ color: '#065F46', fontSize: '1rem', fontWeight: 700, margin: 0 }}>
            Registration Confirmed for {registration.eventName}!
          </h4>
          <p style={{ color: '#047857', fontSize: '0.86rem', margin: '3px 0 0 0' }}>
            Your pass has been generated. Please save this ticket ID and present it at the Sree Sakthi Engineering College check-in desk.
          </p>
        </div>
      </div>

      {/* Official Physical-Style Attendee Pass Card */}
      <div className={`attendee-ticket ${badgeClass}`}>
        {/* Ticket Top Bar */}
        <div className="ticket-header">
          <div>
            <span className={`editorial-badge ${badgeClass}`} style={{ marginBottom: '6px' }}>
              {badgeIcon}
              OFFICIAL DELEGATE PASS
            </span>
            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, margin: '4px 0' }}>
              {registration.eventName}
            </h3>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
              INTERO FEST '26 • SREE SAKTHI ENGINEERING COLLEGE, COIMBATORE
            </span>
          </div>

          <div style={{ textAlign: 'right' }}>
            <div className="ticket-pass-id">
              {registration.ticketId}
            </div>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', color: 'var(--text-muted)', display: 'block', marginTop: '4px' }}>
              CONFIRMED • ₹250
            </span>
          </div>
        </div>

        {/* Delegate Information Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem', marginBottom: '1.75rem' }}>
          <div>
            <span className="hero-meta-label">Primary Delegate</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 700, fontSize: '1.05rem', color: 'var(--text-primary)' }}>
              {registration.fullName}
            </div>
            <div style={{ fontSize: '0.84rem', color: 'var(--text-secondary)' }}>
              {registration.email}
            </div>
          </div>

          <div>
            <span className="hero-meta-label">Institution</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--text-primary)' }}>
              {registration.institution}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {registration.department || 'Undergraduate'}
            </div>
          </div>

          <div>
            <span className="hero-meta-label">Participation Type</span>
            <div style={{ fontFamily: 'var(--font-heading)', fontWeight: 600, fontSize: '0.95rem', color: 'var(--brand-red)' }}>
              {registration.participationType === 'team' ? `Team (${(registration.teamMembers?.length || 0) + 1} Members)` : 'Individual Soloist'}
            </div>
            {registration.teamName && (
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Team: <strong>{registration.teamName}</strong>
              </div>
            )}
          </div>

          <div>
            <span className="hero-meta-label">Event Schedule &amp; Venue</span>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-primary)', fontWeight: 600 }}>
              Oct 31, 2026 • {venueInfo.time}
            </div>
            <div style={{ fontSize: '0.82rem', color: 'var(--text-muted)' }}>
              {venueInfo.hall}
            </div>
          </div>
        </div>

        {/* Team Members List if applicable */}
        {registration.participationType === 'team' && registration.teamMembers?.length > 0 && (
          <div style={{ padding: '0.85rem 1rem', background: 'var(--bg-subtle)', borderRadius: '8px', marginBottom: '1.5rem', fontSize: '0.84rem' }}>
            <span style={{ fontWeight: 600, display: 'block', marginBottom: '4px' }}>Additional Team Members:</span>
            {registration.teamMembers.map((m, i) => (
              <div key={i} style={{ color: 'var(--text-secondary)' }}>
                • {m.name} ({m.email})
              </div>
            ))}
          </div>
        )}

        {/* Barcode & Security Hologram simulation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '1.25rem', borderTop: '1px solid var(--border-light)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <div style={{ width: '40px', height: '40px', background: 'var(--bg-dark)', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '6px', color: '#fff' }}>
              <QrCode size={26} />
            </div>
            <div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.68rem', letterSpacing: '0.1em' }}>
                SEC-HASH-{registration.ticketId.slice(-6)}
              </div>
              <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)' }}>
                Present at check-in desk • SSEC Karamadai
              </div>
            </div>
          </div>

          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--text-muted)', textAlign: 'right' }}>
            TIMESTAMP<br />
            {new Date(registration.submittedAt).toLocaleDateString()}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', marginTop: '2rem', flexWrap: 'wrap' }}>
        <button onClick={downloadTicketData} className="btn btn-secondary" style={{ fontSize: '0.88rem' }}>
          <Download size={15} />
          <span>Download Ticket JSON</span>
        </button>

        <button onClick={onReset} className="btn btn-primary" style={{ fontSize: '0.88rem' }}>
          <span>Register Another Delegate</span>
        </button>

        <Link to="/" className="btn btn-secondary" style={{ fontSize: '0.88rem' }}>
          <ArrowLeft size={15} />
          <span>Return Home</span>
        </Link>
      </div>
    </div>
  );
}
