import React from 'react';
import { useTranslation } from '../../hooks/useTranslations';

export const ImportantNotes = () => {
  const { t } = useTranslation();

  return (
    <section className="bg-rose-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-serif text-center text-gray-800 mb-8">
          {t('details.importantNotes.title')}
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">{t('details.importantNotes.weather.title')}</h4>
            <p className="text-gray-600 text-sm">
              {t('details.importantNotes.weather.description')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">{t('details.importantNotes.parking.title')}</h4>
            <p className="text-gray-600 text-sm">
              {t('details.importantNotes.parking.description')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">{t('details.importantNotes.children.title')}</h4>
            <p className="text-gray-600 text-sm">
              {t('details.importantNotes.children.description')}
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h4 className="font-semibold text-gray-800 mb-2">{t('details.importantNotes.dietary.title')}</h4>
            <p className="text-gray-600 text-sm">
              {t('details.importantNotes.dietary.description')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};