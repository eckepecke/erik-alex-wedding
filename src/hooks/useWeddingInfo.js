import { useTranslation } from './useTranslations.jsx';
import { WEDDING_INFO, SCHEDULE, WEDDING_DATE } from '@utils/constants';

export const useWeddingInfo = () => {
  const { t, language } = useTranslation();

  // Use translated content if available, fallback to constants
  const weddingInfo = {
    bride: t('wedding.bride') || WEDDING_INFO.bride,
    groom: t('wedding.groom') || WEDDING_INFO.groom,
    date: t('wedding.date') || WEDDING_INFO.date,
    time: t('wedding.time') || WEDDING_INFO.time,
    venue: {
      name: t('wedding.venue.name') || WEDDING_INFO.venue.name,
      address: t('wedding.venue.address') || WEDDING_INFO.venue.address,
      city: t('wedding.venue.city') || WEDDING_INFO.venue.city,
      country: t('wedding.venue.country') || WEDDING_INFO.venue.country,
    }
  };

  const schedule = () => {
    try {
      const translatedSchedule = t('wedding.schedule');

      if (
        translatedSchedule &&
        typeof translatedSchedule === 'object' &&
        Array.isArray(translatedSchedule.items)
      ) {
        return translatedSchedule;
      }
    } catch (e) {
      // fallback
    }

    return SCHEDULE;
  };

  const travel = () => {
    try {
      const translatedTravel = t('travel');

      if (
        translatedTravel &&
        typeof translatedTravel === 'object'
      ) {
        return translatedTravel;
      }
    } catch (e) {
      // fallback
    }

    // Return a default travel object or import from constants
    return {
      title: 'Travel & Stay',
      subtitle: 'How to reach us and where to rest your head',
      gettingToVienna: t('travel.gettingToVienna'),
      gettingToVenue: t('travel.gettingToVenue'),
      transfers: t('travel.transfers')
    };
  };

  return {
    weddingInfo,
    schedule: schedule(),
    travel: travel(),
    weddingDate: WEDDING_DATE,
    rsvpDeadline: WEDDING_INFO.rsvpDeadline,
    email: WEDDING_INFO.email
  };
};