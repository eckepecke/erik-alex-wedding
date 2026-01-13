import React from 'react';
import { Card } from '../ui/Card';
import { Shirt } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './DressCode.css';
import '../../pages/commons.css';

const dressImages = [
  '/assets/dress-1.jpeg',
  '/assets/dress-2.jpeg',
  '/assets/dress-3.jpeg',
];

const suitImages = [
  '/assets/suit-1.jpeg',
  '/assets/suit-2.jpeg',
  '/assets/suit-3.jpeg',
//   '/assets/suit-4.jpeg',
//   '/assets/suit-5.jpeg',
];

export const DressCode = () => {
  const { t } = useTranslation();

  return (
    <Card className="detail-card">
        <div className="flex items-center gap-4 mb-6">
            <Shirt className="detail-item-icon" />
            <h2>{t('details.dressCode.title')}</h2>
        </div>

        <div className="detail-item-text">

          <p className="detail-item-subtitle">
            {t('details.dressCode.attire')}
          </p>

          <p className="detail-item-paragraph">
            {t('details.dressCode.description')}
          </p>

          <div className="dresscode-note">
            <p>
              <strong>{t('details.dressCode.noteStrong')}</strong>{' '}
              {t('details.dressCode.noteText')}
            </p>
          </div>

          {/* Inspiration gallery */}
          <div className="dresscode-gallery">

            <div className="dresscode-gallery-group">

              <div className="dresscode-gallery-grid">
                {dressImages.map((src) => (
                  <img key={src} src={src} alt="Dress inspiration" />
                ))}
              </div>
            </div>
            <div className="dresscode-gallery-group">
              <div className="dresscode-gallery-grid">
                {suitImages.map((src) => (
                  <img key={src} src={src} alt="Suit inspiration" />
                ))}
              </div>
            </div>
          </div>
        </div>
    </Card>
  );
};
