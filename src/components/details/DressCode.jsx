import React from 'react';
import { Card } from '@components/ui/Card';
import { Shirt } from 'lucide-react';

export const DressCode = () => {
  return (
    <Card className="mb-8">
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Shirt className="w-10 h-10 text-rose-400" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-serif text-gray-800 mb-3">Dress Code</h3>
          <p className="text-lg text-gray-700 font-medium mb-2">Formal Attire</p>
          <p className="text-gray-600 mb-3">
            We're going elegant! Think cocktail dresses, suits, and your finest evening wear. 
            The ceremony will be outdoors, so consider comfortable shoes for the garden setting.
          </p>
          <div className="bg-rose-50 p-4 rounded-lg">
            <p className="text-sm text-gray-700">
              <strong>Please note:</strong> We kindly request that guests refrain from wearing white, 
              cream, or ivory to allow our bride to shine.
            </p>
          </div>
        </div>
      </div>
    </Card>
  );
};