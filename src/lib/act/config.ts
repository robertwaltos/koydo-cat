import { catConfig } from "@/lib/cat/config";

export const EXAM_CONFIG = {
  ...catConfig,
  locale: catConfig.primaryLanguage ?? "en",
  isRTL: false,
  themeColor: catConfig.theme.accent,
  themeColorDark: catConfig.theme.accentDark,
  freemiumGate: {
    dailyQuestions: catConfig.freemiumGate.freeQuestionsPerDay,
  },
} as const;

export type ExamConfig = typeof EXAM_CONFIG;
