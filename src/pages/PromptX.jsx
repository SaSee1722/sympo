import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Terminal, CheckCircle2, Award, Calendar, Users, MapPin } from 'lucide-react';
import PromptXVisual from '../components/PromptXVisual';
import FAQAccordion from '../components/FAQAccordion';
import ScrollReveal from '../components/ScrollReveal';
import { promptxData } from '../data/events';

export default function PromptX() {
  const [activePromptIndex, setActivePromptIndex] = useState(0);

  const promptPlaygroundPresets = [
    {
      title: "Speculative Biomimicry",
      prompt: "biomorphic kinetic architecture growing from coral filaments, hyper-realistic ambient occlusion, Hasselblad 80mm f/2.8, volumetric morning haze --ar 16:9 --style raw",
      parameters: "CFG: 7.5 | Model: v6.0 | Seed: 99420"
    },
    {
      title: "Cybernetic Renaissance",
      prompt: "chiaroscuro portrait of an ancient astronomer holding a celestial sphere with glowing quantum circuits, oil on canvas texture, masterwork lighting --stylize 250",
      parameters: "CFG: 8.0 | Model: v6.0 | Seed: 11248"
    },
    {
      title: "Sub-Zero Solarpunk",
      prompt: "floating arctic geodesic research dome powered by vertical aurora borealis light collectors, clean editorial architectural photography --v 6.0",
      parameters: "CFG: 7.0 | Model: SDXL | Seed: 83719"
    }
  ];

  return (
    <div className="promptx-page" style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)' }}>
      {/* 1. Hero with Event Title & Original Animated AI Artwork */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="editorial-badge px">
                  <Sparkles size={13} />
                  TECHNICAL EVENT — CSE
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  EDITION {promptxData.edition}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1rem' }}>
                PROMPT-X <span style={{ color: 'var(--brand-red)' }}>2.0</span>
              </h1>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--brand-red)', marginBottom: '1.25rem' }}>
                “{promptxData.tagline}”
              </div>

              <p style={{ fontSize: '1.15rem', color: 'var(--text-secondary)', lineHeight: 1.6, marginBottom: '2rem' }}>
                {promptxData.shortDescription} {promptxData.fullDescription}
              </p>

              {/* Event Metadata Strip */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '2rem' }}>
                <div>
                  <span className="hero-meta-label">Date &amp; Time</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <Calendar size={14} color="var(--brand-red)" />
                    {promptxData.date} ({promptxData.time})
                  </div>
                </div>

                <div>
                  <span className="hero-meta-label">Venue</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <MapPin size={14} color="var(--brand-red)" />
                    {promptxData.venue}
                  </div>
                </div>

                <div>
                  <span className="hero-meta-label">Format</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <Users size={14} color="var(--brand-red)" />
                    {promptxData.teamSize}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to={promptxData.registerRoute} className="btn btn-promptx" style={{ padding: '0.9rem 1.85rem' }}>
                  <span>Register for PromptX 2.0</span>
                  <ArrowRight size={16} />
                </Link>
                <a href="#rules" className="btn btn-secondary">
                  <span>View Rules &amp; Rubrics</span>
                </a>
              </div>
            </ScrollReveal>

            {/* Original Interactive AI Artwork Composition */}
            <ScrollReveal delay={0.2}>
              <div
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(59, 80, 223, 0.12) 0%, #FFFFFF 80%)',
                  borderRadius: 'var(--radius-xl)',
                  border: '1px solid rgba(59, 80, 223, 0.25)',
                  padding: '2rem',
                  boxShadow: 'var(--shadow-hover)',
                  position: 'relative'
                }}
              >
                <PromptXVisual interactive={true} />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Interactive Prompt Simulator / Playground */}
      <section className="section" style={{ background: '#F8F9FE', borderTop: '1px solid rgba(59, 80, 223, 0.12)', borderBottom: '1px solid rgba(59, 80, 223, 0.12)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge px">
                <Terminal size={12} />
                PROMPT ARCHITECTURE LAB
              </span>
              <h2>Experience the Art of Prompt Synthesis</h2>
              <p>Prompt engineering is not random guessing. It is the precise orchestration of semantics, composition weights, and latent conditioning.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <div
              style={{
                maxWidth: '860px',
                margin: '0 auto',
                background: '#FFFFFF',
                borderRadius: 'var(--radius-lg)',
                border: '1px solid rgba(59, 80, 223, 0.2)',
                padding: '2rem',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' }}>
                {promptPlaygroundPresets.map((preset, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActivePromptIndex(idx)}
                    style={{
                      fontFamily: 'var(--font-heading)',
                      fontWeight: 600,
                      fontSize: '0.86rem',
                      padding: '0.45rem 1rem',
                      borderRadius: '9999px',
                      background: activePromptIndex === idx ? 'var(--brand-red)' : 'var(--bg-subtle)',
                      color: activePromptIndex === idx ? '#FFFFFF' : 'var(--text-secondary)',
                      border: '1px solid var(--border-medium)',
                      cursor: 'pointer'
                    }}
                  >
                    {preset.title}
                  </button>
                ))}
              </div>

              {/* Code-like Terminal Prompt Box */}
              <div
                style={{
                  background: 'var(--bg-dark)',
                  color: '#FAF9F5',
                  padding: '1.25rem 1.5rem',
                  borderRadius: '12px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.9rem',
                  lineHeight: 1.6,
                  position: 'relative'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem', opacity: 0.6, fontSize: '0.72rem' }}>
                  <span>PROMPT SCRIPT // ACTIVE BUFFER</span>
                  <span>{promptPlaygroundPresets[activePromptIndex].parameters}</span>
                </div>
                <div style={{ color: '#93C5FD' }}>
                  &gt; /imagine prompt:{" "}
                  <span style={{ color: '#F1F5F9' }}>
                    {promptPlaygroundPresets[activePromptIndex].prompt}
                  </span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. Competition Process (Timeline 01 - 05) */}
      <section className="section" id="process">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge px">
                COMPETITION SPRINT
              </span>
              <h2>How PromptX Works</h2>
              <p>Five chronological stages from initial theme reveal to live stage pitch.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.75rem', maxWidth: '1100px', margin: '0 auto' }}>
            {promptxData.stages.map((stage, idx) => (
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

      {/* 4. Rules & Participation Requirements */}
      <section className="section" id="rules" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3.5rem', alignItems: 'flex-start' }}>
            <ScrollReveal>
              <span className="editorial-badge px" style={{ marginBottom: '1rem' }}>
                INTEGRITY &amp; PROTOCOLS
              </span>
              <h2>Rules &amp; Guidelines</h2>
              <p style={{ marginBottom: '1.5rem' }}>
                PromptX evaluates authentic creative capability and prompt mastery. Please review the official rulebook prior to check-in.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {promptxData.rules.map((rule, idx) => (
                  <div key={idx} style={{ display: 'flex', gap: '10px' }}>
                    <CheckCircle2 size={18} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '3px' }} />
                    <span style={{ fontSize: '0.94rem', color: 'var(--text-secondary)' }}>
                      {rule}
                    </span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            {/* Judging Criteria Breakdown */}
            <ScrollReveal delay={0.2}>
              <div
                style={{
                  background: 'var(--bg-subtle)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                  border: '1px solid var(--border-medium)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1.25rem' }}>
                  <Award size={20} color="var(--brand-red)" />
                  <h3 style={{ fontSize: '1.35rem', margin: 0 }}>Evaluation Rubric</h3>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {promptxData.judgingCriteria.map((crit, idx) => (
                    <div key={idx} style={{ background: '#FFFFFF', padding: '1.1rem 1.25rem', borderRadius: '12px', border: '1px solid var(--border-light)' }}>
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
              <span className="editorial-badge px">
                HONORS &amp; RECOGNITION
              </span>
              <h2>Prizes &amp; Distinctions</h2>
              <p>Top creators receive coveted trophies, compute grants, and professional mentorship.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {promptxData.prizes.map((prize, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: 'var(--radius-xl)',
                    border: idx === 0 ? '2px solid var(--brand-red)' : '1px solid var(--border-medium)',
                    padding: '2.5rem 2rem',
                    boxShadow: idx === 0 ? 'var(--px-glow)' : 'var(--shadow-sm)',
                    position: 'relative'
                  }}
                  className="card-hover-lift"
                >
                  <span className="editorial-badge px" style={{ marginBottom: '1rem' }}>
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

      {/* 6. FAQ Accordion for PromptX */}
      <section className="section" style={{ background: '#FFFFFF', borderTop: '1px solid var(--border-light)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge px">PROMPTX FAQS</span>
              <h2>Competition Queries</h2>
              <p>Common questions concerning generative platforms, submissions, and prompt logging.</p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <FAQAccordion filterCategory="promptx" />
          </ScrollReveal>
        </div>
      </section>

      {/* 7. Dedicated Registration CTA */}
      <section className="section" style={{ background: 'var(--px-gradient)', color: '#FFFFFF', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <span className="editorial-badge" style={{ background: 'rgba(255,255,255,0.15)', color: '#fff', borderColor: 'rgba(255,255,255,0.3)', marginBottom: '1rem' }}>
              PROMPTX 2.0 REGISTRATION
            </span>
            <h2 style={{ color: '#fff', fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1rem' }}>
              Claim Your Space in the Latent Canvas
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', maxWidth: '580px', margin: '0 auto 2.5rem', fontSize: '1.1rem' }}>
              Free registration for verified undergraduate &amp; postgraduate students. Soloist or 2-member teams accepted.
            </p>

            <Link to={promptxData.registerRoute} className="btn btn-primary" style={{ background: '#FFFFFF', color: 'var(--brand-red)', padding: '0.95rem 2rem', fontSize: '1rem' }}>
              <span>Proceed to PromptX Registration</span>
              <ArrowRight size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
