import React from 'react';
import { useTranslation } from '../../hooks/useTranslations';
import { useWeddingInfo } from "../../hooks/useWeddingInfo"

import './QuestionsCTA.css'
import '../../pages/commons.css';

export const QuestionsCTA = () => { 
  const { weddingInfo } = useWeddingInfo();
  const { t } = useTranslation();

  // Get Erik's email from translations
  const erikEmail = t('contact.erik_email');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(erikEmail)
      .then(() => alert('Email copied to clipboard!'))
      .catch(() => alert('Failed to copy email'));
  };

  return (
    <section className="questions-cta-section">
      <div className="questions-cta-container">
        <h3 className="questions-cta-title">Have Questions?</h3>
        <p className="questions-cta-text">
          If you need any additional information, please don't hesitate to reach out.
        </p>

        {/* Option 1: mailto link */}
        <a 
          href={`mailto:${erikEmail}`}
          className="questions-cta-link"
        >
          {erikEmail}
        </a>

        {/* Option 2: copy to clipboard (optional) */}
        {/* <button onClick={handleCopyEmail} className="questions-cta-link">
          Copy Email
        </button> */}
      </div>
    </section>
  );
};