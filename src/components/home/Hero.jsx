// ============================================
// src/components/home/Hero.jsx
// ============================================
import React from 'react';
import { Heart } from 'lucide-react';
import { useWeddingInfo } from '../../hooks/useWeddingInfo';
import poseImage from '../../assets/pose.jpeg';

export const Hero = () => {
  const { weddingInfo } = useWeddingInfo();

  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-pink-50">
      <div className="text-center px-4">
        <Heart className="w-16 h-16 text-rose-400 mx-auto mb-6 animate-pulse" />
        <h1 className="text-6xl md:text-8xl font-serif text-gray-800 mb-4">
          {weddingInfo.bride} & {weddingInfo.groom}
        </h1>
        <p className="text-2xl md:text-3xl text-gray-600 font-light">
          {weddingInfo.date}
        </p>
        <p className="text-xl text-gray-500 mt-2">
          {weddingInfo.venue.city}, {weddingInfo.venue.country}
        </p>
      </div>

      {/* Background Image - Use imported image */}
      <div className="absolute inset-0">
        <img 
          src={poseImage}
          alt={`${weddingInfo.bride} and ${weddingInfo.groom}`} 
          className="w-full h-full object-cover opacity-40"
        />
      </div>
    </section>
  );
};