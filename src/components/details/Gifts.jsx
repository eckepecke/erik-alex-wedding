import React from 'react';
import { Card } from '../ui/Card';
import { Gift } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './Gifts.css';

export const Gifts = () => {
  const { t } = useTranslation();

  return (
    <Card className="gifts-card">
      <div className="gifts-content">
        <div className="gifts-icon">
          <Gift className="w-10 h-10" />
        </div>
        <div className="gifts-text">
          <h3 className="gifts-title">{t('details.registry.title')}</h3>
          <p className="gifts-description">{t('details.registry.description')}</p>
          <a 
            href="/registry"
            className="gifts-link"
          >
            {t('details.registry.button')}
          </a>
        </div>
      </div>
    </Card>
  );
};
