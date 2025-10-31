// ============================================
// src/App.jsx
// ============================================
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navigation } from '@components/layout/Navigation';
import { Footer } from '@components/layout/Footer';
import { useScrollToTop } from '@hooks/useScrollToTop';

// Lazy load pages
import Home from '@pages/Home';
import Story from '@pages/Story';
import Details from '@pages/Details';
// import Travel from '@pages/Travel';
// import RSVP from '@pages/RSVP';
// import Registry from '@pages/Registry';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white">
        <Navigation />
        <main className="pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/story" element={<Story />} />
            <Route path="/details" element={<Details />} />

            {/* Uncomment as you create these pages
            <Route path="/travel" element={<Travel />} />
            <Route path="/rsvp" element={<RSVP />} />
            <Route path="/registry" element={<Registry />} />
            */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;