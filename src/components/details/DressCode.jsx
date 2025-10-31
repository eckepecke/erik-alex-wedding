import React from 'react';
import { Card } from '../ui/Card';
import { Shirt } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';

export const DressCode = () => {
  const { t } = useTranslation();

  return (
    <Card className="mb-8">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Shirt className="w-10 h-10 text-rose-400" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-serif text-gray-800 mb-3">{t('details.dressCode.title')}</h3>
          <p className="text-lg text-gray-700 font-medium mb-2">{t('details.dressCode.attire')}</p>
          <p className="text-gray-600 mb-3">
            {t('details.dressCode.description')}
          </p>
          <div className="bg-rose-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>{t('details.dressCode.noteStrong')}</strong> {t('details.dressCode.noteText')}
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};