import React, { useState, useRef, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { Language } from '../../types';

const LanguageSelector: React.FC = () => {
  const [currentLang, setCurrentLang] = useState<Language>('en');
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: Language[] = ['en', 'ru', 'uz'];

  const handleLanguageChange = (lang: Language) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // Here you would implement actual language switching logic
    console.log(`Language changed to: ${lang}`);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-700 bg-transparent border border-gray-300 rounded-lg transition-all duration-300 hover:bg-[#f8c8dc] hover:border-[#f8c8dc] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#f8c8dc]"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <span>{currentLang.toUpperCase()}</span>
        <FaChevronDown 
          className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
          size={12}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-32 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden z-50 animate-fadeIn">
          {languages
            .filter((lang) => lang !== currentLang)
            .map((lang) => (
              <button
                key={lang}
                onClick={() => handleLanguageChange(lang)}
                className="w-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-[#f8c8dc] hover:text-white transition-colors duration-200 text-left first:border-t-0 border-t border-gray-100"
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
