import React from 'react';
import { Card } from '../ui/Card';
import { Gift } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './Gifts.css';
import './commons.css';


export const Gifts = () => {
  const { t } = useTranslation();

  return (
    <Card className="gifts-card detail-card">
      <div className="gifts-content">
        <div className="gifts-icon">
          <Gift className="w-10 h-10" />
        </div>
        <div className="detail-item-text">
          <h3 className="detail-item-title">{t('details.registry.title')}</h3>
          <p className="detail-item-paragraph">{t('details.registry.description')}</p>
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
