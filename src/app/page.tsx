"use client";

import { motion } from "framer-motion";

const features = [
  { title: "VARC Practice", desc: "Verbal ability and reading comprehension passages and questions." },
  { title: "DILR Sets", desc: "Data interpretation and logical reasoning practice sets." },
  { title: "Quantitative Aptitude", desc: "MCQ and TITA questions across all QA topics." },
  { title: "Section-Timed Mocks", desc: "Full-length CAT mocks with section-wise time locks." },
];

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      <motion.h1
        className="text-5xl font-extrabold tracking-tight text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        CAT Prep
      </motion.h1>
      <p className="mt-4 text-lg text-center max-w-xl opacity-70">
        Master the Common Admission Test with section-timed practice,
        mock tests, and detailed analytics — powered by Koydo.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-14 max-w-3xl w-full">
        {features.map((f) => (
          <div key={f.title} className="rounded-2xl border p-6">
            <h3 className="font-semibold text-lg">{f.title}</h3>
            <p className="mt-1 text-sm opacity-60">{f.desc}</p>
          </div>
        ))}
      </div>

      <footer className="mt-20 text-xs text-center opacity-40 max-w-lg">
        CAT is a registered trademark of the Indian Institutes of Management (IIMs).
        This application is an independent study tool and is not affiliated with,
        endorsed by, or associated with IIMs or any CAT convening body.
      </footer>
    </main>
  );
}
