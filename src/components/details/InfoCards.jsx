import React from 'react';
import { Card } from '@components/ui/Card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { WEDDING_INFO, SCHEDULE } from '@utils/constants';

export const InfoCards = () => {
  return (
    <div className="grid md:grid-cols-3 gap-8 mb-16">
      <Card className="text-center" hover>
        <Calendar className="w-12 h-12 text-rose-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">When</h3>
        <p className="text-gray-600 font-medium">{WEDDING_INFO.date}</p>
        <p className="text-gray-600">{WEDDING_INFO.time}</p>
        <p className="text-sm text-gray-500 mt-2">Ceremony begins promptly</p>
      </Card>

      <Card className="text-center" hover>
        <MapPin className="w-12 h-12 text-rose-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Where</h3>
        <p className="text-gray-600 font-medium">{WEDDING_INFO.venue.name}</p>
        <p className="text-gray-600 text-sm">{WEDDING_INFO.venue.address}</p>
        <p className="text-gray-600 text-sm">{WEDDING_INFO.venue.city}</p>
        <a 
          href={`https://maps.google.com/?q=${encodeURIComponent(WEDDING_INFO.venue.name)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-rose-500 hover:text-rose-600 text-sm mt-2 inline-block"
        >
          Get Directions →
        </a>
      </Card>

      <Card className="text-center" hover>
        <Clock className="w-12 h-12 text-rose-400 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Schedule</h3>
        <div className="space-y-1">
          {SCHEDULE.map((item, idx) => (
            <p key={idx} className="text-gray-600 text-sm">
              <span className="font-medium">{item.time}</span> - {item.event}
            </p>
          ))}
        </div>
      </Card>
    </div>
  );
};