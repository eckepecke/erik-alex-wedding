import React from "react";
import { Header } from "@components/layout/Header";
import './PageSection.css';
import './RSVP.css';
import { useWeddingInfo } from "../hooks/useWeddingInfo"
import { useTranslation } from '../hooks/useTranslations';

export default function RSVP() {
  const weddingInfo = useWeddingInfo();
  const { t } = useTranslation();
  const FORM_URL = import.meta.env.VITE_FORM_URL;

  return (
    <>
      <Header
        title={t('rsvp.title')}
        subtitle={t('rsvp.subtitle')}
      />

      <section className="page-section">
        {/* Intro text */}
        <div className="page-section-container mb-12">
          <h2 className="page-section-title">
            {t('rsvp.sectionTitle')}
          </h2>
          <p className="page-section-subtitle">
            {t('rsvp.sectionSubtitle')}
          </p>
        </div>

        {/* Embedded Google Form */}
        <div className="card-wedding w-full max-w-3xl p-4 md:p-6">
          <div className="aspect-[3/2] sm:aspect-[4/3]">
            <iframe
              src={FORM_URL}
              width="100%"
              height="100%"
              frameBorder="0"
              marginHeight="0"
              marginWidth="0"
              title={t('rsvp.formTitle')}
              className="w-full h-[80vh] rounded-xl"
            >
              {t('rsvp.loadingText')}
            </iframe>
          </div>
        </div>

        {/* Optional footer note */}
        <p className="page-section-note">
          {t('rsvp.footerNote')}
        </p>
      </section>
    </>
  );
}


// import React from "react";
// import { Header } from "@components/layout/Header";
// import './PageSection.css';
// import './RSVP.css';
// import { useWeddingInfo } from "../../hooks/useWeddingInfo"
// import { useTranslation } from '../../hooks/useTranslations';

// export default function RSVP() {
//   const weddingInfo = useWeddingInfo();
//   const { t } = useTranslation();
//   const FORM_URL = import.meta.env.VITE_FORM_URL;

//   return (
//     <>
//       <Header
//         title="RSVP"
//         subtitle="We can’t wait to celebrate with you!"
//       />

//       <section className="page-section">
//         {/* Intro text */}
//         <div className="page-section-container mb-12">
//           <h2 className="page-section-title">
//             Let us know if you’ll be joining us
//           </h2>
//           <p className="page-section-subtitle">
//             Please take a moment to fill out the form below and share your
//             details.
//           </p>
//         </div>

//         {/* Embedded Google Form */}
//         <div className="card-wedding w-full max-w-3xl p-4 md:p-6">
//           <div className="aspect-[3/2] sm:aspect-[4/3]">
//             <iframe
//               src={FORM_URL}
//               width="100%"
//               height="100%"
//               frameBorder="0"
//               marginHeight="0"
//               marginWidth="0"
//               title="RSVP Form"
//               className="w-full h-[80vh] rounded-xl"
//             >
//               Loading…
//             </iframe>
//           </div>
//         </div>

//         {/* Optional footer note */}
//         <p className="page-section-note">
//           Your responses are private and will only be seen by us.
//         </p>
//       </section>
//     </>
//   );
// }
