import React from 'react';
import { useTranslation } from '../../hooks/useTranslations';
import './ImportantNotes.css';
import '../../pages/commons.css';


export const ImportantNotes = () => {
  const { t } = useTranslation();

  return (
    <section className="important-notes-section">
      <div className="important-notes-container">
        <h2 className="important-notes-title">
          {t('details.importantNotes.title')}
        </h2>
        <div className="important-notes-grid">
          <div className="important-note-card">
            <h4>{t('details.importantNotes.shuttle.title')}</h4>
            <p>{t('details.importantNotes.shuttle.description')}</p>
          </div>
          <div className="important-note-card">
            <h4>{t('details.importantNotes.parking.title')}</h4>
            <p>{t('details.importantNotes.parking.description')}</p>
          </div>
          <div className="important-note-card">
            <h4>{t('details.importantNotes.children.title')}</h4>
            <p>{t('details.importantNotes.children.description')}</p>
          </div>
          <div className="important-note-card">
            <h4>{t('details.importantNotes.dietary.title')}</h4>
            <p>{t('details.importantNotes.dietary.description')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
