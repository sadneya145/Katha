import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";

import LeftTextArea from "./LeftText";
import RightTextArea from "./RightText";
import LanguageDropdown from "./LanguageDeopDown";

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

function InputBox() {
  const [translateFromLanguag, setTranslateFromLanguag] = useState("all");
  const [translateToLanguag, setTranslateToLanguag] = useState("hi");

  const [enteredText, setEnteredText] = useState("");
  const [fetchedText, setFetchedText] = useState("");

  // Debounce enteredText
  const debouncedEnteredText = useDebounce(enteredText, 2000);

  const languageOptions = [
    { id: "all", label: "Detect language" },
    { id: "en", label: "English" },
    { id: "hi", label: "Hindi" },
    { id: "bn", label: "Bengali" },
    { id: "te", label: "Telugu" },
    { id: "mr", label: "Marathi" },
    { id: "ta", label: "Tamil" },
    { id: "gu", label: "Gujarati" },
    { id: "kn", label: "Kannada" },
    { id: "ml", label: "Malayalam" },
    { id: "pa", label: "Punjabi" },
    { id: "or", label: "Odia" },
    { id: "fr", label: "French" },
    { id: "de", label: "German" },
    { id: "es", label: "Spanish" },
    { id: "zh", label: "Chinese" },
    { id: "ru", label: "Russian" },
    { id: "ja", label: "Japanese" },
    { id: "ko", label: "Korean" },
    { id: "pt", label: "Portuguese" },
    { id: "ar", label: "Arabic" },
    { id: "it", label: "Italian" },
    { id: "nl", label: "Dutch" },
    { id: "pl", label: "Polish" },
    { id: "tr", label: "Turkish" },
    { id: "vi", label: "Vietnamese" },
    { id: "th", label: "Thai" },
    { id: "sw", label: "Swahili" },
    { id: "uk", label: "Ukrainian" },
    { id: "cs", label: "Czech" },
    { id: "el", label: "Greek" },
    { id: "he", label: "Hebrew" },
    { id: "fa", label: "Persian" },
    { id: "no", label: "Norwegian" },
    { id: "sv", label: "Swedish" },
    { id: "da", label: "Danish" },
    { id: "fi", label: "Finnish" },
    { id: "ro", label: "Romanian" },
    { id: "hu", label: "Hungarian" },
    { id: "id", label: "Indonesian" },
    { id: "ms", label: "Malay" },
    { id: "bg", label: "Bulgarian" },
    { id: "hr", label: "Croatian" },
    { id: "sk", label: "Slovak" },
    { id: "sr", label: "Serbian" },
    { id: "lt", label: "Lithuanian" },
    { id: "lv", label: "Latvian" },
    { id: "et", label: "Estonian" },
    { id: "is", label: "Icelandic" },
    { id: "ga", label: "Irish" },
    { id: "mt", label: "Maltese" },
    { id: "sl", label: "Slovenian" },
    { id: "sq", label: "Albanian" },
    { id: "hy", label: "Armenian" },
    { id: "ka", label: "Georgian" },
    { id: "kk", label: "Kazakh" },
    { id: "mn", label: "Mongolian" },
    { id: "ne", label: "Nepali" },
    { id: "si", label: "Sinhala" },
    { id: "uz", label: "Uzbek" },
    { id: "az", label: "Azerbaijani" },
    { id: "km", label: "Khmer" },
    { id: "lo", label: "Lao" },
    { id: "my", label: "Burmese" },
    { id: "ta", label: "Tamil" },
    { id: "tl", label: "Tagalog" },
  ];
  

  useEffect(() => {
    if (debouncedEnteredText) {
      fetch(
        `https://api.mymemory.translated.net/get?q=${debouncedEnteredText}!&langpair=${
          translateFromLanguag === "all" ? "en" : translateFromLanguag
        }|${translateToLanguag}`
      )
        .then((res) => res.json())
        .then((data) => {
          setFetchedText(data.responseData.translatedText);
        })
        .catch((e) => {
          console.log(e);
        });
    }
  }, [debouncedEnteredText, translateFromLanguag, translateToLanguag]);

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "start",
        flexDirection: { xs: "column", md: "row" },
        m: "1rem",
      }}
    >
      <Box sx={{ flex: 1 }}>
        <LanguageDropdown
          currentLanguage={translateFromLanguag}
          setLanguage={setTranslateFromLanguag}
          languages={languageOptions}
        />
        <LeftTextArea
          enteredText={enteredText}
          setEnteredText={setEnteredText}
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <LanguageDropdown
          currentLanguage={translateToLanguag}
          setLanguage={setTranslateToLanguag}
          languages={languageOptions}
        />
        <RightTextArea
          fetchedText={fetchedText}
          setFetchedText={setFetchedText}
        />
      </Box>
    </Box>
  );
}

export default InputBox;
