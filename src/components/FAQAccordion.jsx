import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { faqData } from '../data/faq';

export default function FAQAccordion({ filterCategory = null }) {
  const [openIndex, setOpenIndex] = useState(0);
  const [activeCategory, setActiveCategory] = useState(filterCategory || 'all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'promptx', label: 'PromptX 2.0' },
    { id: 'designxpo', label: 'DesignXpo 1.0' },
    { id: 'registration', label: 'Registration' }
  ];

  const filteredFaqs = faqData.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  const toggleItem = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <div>
      {/* Category Tabs (if filterCategory is not locked) */}
      {!filterCategory && (
        <div className="schedule-filter-bar" style={{ marginBottom: '2rem' }}>
          {categories.map((cat) => (
            <button
              key={cat.id}
              className={`schedule-filter-btn ${activeCategory === cat.id ? 'active' : ''}`}
              onClick={() => {
                setActiveCategory(cat.id);
                setOpenIndex(0);
              }}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Accordion Items */}
      <div className="faq-list" role="region" aria-label="Frequently Asked Questions">
        {filteredFaqs.map((faq, idx) => {
          const isOpen = openIndex === idx;

          return (
            <div
              key={idx}
              className={`faq-item ${isOpen ? 'open' : ''}`}
            >
              <button
                className="faq-question-btn"
                onClick={() => toggleItem(idx)}
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${idx}`}
                id={`faq-question-${idx}`}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <HelpCircle size={18} color={faq.category === 'promptx' ? 'var(--px-blue)' : faq.category === 'designxpo' ? 'var(--dx-orange)' : 'var(--text-muted)'} />
                  {faq.question}
                </span>
                <ChevronDown size={18} className="faq-icon" />
              </button>

              {isOpen && (
                <div
                  id={`faq-answer-${idx}`}
                  role="region"
                  aria-labelledby={`faq-question-${idx}`}
                  className="faq-answer"
                >
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
