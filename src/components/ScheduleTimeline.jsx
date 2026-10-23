import React, { useState } from 'react';
import { Clock, MapPin, User, Sparkles, Layout, Puzzle, Calendar, Award } from 'lucide-react';
import { scheduleData } from '../data/schedule';

export default function ScheduleTimeline({ initialFilter = 'all' }) {
  const [activeFilter, setActiveFilter] = useState(initialFilter);

  const filteredItems = scheduleData.filter((item) => {
    if (activeFilter === 'all') return true;
    if (activeFilter === 'promptx') return item.track === 'promptx';
    if (activeFilter === 'designxpo') return item.track === 'designxpo';
    if (activeFilter === 'cluex') return item.track === 'cluex';
    if (activeFilter === 'general') return item.track === 'general';
    return true;
  });

  return (
    <div>
      {/* Filter Buttons */}
      <div className="schedule-filter-bar" role="tablist" aria-label="Schedule Filter">
        <button
          className={`schedule-filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
          onClick={() => setActiveFilter('all')}
          role="tab"
          aria-selected={activeFilter === 'all'}
        >
          All Sessions ({scheduleData.length})
        </button>
        <button
          className={`schedule-filter-btn ${activeFilter === 'promptx' ? 'active' : ''}`}
          onClick={() => setActiveFilter('promptx')}
          role="tab"
          aria-selected={activeFilter === 'promptx'}
        >
          <Sparkles size={14} style={{ display: 'inline', marginRight: '6px' }} />
          Prompt-X 2.0 Track
        </button>
        <button
          className={`schedule-filter-btn ${activeFilter === 'designxpo' ? 'active' : ''}`}
          onClick={() => setActiveFilter('designxpo')}
          role="tab"
          aria-selected={activeFilter === 'designxpo'}
        >
          <Layout size={14} style={{ display: 'inline', marginRight: '6px' }} />
          Design-Xpo Track
        </button>
        <button
          className={`schedule-filter-btn ${activeFilter === 'cluex' ? 'active' : ''}`}
          onClick={() => setActiveFilter('cluex')}
          role="tab"
          aria-selected={activeFilter === 'cluex'}
        >
          <Puzzle size={14} style={{ display: 'inline', marginRight: '6px' }} />
          ClueX Track
        </button>
        <button
          className={`schedule-filter-btn ${activeFilter === 'general' ? 'active' : ''}`}
          onClick={() => setActiveFilter('general')}
          role="tab"
          aria-selected={activeFilter === 'general'}
        >
          <Award size={14} style={{ display: 'inline', marginRight: '6px' }} />
          Ceremonies
        </button>
      </div>

      {/* Timeline List */}
      <div className="timeline-container">
        <div className="timeline-line" />

        {filteredItems.map((item, idx) => {
          const isPx = item.track === 'promptx';
          const isDx = item.track === 'designxpo';
          const isCx = item.track === 'cluex';

          const trackClass = isPx ? 'px' : isDx ? 'dx' : isCx ? 'cx' : '';

          return (
            <div key={item.id} className="timeline-item">
              {/* Timeline Node Icon */}
              <div className={`timeline-node ${trackClass}`}>
                {isPx ? (
                  <Sparkles size={16} />
                ) : isDx ? (
                  <Layout size={16} />
                ) : isCx ? (
                  <Puzzle size={16} />
                ) : (
                  <span>0{idx + 1}</span>
                )}
              </div>

              {/* Timeline Card */}
              <div className="timeline-content-card">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                  <div className="timeline-time-badge">
                    <Clock size={13} />
                    <span>{item.time}</span>
                  </div>

                  <span className={`editorial-badge ${trackClass}`} style={{ fontSize: '0.68rem', padding: '0.2rem 0.6rem' }}>
                    {item.eventBadge}
                  </span>
                </div>

                <h4 className="timeline-title">
                  {item.title}
                </h4>

                <p style={{ fontSize: '0.94rem', color: 'var(--text-secondary)', marginBottom: '0.75rem' }}>
                  {item.description}
                </p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', paddingTop: '0.5rem', borderTop: '1px solid var(--border-light)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <MapPin size={13} color="var(--brand-red)" />
                    <span>{item.venue}</span>
                  </div>

                  {item.speaker && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <User size={13} color="var(--brand-red)" />
                      <span>{item.speaker}</span>
                    </div>
                  )}

                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={13} />
                    <span>Oct 31, 2026</span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
