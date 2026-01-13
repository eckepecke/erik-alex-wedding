import React from 'react';
import { Card } from '../ui/Card';
import { Music, Utensils } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import { useTranslation } from '../../hooks/useTranslations';
import './CeremonyReception.css';
import '../../pages/commons.css';


export const CeremonyReception = () => {
  const { weddingInfo } = useWeddingInfo();
  const { t } = useTranslation();

  return (
    <div className="ceremony-reception-grid">
      <Card className="detail-card">
        <h3 className="detail-item-title">
          <Music className="detail-item-icon" />
          {t('details.ceremonyReception.ceremony')}
        </h3>
        <p className="detail-item-text">
          {t('details.ceremonyReception.ceremonyDescription', { venueName: weddingInfo.venue.name })}
        </p>
        <ul className="detail-item-list">
          <li>{t('details.ceremonyReception.duration')}</li>
          <li>{t('details.ceremonyReception.seating')}</li>
          <li>{t('details.ceremonyReception.weatherBackup')}</li>
          <li>{t('details.ceremonyReception.unplugged')}</li>
        </ul>
      </Card>

      <Card className="detail-card">
        <h3 className="detail-item-title">
          <Utensils className="ceremony-reception-icon" />
          {t('details.ceremonyReception.reception')}
        </h3>
        <p className="detail-item-text">
          {t('details.ceremonyReception.receptionDescription')}
        </p>
        <ul className="detail-item-list">
          <li>{t('details.ceremonyReception.welcomeDrinks')}</li>
          <li>{t('details.ceremonyReception.dinner')}</li>
          <li>{t('details.ceremonyReception.openBar')}</li>
          <li>{t('details.ceremonyReception.liveMusic')}</li>
          <li>{t('details.ceremonyReception.lateSnacks')}</li>
        </ul>
      </Card>
    </div>
  );
};
