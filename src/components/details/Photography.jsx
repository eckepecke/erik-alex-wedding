import React from 'react';
import { Card } from '../ui/Card';
import { Camera } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
// import './Photography.css';
import '../../pages/commons.css';


export const Photography = () => {
  const { t } = useTranslation();

  return (
    <Card className="detail-card">
    <div className="flex items-center gap-4 mb-6">
        <Camera className="detail-item-icon" />
        <h2>{t('details.photography.title')}</h2>
    </div>

        {/* Paragraph + List */}
        <div className="photography-text">
        <p className="detail-item-paragraph">{t('details.photography.description')}</p>
        <ul className="space-y-2 detail-item-list mt-4 list-disc list-inside">
            <li>
            <strong>{t('details.photography.unpluggedStrong')}</strong> {t('details.photography.unpluggedText')}
            </li>
            <li>
            <strong>{t('details.photography.shareStrong')}</strong> {t('details.photography.shareText')} 
            <span className="photography-hash"> #AlexandraAndErik2026</span> {t('details.photography.shareTextAfter')}
            </li>
            <li>
            <strong>{t('details.photography.professionalStrong')}</strong> {t('details.photography.professionalText')}
            </li>
        </ul>
        </div>
    </Card>
  );
};
