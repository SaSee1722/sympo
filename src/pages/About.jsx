import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Mail, Phone, ExternalLink, Award, CheckCircle, Ticket, ArrowLeft, ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import { symposiumMeta } from '../data/symposium';

export default function About() {
  return (
    <div className="about-page" style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)', paddingBottom: '5rem' }}>
      <div className="container">
        {/* Back Link */}
        <div style={{ marginBottom: '1.5rem' }}>
          <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
            <ArrowLeft size={15} />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Section Heading */}
        <ScrollReveal>
          <div className="section-heading-centered" style={{ marginBottom: '3rem' }}>
            <span className="editorial-badge">
              ABOUT THE SYMPOSIUM
            </span>
            <h1 className="section-title" style={{ marginTop: '0.75rem' }}>
              {symposiumMeta.name}
            </h1>
            <p className="section-subtitle">
              {symposiumMeta.tagline} organized by the {symposiumMeta.department} at {symposiumMeta.institution}.
            </p>
          </div>
        </ScrollReveal>

        {/* Concise About Grid */}
        <div className="about-grid" style={{ marginBottom: '4rem' }}>
          <ScrollReveal>
            <div className="about-text-column">
              <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '1rem', color: 'var(--text-primary)' }}>
                Host Institution &amp; Department
              </h2>
              <p className="about-paragraph">
                {symposiumMeta.institution}, located along Ooty Main Road in Karamadai, Coimbatore, is dedicated to technical education, research, and holistic student development.
              </p>
              <p className="about-paragraph">
                The {symposiumMeta.department} organizes INTERO FEST ’26 as a premier technical platform for undergraduate and postgraduate students from all engineering colleges across the nation.
              </p>
              <p className="about-paragraph">
                Featuring two technical competitions (Prompt-X2.0 and Design-Xpo) and one non-technical campus challenge (ClueX), the symposium celebrates innovation, design precision, and tactical problem-solving.
              </p>

              <div className="about-links-row" style={{ marginTop: '1.5rem' }}>
                <a
                  href={symposiumMeta.website}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  <span>Visit College Website</span>
                  <ExternalLink size={14} />
                </a>
                <a href="#venue" className="btn btn-secondary">
                  <span>View Venue Info</span>
                </a>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.12}>
            <div className="about-perks-box">
              <h3 className="perks-box-title">Key Information</h3>
              <ul className="perks-list">
                <li className="perks-item">
                  <div className="perk-check-icon">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <strong>Date &amp; Schedule:</strong> {symposiumMeta.date} (One-Day National Symposium)
                  </div>
                </li>
                <li className="perks-item">
                  <div className="perk-check-icon">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <strong>Advertised Fee:</strong> {symposiumMeta.fee} per participant / team
                  </div>
                </li>
                <li className="perks-item">
                  <div className="perk-check-icon">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <strong>Participation:</strong> {symposiumMeta.participation} across all disciplines
                  </div>
                </li>
                <li className="perks-item">
                  <div className="perk-check-icon">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <strong>Recognition:</strong> Attractive Prize Pool and Certificates for all participants
                  </div>
                </li>
                <li className="perks-item">
                  <div className="perk-check-icon">
                    <CheckCircle size={16} />
                  </div>
                  <div>
                    <strong>Events:</strong> Prompt-X2.0, Design-Xpo, and ClueX
                  </div>
                </li>
              </ul>
            </div>
          </ScrollReveal>
        </div>

        {/* Venue & Contact Section */}
        <ScrollReveal>
          <div className="venue-card" id="venue" style={{ maxWidth: '840px', margin: '0 auto 3rem' }}>
            <div className="venue-card-header">
              <div className="venue-icon-wrapper">
                <MapPin size={22} />
              </div>
              <div>
                <h3 className="venue-title">Venue &amp; Campus Location</h3>
                <span className="venue-dept">{symposiumMeta.venue.address}</span>
              </div>
            </div>

            <p className="venue-address" style={{ marginTop: '0.75rem', marginBottom: '1.25rem' }}>
              The event takes place at {symposiumMeta.institution}, Karamadai, Coimbatore. Easily reachable by public and private transit along the Ooty Main Road corridor.
            </p>

            <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href={symposiumMeta.venue.mapUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                <MapPin size={16} />
                <span>Open in Google Maps</span>
                <ExternalLink size={14} />
              </a>

              <a
                href={`mailto:${symposiumMeta.contact.symposiumEmail}`}
                className="btn btn-secondary"
              >
                <Mail size={16} />
                <span>Email Coordinators</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* CTA */}
        <ScrollReveal delay={0.1}>
          <div style={{ textAlign: 'center', marginTop: '2rem' }}>
            <Link to="/register/promptx" className="btn btn-primary btn-cta">
              <span>Register for INTERO FEST ’26 — {symposiumMeta.fee}</span>
              <ArrowRight size={16} />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
