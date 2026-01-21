import React from "react";
import { Card } from '@components/ui/Card';
import { MapPin } from 'lucide-react';
import { useWeddingInfo } from "../../hooks/useWeddingInfo"
import { useTranslation } from '../../hooks/useTranslations';

export default function Hotels() {
  const { weddingInfo, travel } = useWeddingInfo();
  const { t } = useTranslation();

  return (
    <>
      <Card className="travel-card detail-card">
        <div className="flex items-center gap-4 mb-6">
          <MapPin className="detail-item-icon" />
          <h2>{travel?.hotels?.title || t('travel.hotels.title')}</h2>
        </div>
        
        <p className="mb-6">
          {travel?.hotels?.intro || t('travel.hotels.intro')}
        </p>

        <div className="mb-6">
          <p className="mb-2">
            {/* Use dangerouslySetInnerHTML for HTML content like <strong> tags */}
            <span dangerouslySetInnerHTML={{ 
              __html: travel?.hotels?.whereToStay || t('travel.hotels.whereToStay') 
            }} />
          </p>
          <p className="mb-2">
            <span dangerouslySetInnerHTML={{ 
              __html: travel?.hotels?.moreOfVienna || t('travel.hotels.moreOfVienna') 
            }} />
          </p>
          <p className="mb-2">
            {travel?.hotels?.details || t('travel.hotels.details')}
          </p>
        </div>

        {/* Hardcoded map iframe (exactly like old version) */}
        <iframe
          style={{ border: 0, width: "100%", height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d73251.50596486765!2d16.178208711592323!3d48.199762337364085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d9fed2beb09cf%3A0xfc08f4c1d8c6a760!2sMirli!5e0!3m2!1sde!2sus!4v1768560312257!5m2!1sde!2sus"
          allowFullScreen
          title="Hotel Map"
        ></iframe>
      </Card>
    </>
  );
}

// import React from "react";
// import { Card } from '@components/ui/Card';
// import { Hotel, MapPin } from 'lucide-react';
// import { useWeddingInfo } from "../../hooks/useWeddingInfo"
// import { useTranslation } from '../../hooks/useTranslations';

// export default function Hotels() {
//   const mapImg = `${import.meta.env.BASE_URL}assets/map.png`;
//   const { weddingInfo } = useWeddingInfo();
//   const { t } = useTranslation();

//   return (

//     <>
//         <Card className="travel-card detail-card">
//           <div className="flex items-center gap-4 mb-6">
//             <MapPin className="detail-item-icon" />
//             <h2>Where to Stay</h2>
//           </div>
//           <p className="mb-6">
//             Vienna has a lot to offer and there are plenty of hotels to choose from.
//           </p>

//           <div className="mb-6">
//             <p className="mb-2">Where you should stay depends on what you are looking for on your trip. If you are mainly looking for <strong>easy access to the wedding location</strong>, there are some hotels and B&B in Wienerwald that you could consider. 
//                 <strong> If you plan to see more of Vienna</strong>, you might prefer to stay in the city.</p>
//             <p className="mb-2">
//             We live near Schloss Schönbrunn, but Vienna has many wonderful neighborhoods, so feel free to choose an area that suits your interests. Please note that some hotels may already be fully booked, and waiting too long could make it harder to find a good option. If you choose to stay on the outskirts of the city, reaching the shuttle pick-up and drop-off location (details will be shared in the coming weeks) may be less convenient. That said, Vienna’s public transport system is excellent, and as long as you stay near a metro station, you’ll be able to get around easily and efficiently.
//             </p>
//           </div>

//         <iframe
//         style={{ border: 0, width: "100%", height: "400px" }}
//         src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d73251.50596486765!2d16.178208711592323!3d48.199762337364085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d9fed2beb09cf%3A0xfc08f4c1d8c6a760!2sMirli!5e0!3m2!1sde!2sus!4v1768560312257!5m2!1sde!2sus"
//         allowFullScreen
//         ></iframe>

//         </Card>
//     </>
//   );
// }
