import React from 'react';
import { Header } from '../components/layout/Header';
import { InfoCards } from '../components/details/InfoCards';
import { DressCode } from '../components/details/DressCode';
import { CeremonyReception } from '../components/details/CeremonyReception';
import { Photography } from '../components/details/Photography';
import { Gifts } from '../components/details/Gifts';
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
    <div className="page-section"> {/* Full-width background wrapper */}

      <div className="container-custom py-16">
        <InfoCards />
        <DressCode />
        <CeremonyReception />
        <Photography />
        <Gifts />
      </div>
    </div>


      <ImportantNotes />
      <QuestionsCTA />
    </>
  );
};

export default Details;
