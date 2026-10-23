import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Monitor, ChevronDown, Check } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export default function ThemeToggle({ className = '', compact = false }) {
  const { themePreference, resolvedTheme, setTheme, isSystem } = useTheme();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    if (dropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [dropdownOpen]);

  const options = [
    {
      id: 'system',
      label: 'Desktop Auto',
      description: 'Follows macOS / Windows preference',
      icon: Monitor,
    },
    {
      id: 'light',
      label: 'Royal Light',
      description: 'Majestic ivory & royal gold',
      icon: Sun,
    },
    {
      id: 'dark',
      label: 'Midnight Cyber',
      description: 'Deep high-contrast dark theme',
      icon: Moon,
    },
  ];

  return (
    <div className={`theme-toggle-container ${className}`} ref={dropdownRef} style={{ position: 'relative' }}>
      <button
        type="button"
        className="theme-toggle-btn"
        onClick={() => setDropdownOpen((prev) => !prev)}
        aria-label={`Current theme: ${resolvedTheme === 'light' ? 'Royal Light' : 'Midnight Dark'}${isSystem ? ' (Desktop Preference)' : ''}. Click to change theme.`}
        title={`Theme: ${resolvedTheme === 'light' ? 'Royal Light' : 'Midnight Dark'} ${isSystem ? '• Desktop Auto' : ''}`}
        aria-haspopup="listbox"
        aria-expanded={dropdownOpen}
      >
        <span className="theme-toggle-label">
          {themePreference === 'system'
            ? 'Desktop'
            : resolvedTheme === 'light'
            ? 'Royal'
            : 'Dark'}
        </span>
        <ChevronDown size={13} className={`theme-chevron ${dropdownOpen ? 'rotate' : ''}`} />
      </button>

      {dropdownOpen && (
        <div className="theme-dropdown-menu" role="listbox">
          <div className="theme-dropdown-header">
            <span>APPEARANCE</span>
          </div>

          {options.map((opt) => {
            const Icon = opt.icon;
            const isSelected = themePreference === opt.id;
            return (
              <button
                key={opt.id}
                type="button"
                role="option"
                aria-selected={isSelected}
                className={`theme-dropdown-item ${isSelected ? 'active' : ''}`}
                onClick={() => {
                  setTheme(opt.id);
                  setDropdownOpen(false);
                }}
              >
                <div className="theme-item-icon-box">
                  <Icon size={15} />
                </div>
                <div className="theme-item-text">
                  <span className="theme-item-title">{opt.label}</span>
                  <span className="theme-item-desc">{opt.description}</span>
                </div>
                {isSelected && (
                  <Check size={14} className="theme-check-icon" />
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
