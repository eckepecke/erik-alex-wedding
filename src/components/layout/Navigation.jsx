// ============================================
// src/components/layout/Navigation.jsx
// ============================================
import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations.jsx';

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { t, language, setLanguage } = useTranslation();

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/story', label: t('nav.story') },
    { path: '/details', label: t('nav.details') },
    { path: '/travel', label: t('nav.travel') },
    { path: '/rsvp', label: t('nav.rsvp') },
    { path: '/registry', label: t('nav.registry') }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="w-6 h-6 text-rose-400" />
            <span className="font-serif text-xl text-gray-800">A & E</span>
          </Link>

          <div className="flex items-center space-x-6">
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`
                    text-sm font-medium transition-colors
                    ${isActive(link.path) 
                      ? 'text-rose-500 border-b-2 border-rose-500' 
                      : 'text-gray-600 hover:text-rose-400'}
                  `}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Language Switcher - Desktop */}
            <div className="hidden md:block">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              >
                <option value="en">EN</option>
                <option value="ro">RO</option>
              </select>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-gray-600 hover:text-rose-400"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium
                  ${isActive(link.path)
                    ? 'bg-rose-50 text-rose-500'
                    : 'text-gray-600 hover:bg-gray-50'}
                `}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Language Switcher - Mobile */}
            <div className="px-3 py-2">
              <select 
                value={language} 
                onChange={(e) => setLanguage(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-rose-200"
              >
                <option value="en">English</option>
                <option value="ro">Română</option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};