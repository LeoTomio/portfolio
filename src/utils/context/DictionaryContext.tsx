import React, { useEffect, useState } from "react";
import en from "../dictionary/en";
import pt from "../dictionary/pt";
import { LanguageEnum } from "../enum";




const initialState = {
  language: 'pt',
  setLanguage: (value: string) => { },
  translatedData: pt

};


const DictionaryContext = React.createContext(initialState);

interface DictionaryProviderProps {
  children: React.ReactNode;
}

function DictionaryProvider({ children }: DictionaryProviderProps) {
  const [language, setLanguage] = useState(initialState.language);
  const [translatedData, setTranslatedData] = useState(pt);

  useEffect(() => {
    if (language === LanguageEnum.pt) {
      setTranslatedData(pt)
    } else if (language === LanguageEnum.en) {
      setTranslatedData(en)
    }
  }, [language]);


  useEffect(() => {
    console.log('translatedData', translatedData)
  }, [translatedData]);


  return (
    <DictionaryContext.Provider
      value={{
        language,
        setLanguage,
        translatedData,
      }}
    >
      {children}
    </DictionaryContext.Provider>
  );
}

export { DictionaryProvider, DictionaryContext };

