export const catConfig = {
  examId: "EXAM037",
  slug: "cat",
  name: "CAT",
  fullName: "Common Admission Test",
  category: "MBA admissions",
  country: "India",
  region: "South Asia",
  languages: ["en"],
  primaryLanguage: "en",
  sections: ["Verbal Ability & Reading Comprehension (VARC)", "Data Interpretation & Logical Reasoning (DILR)", "Quantitative Ability (QA)"],
  scoringModel: "scaled-percentile",
  examFormat: "Computer-based",
  questionTypes: ["MCQ", "TITA"],
  tieredStructure: "Section-timed",
  theme: {
    accent: "#0D9488",
    accentDark: "#0F766E",
  },
  ipRisk: "Medium" as const,
  ipDisclaimer:
    "CAT is a registered trademark of the Indian Institutes of Management (IIMs). This application is an independent study tool and is not affiliated with, endorsed by, or associated with IIMs or any CAT convening body.",
  freemiumGate: {
    freeQuestionsPerDay: 10,
    requiresAuthForFree: false,
  },
  contentReuseCluster: "aptitude_business",
  uiEngineProfile: "section_timed_mixed_response",
};
