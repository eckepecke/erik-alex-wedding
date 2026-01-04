import React from 'react';
import { Card } from '../ui/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import { useTranslation } from '../../hooks/useTranslations';
import './InfoCards.css';

export const InfoCards = () => {
  const { weddingInfo, schedule } = useWeddingInfo();
  const { t } = useTranslation();

  return (
    <div className="info-cards-grid">
      <Card className="info-card" hover>
        <Calendar className="info-card-icon" />
        <h3 className="info-card-title">{t('details.infoCards.when')}</h3>
        <p className="info-card-text">{weddingInfo.date}</p>
        <p className="info-card-text">{weddingInfo.time}</p>
        <p className="info-card-text-sm">{t('details.infoCards.ceremonyPrompt')}</p>
      </Card>

      <Card className="info-card" hover>
        <MapPin className="info-card-icon" />
        <h3 className="info-card-title">{t('details.infoCards.where')}</h3>
        <p className="info-card-text">{weddingInfo.venue.name}</p>
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

      <Card className="info-card" hover>
        <Clock className="info-card-icon" />
        <h3 className="info-card-title">{t('details.infoCards.schedule')}</h3>
        <div className="info-card-schedule">
          {schedule.map((item, idx) => (
            <p key={idx}>
              <span>{item.time}</span> - {item.event}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};
