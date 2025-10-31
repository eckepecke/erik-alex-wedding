import React from 'react';
import { Header } from '../components/layout/Header';
import { InfoCards } from '../components/details/InfoCards';
import { DressCode } from '../components/details/DressCode';
import { CeremonyReception } from '../components/details/CeremonyReception';
import { Photography } from '../components/details/Photography';
import { Registry } from '../components/details/Registry';
import { ImportantNotes } from '../components/details/ImportantNotes';
import { QuestionsCTA } from '../components/details/QuestionsCTA';
import { useTranslation } from '../hooks/useTranslations';

const Details = () => {
  const { t } = useTranslation();

  return (
    <>
      <Header 
        title={t('details.title')} 
        subtitle={t('details.subtitle')}
      />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <InfoCards />
        <DressCode />
        <CeremonyReception />
        <Photography />
        <Registry />
      </div>

      <ImportantNotes />
      <QuestionsCTA />
    </>
  );
};

export default Details;