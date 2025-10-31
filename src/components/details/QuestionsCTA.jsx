import React from 'react';
import { WEDDING_INFO } from '@utils/constants';

export const QuestionsCTA = () => {
  return (
    <section className="py-16">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h3 className="text-2xl font-serif text-gray-800 mb-4">
          Have Questions?
        </h3>
        <p className="text-gray-600 mb-6">
          If you need any additional information, please don't hesitate to reach out.
        </p>
        <a 
          href={`mailto:${WEDDING_INFO.email}`}
          className="text-rose-500 hover:text-rose-600 font-medium"
        >
          {WEDDING_INFO.email}
        </a>
      </div>
    </section>
  );
};