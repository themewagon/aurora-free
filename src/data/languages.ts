export type SupportedLocales = 'en-US' | 'fr-FR' | 'bn-BD' | 'zh-CN' | 'hi-IN' | 'ar-SA';

export interface SupportedLanguage {
  label: string;
  shortLabel: string;
  icon: string;
  locale: SupportedLocales;
  currency: string;
  currencySymbol: string;
}
export const languages: SupportedLanguage[] = [
  {
    label: 'English',
    shortLabel: 'eng',
    icon: 'twemoji:flag-united-kingdom',
    locale: 'en-US',
    currency: 'USD',
    currencySymbol: '$',
  },
  {
    label: 'Française',
    shortLabel: 'fra',
    icon: 'twemoji:flag-france',
    locale: 'fr-FR',
    currency: 'EUR',
    currencySymbol: '€',
  },
  {
    label: 'বাংলা',
    shortLabel: 'ben',
    icon: 'twemoji:flag-bangladesh',
    locale: 'bn-BD',
    currency: 'BDT',
    currencySymbol: '৳',
  },
  {
    label: '官话',
    shortLabel: 'zho',
    icon: 'twemoji:flag-china',
    locale: 'zh-CN',
    currency: 'CNY',
    currencySymbol: '¥',
  },
  {
    label: 'हिन्दी',
    shortLabel: 'hin',
    icon: 'twemoji:flag-india',
    locale: 'hi-IN',
    currency: 'INR',
    currencySymbol: '₹',
  },
  {
    label: 'Arabic',
    shortLabel: 'ara',
    icon: 'twemoji:flag-saudi-arabia',
    locale: 'ar-SA',
    currency: 'SAR',
    currencySymbol: '﷼',
  },
];
