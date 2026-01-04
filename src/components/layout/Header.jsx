import React from 'react';
import { Heart } from 'lucide-react';

import './Header.css';


export const Header = ({
  title,
  subtitle,
  showHeart = true,
  className = '',
}) => {
  return (
    <header className={`header ${className}`}>
      <div className="header-inner">
        {showHeart && <Heart className="header-heart" />}

        <h1 className="header-title">{title}</h1>

        {subtitle && (
          <p className="header-subtitle">{subtitle}</p>
        )}
      </div>
    </header>
  );
};
