import React from 'react';
import { Card } from '../ui/Card';
import { Camera } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';

export const Photography = () => {
  const { t } = useTranslation();

  return (
    <Card className="mb-8">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Camera className="w-10 h-10 text-rose-400" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-serif text-gray-800 mb-3">{t('details.photography.title')}</h3>
          <p className="text-gray-600 mb-3">
            {t('details.photography.description')}
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>{t('details.photography.unpluggedStrong')}</strong> {t('details.photography.unpluggedText')}</li>
            <li>• <strong>{t('details.photography.shareStrong')}</strong> {t('details.photography.shareText')} <span className="text-rose-500 font-medium">#AlexandraAndErik2026</span> {t('details.photography.shareTextAfter')}</li>
            <li>• <strong>{t('details.photography.professionalStrong')}</strong> {t('details.photography.professionalText')}</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};