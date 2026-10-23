import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Puzzle, ArrowRight, CheckCircle2, Award, Calendar, Users, MapPin, Trophy, Zap, Target } from 'lucide-react';
import ClueXVisual from '../components/ClueXVisual';
import FAQAccordion from '../components/FAQAccordion';
import ScrollReveal from '../components/ScrollReveal';
import { cluexData } from '../data/events';

export default function ClueX() {
  const [openRuleIdx, setOpenRuleIdx] = useState(null);

  return (
    <div className="cluex-page" style={{ paddingTop: 'calc(var(--navbar-height) + 2rem)' }}>

      {/* 1. Hero — Event Title & Visual */}
      <section className="section" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '3.5rem', alignItems: 'center' }}>
            <ScrollReveal>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
                <span className="editorial-badge cx">
                  <Puzzle size={13} />
                  NON-TECHNICAL EVENT — CSE
                </span>
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                  EDITION {cluexData.edition}
                </span>
              </div>

              <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.8rem)', letterSpacing: '-0.04em', lineHeight: 1.05, marginBottom: '1rem' }}>
                CLUE<span style={{ color: 'var(--cx-gold)' }}>X</span>
              </h1>

              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--brand-red)', marginBottom: '1.25rem' }}>
                "{cluexData.tagline}"
              </div>

              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '2rem' }}>
                {cluexData.fullDescription}
              </p>

              {/* Metadata Strip */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', padding: '1rem 0', borderTop: '1px solid var(--border-light)', borderBottom: '1px solid var(--border-light)', marginBottom: '2rem' }}>
                <div>
                  <span className="hero-meta-label">Date & Time</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <Calendar size={14} color="var(--cx-gold-dark)" />
                    {cluexData.date} ({cluexData.time})
                  </div>
                </div>

                <div>
                  <span className="hero-meta-label">Venue</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <MapPin size={14} color="var(--brand-red)" />
                    {cluexData.venue}
                  </div>
                </div>

                <div>
                  <span className="hero-meta-label">Team Size</span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 600, fontSize: '0.95rem' }}>
                    <Users size={14} color="var(--brand-red)" />
                    {cluexData.teamSize}
                  </div>
                </div>

                <div>
                  <span className="hero-meta-label">Fee</span>
                  <div style={{ fontWeight: 700, fontSize: '1rem', color: 'var(--brand-red)' }}>
                    {cluexData.registrationFee}
                  </div>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link to={cluexData.registerRoute} className="btn btn-cluex" style={{ padding: '0.9rem 1.8rem', fontSize: '1rem' }}>
                  <Puzzle size={16} />
                  <span>Register for ClueX</span>
                </Link>
                <a href="#hunt-stages" className="btn btn-secondary">
                  <span>How It Works</span>
                  <ArrowRight size={15} />
                </a>
              </div>
            </ScrollReveal>

            {/* Visual */}
            <ScrollReveal delay={0.2}>
              <div style={{
                background: '#FFFFFF',
                borderRadius: 'var(--radius-xl)',
                padding: '2rem',
                border: '1px solid var(--border-light)',
                boxShadow: 'var(--shadow-lg)',
                overflow: 'hidden'
              }}>
                <ClueXVisual />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 2. Eligibility & Quick Facts */}
      <section className="section" style={{ background: 'var(--bg-subtle)', paddingTop: '3rem', paddingBottom: '3rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {[
              { icon: <Users size={22} color="var(--brand-red)" />, title: 'Team Size', value: cluexData.teamSize, bg: 'var(--brand-red-light)' },
              { icon: <Zap size={22} color="var(--cx-gold-dark)" />, title: 'Event Type', value: 'Non-Technical Event', bg: 'var(--cx-gold-light)' },
              { icon: <Target size={22} color="var(--brand-red)" />, title: 'Format', value: 'Campus-wide Treasure Hunt', bg: 'var(--brand-red-light)' },
              { icon: <Trophy size={22} color="var(--cx-gold-dark)" />, title: 'Prizes', value: 'Cash + Trophies', bg: 'var(--cx-gold-light)' },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div style={{ background: '#fff', borderRadius: 'var(--radius-lg)', padding: '1.5rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: item.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1rem' }}>
                    {item.icon}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.06em', fontFamily: 'var(--font-mono)', marginBottom: '0.25rem' }}>{item.title}</div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem', color: 'var(--text-primary)' }}>{item.value}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Hunt Stages */}
      <section className="section" id="hunt-stages">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge cx">
                <Puzzle size={12} />
                THE HUNT TIMELINE
              </span>
              <h2>How ClueX Works</h2>
              <p>From registration to the grand reveal — here's how the campus treasure hunt unfolds.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '720px', margin: '0 auto' }}>
            {cluexData.stages.map((stage, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div style={{
                  background: '#fff',
                  border: '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-lg)',
                  padding: '1.75rem 2rem',
                  display: 'flex',
                  gap: '1.5rem',
                  alignItems: 'flex-start',
                  boxShadow: 'var(--shadow-sm)'
                }}>
                  <div style={{
                    minWidth: '44px', height: '44px', borderRadius: '50%',
                    background: idx === cluexData.stages.length - 1 ? 'var(--cx-gradient)' : 'var(--brand-red-light)',
                    color: idx === cluexData.stages.length - 1 ? '#171717' : 'var(--brand-red)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontFamily: 'var(--font-mono)', fontWeight: 800, fontSize: '0.85rem'
                  }}>
                    {stage.step}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', marginBottom: '0.5rem', flexWrap: 'wrap' }}>
                      <strong style={{ fontSize: '1.05rem', color: 'var(--text-primary)' }}>{stage.title}</strong>
                      <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--text-muted)', whiteSpace: 'nowrap' }}>{stage.time}</span>
                    </div>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.6 }}>{stage.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Rules */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge">COMPETITION RULES</span>
              <h2>ClueX Rulebook</h2>
              <p>Read all rules carefully before registering. Violations result in immediate disqualification.</p>
            </div>
          </ScrollReveal>

          <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {cluexData.rules.map((rule, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-md)', padding: '1rem 1.25rem', display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <CheckCircle2 size={18} color="var(--brand-red)" style={{ flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontSize: '0.92rem', color: 'var(--text-secondary)', lineHeight: 1.6 }}>{rule}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Judging Criteria */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge">SCORING BREAKDOWN</span>
              <h2>How Teams are Evaluated</h2>
              <p>The first team to complete all clue stations correctly, in the shortest time, wins.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {cluexData.judgingCriteria.map((criterion, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div style={{ background: '#fff', border: '1px solid var(--border-light)', borderRadius: 'var(--radius-lg)', padding: '1.75rem', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '1.6rem', fontWeight: 800, color: idx % 2 === 0 ? 'var(--brand-red)' : 'var(--cx-gold-dark)', marginBottom: '0.75rem', lineHeight: 1 }}>
                    {criterion.weight}
                  </div>
                  <strong style={{ display: 'block', fontSize: '1rem', marginBottom: '0.5rem' }}>{criterion.category}</strong>
                  <p style={{ fontSize: '0.88rem', color: 'var(--text-secondary)', margin: 0, lineHeight: 1.55 }}>{criterion.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Prizes */}
      <section className="section" style={{ background: 'var(--bg-subtle)' }}>
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge cx">
                <Award size={12} />
                AWARDS & RECOGNITION
              </span>
              <h2>ClueX Prize Structure</h2>
              <p>Every winner and runner-up is felicitated at the INTERO FEST '26 Valedictory Ceremony.</p>
            </div>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', maxWidth: '920px', margin: '0 auto' }}>
            {cluexData.prizes.map((prize, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.1}>
                <div style={{
                  background: '#fff',
                  border: idx === 0 ? `2px solid var(--cx-gold)` : '1px solid var(--border-light)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  boxShadow: idx === 0 ? 'var(--cx-glow)' : 'var(--shadow-sm)',
                  position: 'relative',
                  overflow: 'hidden'
                }}>
                  {idx === 0 && (
                    <div style={{ position: 'absolute', top: 0, right: 0, background: 'var(--cx-gradient)', color: '#171717', fontSize: '0.72rem', fontWeight: 700, fontFamily: 'var(--font-mono)', padding: '4px 12px', borderBottomLeftRadius: '8px' }}>
                      🏆 WINNER
                    </div>
                  )}
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.85rem', color: 'var(--cx-gold-dark)', fontWeight: 600, marginBottom: '1.5rem' }}>
                    {prize.badge}
                  </div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', marginBottom: '0.75rem' }}>
                    <Award size={20} color={idx === 0 ? 'var(--cx-gold-dark)' : 'var(--brand-red)'} />
                    <h4 style={{ fontSize: '1.1rem', margin: 0 }}>{prize.title}</h4>
                  </div>
                  <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                    {prize.perks.map((perk, pi) => (
                      <li key={pi} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', fontSize: '0.88rem', color: 'var(--text-secondary)' }}>
                        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: idx === 0 ? 'var(--cx-gold)' : 'var(--brand-red)', marginTop: '7px', flexShrink: 0 }} />
                        {perk}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ for ClueX */}
      <section className="section">
        <div className="container">
          <ScrollReveal>
            <div className="section-header centered">
              <span className="editorial-badge">GOT QUESTIONS?</span>
              <h2>ClueX FAQs</h2>
              <p>Everything you need to know before the hunt begins.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <FAQAccordion filterCategory="cluex" />
          </ScrollReveal>
        </div>
      </section>

      {/* 8. CTA Banner */}
      <section style={{ background: 'var(--cx-gradient)', padding: 'clamp(3rem, 6vw, 5rem) 0', textAlign: 'center' }}>
        <div className="container">
          <ScrollReveal>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', letterSpacing: '0.1em', color: 'rgba(0,0,0,0.6)', marginBottom: '1rem', textTransform: 'uppercase' }}>
              INTERO FEST '26 · OCTOBER 31, 2026
            </div>
            <h2 style={{ fontSize: 'clamp(2rem, 4.5vw, 3.2rem)', color: '#171717', marginBottom: '1.25rem' }}>
              Ready to Crack the Code?
            </h2>
            <p style={{ color: 'rgba(0,0,0,0.65)', maxWidth: '540px', margin: '0 auto 2rem', fontSize: '1.05rem' }}>
              Register your team of 2–4 members for ClueX at ₹250. The campus hunt awaits.
            </p>
            <Link
              to={cluexData.registerRoute}
              className="btn btn-primary"
              style={{ padding: '0.95rem 2rem', fontSize: '1rem' }}
            >
              <span>Register for ClueX — ₹250</span>
              <Puzzle size={16} />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
