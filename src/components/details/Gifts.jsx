import React from 'react';
import { Card } from '../ui/Card';
import { Gift } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './Gifts.css';
import '../../pages/commons.css';


export const Gifts = () => {
  const { t } = useTranslation();

  return (
    <Card className="detail-card">

        <div className="flex items-center gap-4 mb-6">
            <Gift className="detail-item-icon" />
            <h2>{t('details.registry.title')}</h2>
        </div>
        <div className="detail-item-text">
          <p className="detail-item-paragraph">{t('details.registry.description')}</p>
        </div>
    </Card>
  );
};
