import { createContext, useContext, useState, useEffect } from 'react';
import { pt } from '../translations/pt';
import { en } from '../translations/en';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('pt'); // default to pt-br

  // Function to switch language
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pt' ? 'en' : 'pt'));
  };

  // Function to get nested translation keys (e.g. "hero.title")
  const t = (key) => {
    const keys = key.split('.');
    const dictionary = language === 'pt' ? pt : en;
    
    let result = dictionary;
    for (const k of keys) {
      if (result && result[k] !== undefined) {
        result = result[k];
      } else {
        return key; // return key if not found
      }
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
