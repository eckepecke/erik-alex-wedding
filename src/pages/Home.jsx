// ============================================
// src/pages/Home.jsx
// ============================================
import React from 'react';
import { Hero } from '@components/home/Hero';
import { Countdown } from '@components/home/Countdown';
import { Link } from 'react-router-dom';
import { Button } from '@components/ui/Button';
import { useTranslation } from '../hooks/useTranslations';

const Home = () => {
  const { t } = useTranslation();

  return (
    <>
      <Hero />
      <Countdown />
      
      {/* Quick Links */}
      <section className="py-20 bg-rose-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif text-gray-800 mb-8">
            {t('home.quickLinks.title')}
          </h2>
          <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
            {t('home.quickLinks.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/rsvp">
              <Button size="lg">{t('home.quickLinks.rsvp')}</Button>
            </Link>
            <Link to="/details">
              <Button size="lg" variant="outline">{t('home.quickLinks.details')}</Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;