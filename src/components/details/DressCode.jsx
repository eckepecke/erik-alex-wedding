import React from 'react';
import { Card } from '../ui/Card';
import { Shirt } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './DressCode.css';
import './commons.css';

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
    <Card className="dresscode-card detail-card">
      <div className="dresscode-content">
        <div className="dresscode-icon detail-item-icon">
          <Shirt />
        </div>

        <div className="detail-item-text">
          <h3 className="detail-item-title">
            {t('details.dressCode.title')}
          </h3>

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
            <h4 className="dresscode-gallery-title">
              {t('details.dressCode.inspiration')}
            </h4>

            <div className="dresscode-gallery-group">
              <span className="dresscode-gallery-label">
                {t('details.dressCode.dresses')}
              </span>
              <div className="dresscode-gallery-grid">
                {dressImages.map((src) => (
                  <img key={src} src={src} alt="Dress inspiration" />
                ))}
              </div>
            </div>

            <div className="dresscode-gallery-group">
              <span className="dresscode-gallery-label">
                {t('details.dressCode.suits')}
              </span>
              <div className="dresscode-gallery-grid">
                {suitImages.map((src) => (
                  <img key={src} src={src} alt="Suit inspiration" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
