import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations.jsx';
import './Navigation.css';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useTranslation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/details', label: t('nav.details') },
    { path: '/travel', label: t('nav.travel') },
    { path: '/rsvp', label: t('nav.rsvp') },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-inner">
          <Link to="/" className="nav-logo">
            <Heart className="nav-heart" />
            <span>A & E</span>
          </Link>

          <div className="flex items-center space-x-6">
            <div className="nav-links">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`nav-link ${isActive(link.path) ? 'nav-link-active' : ''}`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="lang-switch">
              <button
                onClick={() => setLanguage('en')}
                className={`lang-btn ${language === 'en' ? 'lang-btn-active' : 'lang-btn-inactive'}`}
              >
                <span className="text-lg">🇬🇧</span>
                <span className="text-sm font-medium">EN</span>
              </button>
              <button
                onClick={() => setLanguage('ro')}
                className={`lang-btn ${language === 'ro' ? 'lang-btn-active' : 'lang-btn-inactive'}`}
              >
                <span className="text-lg">🇷🇴</span>
                <span className="text-sm font-medium">RO</span>
              </button>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="mobile-menu-btn"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`mobile-link ${isActive(link.path) ? 'mobile-link-active' : ''}`}
              >
                {link.label}
              </Link>
            ))}

            <div className="mobile-lang">
              <div className="mobile-lang-buttons">
                <button
                  onClick={() => setLanguage('en')}
                  className={`mobile-lang-btn ${language === 'en' ? 'mobile-lang-btn-active' : 'mobile-lang-btn-inactive'}`}
                >
                  <span className="text-2xl">🇬🇧</span>
                  <span className="text-sm font-medium">EN</span>
                </button>
                <button
                  onClick={() => setLanguage('ro')}
                  className={`mobile-lang-btn ${language === 'ro' ? 'mobile-lang-btn-active' : 'mobile-lang-btn-inactive'}`}
                >
                  <span className="text-2xl">🇷🇴</span>
                  <span className="text-sm font-medium">RO</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
