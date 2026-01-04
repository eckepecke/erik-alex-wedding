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

  return {
    weddingInfo,
    schedule: schedule(),
    weddingDate: WEDDING_DATE,
    rsvpDeadline: WEDDING_INFO.rsvpDeadline,
    email: WEDDING_INFO.email
  };
};