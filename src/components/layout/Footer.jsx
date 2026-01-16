import React from 'react';
import { Heart, Mail, CalendarCheck } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import { useTranslation } from '../../hooks/useTranslations';
import './Footer.css';

export const Footer = () => {
  const { t } = useTranslation();
  const rsvpLink = 
    { path: '/rsvp', label: t('nav.rsvp') }


  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact */}
        <div className="footer-contact">
                <h3>Get in Touch</h3>
                <a href={t('contact.erik_email')} className="footer-icon-wrapper">
                <Mail className="w-6 h-6 md:w-8 md:h-8 footer-icon" />
                </a>
            </div>

          {/* Center */}
        <div className="footer-center hidden md:block">
        <Heart className="footer-heart" />
        <p>{t('wedding.bride')} & {t('wedding.groom')}</p>
        <p className="footer-date">{t('wedding.date')}</p>
        </div>

          {/* RSVP */}
        <div className="footer-rsvp">
            <h3>Are you coming?</h3>
            <a href={rsvpLink.path} className="footer-icon-wrapper">
                <CalendarCheck className="w-6 h-6 md:w-8 md:h-8 footer-icon" />
            </a>
        </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 Alexandra & Erik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
