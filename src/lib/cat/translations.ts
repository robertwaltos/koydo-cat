const translations = {
  en: {
    appName: "CAT Prep",
    tagline: "Master the Common Admission Test with section-timed practice.",
    startPractice: "Start Practice",
    viewPricing: "View Pricing",
    free: "Free",
    premium: "Premium",
    questionsRemaining: "questions remaining today",
    upgradePrompt: "Upgrade to Premium for unlimited access",
  },
} as const;

export type Locale = keyof typeof translations;
export type TranslationKey = keyof (typeof translations)["en"];

export function t(locale: Locale, key: TranslationKey): string {
  return translations[locale]?.[key] ?? translations.en[key];
}
