import React from 'react';
import { Header } from '@components/layout/Header';
import { Card } from '@components/ui/Card';
import { Plane, Hotel, Bus } from 'lucide-react';
import './Travel.css';
import './PageSection.css';


const Travel = () => {
  return (
    <>
      <Header 
        title="Travel & Stay" 
        subtitle="How to reach us and where to rest your head"
      />

      <section className="travel-section container-custom page-section">
        {/* Getting There */}
        <Card className="travel-card">
          <div className="flex items-center gap-4 mb-6">
            <Plane className="icon" />
            <h2>Getting to Vienna</h2>
          </div>
          <p>
            Most guests will arrive through <strong>Vienna International Airport (VIE)</strong>. 
            From there, it’s easy to reach the city center using one of the following options:
          </p>
          <ul className="space-y-2">
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

        {/* Where to Stay */}
        <Card className="travel-card">
          <div className="flex items-center gap-4 mb-6">
            <Hotel className="icon" />
            <h2>Where to Stay</h2>
          </div>
          <p className="mb-6">
            We’ve put together a few nearby places to make your stay comfortable.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3>🏨 Hotel Wiental</h3>
              <p>From 1 night • <a href="mailto:info@wiental.com">info@wiental.com</a></p>
            </div>
            <div>
              <h3>🏡 Wolf Hof Apartments</h3>
              <p>From 3 nights • <a href="mailto:zimmer@wolfhof.at">zimmer@wolfhof.at</a></p>
            </div>
            <div>
              <h3>🌲 Almstüberl</h3>
              <p>From 1 night • <a href="mailto:berger@pension-almstueberl.at">berger@pension-almstueberl.at</a></p>
            </div>
            <div>
              <h3>☕ Café Pension Fam. Parzer</h3>
              <p><a href="mailto:pension.parzer@aon.at">pension.parzer@aon.at</a></p>
            </div>
            <div>
              <h3>🏨 Hotel Rosner</h3>
              <p>From 1 night • <a href="mailto:office@hotel-rosner.at">office@hotel-rosner.at</a></p>
            </div>
            <div>
              <h3>🍽️ Corso Bed & Breakfast & Café</h3>
              <p>Comfortable and welcoming, close to the venue.</p>
            </div>
            <div>
              <h3>🏔️ Hotel-Restaurant Stockinger</h3>
              <p><a href="mailto:fo@hotel-stockinger.at">fo@hotel-stockinger.at</a></p>
            </div>
          </div>
        </Card>

        {/* Transfers */}
        <Card className="travel-card">
          <div className="flex items-center gap-4 mb-6">
            <Bus className="icon" />
            <h2>Transfers</h2>
          </div>
          <p>
            Shuttle transfers between Vienna city center and the wedding venue will be arranged.  
            Detailed pick-up points and times will be shared closer to the date.
          </p>
        </Card>
      </section>
    </>
  );
};

export default Travel;
