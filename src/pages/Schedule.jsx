import React from 'react';
import { Calendar, Download, Info } from 'lucide-react';
import ScheduleTimeline from '../components/ScheduleTimeline';
import ScrollReveal from '../components/ScrollReveal';

export default function Schedule() {
  const downloadICS = () => {
    const icsContent = `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//INTERO FEST 2026//Sree Sakthi Engineering College//EN
CALSCALE:GREGORIAN
METHOD:PUBLISH
BEGIN:VEVENT
SUMMARY:INTERO FEST '26 - National Level Technical Symposium
DESCRIPTION:Flagship CSE Department Symposium featuring Prompt-X 2.0, Design-Xpo, and ClueX.
LOCATION:Sree Sakthi Engineering College, Karamadai, Coimbatore - 641104
DTSTART:20261031T033000Z
DTEND:20261031T113000Z
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', 'INTERO_FEST_26_Schedule.ics');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="schedule-page" style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)' }}>
      {/* Header */}
      <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '3rem' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge">
                <Calendar size={13} />
                OFFICIAL SYMPOSIUM ITINERARY
              </span>
              <h1 style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.2rem)', margin: '1rem 0' }}>
                Event Schedule
              </h1>
              <p style={{ maxWidth: '640px', margin: '0 auto' }}>
                Saturday, October 31, 2026 • Synchronized across three high-impact tracks at Sree Sakthi Engineering College, Karamadai, Coimbatore. All timings in Indian Standard Time (IST).
              </p>

              <div style={{ marginTop: '1.75rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                <button onClick={downloadICS} className="btn btn-secondary">
                  <Download size={15} />
                  <span>Download .ICS Calendar Event</span>
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Main Filterable Timeline */}
      <section className="section" style={{ paddingTop: 0, paddingBottom: '6rem' }}>
        <div className="container">
          <ScrollReveal>
            <ScheduleTimeline initialFilter="all" />
          </ScrollReveal>

          {/* Logistics Note */}
          <div
            style={{
              maxWidth: '820px',
              margin: '3rem auto 0',
              padding: '1.25rem 1.5rem',
              borderRadius: 'var(--radius-md)',
              background: 'var(--bg-subtle)',
              border: '1px solid var(--border-medium)',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              fontSize: '0.88rem',
              color: 'var(--text-secondary)'
            }}
          >
            <Info size={18} color="var(--brand-red)" style={{ flexShrink: 0 }} />
            <span>
              <strong>Registration &amp; Check-In:</strong> Registered delegates are requested to report at the CSE Department Desk by 08:30 AM with their college ID and attendee ticket ID for verification.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
