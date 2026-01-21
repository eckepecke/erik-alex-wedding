import React from 'react';
import { Header } from '@components/layout/Header';
import { Card } from '@components/ui/Card';
import { Plane, Hotel, Bus, Trees } from 'lucide-react';
import './Travel.css';
import './PageSection.css';
import './commons.css';
import { useWeddingInfo } from '../hooks/useWeddingInfo';
import { useTranslation } from '../hooks/useTranslations';
import Hotels from '../components/travel/Hotels.jsx';

const Travel = () => {
  const { weddingInfo, travel } = useWeddingInfo();
  const { t } = useTranslation();

  const icons = {
    gettingToVienna: <Plane className="detail-item-icon" />,
    gettingToVenue: <Trees className="detail-item-icon" />,
    transfers: <Bus className="detail-item-icon" />
  };

  const gettingToViennaOptions = travel?.gettingToVienna?.options || [];
  const gettingToVenueOptions = travel?.gettingToVenue?.options || [];

  return (
    <>
      <Header 
        title={travel?.title || t('travel.title')} 
        subtitle={travel?.subtitle || t('travel.subtitle')} 
      />

      <div className="page-section">
        <section className="travel-section w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8">

          {/* Getting to Vienna */}
          <Card className="travel-card detail-card">
            <div className="flex items-center gap-4 mb-6">
              {icons.gettingToVienna}
              <h2>{travel?.gettingToVienna?.title || t('travel.gettingToVienna.title')}</h2>
            </div>
            <p>{travel?.gettingToVienna?.intro || t('travel.gettingToVienna.intro')}</p>
            <ul className="space-y-2 detail-item-list">
              {gettingToViennaOptions.map((option, i) => (
                <li key={i}>
                  <strong>{option.title}:</strong> {option.description}
                </li>
              ))}
            </ul>
            <p className="mt-4">{travel?.gettingToVienna?.shuttleNote || t('travel.gettingToVienna.shuttleNote')}</p>
          </Card>

          {/* Getting to the Wedding Location */}
            <Card className="travel-card detail-card">
            <div className="flex items-center gap-4 mb-6">
                {icons.gettingToVenue}
                <h2>{travel?.gettingToVenue?.title || t('travel.gettingToVenue.title')}</h2>
            </div>
            <p>{travel?.gettingToVenue?.intro || t('travel.gettingToVenue.intro')}</p>
            <ul className="space-y-2 detail-item-list mt-4">
                {gettingToVenueOptions.map((option, i) => (
                <li key={i}>
                    <strong>{option.title}:</strong> {option.description}
                </li>
                ))}
            </ul>
            <p className="mt-4">
                <a
                href={`https://maps.google.com/?q=${encodeURIComponent(weddingInfo.venue.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
                >
                {travel?.gettingToVenue?.mapLinkText || t('travel.gettingToVenue.mapLinkText')}
                </a>
            </p>
            </Card>

          {/* Transfers */}
          <Card className="travel-card detail-card">
            <div className="flex items-center gap-4 mb-6">
              {icons.transfers}
              <h2>{travel?.transfers?.title || t('travel.transfers.title')}</h2>
            </div>
            <p>{travel?.transfers?.description || t('travel.transfers.description')}</p>
          </Card>

          {/* Where to Stay */}
          <Hotels />
          
        </section>
      </div>
    </>
  );
};

export default Travel;