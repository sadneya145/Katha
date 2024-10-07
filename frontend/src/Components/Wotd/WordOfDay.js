import React, { useState, useEffect } from 'react';
import './Wotd.css'

const translations = {
  Sanskrit: {
    Hindi: 'संस्कृत',
    Bengali: 'সংস্কৃত',
    Telugu: 'సంస్కృతం',
    Marathi: 'संस्कृत',
    Tamil: 'சங்கிரேடம்',
    Gujarati: 'संस्कृत',
    Kannada: 'ಸಂಸ್ಕೃತ',
    Malayalam: 'സംസ്കൃതം',
    Punjabi: 'ਸੰਸਕ੍ਰਿਤ',
    Odia: 'संस्कृत'
  },
  Dharma: {
    Hindi: 'धर्म',
    Bengali: 'ধর্ম',
    Telugu: 'ధర్మం',
    Marathi: 'धर्म',
    Tamil: 'தர்மம்',
    Gujarati: 'ધર્મ',
    Kannada: 'ಧರ್ಮ',
    Malayalam: 'ധർമ്മം',
    Punjabi: 'ਧਰਮ',
    Odia: 'ଧର୍ମ'
  },
  Karma: {
    Hindi: 'कर्म',
    Bengali: 'কর্ম',
    Telugu: 'కర్మ',
    Marathi: 'कर्म',
    Tamil: 'கர்மா',
    Gujarati: 'કર્મ',
    Kannada: 'ಕರ್ಮ',
    Malayalam: 'കರ್ಮം',
    Punjabi: 'ਕਰਮ',
    Odia: 'କର୍ମ'
  },
  Yoga: {
    Hindi: 'योग',
    Bengali: 'যোগ',
    Telugu: 'యోగ',
    Marathi: 'योग',
    Tamil: 'யோகம்',
    Gujarati: 'યોગ',
    Kannada: 'ಯೋಗ',
    Malayalam: 'യോഗം',
    Punjabi: 'ਯੋਗ',
    Odia: 'যোগ'
  },
  Mantra: {
    Hindi: 'मंत्र',
    Bengali: 'মন্ত্র',
    Telugu: 'మంత్రం',
    Marathi: 'मंत्र',
    Tamil: 'மந்திரம்',
    Gujarati: 'મંત્ર',
    Kannada: 'ಮಂತ್ರ',
    Malayalam: 'മന്ത്രം',
    Punjabi: 'ਮੰਤਰ',
    Odia: 'ମନ୍ତ୍ର'
  },
 Katha:{
  Hindi: 'कथा',
  Bengali: 'কাহিনী',
  Telugu: 'కథ',
  Marathi: 'कथा',
  Tamil: 'கதை',
  Gujarati: 'કથા',
  Kannada: 'ಕಥೆ',
  Malayalam: 'കഥ',
  Punjabi: 'ਕਥਾ',
  Odia: 'କଥା'
  },
 Sangit:{
    Hindi: 'संगीत',
  Bengali: 'সঙ্গীত',
  Telugu: 'సంగీతం',
  Marathi: 'संगीत',
  Tamil: 'சங்கீதம்',
  Gujarati: 'સંગીત',
  Kannada: 'ಸಂಗೀತ',
  Malayalam: 'സംഗീതം',
  Punjabi: 'ਸੰਗੀਤ',
  Odia: 'ସଙ୍ଗୀତ'
 },
 Sari:{
    Hindi: 'साड़ी',
    Bengali: 'শাড়ি',
    Telugu: 'సారీ',
    Marathi: 'साडी',
    Tamil: 'சாத்தி',
    Gujarati: 'સાડી',
    Kannada: 'ಸಾರಿ',
    Malayalam: 'സാരി',
    Punjabi: 'ਸਾੜੀ',
    Odia: 'ସାରୀ',
 },

  
};

const words = Object.keys(translations); 

const getWordOfTheDay = () => {
  const start = new Date('2024-08-30'); 
  const now = new Date();
  const diffDays = Math.floor((now - start) / (1000 * 60 * 60 * 24));
  return words[diffDays % words.length];
};

const languages = [
  { code: 'hi', name: 'Hindi' },
  { code: 'bn', name: 'Bengali' },
  { code: 'te', name: 'Telugu' },
  { code: 'mr', name: 'Marathi' },
  { code: 'ta', name: 'Tamil' },
  { code: 'gu', name: 'Gujarati' },
  { code: 'kn', name: 'Kannada' },
  { code: 'ml', name: 'Malayalam' },
  { code: 'pa', name: 'Punjabi' },
  { code: 'or', name: 'Odia' },
];

const WordOfTheDay = () => {
  const [word, setWord] = useState('');
  const [translationsForToday, setTranslationsForToday] = useState({});

  useEffect(() => {
    const dailyWord = getWordOfTheDay();
    setWord(dailyWord);

    const dailyTranslations = languages.reduce((acc, lang) => {
      acc[lang.name] = translations[dailyWord] ? translations[dailyWord][lang.name] || 'Not Available' : 'Not Available';
      return acc;
    }, {});

    setTranslationsForToday(dailyTranslations);
  }, []);

  return (
    <div>
      <h1>Word of the Day: {word}</h1>
      <ul className='wordUl'>
        {languages.map((lang) => (
          <li className='wordLi' key={lang.code}>
            <span className="language-name">{lang.name}</span>
            <span className="translation-text">
              {translationsForToday[lang.name] || 'Loading...'}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordOfTheDay;