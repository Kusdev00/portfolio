"use client";

import { useEffect, useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/* Theme is stored in localStorage and mirrored on <html class="dark">.
   useSyncExternalStore keeps React in sync without setState-in-effect. */
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => { listeners.delete(listener); };
}

function readDark(): boolean {
  const stored = localStorage.getItem("theme");
  if (stored) return stored === "dark";
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

const getServerSnapshot = () => true; // layout renders <html className="dark">

export default function ThemeToggle() {
  const dark = useSyncExternalStore(subscribe, readDark, getServerSnapshot);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", dark);
  }, [dark]);

  const toggle = () => {
    const next = !dark;
    localStorage.setItem("theme", next ? "dark" : "light");
    emit();
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle dark mode"
      className="fixed top-5 right-5 z-50 p-3 rounded-full bg-[var(--card)] border border-[var(--card-border)] shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
    >
      <AnimatePresence mode="wait">
        {dark ? (
          <motion.div key="sun" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Sun className="w-5 h-5 text-yellow-400" />
          </motion.div>
        ) : (
          <motion.div key="moon" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.2 }}>
            <Moon className="w-5 h-5 text-[var(--primary)]" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
