import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { useLocale } from '../../context/LocaleContext';
import { Language } from '../../types';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const { locale, setLocale } = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['en', 'ru', 'uz'];

  const handleLanguageChange = (lang: Language) => {
    setLocale(lang);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-dropdown" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="language-dropdown-btn"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{locale.toUpperCase()}</span>
        <FaChevronDown className={`language-dropdown-chevron ${isOpen ? 'open' : ''}`} size={12} />
      </button>

      {isOpen && (
        <div className="language-dropdown-menu">
          {languages
            .filter((lang) => lang !== locale)
            .map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => handleLanguageChange(lang)}
                className="language-dropdown-item"
                aria-label={`Switch to ${lang.toUpperCase()}`}
              >
                {lang.toUpperCase()}
              </button>
            ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;
