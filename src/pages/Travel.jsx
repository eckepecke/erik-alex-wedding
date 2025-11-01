import React from 'react';
import { Header } from '@components/layout/Header';
import { Card } from '@components/ui/Card';
import { Plane, MapPin, Hotel, Bus } from 'lucide-react';

const Travel = () => {
  return (
    <>
      <Header 
        title="Travel & Stay" 
        subtitle="How to reach us and where to rest your head"
      />

      {/* Getting There */}
      <section className="max-w-4xl mx-auto px-6 py-16 space-y-12">
        <Card>
          <div className="flex items-center gap-4 mb-6">
            <Plane className="w-8 h-8 text-rose-500" />
            <h2 className="text-2xl font-serif text-gray-800">Getting to Vienna</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-4">
            Most guests will arrive through <strong>Vienna International Airport (VIE)</strong>. 
            From there, it’s easy to reach the city center using one of the following options:
          </p>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li><strong>City Airport Train (CAT):</strong> 16 minutes to Wien Mitte station.</li>
            <li><strong>S-Bahn (S7):</strong> about 25 minutes to the city center, budget-friendly.</li>
            <li><strong>Taxi or Uber:</strong> 25–30 minutes depending on traffic.</li>
            <li><strong>Airport Bus:</strong> Direct service to Schwedenplatz or Westbahnhof.</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">
            Once you’re in the city center, <strong>we’ll arrange a private shuttle</strong> to the 
            wedding location (approximately 40 minutes away). Shuttle details and pick-up times 
            will be shared closer to the date.
          </p>
        </Card>

        {/* Where to Stay */}
        <Card>
          <div className="flex items-center gap-4 mb-6">
            <Hotel className="w-8 h-8 text-rose-500" />
            <h2 className="text-2xl font-serif text-gray-800">Where to Stay</h2>
          </div>
          <p className="text-gray-600 leading-relaxed mb-6">
            We’ve put together a few nearby places to make your stay comfortable.  
            Whether you’re looking for a cozy pension or a full-service hotel, you’ll find something below.
          </p>

          <div className="grid sm:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-800">🏨 Hotel Wiental</h3>
              <p className="text-gray-600">From 1 night • <a href="mailto:info@wiental.com" className="text-rose-500 hover:underline">info@wiental.com</a></p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">🏡 Wolf Hof Apartments</h3>
              <p className="text-gray-600">From 3 nights • <a href="mailto:zimmer@wolfhof.at" className="text-rose-500 hover:underline">zimmer@wolfhof.at</a></p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">🌲 Almstüberl</h3>
              <p className="text-gray-600">From 1 night • <a href="mailto:berger@pension-almstueberl.at" className="text-rose-500 hover:underline">berger@pension-almstueberl.at</a></p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">☕ Café Pension Fam. Parzer</h3>
              <p className="text-gray-600"><a href="mailto:pension.parzer@aon.at" className="text-rose-500 hover:underline">pension.parzer@aon.at</a></p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">🏨 Hotel Rosner</h3>
              <p className="text-gray-600">From 1 night • <a href="mailto:office@hotel-rosner.at" className="text-rose-500 hover:underline">office@hotel-rosner.at</a></p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">🍽️ Corso Bed & Breakfast & Café</h3>
              <p className="text-gray-600">Comfortable and welcoming, close to the venue.</p>
            </div>
            <div>
              <h3 className="text-lg font-medium text-gray-800">🏔️ Hotel-Restaurant Stockinger</h3>
              <p className="text-gray-600"><a href="mailto:fo@hotel-stockinger.at" className="text-rose-500 hover:underline">fo@hotel-stockinger.at</a></p>
            </div>
          </div>
        </Card>

        {/* Transfer Info */}
        <Card>
          <div className="flex items-center gap-4 mb-6">
            <Bus className="w-8 h-8 text-rose-500" />
            <h2 className="text-2xl font-serif text-gray-800">Transfers</h2>
          </div>
          <p className="text-gray-600 leading-relaxed">
            Shuttle transfers between Vienna city center and the wedding venue will be arranged for all guests.  
            We’ll provide detailed pick-up points and times as the date approaches, so you can travel without worries.  
            If you have any mobility concerns or special requests, please let us know in advance.
          </p>
        </Card>
      </section>
    </>
  );
};

export default Travel;
