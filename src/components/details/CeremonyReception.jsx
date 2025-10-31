import React from 'react';
import { Card } from '@components/ui/Card';
import { Music, Utensils } from 'lucide-react';
import { WEDDING_INFO } from '../../utils/constants.jsx'

export const CeremonyReception = () => {
  return (
    <div className="grid md:grid-cols-2 gap-8 mb-8">
      <Card>
        <h3 className="text-2xl font-serif text-gray-800 mb-4 flex items-center gap-3">
          <Music className="w-8 h-8 text-rose-400" />
          Ceremony
        </h3>
        <p className="text-gray-600 mb-3">
          Our ceremony will take place at {WEDDING_INFO.venue.name} in Wiener Wald. 
          The outdoor setting provides a romantic backdrop as we exchange our vows.
        </p>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Duration: Approximately 30 minutes</li>
          <li>• Seating will be provided</li>
          <li>• Weather backup plan in place</li>
          <li>• Unplugged ceremony (no phones please)</li>
        </ul>
      </Card>

      <Card>
        <h3 className="text-2xl font-serif text-gray-800 mb-4 flex items-center gap-3">
          <Utensils className="w-8 h-8 text-rose-400" />
          Reception
        </h3>
        <p className="text-gray-600 mb-3">
          Following the ceremony, join us for cocktails, dinner, and dancing under 
          the stars in the palace ballroom.
        </p>
        <ul className="space-y-2 text-gray-600 text-sm">
          <li>• Welcome drinks & canapés</li>
          <li>• Three-course seated dinner</li>
          <li>• Open bar all evening</li>
          <li>• Live band & DJ</li>
          <li>• Late night snacks</li>
        </ul>
      </Card>
    </div>
  );
};