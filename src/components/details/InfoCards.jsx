import React from 'react';
import { Card } from '../ui/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import { useTranslation } from '../../hooks/useTranslations';
import './InfoCards.css';
import '../../pages/commons.css';


export const InfoCards = () => {
  const { weddingInfo, schedule } = useWeddingInfo();
  const items = schedule?.items ?? [];
  const { t } = useTranslation();

  return (
    <div className="info-cards-grid">
      {/* When card */}
      <Card className="info-card detail-card">
        <Calendar className="info-card-icon" />
        <h3 className="info-card-title">{t('details.infoCards.when')}</h3>
        <p className="info-card-text">{weddingInfo.date}</p>
        <p className="info-card-text">{weddingInfo.time}</p>
        <p className="info-card-text-sm">{t('details.infoCards.ceremonyPrompt')}</p>
      </Card>

      {/* Where card */}
      <Card className="info-card detail-card">
        <MapPin className="info-card-icon" />
        <h3 className="info-card-title">{t('details.infoCards.where')}</h3>
        <p className="detail-item-text">{weddingInfo.venue.name}</p>
        <p className="info-card-text-sm">{weddingInfo.venue.address}</p>
        <p className="info-card-text-sm">{weddingInfo.venue.city}</p>
        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(weddingInfo.venue.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="info-card-link"
        >
          {t('details.infoCards.getDirections')} →
        </a>
      </Card>

      {/* Schedule card with time on top */}
      <div className="info-card-schedule-wrapper">
        <Card className="info-card detail-card">
          <Clock className="info-card-icon" />
          <h3 className="info-card-title">{t('details.infoCards.schedule')}</h3>
          {schedule.date && <p className="info-card-text mt-2">{schedule.date}</p>}

          <div className="schedule-list">
            {items.map((item, idx) => (
              <div key={idx} className="schedule-item">
                {/* Time now on top */}
                <div className="schedule-time">
                  {item.time}
                </div>
                
                {/* Content below time */}
                <div className="schedule-content">
                  <div className="schedule-title">
                    {item.title}
                  </div>
                  
                  {item.description && (
                    <div className="schedule-description">
                      {item.description}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};