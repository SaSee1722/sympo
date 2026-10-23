import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Mail, Phone, ExternalLink, Award, CheckCircle, Ticket, Sparkles } from 'lucide-react';
import AnimatedHero from '../components/AnimatedHero';
import EventCard from '../components/EventCard';
import ScrollReveal from '../components/ScrollReveal';
import { promptxData, designxpoData, cluexData } from '../data/events';
import { symposiumMeta } from '../data/symposium';

export default function Home() {
  return (
    <main className="home-main">
      {/* 1. Concise Hero & Compact Event Information Row */}
      <AnimatedHero />

      {/* 2. Three Featured CSE Event Cards */}
      <section className="section" id="events">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading-centered">
              <span className="editorial-badge">
                <Sparkles size={13} />
                CSE DEPARTMENT EVENTS
              </span>
              <h2 className="section-title">
                Featured Symposium Events
              </h2>
              <p className="section-subtitle">
                Two technical competitions and one non-technical campus challenge organized for undergraduate and postgraduate students.
              </p>
            </div>
          </ScrollReveal>

          {/* Responsive 3-Column Grid for Events */}
          <div className="event-cards-grid">
            <ScrollReveal delay={0.05}>
              <EventCard event={promptxData} />
            </ScrollReveal>

            <ScrollReveal delay={0.12}>
              <EventCard event={designxpoData} />
            </ScrollReveal>

            <ScrollReveal delay={0.19}>
              <EventCard event={cluexData} />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Short About Section */}
      <section className="section section-alt" id="about">
        <div className="container">
          <div className="about-grid">
            <ScrollReveal>
              <div className="about-text-column">
                <span className="editorial-badge">
                  ABOUT THE SYMPOSIUM
                </span>
                <h2 className="section-title" style={{ textAlign: 'left', marginTop: '0.75rem' }}>
                  {symposiumMeta.name}
                </h2>
                <p className="about-lead">
                  {symposiumMeta.tagline} hosted by the {symposiumMeta.department} at {symposiumMeta.institution}.
                </p>
                <p className="about-paragraph">
                  INTERO FEST ’26 brings together creative problem solvers, generative AI builders, and UI/UX designers under one roof. Designed as an intensive one-day national arena, students collaborate, showcase technical prowess, and compete across three specialized disciplines.
                </p>

                <div className="about-links-row">
                  <a
                    href={symposiumMeta.website}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    <span>Visit College Website</span>
                    <ExternalLink size={14} />
                  </a>
                  <a href="#register" className="btn btn-primary btn-sm">
                    <span>Register — {symposiumMeta.fee}</span>
                  </a>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.15}>
              <div className="about-perks-box">
                <h3 className="perks-box-title">Symposium Highlights</h3>
                <ul className="perks-list">
                  {symposiumMeta.perks.map((perk, idx) => (
                    <li key={idx} className="perks-item">
                      <div className="perk-check-icon">
                        <CheckCircle size={16} />
                      </div>
                      <span>{perk}</span>
                    </li>
                  ))}
                  <li className="perks-item">
                    <div className="perk-check-icon">
                      <CheckCircle size={16} />
                    </div>
                    <span>Individual &amp; Team entries across all three CSE events</span>
                  </li>
                  <li className="perks-item">
                    <div className="perk-check-icon">
                      <CheckCircle size={16} />
                    </div>
                    <span>One unified fee of {symposiumMeta.fee} covering symposium admission</span>
                  </li>
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 4. Venue and Official Contact Information */}
      <section className="section" id="venue">
        <div className="container">
          <ScrollReveal>
            <div className="section-heading-centered">
              <span className="editorial-badge">
                <MapPin size={13} />
                VENUE &amp; CONTACT
              </span>
              <h2 className="section-title">
                Campus Location &amp; Inquiries
              </h2>
              <p className="section-subtitle">
                Official symposium venue and communication channels at Sree Sakthi Engineering College.
              </p>
            </div>
          </ScrollReveal>

          <div className="venue-contact-grid">
            {/* Venue Card */}
            <ScrollReveal delay={0.08}>
              <div className="venue-card">
                <div className="venue-card-header">
                  <div className="venue-icon-wrapper">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="venue-title">{symposiumMeta.institution}</h3>
                    <span className="venue-dept">{symposiumMeta.department}</span>
                  </div>
                </div>

                <p className="venue-address">
                  {symposiumMeta.venue.address}
                </p>

                <div className="venue-actions">
                  <a
                    href={symposiumMeta.venue.mapUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                    style={{ width: '100%', justifyContent: 'center' }}
                  >
                    <MapPin size={16} />
                    <span>Open in Google Maps</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </ScrollReveal>

            {/* Official Contact Card */}
            <ScrollReveal delay={0.16}>
              <div className="contact-card">
                <h3 className="contact-card-title">Official Inquiries</h3>
                <p className="contact-card-desc">
                  Have questions regarding event rules, team registrations, or travel? Contact the organizing committee.
                </p>

                <div className="contact-info-list">
                  <div className="contact-item">
                    <Mail size={16} className="contact-icon" />
                    <div>
                      <span className="contact-label">Symposium Desk</span>
                      <a href={`mailto:${symposiumMeta.contact.symposiumEmail}`} className="contact-link">
                        {symposiumMeta.contact.symposiumEmail}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Mail size={16} className="contact-icon" />
                    <div>
                      <span className="contact-label">College Office</span>
                      <a href={`mailto:${symposiumMeta.contact.institutionEmail}`} className="contact-link">
                        {symposiumMeta.contact.institutionEmail}
                      </a>
                    </div>
                  </div>

                  <div className="contact-item">
                    <Phone size={16} className="contact-icon" />
                    <div>
                      <span className="contact-label">Helpline</span>
                      <a href={`tel:${symposiumMeta.contact.phone}`} className="contact-link">
                        {symposiumMeta.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Final Registration CTA */}
      <section className="section section-cta" id="register">
        <div className="container">
          <ScrollReveal>
            <div className="cta-banner">
              <div className="cta-banner-badge">
                <Ticket size={14} />
                <span>OFFICIAL REGISTRATION • {symposiumMeta.date}</span>
              </div>

              <h2 className="cta-banner-title">
                Ready to Compete at {symposiumMeta.name}?
              </h2>

              <p className="cta-banner-text">
                One fee of {symposiumMeta.fee} provides access to participate in CSE events, receive official attendee recognition, and compete for the attractive prize pool.
              </p>

              <div className="cta-buttons-group">
                <Link to="/register/promptx" className="btn btn-primary btn-cta">
                  <span>Register Prompt-X2.0</span>
                  <ArrowRight size={16} />
                </Link>

                <Link to="/register/designxpo" className="btn btn-primary btn-cta">
                  <span>Register Design-Xpo</span>
                  <ArrowRight size={16} />
                </Link>

                <Link to="/register/cluex" className="btn btn-primary btn-cta">
                  <span>Register ClueX</span>
                  <ArrowRight size={16} />
                </Link>
              </div>

              <div className="cta-fee-reminder">
                Advertised Fee: <strong>{symposiumMeta.fee}</strong> • Participation: <strong>{symposiumMeta.participation}</strong>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </main>
  );
}
