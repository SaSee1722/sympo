import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowUp } from 'lucide-react';
import CollegeLogo from './CollegeLogo';
import { symposiumMeta } from '../data/symposium';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="minimal-footer">
      <div className="container">
        <div className="footer-top-row">
          {/* Brand info */}
          <div className="footer-brand-col">
            <div className="footer-brand-lockup">
              <CollegeLogo size={32} />
              <div>
                <strong className="footer-brand-name">{symposiumMeta.name}</strong>
                <span className="footer-brand-inst">{symposiumMeta.institution}</span>
              </div>
            </div>
            <p className="footer-tagline">
              {symposiumMeta.tagline} • {symposiumMeta.department}
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-links-col">
            <a href="/#events" className="footer-link">Events</a>
            <a href="/#about" className="footer-link">About</a>
            <a href="/#venue" className="footer-link">Venue & Contact</a>
            <a href="/#register" className="footer-link">Register ({symposiumMeta.fee})</a>
            <a
              href={symposiumMeta.website}
              target="_blank"
              rel="noreferrer"
              className="footer-link footer-ext-link"
            >
              <span>sreesakthi.edu.in</span>
              <ExternalLink size={12} />
            </a>
          </div>

          {/* Back to top */}
          <div className="footer-back-to-top">
            <button onClick={scrollToTop} className="btn-back-to-top" aria-label="Back to top">
              <ArrowUp size={16} />
              <span>Back to Top</span>
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom-row">
          <p className="footer-copyright">
            © 2026 {symposiumMeta.institution}. Department of Computer Science &amp; Engineering.
          </p>
          <p className="footer-address-note">
            {symposiumMeta.venue.address}
          </p>
        </div>
      </div>
    </footer>
  );
}
