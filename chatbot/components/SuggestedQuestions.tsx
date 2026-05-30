"use client";

import { useState } from "react";

type SuggestedQuestionsProps = {
  questions: string[];
};

export function SuggestedQuestions({
  questions,
}: SuggestedQuestionsProps) {
  const [copiedQuestion, setCopiedQuestion] = useState<string | null>(null);

  async function handleCopy(question: string) {
    try {
      await navigator.clipboard.writeText(question);
      setCopiedQuestion(question);
      window.setTimeout(() => setCopiedQuestion(null), 1800);
    } catch {
      setCopiedQuestion(null);
    }
  }

  return (
    <div className="flex flex-wrap gap-3">
      {questions.map((question) => {
        const isCopied = copiedQuestion === question;

        return (
          <button
            key={question}
            type="button"
            onClick={() => handleCopy(question)}
            className="rounded-full border border-brand-bronze/35 bg-brand-ivory px-4 py-3 text-left text-sm font-medium text-brand-ink shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-brand-red/35 hover:bg-white hover:text-brand-red focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-bronze/60 dark:bg-brand-ink-soft dark:text-brand-ivory dark:hover:border-brand-bronze/45 dark:hover:bg-brand-ink"
          >
            {isCopied ? `Copiee: ${question}` : question}
          </button>
        );
      })}
    </div>
  );
}
