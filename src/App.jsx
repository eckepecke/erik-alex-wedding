// ============================================
// src/App.jsx
// ============================================
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { TranslationProvider } from './hooks/useTranslations.jsx';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { useScrollToTop } from './hooks/useScrollToTop.js';

// Lazy load pages
import Home from './pages/Home';
import Details from './pages/Details';
import RSVP from './pages/RSVP';
import Travel from './pages/Travel';

import { PasswordGate } from './components/PasswordGate/PasswordGate';


function ScrollToTop() {
  useScrollToTop();
  return null;
}

function App() {

    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
    const auth = sessionStorage.getItem('wedding_auth');
    if (auth === 'true') setIsAuthenticated(true);
    }, []);

    if (!isAuthenticated) {
    return <PasswordGate onAuthenticate={() => {
        setIsAuthenticated(true);
        sessionStorage.setItem('wedding_auth', 'true');
    }} />;
    }

// Your normal router content...
  return (
    <TranslationProvider> {/* Add this wrapper */}
      <Router>
        <ScrollToTop />
        <div className="min-h-screen bg-white">
          <Navigation />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/details" element={<Details />} />
              <Route path="/rsvp" element={<RSVP />} />
              <Route path="/travel" element={<Travel />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </TranslationProvider>
  );
}

export default App;