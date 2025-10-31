import React from 'react';
import { Card } from '../ui/Card';
import { Music, Utensils } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import { useTranslation } from '../../hooks/useTranslations';

export const CeremonyReception = () => {
  const { weddingInfo } = useWeddingInfo();
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <Card>
        <h3 className="text-2xl font-serif text-gray-800 mb-4 flex items-center gap-3">
          <Music className="w-8 h-8 text-rose-400" />
          {t('details.ceremonyReception.ceremony')}
        </h3>
        <p className="text-gray-600 mb-3">
          {t('details.ceremonyReception.ceremonyDescription', { venueName: weddingInfo.venue.name })}
        </p>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• {t('details.ceremonyReception.duration')}</li>
          <li>• {t('details.ceremonyReception.seating')}</li>
          <li>• {t('details.ceremonyReception.weatherBackup')}</li>
          <li>• {t('details.ceremonyReception.unplugged')}</li>
        </ul>
      </Card>

      <Card>
        <h3 className="text-2xl font-serif text-gray-800 mb-4 flex items-center gap-3">
          <Utensils className="w-8 h-8 text-rose-400" />
          {t('details.ceremonyReception.reception')}
        </h3>
        <p className="text-gray-600 mb-3">
          {t('details.ceremonyReception.receptionDescription')}
        </p>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• {t('details.ceremonyReception.welcomeDrinks')}</li>
          <li>• {t('details.ceremonyReception.dinner')}</li>
          <li>• {t('details.ceremonyReception.openBar')}</li>
          <li>• {t('details.ceremonyReception.liveMusic')}</li>
          <li>• {t('details.ceremonyReception.lateSnacks')}</li>
        </ul>
      </Card>
    </div>
  );
};