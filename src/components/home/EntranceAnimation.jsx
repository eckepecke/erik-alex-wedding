// ============================================
// src/components/home/EntranceAnimation.jsx
// ============================================
import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

export const EntranceAnimation = ({ onComplete, brideNames = "Sarah & James" }) => {
  const [fadeAnimation, setFadeAnimation] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFadeAnimation(true), 500);
    const timer2 = setTimeout(() => onComplete(), 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 gradient-hero flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-light rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" 
          style={{ animationDelay: '1s' }}
        ></div>
      </div>

      {/* Entrance animation */}
      <div 
        className={`relative z-10 text-center transition-all duration-[2000ms] ${
          fadeAnimation ? 'opacity-100 scale-100 animate-fadeIn' : 'opacity-0 scale-95'
        }`}
      >
        <div className="mb-8">
          <Heart className="w-16 h-16 mx-auto text-primary animate-float" />
        </div>
        <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4 tracking-tight">
          {brideNames}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 font-light italic">
          are getting married
        </p>
      </div>
    </div>
  );
};
