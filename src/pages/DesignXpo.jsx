import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, ArrowRight, Award, CheckCircle2, Calendar, Users, MapPin } from 'lucide-react';
import DesignXpoVisual from '../components/DesignXpoVisual';
import FAQAccordion from '../components/FAQAccordion';
import ScrollReveal from '../components/ScrollReveal';
import { designxpoData } from '../data/events';

export default function DesignXpo() {
  const challenge = designxpoData.challengeBrief;

  return (
    <div className="designxpo-page" style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)' }}>
      {/* 1. Hero with Event Title & Animated UI Mockup */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="editorial-badge dx">
                  <Layout size={13} />
                  PRODUCT DESIGN &amp; UI/UX
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  EDITION {designxpoData.edition}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1rem' }}>
                DESIGN-XPO <span style={{ color: 'var(--brand-red)' }}>1.0</span>
              </h1>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--brand-red)', marginBottom: '1.25rem' }}>
                “{designxpoData.tagline}”
              </div>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                {designxpoData.shortDescription} {designxpoData.fullDescription}
              </p>

              {/* Event Metadata */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '2rem' }}>
                <div>
                  <span className="hero-meta-label">Date &amp; Time</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <Calendar size={14} color="var(--brand-red)" />
                    {designxpoData.date} ({designxpoData.time})
                  </div>
                </div>

                <div>
                  <span className="hero-meta-label">Venue</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <MapPin size={14} color="var(--brand-red)" />
                    {designxpoData.venue}
                  </div>
                </div>

                <div>
                  <span className="hero-meta-label">Team Format</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <Users size={14} color="var(--brand-red)" />
                    {designxpoData.teamSize}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to={designxpoData.registerRoute} className="btn btn-designxpo" style={{ padding: '0.9rem 1.85rem' }}>
                  <span>Register for DesignXpo 1.0</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="#challenge" className="btn btn-secondary">
                  <span>View Design Challenge Brief</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Original Animated UI Mockup Canvas */}
            <ScrollReveal delay={0.2}>
              <div
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(255, 92, 0, 0.12) 0%, #FFFFFF 80%)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(255, 92, 0, 0.25)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-hover)',
                  position: 'relative'
                }}
              >
                <DesignXpoVisual interactive={true} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Design Challenge Presentation (Editorial Layout) */}
      <section className="section" id="challenge" style={{ background: '#FFFDF9', borderTop: '1px solid rgba(255, 92, 0, 0.15)', borderBottom: '1px solid rgba(255, 92, 0, 0.15)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge dx">
                COMPETITION SPECIFICATION
              </span>
              <h2>The Design Challenge Brief</h2>
              <p>An editorial breakdown of the problem statement, user cohorts, constraints, and required deliverables.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3rem', maxWidth: '1100px', margin: '0 auto' }}>
            <ScrollReveal>
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-medium)', height: '100%' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  CORE PROBLEM STATEMENT
                </div>
                <h3 style={{ fontSize: '1.45rem', marginBottom: '1.25rem', lineHeight: 1.4 }}>
                  {challenge.problemStatement}
                </h3>

                <div style={{ height: '1px', background: 'var(--border-light)', margin: '1.5rem 0' }} />

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  TARGET USERS &amp; COHORTS
                </div>
                <p style={{ fontSize: '0.98rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                  {challenge.targetUsers}
                </p>

                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  MANDATORY DESIGN CONSTRAINTS
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {challenge.constraints.map((c, i) => (
                    <div key={i} style={{ display: 'flex', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                      <span style={{ color: 'var(--brand-red)', fontWeight: 700 }}>•</span>
                      <span>{c}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>

            {/* Deliverables Checklist Card */}
            <ScrollReveal delay={0.2}>
              <div style={{ background: '#FFFFFF', padding: '2.5rem', borderRadius: 'var(--radius-xl)', border: '1px solid var(--border-medium)', height: '100%' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 700, marginBottom: '0.5rem' }}>
                  EXPECTED SUBMISSION DELIVERABLES
                </div>
                <h3 style={{ fontSize: '1.35rem', marginBottom: '1.25rem' }}>
                  What Your Team Must Produce
                </h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {challenge.deliverables.map((item, idx) => (
                    <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                      <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: 'var(--brand-red-light)', color: 'var(--brand-red)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                        <CheckCircle2 size={14} />
                      </div>
                      <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                        {item}
                      </span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '2rem', padding: '1rem', background: 'var(--bg-subtle)', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--text-muted)', display: 'block', marginBottom: '4px' }}>
                    TOOLING PERMITTED
                  </span>
                  <div style={{ fontSize: '0.86rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    Figma, Framer, Penpot, or Adobe XD (Public Viewer Link Required)
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. Competition Stages */}
      <section className="section" id="stages">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge dx">SPRINT TIMELINE</span>
              <h2>Day 2 Sprint Stages</h2>
              <p>From initial research and wireframing to high-fidelity live pitch defense.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', maxWidth: '1100px', margin: '0 auto' }}>
            {designxpoData.stages.map((stage, idx) => (
              <ScrollReveal key={stage.step} delay={idx * 0.1}>
                <div
                  style={{
                    background: '#FFFFFF',
                    border: '1px solid var(--border-medium)',
                    borderRadius: 'var(--radius-lg)',
                    padding: '2rem',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column'
                  }}
                  className="card-hover-lift"
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '1.4rem', fontWeight: 800, color: 'var(--brand-red)' }}>
                      {stage.step}
                    </span>
                    <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                      {stage.time}
                    </span>
                  </div>

                  <h4 style={{ fontSize: '1.2rem', marginBottom: '0.75rem' }}>
                    {stage.title}
                  </h4>

                  <p style={{ fontSize: '0.92rem', color: 'var(--text-secondary)' }}>
                    {stage.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Judging Rubric & Rules */}
      <section className="section" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'flex-start' }}>
            <ScrollReveal>
              <span className="editorial-badge dx" style={{ marginBottom: '1rem' }}>
                CRAFT EVALUATION
              </span>
              <h2>Judging Criteria</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                Evaluated by design system architects, UX researchers, and engineering leads against five foundational pillars:
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {designxpoData.judgingCriteria.map((crit, idx) => (
                  <div key={idx} style={{ background: 'var(--bg-subtle)', padding: '1.1rem 1.25rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <strong style={{ fontSize: '0.95rem' }}>{crit.category}</strong>
                      <span style={{ fontFamily: 'var(--font-mono)', fontWeight: 700, color: 'var(--brand-red)', fontSize: '0.88rem' }}>
                        {crit.weight}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.84rem', color: 'var(--text-secondary)', margin: 0 }}>
                      {crit.description}
                    </p>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Rules Card */}
            <ScrollReveal delay={0.2}>
              <div
                style={{
                  background: 'var(--bg-card)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                  border: '1px solid var(--border-medium)',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                  <Award size={20} color="var(--brand-red)" />
                  <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Participation Code &amp; Rules</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {designxpoData.rules.map((rule, idx) => (
                    <div key={idx} style={{ display: 'flex', gap: '10px' }}>
                      <CheckCircle2 size={18} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                      <span style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                        {rule}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 5. Prize Showcase */}
      <section className="section" style={{ background: 'var(--bg-primary)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge dx">
                AWARDS &amp; GRANTS
              </span>
              <h2>Prizes &amp; Distinctions</h2>
              <p>Top design teams earn physical trophies, software subscriptions, and direct recruiter visibility.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {designxpoData.prizes.map((prize, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    border: idx === 0 ? '2px solid var(--brand-red)' : '1px solid var(--border-medium)',
                    padding: '2.5rem 2rem',
                    boxShadow: idx === 0 ? 'var(--dx-glow)' : 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                  className="card-hover-lift"
                >
                  <span className="editorial-badge dx" style={{ marginBottom: '1rem' }}>
                    {prize.badge}
                  </span>

                  <h3 style={{ fontSize: '1.6rem', marginBottom: '0.25rem' }}>
                    {prize.place}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--brand-red)', fontWeight: 600, marginBottom: '1.5rem' }}>
                    {prize.title}
                  </div>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                    {prize.perks.map((perk, pIdx) => (
                      <div key={pIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--brand-red)' }} />
                        <span>{perk}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ Accordion for DesignXpo */}
      <section className="section" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge dx">DESIGN-XPO FAQS</span>
              <h2>Product Design Queries</h2>
              <p>Everything you need to know about prototyping requirements, team limits, and mentor access.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FAQAccordion filterCategory="designxpo" />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Dedicated Registration CTA */}
      <section className="section" style={{ background: 'var(--dx-gradient)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <span className="editorial-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>
              DESIGN-XPO 1.0 REGISTRATION
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              Design the Products of Tomorrow
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '580px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
              Teams of 1 to 3 members welcome. Assemble your designers, researchers, and frontend minds.
            </p>

            <Link to={designxpoData.registerRoute} className="btn btn-primary" style={{ background: '#FFFFFF', color: 'var(--brand-red-dark)', padding: '0.95rem 2rem', fontSize: '1rem' }}>
              <span>Proceed to DesignXpo Registration</span>
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
