import React from 'react';
import { WEDDING_INFO } from '@utils/constants';
import './QuestionsCTA.css';

export const QuestionsCTA = () => {
  return (
    <section className="questions-cta-section">
      <div className="questions-cta-container">
        <h3 className="questions-cta-title">Have Questions?</h3>
        <p className="questions-cta-text">
          If you need any additional information, please don't hesitate to reach out.
        </p>
        <a 
          href={`mailto:${WEDDING_INFO.email}`}
          className="questions-cta-link"
        >
          {WEDDING_INFO.email}
        </a>
      </div>
    </section>
  );
};
