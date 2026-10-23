import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Sparkles, Layout, Puzzle, User, Users, ArrowRight, Loader2, Info, ShieldCheck } from 'lucide-react';
import TicketBadge from './TicketBadge';

export default function RegistrationForm({ eventType = 'promptx' }) {
  const isPx = eventType === 'promptx';
  const isDx = eventType === 'designxpo';
  const isCx = eventType === 'cluex';

  const eventName = isPx ? 'Prompt-X 2.0' : isDx ? 'Design-Xpo' : 'ClueX';
  const maxTeamMembers = isPx ? 1 : isDx ? 2 : 3; // In addition to leader (total 2 for PX, 3 for DX, 4 for CX)

  // Form State
  const [participationType, setParticipationType] = useState(isCx ? 'team' : 'individual'); // ClueX is team-based
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [institution, setInstitution] = useState('');
  const [department, setDepartment] = useState('');
  const [yearOfStudy, setYearOfStudy] = useState('3rd Year');
  const [portfolioUrl, setPortfolioUrl] = useState('');
  const [teamName, setTeamName] = useState('');
  const [teamMembers, setTeamMembers] = useState([{ name: '', email: '' }]);
  const [preferredTool, setPreferredTool] = useState(
    isPx ? 'Midjourney' : isDx ? 'Figma' : 'Cryptographic Decoding'
  );
  const [agreeRules, setAgreeRules] = useState(false);

  // Status & Validation State
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedRegistration, setConfirmedRegistration] = useState(null);

  // Validate fields
  const validateForm = () => {
    const errs = {};
    if (!fullName.trim()) errs.fullName = 'Full name is required';
    if (!email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errs.email = 'Please provide a valid email format';
    }
    if (!phone.trim()) {
      errs.phone = 'Phone number is required for contact';
    }
    if (!institution.trim()) errs.institution = 'College / Institution name is required';
    
    if (participationType === 'team') {
      if (!teamName.trim()) errs.teamName = 'Team name is required for team entry';
      teamMembers.forEach((member, idx) => {
        if (!member.name.trim()) {
          errs[`member_${idx}_name`] = `Member ${idx + 2} name is required`;
        }
        if (!member.email.trim() || !/\S+@\S+\.\S+/.test(member.email)) {
          errs[`member_${idx}_email`] = `Valid email for member ${idx + 2} is required`;
        }
      });
    }

    if (!agreeRules) {
      errs.agreeRules = 'You must accept the competition rules & event guidelines';
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleMemberChange = (idx, field, value) => {
    const updated = [...teamMembers];
    updated[idx][field] = value;
    setTeamMembers(updated);
  };

  const addTeamMember = () => {
    if (teamMembers.length < maxTeamMembers) {
      setTeamMembers([...teamMembers, { name: '', email: '' }]);
    }
  };

  const removeTeamMember = (idx) => {
    if (teamMembers.length > 1) {
      setTeamMembers(teamMembers.filter((_, i) => i !== idx));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    setTimeout(() => {
      const prefix = isPx ? 'PX' : isDx ? 'DX' : 'CX';
      const ticketId = `${prefix}-2026-${Math.floor(10000 + Math.random() * 90000)}`;
      const registrationPayload = {
        ticketId,
        eventId: isPx ? 'promptx' : isDx ? 'designxpo' : 'cluex',
        eventName,
        participationType,
        fullName,
        email,
        phone,
        institution,
        department,
        yearOfStudy,
        portfolioUrl,
        teamName: participationType === 'team' ? teamName : null,
        teamMembers: participationType === 'team' ? teamMembers : [],
        preferredTool,
        fee: '₹250',
        symposium: "INTERO FEST '26",
        host: "Sree Sakthi Engineering College, Karamadai, Coimbatore",
        submittedAt: new Date().toISOString()
      };

      // Store in LocalStorage
      try {
        const existing = JSON.parse(localStorage.getItem('interofest_registrations') || '[]');
        existing.push(registrationPayload);
        localStorage.setItem('interofest_registrations', JSON.stringify(existing));
      } catch (err) {
        console.warn('LocalStorage unavailable:', err);
      }

      setIsSubmitting(false);
      setConfirmedRegistration(registrationPayload);

      // Trigger celebratory confetti
      try {
        const colors = isPx
          ? ['#A30F1B', '#D51C2B', '#FFF1F1']
          : isDx
          ? ['#A30F1B', '#D51C2B', '#F5C928']
          : ['#F5C928', '#E8B800', '#A30F1B'];

        confetti({
          particleCount: 90,
          spread: 75,
          origin: { y: 0.6 },
          colors
        });
      } catch {
        // confetti fallback
      }
    }, 800);
  };

  const resetForm = () => {
    setConfirmedRegistration(null);
    setFullName('');
    setEmail('');
    setPhone('');
    setInstitution('');
    setDepartment('');
    setTeamName('');
    setTeamMembers([{ name: '', email: '' }]);
    setAgreeRules(false);
    setErrors({});
  };

  if (confirmedRegistration) {
    return <TicketBadge registration={confirmedRegistration} onReset={resetForm} />;
  }

  const badgeClass = isPx ? 'px' : isDx ? 'dx' : 'cx';
  const badgeIcon = isPx ? <Sparkles size={13} /> : isDx ? <Layout size={13} /> : <Puzzle size={13} />;

  return (
    <div className={`registration-container ${badgeClass}`}>
      {/* Header Badge & Title */}
      <div style={{ textAlign: 'center', marginBottom: '2.25rem' }}>
        <span className={`editorial-badge ${badgeClass}`} style={{ marginBottom: '0.75rem' }}>
          {badgeIcon}
          INTERO FEST '26 OFFICIAL REGISTRATION
        </span>
        <h2 style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.4rem)', fontWeight: 800 }}>
          Register for {eventName}
        </h2>
        <p style={{ maxWidth: '520px', margin: '0.5rem auto 0', fontSize: '0.95rem' }}>
          {isPx && 'Complete your entry for the national AI image generation and prompt engineering arena.'}
          {isDx && 'Register your team for the human-centered digital product and UI/UX design sprint.'}
          {isCx && 'Register your team for the campus-wide treasure hunt and clue-cracking challenge.'}
        </p>
      </div>

      {/* Info notice about registration fee and confirmation pass */}
      <div
        style={{
          background: 'var(--bg-subtle)',
          border: '1px solid var(--border-medium)',
          borderRadius: 'var(--radius-md)',
          padding: '0.85rem 1rem',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          marginBottom: '2rem',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)'
        }}
      >
        <Info size={18} color="var(--brand-red)" style={{ flexShrink: 0 }} />
        <span>
          <strong>Registration Fee: ₹250</strong> • One registration fee covers event kit, certificate of participation, and access to INTERO FEST '26. Official pass with verifiable ticket ID is issued instantly.
        </span>
      </div>

      <form onSubmit={handleSubmit} noValidate>
        {/* Participation Type Selector */}
        <div className="form-group">
          <label className="form-label">Participation Format</label>
          <div className="toggle-group">
            {!isCx && (
              <button
                type="button"
                className={`toggle-option ${participationType === 'individual' ? 'active' : ''}`}
                onClick={() => setParticipationType('individual')}
              >
                <User size={15} style={{ display: 'inline', marginRight: '6px' }} />
                Individual Soloist
              </button>
            )}
            <button
              type="button"
              className={`toggle-option ${participationType === 'team' ? 'active' : ''}`}
              onClick={() => setParticipationType('team')}
            >
              <Users size={15} style={{ display: 'inline', marginRight: '6px' }} />
              Team Entry ({isPx ? 'Up to 2 Members' : isDx ? '1–3 Members' : '2–4 Members'})
            </button>
          </div>
        </div>

        {/* Team Details (conditional) */}
        {participationType === 'team' && (
          <div style={{ background: 'var(--bg-subtle)', padding: '1.25rem', borderRadius: 'var(--radius-md)', marginBottom: '1.5rem', border: '1px solid var(--border-light)' }}>
            <div className="form-group">
              <label className="form-label" htmlFor="teamName">
                Team Name *
              </label>
              <input
                id="teamName"
                type="text"
                placeholder={isCx ? "e.g. The Cryptic Voyagers" : isPx ? "e.g. Synthetix Lab" : "e.g. PixelForge"}
                className={`form-input ${errors.teamName ? 'error' : ''}`}
                value={teamName}
                onChange={(e) => setTeamName(e.target.value)}
              />
              {errors.teamName && <p className="form-error-msg">{errors.teamName}</p>}
            </div>

            <div style={{ marginTop: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                <span style={{ fontSize: '0.86rem', fontWeight: 600 }}>
                  Team Co-Members (Max {maxTeamMembers} additional)
                </span>
                {teamMembers.length < maxTeamMembers && (
                  <button
                    type="button"
                    onClick={addTeamMember}
                    style={{ fontSize: '0.78rem', color: 'var(--brand-red)', fontWeight: 600 }}
                  >
                    + Add Member
                  </button>
                )}
              </div>

              {teamMembers.map((member, idx) => (
                <div key={idx} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr auto', gap: '8px', marginBottom: '8px', alignItems: 'center' }}>
                  <div>
                    <input
                      type="text"
                      placeholder={`Member ${idx + 2} Name`}
                      className={`form-input ${errors[`member_${idx}_name`] ? 'error' : ''}`}
                      value={member.name}
                      onChange={(e) => handleMemberChange(idx, 'name', e.target.value)}
                    />
                    {errors[`member_${idx}_name`] && <p className="form-error-msg">{errors[`member_${idx}_name`]}</p>}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder={`Member ${idx + 2} Email`}
                      className={`form-input ${errors[`member_${idx}_email`] ? 'error' : ''}`}
                      value={member.email}
                      onChange={(e) => handleMemberChange(idx, 'email', e.target.value)}
                    />
                    {errors[`member_${idx}_email`] && <p className="form-error-msg">{errors[`member_${idx}_email`]}</p>}
                  </div>
                  {teamMembers.length > 1 && (
                    <button
                      type="button"
                      onClick={() => removeTeamMember(idx)}
                      style={{ color: 'var(--text-muted)', fontSize: '0.75rem', padding: '0 6px' }}
                      title="Remove Member"
                    >
                      ✕
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Primary Contact Details */}
        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="fullName">
              {participationType === 'team' ? 'Team Lead Full Name *' : 'Full Name *'}
            </label>
            <input
              id="fullName"
              type="text"
              placeholder="e.g. John Doe"
              className={`form-input ${errors.fullName ? 'error' : ''}`}
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            {errors.fullName && <p className="form-error-msg">{errors.fullName}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="email">
              Email Address *
            </label>
            <input
              id="email"
              type="email"
              placeholder="student@college.edu"
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <p className="form-error-msg">{errors.email}</p>}
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="phone">
              Contact Phone Number *
            </label>
            <input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              className={`form-input ${errors.phone ? 'error' : ''}`}
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            {errors.phone && <p className="form-error-msg">{errors.phone}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="yearOfStudy">
              Year of Study
            </label>
            <select
              id="yearOfStudy"
              className="form-select"
              value={yearOfStudy}
              onChange={(e) => setYearOfStudy(e.target.value)}
            >
              <option value="1st Year">1st Year Undergraduate</option>
              <option value="2nd Year">2nd Year Undergraduate</option>
              <option value="3rd Year">3rd Year Undergraduate</option>
              <option value="4th Year">4th Year Undergraduate</option>
              <option value="Postgraduate">Postgraduate / Masters</option>
            </select>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="institution">
              College / Institution *
            </label>
            <input
              id="institution"
              type="text"
              placeholder="e.g. Sree Sakthi Engineering College, etc."
              className={`form-input ${errors.institution ? 'error' : ''}`}
              value={institution}
              onChange={(e) => setInstitution(e.target.value)}
            />
            {errors.institution && <p className="form-error-msg">{errors.institution}</p>}
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="department">
              Department / Discipline
            </label>
            <input
              id="department"
              type="text"
              placeholder="CSE, IT, ECE, AI&DS..."
              className="form-input"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label className="form-label" htmlFor="preferredTool">
              {isPx ? 'Primary Generative Tool' : isDx ? 'Primary Prototyping Tool' : 'Team Strategy Focus'}
            </label>
            <select
              id="preferredTool"
              className="form-select"
              value={preferredTool}
              onChange={(e) => setPreferredTool(e.target.value)}
            >
              {isPx && (
                <>
                  <option value="Midjourney">Midjourney (v5/v6)</option>
                  <option value="Stable Diffusion">Stable Diffusion / ComfyUI</option>
                  <option value="DALL-E 3">DALL-E 3</option>
                  <option value="Adobe Firefly">Adobe Firefly</option>
                  <option value="Ideogram">Ideogram</option>
                  <option value="Other">Other Approved Model</option>
                </>
              )}
              {isDx && (
                <>
                  <option value="Figma">Figma</option>
                  <option value="Framer">Framer</option>
                  <option value="Penpot">Penpot</option>
                  <option value="Adobe XD">Adobe XD</option>
                </>
              )}
              {isCx && (
                <>
                  <option value="Cryptographic Decoding">Cryptographic Decoding</option>
                  <option value="Lateral Problem Solving">Lateral Problem Solving</option>
                  <option value="Fast Campus Navigation">Fast Campus Navigation</option>
                  <option value="Logic & Pattern Recognition">Logic & Pattern Recognition</option>
                </>
              )}
            </select>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="portfolioUrl">
              {isCx ? 'Instagram / Social Handle (Optional)' : 'Portfolio / GitHub / Behance (Optional)'}
            </label>
            <input
              id="portfolioUrl"
              type="text"
              placeholder={isCx ? "@instagram_handle" : "https://github.com/username or behance"}
              className="form-input"
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
            />
          </div>
        </div>

        {/* Agreement Checkbox */}
        <div className="form-group" style={{ marginTop: '0.5rem' }}>
          <label style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', cursor: 'pointer', fontSize: '0.86rem', color: 'var(--text-secondary)' }}>
            <input
              type="checkbox"
              checked={agreeRules}
              onChange={(e) => setAgreeRules(e.target.checked)}
              style={{ marginTop: '3px', accentColor: 'var(--brand-red)', width: '16px', height: '16px' }}
            />
            <span>
              I agree to the official {eventName} rules, code of conduct, and acknowledge the ₹250 registration fee payable at check-in desk / online.
            </span>
          </label>
          {errors.agreeRules && <p className="form-error-msg">{errors.agreeRules}</p>}
        </div>

        {/* Submit Button */}
        <div style={{ marginTop: '2rem' }}>
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-primary"
            style={{ width: '100%', padding: '1rem', fontSize: '1.05rem', justifyContent: 'center' }}
          >
            {isSubmitting ? (
              <>
                <Loader2 size={18} className="anim-spin-slow" />
                <span>Generating INTERO FEST '26 Pass...</span>
              </>
            ) : (
              <>
                <span>Complete Registration for {eventName} (₹250)</span>
                <ArrowRight size={18} />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
