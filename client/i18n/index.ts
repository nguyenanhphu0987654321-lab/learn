import en from './en.json';
import vi from './vi.json';
import ja from './ja.json';

export type Language = 'en' | 'vi' | 'ja';

export const translations: Record<Language, typeof en> = {
  en,
  vi,
  ja,
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  vi: 'Tiếng Việt',
  ja: '日本語',
};

export const getTranslation = (lang: Language, key: string, defaultValue: string = ''): string => {
  const keys = key.split('.');
  let value: any = translations[lang];

  for (const k of keys) {
    if (value && typeof value === 'object' && k in value) {
      value = value[k];
    } else {
      return defaultValue || key;
    }
  }

  return typeof value === 'string' ? value : defaultValue || key;
};
