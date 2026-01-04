// ============================================
// src/components/home/Hero.jsx
// ============================================
import React from 'react';
import { Heart, Calendar, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslations';
import './Hero.css';

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero-section">
      {/* Main content */}
      <div className="hero-content">
        {/* Decorative top flourish */}
        {/* <div className="hero-flourish-top">
          <div className="flourish-line"></div>
          <Heart className="hero-heart" fill="currentColor" />
          <div className="flourish-line-reverse"></div>
        </div> */}

        {/* Names */}
        <div className="hero-names">
          <h1 className="hero-title">
            {t('hero.names', 'Alexandra & Erik')}
          </h1>
          <div className="hero-subtitle-wrapper">
            <div className="hero-divider"></div>
            <p className="hero-subtitle">
              {t('hero.subtitle', 'invite you to celebrate their wedding')}
            </p>
            <div className="hero-divider"></div>
          </div>
        </div>

        {/* Date and Location */}
        <div className="hero-details">
          <div className="hero-detail-item">
            <Calendar className="hero-icon" />
            <p className="hero-date">
              {t('hero.date', 'August 15, 2025')}
            </p>
          </div>
          <div className="hero-detail-item">
            <MapPin className="hero-icon" />
            <p className="hero-location">
              {t('hero.location', 'Garden Estate, Santorini')}
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="hero-buttons">
          <Link to="/rsvp">
            <button className="hero-btn-primary">
              <span className="hero-btn-text">{t('hero.rsvpButton', 'RSVP Now')}</span>
            </button>
          </Link>
          <Link to="/details">
            <button className="hero-btn-outline">
              {t('hero.detailsButton', 'View Details')}
            </button>
          </Link>
        </div>

        {/* Decorative bottom flourish */}
        {/* <div className="hero-flourish-bottom">
          <div className="flourish-line"></div>
          <Heart className="hero-heart-small" fill="currentColor" />
          <div className="flourish-line-reverse"></div>
        </div> */}
      </div>
    </section>
  );
};