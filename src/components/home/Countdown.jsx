// ============================================
// src/components/home/Countdown.jsx
// ============================================
import React, { useState, useEffect } from 'react';
import { useTranslation } from '../../hooks/useTranslations';
import './Countdown.css';

export const Countdown = ({ weddingDate = '2025-08-15T16:00:00' }) => {
  const { t } = useTranslation();
  const targetDate = new Date(weddingDate);

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        clearInterval(timer);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const countdownItems = [
    { value: timeLeft.days, label: t('countdown.days', 'Days') },
    { value: timeLeft.hours, label: t('countdown.hours', 'Hours') },
    { value: timeLeft.minutes, label: t('countdown.minutes', 'Minutes') },
    { value: timeLeft.seconds, label: t('countdown.seconds', 'Seconds') }
  ];

  return (
    <div className="countdown-container">
      <div className="countdown-grid">
        {countdownItems.map(({ value, label }) => (
          <div key={label} className="countdown-card">
            <div className="countdown-value">{value}</div>
            <div className="countdown-label">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};