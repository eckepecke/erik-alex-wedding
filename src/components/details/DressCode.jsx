import React from 'react';
import { Card } from '../ui/Card';
import { Shirt } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './DressCode.css';
import './commons.css';


export const DressCode = () => {
  const { t } = useTranslation();

  return (
    <Card className="dresscode-card detail-card">
      <div className="dresscode-content">
        <div className="dresscode-icon detail-item-icon">
          <Shirt />
        </div>
        <div className="detail-item-text">
          <h3 className="detail-item-title">{t('details.dressCode.title')}</h3>
          <p className="detail-item-subtitle">{t('details.dressCode.attire')}</p>
          <p className="detail-item-paragraph">
            {t('details.dressCode.description')}
          </p>
          <div className="dresscode-note">
            <p>
              <strong>{t('details.dressCode.noteStrong')}</strong> {t('details.dressCode.noteText')}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};
