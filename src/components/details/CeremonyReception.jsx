import React from 'react';
import { Card } from '../ui/Card';
import { Music, Utensils } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import { useTranslation } from '../../hooks/useTranslations';
import './CeremonyReception.css';

export const CeremonyReception = () => {
  const { weddingInfo } = useWeddingInfo();
  const { t } = useTranslation();

  return (
    <div className="ceremony-reception-grid">
      <Card>
        <h3 className="ceremony-reception-title">
          <Music className="ceremony-reception-icon" />
          {t('details.ceremonyReception.ceremony')}
        </h3>
        <p className="ceremony-reception-text">
          {t('details.ceremonyReception.ceremonyDescription', { venueName: weddingInfo.venue.name })}
        </p>
        <ul className="ceremony-reception-list">
          <li>{t('details.ceremonyReception.duration')}</li>
          <li>{t('details.ceremonyReception.seating')}</li>
          <li>{t('details.ceremonyReception.weatherBackup')}</li>
          <li>{t('details.ceremonyReception.unplugged')}</li>
        </ul>
      </Card>

      <Card>
        <h3 className="ceremony-reception-title">
          <Utensils className="ceremony-reception-icon" />
          {t('details.ceremonyReception.reception')}
        </h3>
        <p className="ceremony-reception-text">
          {t('details.ceremonyReception.receptionDescription')}
        </p>
        <ul className="ceremony-reception-list">
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
