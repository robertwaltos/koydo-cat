export const catPricing = {
  currency: "INR",
  symbol: "₹",
  free: {
    price: 0,
    label: "Free",
    features: ["10 questions per day", "Basic analytics", "Limited mock tests"],
  },
  premium: {
    price: 299,
    period: "month" as const,
    label: "Premium",
    features: ["Unlimited questions", "Full section-timed mocks", "Detailed analytics", "Priority support"],
  },
};
