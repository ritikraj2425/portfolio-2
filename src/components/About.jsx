"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const stats = [
    { value: "250K+", label: "YouTube Views" },
    { value: "3+", label: "Production Apps" },
    { value: "4", label: "Open Source PRs" },
    { value: "8.22", label: "CGPA / 10" },
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
                            with an <strong style={{ color: "var(--text)" }}>8.22 CGPA</strong> but grades don&apos;t tell the full story.
                        </p>
                        <p style={{ marginBottom: 16 }}>
                            I have interned at India&apos;s biggest edtech company <strong style={{ color: "var(--text)" }}>Physics Wallah</strong> where I built internal tools, co-founded an edtech company <a href="https://www.seedite.in" target="_blank" rel="noopener noreferrer" style={{ color: "var(--accent)", textDecoration: "none" }}>Seedite</a>, and led AI content strategy at{" "}
                            <strong style={{ color: "var(--text)" }}>ShortSee</strong>. I think in systems, not just syntax.
                        </p>
                        <p style={{ marginBottom: 16 }}>
                            When I&apos;m not shipping products, I&apos;m creating tech content on YouTube with over{" "}
                            <strong style={{ color: "var(--accent)" }}>250K+ views</strong> or competing in hackathons like{" "}
                            <strong style={{ color: "var(--text)" }}>Tech-Sangam</strong> and <strong style={{ color: "var(--text)" }}>Re-Imagine 2024</strong>.
                        </p>
                        <p>
                            I&apos;m obsessed with{" "}
                            <strong style={{ color: "var(--text)" }}>Data Structures, Computer Networks, Operating Systems</strong>, and building things that matter.
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
            grid-template-columns: repeat(4, 1fr) !important;
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
