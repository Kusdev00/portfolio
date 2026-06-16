"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" as const },
  }),
};

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={0}
          className="text-3xl md:text-4xl font-bold mb-3"
        >
          About Me
        </motion.h2>
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={1}
          className="w-16 h-1 bg-gradient-to-r from-[var(--primary)] to-[var(--accent)] rounded mb-8"
        />
        <motion.div
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeUp}
          custom={2}
          className="grid md:grid-cols-2 gap-8 text-[var(--secondary)] leading-relaxed"
        >
          <div className="space-y-4">
            <p>
              I&apos;m a 17-year-old developer from Estonia focused on Python development,
              web applications, and automation. I started coding out of curiosity and it
              turned into building real tools that solve real problems.
            </p>
            <p>
              I work with an AI-assisted development workflow which means I deliver
              faster without sacrificing code quality. Every project gets clean,
              documented, maintainable code.
            </p>
          </div>
          <div className="space-y-4">
            <p>
              When I&apos;m not coding, I&apos;m usually exploring new tools, contributing to
              open source, or learning about systems design. I believe in shipping
              fast and iterating.
            </p>
            <p>
              I&apos;m available for freelance projects — from quick scripts to full
              web applications. Let&apos;s build something together.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
