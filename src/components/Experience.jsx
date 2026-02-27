"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experiences = [
    {
        company: "Physics Wallah",
        role: "Tech Engineering Intern",
        period: "Jan 2025 – Jun 2025",
        description:
            "Worked on the CMS and internal UI library used across PW's production apps. Collaborated with cross-functional teams in a fast-paced, large-scale engineering org learning what it means to write code that millions of users depend on.",
        tags: ["CMS", "UI Library", "Production"],
    },
    {
        company: "Seedite",
        role: "Co-Founder",
        period: "Dec 2025 – Feb 2026",
        description:
            "Co-founded and built a full-stack EdTech platform from zero. Architected and shipped video streaming, mock tests, interview prep, performance analytics, admin dashboard, and CDN integration all production-ready. This isn't a side project; it's a product.",
        tags: ["EdTech", "Full-Stack", "Co-Founder"],
    },
    {
        company: "ShortSee",
        role: "AI Solutions Strategy Lead",
        period: "Jul 2025 – Oct 2025",
        description:
            "Designed AI-driven content automation workflows and led the marketing & content team. Planned LLM-based solutions for content ideation and scripting bridging AI capability with real business output.",
        tags: ["AI/ML", "Strategy", "LLMs"],
    },
];

export default function Experience() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="experience" className="section" ref={ref}>
            <div className="container-main">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-label"
                >
          // experience
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                    Where I&apos;ve made impact<span style={{ color: "var(--accent)" }}>.</span>
                </motion.h2>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {experiences.map((exp, i) => (
                        <motion.div
                            key={exp.company}
                            initial={{ opacity: 0, y: 24 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                            className="card"
                            style={{ position: "relative", paddingLeft: 28 }}
                        >
                            {/* Accent bar */}
                            <div
                                style={{
                                    position: "absolute",
                                    left: 0,
                                    top: 0,
                                    bottom: 0,
                                    width: 3,
                                    borderRadius: "12px 0 0 12px",
                                    background: "var(--accent)",
                                    opacity: 0.5,
                                }}
                            />

                            <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 12 }}>
                                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
                                    <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)" }}>
                                        {exp.company}
                                    </h3>
                                    <span
                                        style={{
                                            fontSize: "0.7rem",
                                            color: "var(--text-dim)",
                                            fontFamily: "var(--font-mono)",
                                            letterSpacing: "0.05em",
                                        }}
                                    >
                                        {exp.period}
                                    </span>
                                </div>
                                <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 500 }}>
                                    {exp.role}
                                </span>
                            </div>

                            <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 14 }}>
                                {exp.description}
                            </p>

                            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                {exp.tags.map((t) => (
                                    <span key={t} className="tag">{t}</span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <div className="divider" style={{ marginTop: 80 }} />
        </section>
    );
}
