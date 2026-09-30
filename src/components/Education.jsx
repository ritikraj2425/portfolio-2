"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, BookOpen } from "lucide-react";

const coursework = [
    "Data Structures & Algorithms",
    "Operating Systems",
    "DBMS",
    "Computer Networks",
    "Computer Architecture",
    "System Design",
];

export default function Education() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="education" className="section" ref={ref}>
            <div className="container-main">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-label"
                >
          // education
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                    Academic foundation<span style={{ color: "var(--accent)" }}>.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="card"
                    style={{ position: "relative", overflow: "hidden" }}
                >
                    {/* Accent gradient top */}
                    <div
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: 3,
                            background: "linear-gradient(90deg, var(--accent) 0%, var(--accent2) 100%)",
                        }}
                    />

                    <div style={{ display: "flex", gap: 20, alignItems: "flex-start", flexWrap: "wrap" }}>
                        {/* Icon */}
                        <div
                            style={{
                                width: 56,
                                height: 56,
                                minWidth: 56,
                                borderRadius: 14,
                                background: "var(--accent-glow)",
                                border: "1px solid var(--accent-dim)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <GraduationCap size={26} style={{ color: "var(--accent)" }} />
                        </div>

                        {/* Details */}
                        <div style={{ flex: 1, minWidth: 260 }}>
                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8, marginBottom: 6 }}>
                                <h3 style={{ fontSize: "1.25rem", fontWeight: 700, color: "var(--text)" }}>
                                    Bachelor of Technology  Computer Science &amp; AI
                                </h3>
                                <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)", letterSpacing: "0.05em" }}>
                                    2023 – 2027
                                </span>
                            </div>

                            <p style={{ fontSize: "0.9rem", color: "var(--accent)", fontWeight: 500, marginBottom: 4 }}>
                                Newton School of Technology, Rishihood University
                            </p>

                            <div
                                style={{
                                    display: "inline-flex",
                                    alignItems: "center",
                                    gap: 6,
                                    padding: "4px 12px",
                                    borderRadius: 6,
                                    background: "var(--accent-glow)",
                                    border: "1px solid rgba(16, 185, 129, 0.2)",
                                    marginBottom: 20,
                                    marginTop: 8,
                                }}
                            >
                                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "var(--accent)" }}>
                                    CGPA: 8.57 / 10.0
                                </span>
                            </div>

                            {/* Coursework */}
                            <div style={{ marginTop: 4 }}>
                                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                                    <BookOpen size={14} style={{ color: "var(--text-dim)" }} />
                                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
                                        KEY COURSEWORK
                                    </span>
                                </div>
                                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                    {coursework.map((course, i) => (
                                        <motion.span
                                            key={course}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                                            className="tag"
                                        >
                                            {course}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>

            <div className="divider" style={{ marginTop: 80 }} />
        </section>
    );
}
