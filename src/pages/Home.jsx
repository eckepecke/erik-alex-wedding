// ============================================
// src/pages/Home.jsx
// ============================================
import React from 'react';
import { Hero } from '@components/home/Hero';
import { Countdown } from '@components/home/Countdown';
import { Link } from 'react-router-dom';
import { Button } from '@components/ui/Button';

const Home = () => {
  return (
    <>
      <Hero />
      <Countdown />
      
      {/* Quick Links */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">
            Join Us in Celebrating
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            We're so excited to share our special day with you. 
            Please explore our website for all the details you'll need.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rsvp">
              <Button size="lg">RSVP Now</Button>
            </Link>
            <Link to="/details">
              <Button size="lg" variant="outline">View Details</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;