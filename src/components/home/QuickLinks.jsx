// ============================================
// src/components/home/QuickLinks.jsx
// ============================================
import React from 'react';
import { Calendar, MapPin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from '../../hooks/useTranslations';
import './QuickLinks.css';

export const QuickLinks = () => {
  const { t } = useTranslation();

  const links = [
    {
      icon: <Calendar className="quicklinks-icon" />,
      title: t('quickLinks.details.title', 'Event Details'),
      description: t('quickLinks.details.description', 'Timeline, venue information, and what to expect'),
      path: '/details'
    },
    {
      icon: <MapPin className="quicklinks-icon" />,
      title: t('quickLinks.travel.title', 'Travel & Stay'),
      description: t('quickLinks.travel.description', 'Accommodations, directions, and local attractions'),
      path: '/travel'
    },
    {
      icon: <Mail className="quicklinks-icon" />,
      title: t('quickLinks.contact.title', 'Get in Touch'),
      description: t('quickLinks.contact.description', "Questions? We're here to help"),
      path: '/rsvp'
    }
  ];

  return (
    <section className="quicklinks-section">
      <div className="quicklinks-container">
        <h2 className="quicklinks-title">
          {t('quickLinks.mainTitle', 'Everything You Need to Know')}
        </h2>
        <p className="quicklinks-description">
          {t('quickLinks.mainDescription', "From directions to dress code, we've got all the details covered")}
        </p>

        <div className="quicklinks-grid">
          {links.map((item, i) => (
            <Link 
              key={i}
              to={item.path}
              className="quicklinks-card"
            >
              <div className="quicklinks-icon-wrapper">
                {item.icon}
              </div>
              <h3 className="quicklinks-card-title">
                {item.title}
              </h3>
              <p className="quicklinks-card-description">
                {item.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};