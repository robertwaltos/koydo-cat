import { describe, it, expect } from "vitest";
import { catConfig } from "@/lib/cat/config";

describe("catConfig", () => {
  it("has correct examId", () => {
    expect(catConfig.examId).toBe("EXAM037");
  });

  it("has correct slug", () => {
    expect(catConfig.slug).toBe("cat");
  });

  it("has at least one section", () => {
    expect(catConfig.sections.length).toBeGreaterThan(0);
  });

  it("has theme colors", () => {
    expect(catConfig.theme.accent).toMatch(/^#[0-9A-Fa-f]{6}$/);
    expect(catConfig.theme.accentDark).toMatch(/^#[0-9A-Fa-f]{6}$/);
  });

  it("has IP disclaimer", () => {
    expect(catConfig.ipDisclaimer.length).toBeGreaterThan(0);
  });

  it("has freemium gate config", () => {
    expect(catConfig.freemiumGate.freeQuestionsPerDay).toBe(10);
  });
});
