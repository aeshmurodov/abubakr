import English from './languages/Eng';
import Japanese from './languages/Jp';
import Spanish from './languages/Es';
import Russish from './languages/Rus';
import Deutsch from './languages/Deutsch';
// === import additional language files here === //

// input: language code in string
// returns an object of translated strings in the language
export const getTranslations = (langCode) => {
  if (langCode === 'en') return English;
  if (langCode === 'jp') return Japanese;
  if (langCode === 'es') return Spanish;
  if (langCode === 'ru') return Russish;
  if (langCode === 'de') return Deutsch;
  // === add conditionals here for additional languages here === //
};

// input: language code in string & phrase key in string
// returns an corresponding phrase value in string
export const localize = (langCode, phraseKey) => {
  const lang = getTranslations(langCode);
  return lang[phraseKey];
};
