import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, Users, Award, Ticket, Sparkles, Layout, Puzzle } from 'lucide-react';
import PromptXVisual from './PromptXVisual';
import DesignXpoVisual from './DesignXpoVisual';
import ClueXVisual from './ClueXVisual';

export default function EventCard({ event }) {
  const isPx = event.id === 'promptx';
  const isDx = event.id === 'designxpo';
  const isCx = event.id === 'cluex';

  const badgeIcon = isPx ? (
    <Sparkles size={13} />
  ) : isDx ? (
    <Layout size={13} />
  ) : (
    <Puzzle size={13} />
  );

  const eventClassName = isPx ? 'px' : isDx ? 'dx' : 'cx';

  return (
    <div className={`event-card-container ${eventClassName}`}>
      {/* Visual Canvas Area with Original Animated Artwork */}
      <div className={`card-visual-header ${eventClassName}`}>
        {isPx && <PromptXVisual interactive={false} />}
        {isDx && <DesignXpoVisual interactive={false} />}
        {isCx && <ClueXVisual />}
      </div>

      {/* Card Content Area */}
      <div className="card-main-body">
        {/* Category & Badge */}
        <div className="card-badge-row">
          <span className={`editorial-badge ${eventClassName}`}>
            {badgeIcon}
            {event.type}
          </span>
          <span className="card-sub-badge">
            {event.badge}
          </span>
        </div>

        {/* Title & Tagline */}
        <h3 className="card-event-title">
          {event.name}
        </h3>

        <p className="card-event-tagline">
          “{event.tagline}”
        </p>

        <p className="card-event-desc">
          {event.shortDescription}
        </p>

        {/* Compact Key Event Facts */}
        <div className="card-facts-grid">
          <div className="card-fact-item">
            <Users size={14} className="fact-icon" />
            <span>{event.participation}</span>
          </div>

          <div className="card-fact-item">
            <Ticket size={14} className="fact-icon" />
            <span>{event.fee} Entry Fee</span>
          </div>

          <div className="card-fact-item full-width">
            <Award size={14} className="fact-icon" />
            <span>{event.perks}</span>
          </div>
        </div>

        {/* Card Action Buttons */}
        <div className="card-action-footer">
          <Link
            to={event.registerRoute}
            className="btn btn-primary btn-card"
            aria-label={`Register for ${event.name}`}
          >
            <span>Register for {event.name}</span>
            <ArrowRight size={15} />
          </Link>

          <Link
            to={event.route}
            className="btn btn-secondary btn-card-details"
            aria-label={`Learn more about ${event.name}`}
          >
            <span>Details</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
