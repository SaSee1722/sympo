import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Compass } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

export default function NotFound() {
  return (
    <div className="not-found-page" style={{ paddingTop: 'calc(var(--navbar-height) + 4rem)', paddingBottom: '6rem', minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="container" style={{ textAlign: 'center' }}>
        <ScrollReveal>
          <span className="editorial-badge" style={{ marginBottom: '1.25rem' }}>
            <Compass size={13} />
            ERROR 404 // COORDINATES UNMAPPED
          </span>

          <h1 style={{ fontSize: 'clamp(3rem, 8vw, 6rem)', letterSpacing: '-0.04em', marginBottom: '1rem' }}>
            PAGE NOT FOUND
          </h1>

          <p style={{ maxWidth: '520px', margin: '0 auto 2.5rem', fontSize: '1.15rem' }}>
            The symposium route you requested does not exist in our spatial index. Return to the main festival portal to explore the events.
          </p>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-primary">
              <Home size={16} />
              <span>Return to Symposium Home</span>
            </Link>
            <Link to="/events/promptx" className="btn btn-secondary">
              <span>Explore PromptX 2.0</span>
            </Link>
            <Link to="/events/designxpo" className="btn btn-secondary">
              <span>Explore DesignXpo 1.0</span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
