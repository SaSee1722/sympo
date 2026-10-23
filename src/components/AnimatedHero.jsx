import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Calendar, MapPin, Ticket, Users, Award } from 'lucide-react';
import { symposiumMeta } from '../data/symposium';

export default function AnimatedHero() {
  const shouldReduceMotion = useReducedMotion();

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

  return (
    <section className="hero-section" id="hero">
      <div className="container">
        <motion.div
          className="hero-concise-content"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow: College & Department */}
          <motion.div variants={itemVariants} className="hero-eyebrow">
            <span className="editorial-badge">
              <span className="badge-dot" />
              {symposiumMeta.institution} • {symposiumMeta.department}
            </span>
          </motion.div>

          {/* Symposium Name */}
          <motion.h1 variants={itemVariants} className="hero-main-title">
            INTERO FEST <span className="title-year">’26</span>
          </motion.h1>

          {/* One-Line Tagline */}
          <motion.p variants={itemVariants} className="hero-tagline">
            {symposiumMeta.tagline}
          </motion.p>

          {/* Quick Date & Venue Meta */}
          <motion.div variants={itemVariants} className="hero-meta-strip">
            <div className="meta-pill">
              <Calendar size={15} className="meta-icon" />
              <span>{symposiumMeta.date}</span>
            </div>
            <span className="meta-divider">•</span>
            <div className="meta-pill">
              <MapPin size={15} className="meta-icon" />
              <span>{symposiumMeta.venue.address}</span>
            </div>
          </motion.div>

          {/* One Primary CTA */}
          <motion.div variants={itemVariants} className="hero-cta-wrapper">
            <a href="#register" className="btn btn-primary btn-hero">
              <span>Register for Symposium — {symposiumMeta.fee}</span>
              <ArrowRight size={18} />
            </a>
          </motion.div>
        </motion.div>

        {/* Compact Event-Information Row */}
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
              <span className="info-card-label">Date</span>
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
              <span className="info-card-label">Venue</span>
              <strong className="info-card-value">Sree Sakthi Engg. College</strong>
              <span className="info-card-desc">{symposiumMeta.venue.address}</span>
            </div>
          </div>

          {/* 3. Advertised Registration Fee */}
          <div className="info-strip-card highlight-card">
            <div className="info-card-icon highlight-icon">
              <Ticket size={20} />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">Registration Fee</span>
              <strong className="info-card-value highlight-text">{symposiumMeta.fee}</strong>
              <span className="info-card-desc">All-Access Symposium Entry</span>
            </div>
          </div>

          {/* 4. Participation Format & Perks */}
          <div className="info-strip-card">
            <div className="info-card-icon">
              <Users size={20} />
            </div>
            <div className="info-card-content">
              <span className="info-card-label">Participation</span>
              <strong className="info-card-value">{symposiumMeta.participation}</strong>
              <span className="info-card-desc">Prize Pool &amp; Certificates</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
