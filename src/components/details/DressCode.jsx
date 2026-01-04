import React from 'react';
import { Card } from '../ui/Card';
import { Shirt } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './DressCode.css';

export const DressCode = () => {
  const { t } = useTranslation();

  return (
    <Card className="dresscode-card">
      <div className="dresscode-content">
        <div className="dresscode-icon">
          <Shirt />
        </div>
        <div className="dresscode-text">
          <h3 className="dresscode-title">{t('details.dressCode.title')}</h3>
          <p className="dresscode-subtitle">{t('details.dressCode.attire')}</p>
          <p className="dresscode-paragraph">
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
