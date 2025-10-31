import React from 'react';
import { Card } from '@components/ui/Card';
import { Gift } from 'lucide-react';

export const Registry = () => {
  return (
    <Card>
      <div className="flex items-start gap-6">
        <div className="flex-shrink-0">
          <Gift className="w-10 h-10 text-rose-400" />
        </div>
        <div className="flex-grow">
          <h3 className="text-2xl font-serif text-gray-800 mb-3">Registry & Gifts</h3>
          <p className="text-gray-600 mb-4">
            Your presence at our wedding is the greatest gift of all. However, if you wish 
            to honor us with a gift, we've registered at a few of our favorite stores.
          </p>
          <a 
            href="/registry"
            className="inline-block bg-rose-400 hover:bg-rose-500 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
          >
            View Registry
          </a>
        </div>
      </div>
    </Card>
  );
};