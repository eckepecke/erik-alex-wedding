import React from 'react';
import { Card } from '../ui/Card';
import { Camera } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';
import './Photography.css';

export const Photography = () => {
  const { t } = useTranslation();

  return (
    <Card className="photography-card">
      <div className="photography-content">
        <div className="photography-icon">
          <Camera className="w-10 h-10" />
        </div>
        <div className="photography-text">
          <h3 className="photography-title">{t('details.photography.title')}</h3>
          <p className="photography-description">{t('details.photography.description')}</p>
          <ul className="photography-list">
            <li>
              • <strong>{t('details.photography.unpluggedStrong')}</strong> {t('details.photography.unpluggedText')}
            </li>
            <li>
              • <strong>{t('details.photography.shareStrong')}</strong> {t('details.photography.shareText')} 
              <span className="photography-hash"> #AlexandraAndErik2026</span> {t('details.photography.shareTextAfter')}
            </li>
            <li>
              • <strong>{t('details.photography.professionalStrong')}</strong> {t('details.photography.professionalText')}
            </li>
          </ul>
        </div>
      </div>
    </Card>
  );
};
