// ============================================
// src/components/ui/Card.jsx
// ============================================
import React from 'react';

export const Card = ({ children, className = '', hover = false }) => {
  return (
    <div className={`
      bg-white rounded-lg shadow-lg p-6 
      ${hover ? 'transition-transform hover:scale-105' : ''}
      ${className}
    `}>
      {children}
    </div>
  );
};