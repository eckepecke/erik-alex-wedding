import React, { useState } from 'react';
import { Hero } from '../components/home/Hero';
import './Home.css';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  const backgroundImage = "/assets/EA.jpeg";

  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Full-screen background image with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={backgroundImage}
          alt="Wedding background"
          className={`w-full h-full object-cover transition-opacity duration-1000 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setImageLoaded(true)}
        />
        <div className="absolute inset-0 home-bg-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-4 py-12">
        {/* Hero Section */}
        <Hero />

        {/* Scroll indicator */}
        {/* <div className="scroll-indicator">
          <div className="scroll-indicator-inner">
            <div className="scroll-indicator-dot" />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
