import React from 'react';
import { motion } from 'framer-motion';

// ClueX — Abstract Puzzle / Treasure Hunt Visual Art
// A grid of cryptic clue fragments with animated elements adapting to active theme
export default function ClueXVisual() {
  return (
    <div style={{ position: 'relative', width: '100%', height: '100%', minHeight: '340px' }}>
      <svg
        viewBox="0 0 440 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        {/* Background grid of dots */}
        {Array.from({ length: 8 }).map((_, row) =>
          Array.from({ length: 12 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={20 + col * 36}
              cy={20 + row * 42}
              r={1.5}
              fill="var(--border-light)"
            />
          ))
        )}

        {/* Animated path line — treasure hunt trail */}
        <motion.path
          d="M 60 280 L 120 220 L 200 260 L 280 160 L 370 200 L 390 120"
          stroke="var(--cx-color)"
          strokeWidth="2.5"
          strokeDasharray="8 6"
          fill="none"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2.5, ease: 'easeInOut', delay: 0.5 }}
        />

        {/* Station markers along the trail */}
        {[
          { cx: 60, cy: 280, label: '01', isAccent: false },
          { cx: 120, cy: 220, label: '02', isAccent: true },
          { cx: 200, cy: 260, label: '03', isAccent: false },
          { cx: 280, cy: 160, label: '04', isAccent: true },
          { cx: 370, cy: 200, label: '05', isAccent: false },
          { cx: 390, cy: 120, label: '★', isAccent: true },
        ].map((s, i) => (
          <motion.g
            key={i}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.6 + i * 0.35, duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          >
            <circle cx={s.cx} cy={s.cy} r={18} fill={s.isAccent ? "var(--brand-accent)" : "var(--cx-color)"} opacity={0.16} />
            <circle cx={s.cx} cy={s.cy} r={11} fill={s.isAccent ? "var(--brand-accent)" : "var(--cx-color)"} />
            <text
              x={s.cx}
              y={s.cy + 4.5}
              textAnchor="middle"
              fill="#fff"
              fontSize="9"
              fontWeight="700"
              fontFamily="JetBrains Mono, monospace"
            >
              {s.label}
            </text>
          </motion.g>
        ))}

        {/* Puzzle piece shapes */}
        <motion.g
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          {/* Top-left puzzle piece */}
          <path
            d="M 30 60 L 30 100 Q 50 100 50 115 Q 50 130 30 130 L 30 160 L 80 160 L 80 145 Q 80 130 95 130 Q 110 130 110 145 L 110 160 L 160 160 L 160 60 Z"
            fill="var(--cx-light)"
            stroke="var(--cx-color)"
            strokeWidth="1.8"
            opacity="0.85"
          />
          <text x="95" y="115" textAnchor="middle" fill="var(--cx-color)" fontSize="10" fontWeight="700" fontFamily="JetBrains Mono, monospace">CLUE</text>
        </motion.g>

        <motion.g
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.7 }}
        >
          {/* Bottom-right decorative cipher block */}
          <rect x="290" y="240" width="120" height="70" rx="8" fill="var(--bg-surface)" stroke="var(--brand-accent)" strokeWidth="1.5" opacity="0.95" />
          <text x="350" y="262" textAnchor="middle" fill="var(--brand-accent)" fontSize="8" fontWeight="600" fontFamily="JetBrains Mono, monospace">CIPHER #7F</text>
          <text x="350" y="278" textAnchor="middle" fill="var(--cx-color)" fontSize="12" fontWeight="800" fontFamily="JetBrains Mono, monospace">▲ ◆ ● ■</text>
          <text x="350" y="295" textAnchor="middle" fill="var(--text-secondary)" fontSize="8" fontFamily="JetBrains Mono, monospace">DECODE → WIN</text>
        </motion.g>

        {/* Floating clue card */}
        <motion.g
          animate={{ y: [-4, 4, -4] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: '215px 70px' }}
        >
          <rect x="170" y="50" width="90" height="55" rx="8" fill="var(--bg-surface)" stroke="var(--border-light)" strokeWidth="1.5"
            style={{ filter: 'drop-shadow(0 4px 12px rgba(0,0,0,0.08))' }} />
          <text x="215" y="72" textAnchor="middle" fill="var(--text-muted)" fontSize="7" fontFamily="JetBrains Mono, monospace">CLUE #3</text>
          <text x="215" y="86" textAnchor="middle" fill="var(--text-primary)" fontSize="9" fontWeight="700" fontFamily="JetBrains Mono, monospace">?  ?  ?</text>
          <rect x="183" y="94" width="64" height="3" rx="1.5" fill="var(--border-light)" />
        </motion.g>

        {/* Magnifying glass icon */}
        <motion.g
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          style={{ transformOrigin: '395px 80px' }}
        >
          <circle cx="395" cy="80" r="22" fill="var(--cx-light)" stroke="var(--cx-color)" strokeWidth="2" />
          <circle cx="392" cy="77" r="9" stroke="var(--cx-color)" strokeWidth="2" fill="none" />
          <line x1="398" y1="83" x2="406" y2="91" stroke="var(--cx-color)" strokeWidth="2.5" strokeLinecap="round" />
        </motion.g>

        {/* Decorative text labels */}
        <text x="30" y="195" fill="var(--text-muted)" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.8">TRACK A</text>
        <text x="218" y="310" fill="var(--text-muted)" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.8">STATION 03</text>
        <text x="310" y="145" fill="var(--text-muted)" fontSize="7" fontFamily="JetBrains Mono, monospace" opacity="0.8">CHECKPOINT</text>
      </svg>
    </div>
  );
}
