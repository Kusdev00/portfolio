"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  { name: "Python", level: 90 },
  { name: "Flask / FastAPI", level: 85 },
  { name: "JavaScript / TypeScript", level: 75 },
  { name: "React / Next.js", level: 70 },
  { name: "HTML / CSS / Tailwind", level: 85 },
  { name: "Git / GitHub", level: 80 },
  { name: "REST APIs", level: 80 },
  { name: "SQL / SQLite", level: 70 },
  { name: "FFmpeg / Video Processing", level: 75 },
  { name: "Docker", level: 60 },
  { name: "Linux / CLI", level: 80 },
  { name: "Automation / Scripting", level: 90 },
];

export default function Skills() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" className="py-24 px-6 bg-[var(--card)]" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          Skills
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.1 }}
          className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded mb-10"
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.05, duration: 0.4 }}
            >
              <div className="flex justify-between mb-2">
                <span className="font-medium text-sm">{skill.name}</span>
                <span className="text-xs text-[var(--secondary)]">{skill.level}%</span>
              </div>
              <div className="h-2 bg-[var(--card-border)] rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.level}%` } : {}}
                  transition={{ delay: i * 0.05 + 0.2, duration: 0.6, ease: "easeOut" }}
                  className="h-full bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
