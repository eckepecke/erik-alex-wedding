import { useState, useEffect, createContext, useContext } from 'react';

const TranslationContext = createContext();

export const TranslationProvider = ({ children }) => {
  const [language, setLanguage] = useState('en');
  const [translations, setTranslations] = useState({});

  useEffect(() => {
    // Load language from localStorage if available
    const savedLanguage = localStorage.getItem('wedding-language');
    if (savedLanguage) {
      setLanguage(savedLanguage);
    }
  }, []);

  useEffect(() => {
    // Dynamically import the translation file
    import(`../locales/${language}.json`)
      .then(module => {
        setTranslations(module.default);
        localStorage.setItem('wedding-language', language);
      })
      .catch(() => console.error(`Translation file for ${language} not found`));
  }, [language]);

  const t = (key) => {
    const keys = key.split('.');
    let value = translations;
    
    for (const k of keys) {
      value = value?.[k];
    }
    
    return value || key; // Return key if translation not found
  };

  return (
    <TranslationContext.Provider value={{ t, language, setLanguage }}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslation = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslation must be used within a TranslationProvider');
  }
  return context;
};