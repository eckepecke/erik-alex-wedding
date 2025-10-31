import React from 'react';
import { Heart } from 'lucide-react';
import { WEDDING_INFO } from '@utils/constants';

export const Header = ({ 
  title, 
  subtitle, 
  showHeart = true,
  className = '' 
}) => {
  return (
    <header className={`bg-gradient-to-br from-rose-100 to-pink-50 py-20 ${className}`}>
      <div className="max-w-4xl mx-auto px-4 text-center">
        {showHeart && (
          <Heart className="w-12 h-12 text-rose-400 mx-auto mb-6" />
        )}
        <h1 className="text-5xl md:text-6xl font-serif text-gray-800 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-xl text-gray-600">
            {subtitle}
          </p>
        )}
      </div>
    </header>
  );
};