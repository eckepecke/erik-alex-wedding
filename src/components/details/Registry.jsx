import React from 'react';
import { Card } from '../ui/Card';
import { Gift } from 'lucide-react';
import { useTranslation } from '../../hooks/useTranslations';

export const Registry = () => {
  const { t } = useTranslation();

  return (
    <Card>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Gift className="w-10 h-10 text-rose-400" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-serif text-gray-800 mb-3">{t('details.registry.title')}</h3>
          <p className="text-gray-600 mb-4">
            {t('details.registry.description')}
          </p>
          <a 
            href="/registry"
            className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            {t('details.registry.button')}
          </a>
        </div>
      </div>
    </Card>
  );
};