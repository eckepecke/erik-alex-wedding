// ============================================
// src/components/layout/Footer.jsx
// ============================================
import React from 'react';
import { Heart, Mail, Instagram, Facebook } from 'lucide-react';
import { WEDDING_INFO } from '@utils/constants';

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Contact */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
            <div className="flex items-center justify-center md:justify-start gap-2 text-rose-300">
              <Mail className="w-5 h-5" />
              <a 
                href={`mailto:${WEDDING_INFO.email}`}
                className="hover:text-rose-200"
              >
                {WEDDING_INFO.email}
              </a>
            </div>
          </div>

          {/* Center */}
          <div className="text-center">
            <Heart className="w-8 h-8 text-rose-400 mx-auto mb-4" />
            <p className="text-gray-400">
              {WEDDING_INFO.bride} & {WEDDING_INFO.groom}
            </p>
            <p className="text-gray-400 text-sm mt-2">{WEDDING_INFO.date}</p>
          </div>

          {/* Social */}
          <div className="text-center md:text-right">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-end gap-4">
              <a href="#" className="text-rose-300 hover:text-rose-200">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-rose-300 hover:text-rose-200">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© 2026 Sarah & James. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};