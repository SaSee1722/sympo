import React, { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Ticket, Sparkles, Layout, Puzzle, Trophy } from 'lucide-react';
import CseDeptLogo from './CseDeptLogo';
import HeroCanvas from './HeroCanvas';
import CountdownTimer from './CountdownTimer';
import { symposiumMeta } from '../data/symposium';

export default function AnimatedHero() {
  const shouldReduceMotion = useReducedMotion();
  const [canvasMode, setCanvasMode] = useState('all');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.08,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  const events = [
    {
      id: 'promptx',
      title: 'Prompt-X 2.0',
      tagline: 'Generative AI & Neural Synthesis',
      icon: Sparkles,
      colorClass: 'px',
      link: '/events/promptx',
      badge: 'Technical',
      accentLabel: 'AI Latent Mesh Active',
    },
    {
      id: 'designxpo',
      title: 'Design-Xpo',
      tagline: 'UI/UX & Product Design Matrix',
      icon: Layout,
      colorClass: 'dx',
      link: '/events/designxpo',
      badge: 'Technical',
      accentLabel: 'Vector Wireframe Active',
    },
    {
      id: 'cluex',
      title: 'ClueX',
      tagline: 'Campus Cipher & Treasure Hunt',
      icon: Puzzle,
      colorClass: 'cx',
      link: '/events/cluex',
      badge: 'Non-Technical',
      accentLabel: 'Sonar Radar Active',
    },
  ];

  return (
    <section className="hero-section" id="hero">
      {/* 1. Interactive Event-Themed Particle & Canvas Background */}
      <HeroCanvas activeEvent={canvasMode} />

      {/* Ambient Radial Glowing Orbs */}
      <div className={`hero-ambient-glow glow-${canvasMode}`} aria-hidden="true" />

      <div className="container hero-container-relative">
        <motion.div
          className="hero-main-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow: Department of CSE with Phoenix Crest */}
          <motion.div variants={itemVariants} className="hero-eyebrow">
            <div className="hero-dept-badge">
              <CseDeptLogo size={24} />
              <span className="hero-dept-text">Department of Computer Science &amp; Engineering</span>
            </div>
          </motion.div>

          {/* Symposium Name / Big Title Lockup */}
          <motion.h1 variants={itemVariants} className="hero-main-title">
            <span className="title-intero">INTERO FEST</span>{' '}
            <span className="title-year">’26</span>
          </motion.h1>

          {/* Tagline */}
          <motion.p variants={itemVariants} className="hero-tagline">
            One-Day National Level Technical Symposium
          </motion.p>

          <motion.p variants={itemVariants} className="hero-subtext">
            Three premier arenas spanning generative artificial intelligence, product design, and strategic campus cipher hunting. One unified pass unlocks full symposium access.
          </motion.p>

          {/* Live Real-time Countdown to Event */}
          <motion.div variants={itemVariants} className="hero-countdown-container">
            <CountdownTimer targetDate="2026-10-31T09:00:00+05:30" />
          </motion.div>

          {/* Primary Action Buttons */}
          <motion.div variants={itemVariants} className="hero-cta-wrapper">
            <a href="#register" className="btn btn-primary btn-hero">
              <Ticket size={18} />
              <span>Register for Symposium — {symposiumMeta.fee}</span>
              <ArrowRight size={18} />
            </a>

            <a href="#events" className="btn btn-secondary btn-hero-secondary">
              <Sparkles size={16} />
              <span>Explore 3 Arenas</span>
            </a>
          </motion.div>

          {/* Interactive 3-Event Quick Track Showcase with Dynamic Background Switching */}
          <motion.div variants={itemVariants} className="hero-events-showcase">
            <div className="hero-showcase-header">
              <span className="hero-showcase-label">INTERACTIVE ARENA MODES</span>
              
              {/* Event Background Mode Switcher */}
              <div className="hero-mode-pills" role="tablist" aria-label="Event Backdrop Modes">
                <button
                  type="button"
                  className={`hero-mode-pill ${canvasMode === 'all' ? 'active' : ''}`}
                  onClick={() => setCanvasMode('all')}
                  title="Show all three event backdrops blended"
                >
                  All Arenas
                </button>
                <button
                  type="button"
                  className={`hero-mode-pill px ${canvasMode === 'promptx' ? 'active' : ''}`}
                  onClick={() => setCanvasMode('promptx')}
                  title="Switch background to AI Neural Synaptic Mesh"
                >
                  <Sparkles size={12} />
                  Prompt-X (AI)
                </button>
                <button
                  type="button"
                  className={`hero-mode-pill dx ${canvasMode === 'designxpo' ? 'active' : ''}`}
                  onClick={() => setCanvasMode('designxpo')}
                  title="Switch background to Vector Wireframe Blueprint"
                >
                  <Layout size={12} />
                  Design-Xpo (UX)
                </button>
                <button
                  type="button"
                  className={`hero-mode-pill cx ${canvasMode === 'cluex' ? 'active' : ''}`}
                  onClick={() => setCanvasMode('cluex')}
                  title="Switch background to Sonar Radar & Cryptic Map"
                >
                  <Puzzle size={12} />
                  ClueX (Hunt)
                </button>
              </div>
            </div>

            <div className="hero-events-grid">
              {events.map((ev) => {
                const Icon = ev.icon;
                const isHovered = canvasMode === ev.id;
                return (
                  <a
                    key={ev.id}
                    href={ev.link}
                    className={`hero-event-chip ${ev.colorClass} ${isHovered ? 'hovered-chip' : ''}`}
                    onMouseEnter={() => setCanvasMode(ev.id)}
                    onMouseLeave={() => setCanvasMode('all')}
                  >
                    <div className="chip-icon-box">
                      <Icon size={18} />
                    </div>
                    <div className="chip-content">
                      <div className="chip-header">
                        <strong className="chip-title">{ev.title}</strong>
                        <span className="chip-badge">{ev.badge}</span>
                      </div>
                      <span className="chip-tagline">{ev.tagline}</span>
                    </div>
                    <ArrowRight size={15} className="chip-arrow" />
                  </a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* 4-Item Compact Event-Information Row */}
        <motion.div
          className="event-info-strip"
          initial={{ opacity: 0, y: shouldReduceMotion ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* 1. Date */}
          <div className="info-strip-card">
            <div className="info-card-icon">
              <Calendar size={20} />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">Event Date</span>
              <strong className="info-card-value">{symposiumMeta.date}</strong>
              <span className="info-card-desc">One-Day National Symposium</span>
            </div>
          </div>

          {/* 2. Venue */}
          <div className="info-strip-card">
            <div className="info-card-icon">
              <MapPin size={20} />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">Campus Venue</span>
              <strong className="info-card-value">Sree Sakthi Engg. College</strong>
              <span className="info-card-desc">Karamadai, Coimbatore</span>
            </div>
          </div>

          {/* 3. Advertised Registration Fee */}
          <div className="info-strip-card highlight-card">
            <div className="info-card-icon highlight-icon">
              <Ticket size={20} />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">All-Access Fee</span>
              <strong className="info-card-value highlight-text">{symposiumMeta.fee}</strong>
              <span className="info-card-desc">Includes All 3 Events &amp; Kit</span>
            </div>
          </div>

          {/* 4. Participation Format & Perks */}
          <div className="info-strip-card">
            <div className="info-card-icon">
              <Trophy size={20} />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">Prize Pool &amp; Perks</span>
              <strong className="info-card-value">Certificates &amp; Awards</strong>
              <span className="info-card-desc">For All Registered Attendees</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
