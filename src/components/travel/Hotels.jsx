import React from "react";
import { Card } from '@components/ui/Card';
import { Hotel, MapPin } from 'lucide-react';
import { useWeddingInfo } from "../../hooks/useWeddingInfo"
import { useTranslation } from '../../hooks/useTranslations';


export default function Hotels() {
  const mapImg = `${import.meta.env.BASE_URL}assets/map.png`;
  const { weddingInfo } = useWeddingInfo();
  const { t } = useTranslation();

  return (

    <>
        <Card className="travel-card detail-card">
          <div className="flex items-center gap-4 mb-6">
            <MapPin className="detail-item-icon" />
            <h2>Location</h2>
          </div>
          <p className="mb-6">
            Vienna has a lot to offer and there is plenty of hotels to choose from.
          </p>

          <div className="mb-6">
            <p className="mb-2">Where you should stay depends on what you are looking for on your trip. If you are mainly looking for <strong>easy access to the wedding location</strong>, there are some hotels and B&B in Wienerwald that you could consider. 
                <strong> If you plan to see more of Vienna</strong>, you might want to prefer to stay in the city.</p>
            <p className="mb-2">We are living close to Schloss Schönbrunn, also marked on the map. If you stay in the outskirts of Vienna, be aware that it might be complicated to reach the shuttle pick-up and drop-off location (will be communicated in a few weeks). With that said, the Vienna public transport system is excellent and as long as you stay close to a metro station, you will be able to get anywhere in a reasonable time.</p>
            <p className="text-sm text-gray-600 mt-4">On the map you can see the Vienna and where the wedding is taking place.</p>
          </div>

          <div className="w-full rounded-lg overflow-hidden">
            <img 
              src={mapImg} 
              alt="Map showing Vienna and wedding location" 
              className="w-full h-auto object-cover"
            />
          </div>

            <a
            href={`https://maps.google.com/?q=${encodeURIComponent(weddingInfo.venue.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary underline"
            >
            Open location in Google Maps
            </a>

        </Card>
    </>
  );
}
