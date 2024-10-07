import React, { useState, useEffect } from 'react';
import { Box, TextField, MenuItem, Button, Modal } from '@mui/material';

// Custom hook for debouncing
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}

function InputBox({ open, onClose }) {
  const [language, setLanguage] = useState('en'); // Default language
  const [translateToLanguages, setTranslateToLanguages] = useState([
    'hi', 'bn', 'te', 'mr', 'ta', 'gu', 'kn', 'ml', 'pa', 'or', 'fr', 'de', 'es', 'zh', 'ru', 'ja', 'ko', 'pt', 'ar', 'it', 'nl', 'pl', 'tr', 'vi', 'th', 'sw', 'uk', 'cs', 'el', 'he', 'fa', 'no', 'sv', 'da', 'fi'
  ]);
  const [fetchedTexts, setFetchedTexts] = useState({});
  const [wordData, setWordData] = useState({ word: '', definition: '' });
  const [error, setError] = useState('');

  const debouncedWord = useDebounce(wordData.word, 2000);
  const debouncedDefinition = useDebounce(wordData.definition, 2000);

  const languageOptions = [
    { id: 'hi', label: 'Hindi' },
    { id: 'bn', label: 'Bengali' },
    { id: 'te', label: 'Telugu' },
    { id: 'mr', label: 'Marathi' },
    { id: 'ta', label: 'Tamil' },
    { id: 'gu', label: 'Gujarati' },
    { id: 'kn', label: 'Kannada' },
    { id: 'ml', label: 'Malayalam' },
    { id: 'pa', label: 'Punjabi' },
    { id: 'or', label: 'Odia' },
    { id: 'fr', label: 'French' },
    { id: 'de', label: 'German' },
    { id: 'es', label: 'Spanish' },
    { id: 'zh', label: 'Chinese' },
    { id: 'ru', label: 'Russian' },
    { id: 'ja', label: 'Japanese' },
    { id: 'ko', label: 'Korean' },
    { id: 'pt', label: 'Portuguese' },
    { id: 'ar', label: 'Arabic' },
    { id: 'it', label: 'Italian' },
    { id: 'nl', label: 'Dutch' },
    { id: 'pl', label: 'Polish' },
    { id: 'tr', label: 'Turkish' },
    { id: 'vi', label: 'Vietnamese' },
    { id: 'th', label: 'Thai' },
    { id: 'sw', label: 'Swahili' },
    { id: 'uk', label: 'Ukrainian' },
    { id: 'cs', label: 'Czech' },
    { id: 'el', label: 'Greek' },
    { id: 'he', label: 'Hebrew' },
    { id: 'fa', label: 'Persian' },
    { id: 'no', label: 'Norwegian' },
    { id: 'sv', label: 'Swedish' },
    { id: 'da', label: 'Danish' },
    { id: 'fi', label: 'Finnish' },
  ];

  useEffect(() => {
    const fetchWordData = async () => {
      try {
        const response = await fetch('/words.json');
        const data = await response.json();
        setWordData(data[0]);
        setFetchedTexts({
          en: {
            word: data[0].word,
            definition: data[0].definition
          }
        });
      } catch (e) {
        setError('Error fetching word data');
      }
    };

    fetchWordData();
  }, []);

  useEffect(() => {
    if (debouncedWord || debouncedDefinition) {
      const fetchTranslations = async () => {
        const translations = { ...fetchedTexts }; // Start with existing translations

        if (language !== 'en') { // Update translations only for languages other than English
          try {
            const wordResponse = await fetch(
              `https://api.mymemory.translated.net/get?q=${encodeURIComponent(debouncedWord)}&langpair=en|${language}`
            );
            const definitionResponse = await fetch(
              `https://api.mymemory.translated.net/get?q=${encodeURIComponent(debouncedDefinition)}&langpair=en|${language}`
            );
            const wordData = await wordResponse.json();
            const definitionData = await definitionResponse.json();
            translations[language] = {
              word: wordData.responseData.translatedText,
              definition: definitionData.responseData.translatedText,
            };
          } catch (e) {
            console.log(e);
            translations[language] = {
              word: 'Error fetching translation',
              definition: 'Error fetching translation',
            };
          }
        }
        
        setFetchedTexts(translations);
      };

      fetchTranslations();
    }
  }, [debouncedWord, debouncedDefinition, language]);

  return (
    <Modal open={open} onClose={onClose}>
      <Box sx={{ display: 'flex', flexDirection: 'column', m: '1rem', p: '2rem', backgroundColor: 'white', width: '80%', maxWidth: '600px', margin: 'auto' }}>
        <h2>Select Your Language</h2>
        <TextField
          select
          label="Language"
          value={language}
          onChange={(e) => setLanguage(e.target.value)}
          fullWidth
        >
          {languageOptions.map((option) => (
            <MenuItem key={option.id} value={option.id}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <Box sx={{ mt: 2 }}>
          <h2>Word of the Day</h2>
          <p><strong>Word:</strong> {fetchedTexts[language]?.word || 'Loading...'}</p>
          <p><strong>Definition:</strong> {fetchedTexts[language]?.definition || 'Loading...'}</p>
        </Box>
        {error && <p>{error}</p>}
        <Button onClick={onClose} sx={{ mt: 2 }}>Close</Button>
      </Box>
    </Modal>
  );
}

export default InputBox;