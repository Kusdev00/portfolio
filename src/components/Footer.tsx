"use client";

import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

export default function Footer() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <footer className="py-8 px-6 border-t border-[var(--card-border)] bg-[var(--card)]">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-[var(--secondary)]">
          © {new Date().getFullYear()} [Your Name]. Built with Next.js & Tailwind.
        </p>
        <div className="flex items-center gap-6">
          <a href="https://github.com/Kusdev00" className="text-sm text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
            GitHub
          </a>
          <a href="#" className="text-sm text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
            LinkedIn
          </a>
          <a href="mailto:your@email.com" className="text-sm text-[var(--secondary)] hover:text-[var(--primary)] transition-colors">
            Email
          </a>
        </div>
      </div>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          aria-label="Back to top"
          className="fixed bottom-6 right-6 p-3 rounded-full bg-[var(--primary)] text-white shadow-lg hover:shadow-xl hover:scale-110 transition-all"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </footer>
  );
}
