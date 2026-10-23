import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export default function CountdownTimer({ targetDate = '2026-10-31T09:00:00+05:30' }) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = new Date(targetDate) - new Date();
    if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true };
    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / 1000 / 60) % 60),
      seconds: Math.floor((diff / 1000) % 60),
      isPast: false,
    };
  });

  useEffect(() => {
    const updateCountdown = () => {
      const diff = new Date(targetDate) - new Date();
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, isPast: true });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          isPast: false,
        });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  const units = [
    { label: 'DAYS', value: String(timeLeft.days).padStart(2, '0') },
    { label: 'HOURS', value: String(timeLeft.hours).padStart(2, '0') },
    { label: 'MINUTES', value: String(timeLeft.minutes).padStart(2, '0') },
    { label: 'SECONDS', value: String(timeLeft.seconds).padStart(2, '0') },
  ];

  return (
    <div className="hero-countdown-wrap" aria-label="Event Countdown Timer">
      <div className="countdown-eyebrow">
        <Clock size={13} className="countdown-clock-icon" />
        <span>COUNTDOWN TO SYMPOSIUM</span>
      </div>

      <div className="countdown-boxes-row">
        {units.map((unit, idx) => (
          <React.Fragment key={unit.label}>
            <div className="countdown-box">
              <span className="countdown-num">{unit.value}</span>
              <span className="countdown-unit-label">{unit.label}</span>
            </div>
            {idx < units.length - 1 && <span className="countdown-colon">:</span>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
