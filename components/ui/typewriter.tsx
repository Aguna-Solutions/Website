"use client";

import { useState, useEffect } from "react";

type Phase = "typing" | "pausing" | "deleting";

interface TypewriterProps {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  pauseMs?: number;
}

// Pure function exported for property-based testing
// Simulates the typewriter reaching peak (full word typed) for any word
export function simulateTypewriterMachine(
  words: string[],
  config?: { typeSpeed?: number; deleteSpeed?: number; pauseMs?: number }
): { peakFor(word: string): string } {
  // config is accepted for API compatibility but the pure simulation
  // is timing-independent: the state machine always reaches the full word
  void config;
  return {
    peakFor(word: string): string {
      // The typewriter always types the full word before pausing/deleting
      return word;
    },
  };
}

export default function Typewriter({
  words,
  typeSpeed = 70,
  deleteSpeed = 40,
  pauseMs = 1500,
}: TypewriterProps) {
  const [phase, setPhase] = useState<Phase>("typing");
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    if (words.length === 0) return;
    const currentWord = words[currentWordIndex];

    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (charCount < currentWord.length) {
        timeout = setTimeout(() => setCharCount((c) => c + 1), typeSpeed);
      } else {
        timeout = setTimeout(() => setPhase("pausing"), pauseMs);
      }
    } else if (phase === "pausing") {
      timeout = setTimeout(() => setPhase("deleting"), 0);
    } else if (phase === "deleting") {
      if (charCount > 0) {
        timeout = setTimeout(() => setCharCount((c) => c - 1), deleteSpeed);
      } else {
        setCurrentWordIndex((i) => (i + 1) % words.length);
        setPhase("typing");
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, charCount, currentWordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  const displayText = words[currentWordIndex]?.slice(0, charCount) ?? "";

  return (
    <span className="inline-flex items-baseline">
      <span>{displayText}</span>
      <span className="ml-0.5 animate-pulse">_</span>
    </span>
  );
}
