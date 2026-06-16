"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experience = [
  {
    role: "Freelance Python Developer",
    period: "2025 — Present",
    description:
      "Building web applications, automation tools, and backend systems for clients. AI-assisted development workflow for fast turnaround.",
    tags: ["Python", "Flask", "Automation"],
  },
  {
    role: "[Previous Role / Project]",
    period: "[Date Range]",
    description:
      "[Describe what you did, what you learned, and any measurable results.]",
    tags: ["[Skill]", "[Skill]"],
  },
  {
    role: "[Previous Role / Project]",
    period: "[Date Range]",
    description:
      "[Describe what you did, what you learned, and any measurable results.]",
    tags: ["[Skill]", "[Skill]"],
  },
];

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" className="py-24 px-6 bg-[var(--card)]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Experience
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded mb-10"
        />

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={exp.role}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-8 border-l-2 border-[var(--card-border)] hover:border-[var(--primary)] transition-colors"
            >
              <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-[var(--card)]" />
              <div className="pb-2">
                <h3 className="text-lg font-bold">{exp.role}</h3>
                <p className="text-sm text-[var(--primary)] font-mono mb-3">{exp.period}</p>
                <p className="text-[var(--secondary)] leading-relaxed mb-3">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-3 py-1 rounded-full bg-[var(--primary)]/10 text-[var(--primary)] font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
