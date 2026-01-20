import React from 'react';
import { Header } from '@components/layout/Header';
import { Card } from '@components/ui/Card';
import { Plane, Hotel, Bus, Trees } from 'lucide-react';
import './Travel.css';
import './PageSection.css';
import './commons.css';
import { useWeddingInfo } from "../hooks/useWeddingInfo"
import { useTranslation } from '../hooks/useTranslations';
import Hotels from '../components/travel/Hotels.jsx';


const Travel = () => {
    const { weddingInfo } = useWeddingInfo();
    const { t } = useTranslation();

  return (
    <>
      <Header 
        title="Travel & Stay" 
        subtitle="How to reach us and where to rest your head"
      />
    <div className="page-section"> {/* Full-width background wrapper */}

    <section className="travel-section w-full max-w-4xl mx-auto px-4 md:px-6 lg:px-8">
        {/* Getting There */}
        <Card className="travel-card detail-card">
          <div className="flex items-center gap-4 mb-6">
            <Plane className="detail-item-icon" />
            <h2>Getting to Vienna</h2>
          </div>
          <p>
            Most guests will arrive through <strong>Vienna International Airport (VIE)</strong>. 
            From there, it’s easy to reach the city center using one of the following options:
          </p>
          <ul className="space-y-2 detail-item-list">
            <li><strong>City Airport Train (CAT):</strong> 16 minutes to Wien Mitte station.</li>
            <li><strong>S-Bahn (S7):</strong> about 25 minutes to the city center, budget-friendly.</li>
            <li><strong>Taxi or Uber:</strong> 25–30 minutes depending on traffic.</li>
            <li><strong>Airport Bus:</strong> Direct service to Schwedenplatz or Westbahnhof.</li>
          </ul>
          <p className="mt-4">
            Once you’re in the city center, <strong>we’ll arrange a private shuttle</strong> to the 
            wedding location (approx. 40 minutes). Details will be shared closer to the date.
          </p>
        </Card>

        {/* Getting To Mirli */}
        <Card className="travel-card detail-card">
            <div className="flex items-center gap-4 mb-6">
                <Trees className="detail-item-icon" />
                <h2>Getting to the Wedding Location</h2>
            </div>

            <p>
                If you are unable to join the arranged shuttle from Vienna, there are several
                easy ways to reach the wedding location on your own.
            </p>

            <ul className="space-y-2 detail-item-list mt-4">
                <li>
                <strong>By car:</strong> The drive from central Vienna takes approximately
                40 minutes. Parking will be available at the venue.
                </li>
                <li>
                <strong>By taxi or ride service:</strong> Taxis and ride-sharing services
                (such as Uber or Bolt) can take you directly to the venue. We recommend
                booking in advance if possible.
                </li>
                <li>
                <strong>By public transport:</strong> Public transport is possible but may
                involve multiple connections. For this reason, we recommend using a car or taxi.
                </li>
            </ul>

            <p className="mt-4">
                You can find the exact location and get turn-by-turn directions using Google Maps:
                <br />
                <a
                href={`https://maps.google.com/?q=${encodeURIComponent(weddingInfo.venue.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary underline"
                >
                Open location in Google Maps
                </a>
            </p>

            <p className="mt-4">
                If you have any trouble finding the venue on the day, don’t hesitate to reach out —
                we’ll be happy to help.
            </p>
        </Card>


        {/* Transfers */}
        <Card className="travel-card detail-card">
          <div className="flex items-center gap-4 mb-6">
            <Bus className="detail-item-icon" />
            <h2>Transfers</h2>
          </div>
          <p>
            Shuttle transfers between Vienna city center and the wedding venue will be arranged.  
            Detailed pick-up points and times will be shared closer to the date.
          </p>
        </Card>


        {/* Where to Stay */}
        <Hotels />
        
      </section>
      </div>
    </>
  );
};

export default Travel;
