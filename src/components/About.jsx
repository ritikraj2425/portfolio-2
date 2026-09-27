"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "1000+", label: "DSA Problems Solved" },
    { value: "320+", label: "Users on Seedite" },
    { value: "11", label: "Haystack PRs Merged" },
    { value: "250K+", label: "YouTube Views" },
    { value: "1.4K", label: "YouTube Subscribers" },
    { value: "8.57", label: "CGPA / 10" },
];

export default function About() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container-main">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-label"
                >
          // about
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                    More than just code<span style={{ color: "var(--accent)" }}>.</span>
                </motion.h2>

                <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: 48 }} className="about-grid">
                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        style={{ color: "var(--text-muted)", lineHeight: 1.8, fontSize: "0.95rem" }}
                    >
                        <p style={{ marginBottom: 16 }}>
                            I&apos;m a B.Tech AI student at{" "}
                            <strong style={{ color: "var(--text)" }}>Newton School of Technology, Rishihood University</strong>{" "}
                            (2023–2027) with a <strong style={{ color: "var(--text)" }}>8.57 CGPA</strong>. Strong CS fundamentals in{" "}
                            <strong style={{ color: "var(--text)" }}>DSA, OS, DBMS, Computer Networks, and System Design</strong> — and{" "}
                            <strong style={{ color: "var(--accent)" }}>1000+ DSA problems</strong> solved across LeetCode and Codeforces.
                        </p>
                        <p style={{ marginBottom: 16 }}>
                            I&apos;ve interned at <strong style={{ color: "var(--text)" }}>Physics Wallah</strong> (1.5M+ DAU platform),
                            co-founded <a href="https://www.seedite.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>Seedite</a> — an EdTech platform with{" "}
                            <strong style={{ color: "var(--accent)" }}>320+ users and ₹16K+ revenue</strong> — and contributed{" "}
                            <strong style={{ color: "var(--accent)" }}>11 merged PRs</strong> to{" "}
                            <a href="https://github.com/deepset-ai/haystack" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>Haystack</a>, an open-source LLM orchestration framework.
                        </p>
                        <p style={{ marginBottom: 16 }}>
                            Beyond code, I run a YouTube channel with{" "}
                            <strong style={{ color: "var(--accent)" }}>1.4K subscribers and 250K+ views</strong> on AI &amp; tech innovation — some videos produced entirely with an{" "}
                            <strong style={{ color: "var(--text)" }}>AI avatar, AI voice cloning, and AI-generated visuals</strong>, indistinguishable from self-shot content.
                        </p>
                        <p>
                            I think in systems, not syntax — from{" "}
                            <strong style={{ color: "var(--text)" }}>LoRA fine-tuning and diffusion models</strong> to production automation with{" "}
                            <strong style={{ color: "var(--text)" }}>MCP, RabbitMQ, and Celery</strong>. Comfortable building end-to-end.
                        </p>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.35 }}
                        style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 16 }}
                        className="stats-grid"
                    >
                        {stats.map((s, i) => (
                            <motion.div
                                key={s.label}
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                                className="card"
                                style={{ textAlign: "center", padding: 20 }}
                            >
                                <div style={{ fontSize: "1.75rem", fontWeight: 700, color: "var(--accent)", marginBottom: 4 }}>
                                    {s.value}
                                </div>
                                <div style={{ fontSize: "0.7rem", color: "var(--text-dim)", letterSpacing: "0.08em", fontFamily: "var(--font-mono)" }}>
                                    {s.label}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>

            <div className="divider" style={{ marginTop: 80 }} />

            <style jsx>{`
        @media (min-width: 768px) {
          .about-grid {
            grid-template-columns: 3fr 2fr !important;
            align-items: start;
          }
        }
        @media (min-width: 640px) {
          .stats-grid {
            grid-template-columns: repeat(3, 1fr) !important;
          }
        }
        @media (min-width: 768px) {
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
        </section>
    );
}
