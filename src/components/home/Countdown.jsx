// ============================================
// src/components/home/Countdown.jsx
// ============================================
import React, { useState, useEffect } from 'react';
import { WEDDING_DATE } from '@utils/constants';

export const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const difference = WEDDING_DATE - new Date();
    
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return null;
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!timeLeft) {
    return (
      <div className="text-center py-12">
        <h2 className="text-3xl font-serif text-gray-800">We're Married! 🎉</h2>
      </div>
    );
  }

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-serif text-center text-gray-800 mb-12">
          Counting Down
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {Object.entries(timeLeft).map(([unit, value]) => (
            <div key={unit} className="text-center">
              <div className="text-5xl font-bold text-rose-400 mb-2">
                {value}
              </div>
              <div className="text-gray-600 uppercase text-sm tracking-wider">
                {unit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
