import React, { useState } from 'react';
import { Language } from '../../types';
import './LanguageSelector.css';

const LanguageSelector: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');

  const languages: Language[] = ['en', 'ru', 'uz'];

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    // Here you would implement actual language switching logic
    console.log(`Language changed to: ${lang}`);
  };

  return (
    <div className="language-selector">
      {languages.map((lang) => (
        <button
          key={lang}
          className={`lang-btn ${currentLang === lang ? 'active' : ''}`}
          onClick={() => handleLanguageChange(lang)}
          aria-label={`Switch to ${lang.toUpperCase()}`}
        >
          {lang.toUpperCase()}
        </button>
      ))}
    </div>
  );
};

export default LanguageSelector;
