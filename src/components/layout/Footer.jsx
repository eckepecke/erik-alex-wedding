import React from 'react';
import { Heart, Mail, Instagram, Facebook } from 'lucide-react';
import { WEDDING_INFO } from '@utils/constants';
import './Footer.css';

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* Contact */}
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <div className="footer-contact-info">
              <Mail className="w-5 h-5" />
              <a href={`mailto:${WEDDING_INFO.email}`}>
                {WEDDING_INFO.email}
              </a>
            </div>
          </div>

          {/* Center */}
          <div className="footer-center">
            <Heart className="footer-heart" />
            <p>{WEDDING_INFO.bride} & {WEDDING_INFO.groom}</p>
            <p className="footer-date">{WEDDING_INFO.date}</p>
          </div>

          {/* Social */}
          <div className="footer-social">
            <h3>Follow Us</h3>
            <div className="footer-social-links">
              <a href="#"><Instagram /></a>
              <a href="#"><Facebook /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Alexandra & Erik. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
