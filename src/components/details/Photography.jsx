import React from 'react';
import { Card } from '@components/ui/Card';
import { Camera } from 'lucide-react';

export const Photography = () => {
  return (
    <Card className="mb-8">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Camera className="w-10 h-10 text-rose-400" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-serif text-gray-800 mb-3">Photography</h3>
          <p className="text-gray-600 mb-3">
            We've hired professional photographers to capture every moment of our special day. 
            To ensure they can do their best work and that we can all be truly present:
          </p>
          <ul className="space-y-2 text-gray-600">
            <li>• <strong>Unplugged Ceremony:</strong> Please keep phones and cameras away during the ceremony</li>
            <li>• <strong>Share Your Photos:</strong> Use our hashtag <span className="text-rose-500 font-medium">#SarahAndJames2026</span> for reception photos</li>
            <li>• <strong>Professional Photos:</strong> Will be shared with all guests after the wedding</li>
          </ul>
        </div>
      </div>
    </Card>
  );
};