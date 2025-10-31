import React from 'react';
import { Card } from '../ui/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import { useTranslation } from '../../hooks/useTranslations';

export const InfoCards = () => {
  const { weddingInfo, schedule } = useWeddingInfo();
  const { t } = useTranslation();

  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <Card className="text-center" hover>
        <Calendar className="w-12 h-12 text-rose-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('details.infoCards.when')}</h3>
        <p className="text-gray-600 font-medium">{weddingInfo.date}</p>
        <p className="text-gray-600">{weddingInfo.time}</p>
        <p className="text-sm text-gray-500 mt-2">{t('details.infoCards.ceremonyPrompt')}</p>
      </Card>

      <Card className="text-center" hover>
        <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('details.infoCards.where')}</h3>
        <p className="text-gray-600 font-medium">{weddingInfo.venue.name}</p>
        <p className="text-gray-600 text-sm">{weddingInfo.venue.address}</p>
        <p className="text-gray-600 text-sm">{weddingInfo.venue.city}</p>
        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(weddingInfo.venue.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-500 hover:text-rose-600 text-sm mt-2 inline-block"
        >
          {t('details.infoCards.getDirections')} →
        </a>
      </Card>

      <Card className="text-center" hover>
        <Clock className="w-12 h-12 text-rose-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{t('details.infoCards.schedule')}</h3>
        <div className="space-y-1">
          {schedule.map((item, idx) => (
            <p key={idx} className="text-gray-600 text-sm">
              <span className="font-medium">{item.time}</span> - {item.event}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};