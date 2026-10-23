import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import CollegeLogo from './CollegeLogo';
import { symposiumMeta } from '../data/symposium';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => setMobileMenuOpen(false);

  const scrollToSection = (e, sectionId) => {
    if (location.pathname === '/') {
      e.preventDefault();
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
      closeMenu();
    } else {
      closeMenu();
    }
  };

  return (
    <header className={`navbar-wrapper ${isScrolled ? 'navbar-scrolled' : ''}`}>
      <div className="container navbar-container">
        {/* College Logo & INTERO FEST '26 Branding */}
        <Link to="/" className="navbar-brand" onClick={closeMenu} aria-label="INTERO FEST '26 Home">
          <CollegeLogo size={36} />
          <div className="brand-meta">
            <span className="brand-title">{symposiumMeta.shortName}</span>
            <span className="brand-subtitle">{symposiumMeta.institution}</span>
          </div>
        </Link>

        {/* Desktop Navigation: Events, About, Venue, Register */}
        <nav className="nav-links-desktop" aria-label="Main Navigation">
          <a
            href="/#events"
            onClick={(e) => scrollToSection(e, 'events')}
            className="nav-link"
          >
            Events
          </a>

          <a
            href="/#about"
            onClick={(e) => scrollToSection(e, 'about')}
            className="nav-link"
          >
            About
          </a>

          <a
            href="/#venue"
            onClick={(e) => scrollToSection(e, 'venue')}
            className="nav-link"
          >
            Venue
          </a>

          <a
            href="/#register"
            onClick={(e) => scrollToSection(e, 'register')}
            className="btn btn-primary btn-sm"
          >
            <span>Register — {symposiumMeta.fee}</span>
          </a>
        </nav>

        {/* Mobile Hamburger Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMobileMenuOpen((prev) => !prev)}
          aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-nav-drawer" role="dialog" aria-modal="true">
          <div className="mobile-nav-links">
            <a
              href="/#events"
              onClick={(e) => scrollToSection(e, 'events')}
              className="mobile-nav-link"
            >
              Events
            </a>
            <a
              href="/#about"
              onClick={(e) => scrollToSection(e, 'about')}
              className="mobile-nav-link"
            >
              About
            </a>
            <a
              href="/#venue"
              onClick={(e) => scrollToSection(e, 'venue')}
              className="mobile-nav-link"
            >
              Venue & Contact
            </a>

            <a
              href="/#register"
              onClick={(e) => scrollToSection(e, 'register')}
              className="btn btn-primary"
              style={{ justifyContent: 'center', marginTop: '0.75rem' }}
            >
              <span>Register — {symposiumMeta.fee}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
