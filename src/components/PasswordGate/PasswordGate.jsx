// ============================================
// src/components/PasswordGate.jsx
// ============================================
import React, { useState } from 'react';
import { Heart, Lock } from 'lucide-react';
import './PasswordGate.css'

export function PasswordGate({ onAuthenticate }) {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  const CORRECT_PASSWORD = import.meta.env.VITE_PASSWORD;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      onAuthenticate();
      setError(false);
    } else {
      setError(true);
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen pg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className={`pg-card rounded-2xl shadow-xl p-8 border ${
                isShaking ? 'animate-shake' : ''}`}
            >
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 pg-heart-container rounded-full mb-4">
              <Heart className="w-8 h-8 pg-heart" fill="currentColor" />
            </div>
            <h1 className="text-3xl font-serif pg-text-primary mb-2">
            Welcome
            </h1>
            <p className="pg-text-secondary">
            Please enter the password to view our wedding website
            </p>
          </div>

          {/* Input Form */}
          <div className="space-y-4">
            <div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError(false);
                  }}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') {
                      handleSubmit(e);
                    }
                  }}
                  placeholder="Enter password"
                  className={`w-full pl-10 pr-4 py-3 border-2 rounded-lg focus:outline-none focus:ring-2 transition-colors ${
                    error 
                      ? 'border-red-300 focus:border-blue-500 focus:ring-blue-200' 
                      : 'border-gray-200 focus:border-blue-500 focus:ring-blue-200'
                  }`}
                  autoFocus
                />
              </div>
              {error && (
                <p className="pg-error text-sm mt-2 flex items-center gap-1">
                <span>✕</span>
                Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
            onClick={handleSubmit}
            className="w-full pg-primary text-white font-medium py-3 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
            >
            Enter
            </button>
          </div>

          {/* Footer hint (remove this section in production if you want) */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <p className="text-xs pg-text-muted text-center">
            Hint: The password was included in your invitation
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-8px); }
          20%, 40%, 60%, 80% { transform: translateX(8px); }
        }
        .animate-shake {
          animation: shake 0.5s ease-in-out;
        }
      `}</style>
    </div>
  );
}