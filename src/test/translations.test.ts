import { describe, it, expect } from 'vitest';
import { translations, type Lang } from '../i18n/translations';

const LANGS: Lang[] = ['fr', 'ar', 'ro', 'ru'];

describe('Translations', () => {
  it('should have all 4 languages', () => {
    expect(Object.keys(translations)).toEqual(LANGS);
  });

  it('should have the same keys in all languages', () => {
    const frKeys = Object.keys(translations.fr).sort();
    for (const lang of LANGS) {
      if (lang === 'fr') continue;
      const langKeys = Object.keys(translations[lang]).sort();
      const missing = frKeys.filter((k) => !langKeys.includes(k));
      expect(missing, `Missing keys in ${lang}: ${missing.join(', ')}`).toEqual([]);
    }
  });

  it('should not have empty values', () => {
    for (const lang of LANGS) {
      const empty = Object.entries(translations[lang])
        .filter(([, v]) => v.trim() === '')
        .map(([k]) => k);
      expect(empty, `Empty values in ${lang}: ${empty.join(', ')}`).toEqual([]);
    }
  });

  it('should have nav keys for all pages', () => {
    const navKeys = ['nav.services', 'nav.tarifs', 'nav.zone', 'nav.about', 'nav.blog', 'nav.contact'];
    for (const lang of LANGS) {
      for (const key of navKeys) {
        expect(translations[lang][key], `Missing ${key} in ${lang}`).toBeDefined();
      }
    }
  });
});
