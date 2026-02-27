"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
    { name: "Languages", skills: ["JavaScript", "Python"], color: "#f59e0b" },
    { name: "Frontend", skills: ["React.js", "Next.js", "Tailwind CSS"], color: "#06b6d4" },
    { name: "Backend", skills: ["Node.js", "Express.js"], color: "#10b981" },
    { name: "Databases", skills: ["MongoDB", "MySQL"], color: "#ef4444" },
    { name: "Core CS", skills: ["DSA", "Computer Networks", "OS", "AI-ML", "Computer Architecture"], color: "#8b5cf6" },
    { name: "Tools", skills: ["Git", "GitHub", "AWS"], color: "#ec4899" },
];

export default function Skills() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="container-main">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-label"
                >
          // tech stack
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                    My toolkit<span style={{ color: "var(--accent)" }}>.</span>
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                        gap: 16,
                    }}
                >
                    {categories.map((cat, i) => (
                        <motion.div
                            key={cat.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                            className="card"
                        >
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    fontFamily: "var(--font-mono)",
                                    color: cat.color,
                                    marginBottom: 14,
                                }}
                            >
                                {cat.name.toUpperCase()}
                            </span>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                                {cat.skills.map((skill, j) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                                        transition={{ duration: 0.3, delay: 0.3 + i * 0.08 + j * 0.04 }}
                                        style={{
                                            padding: "6px 14px",
                                            fontSize: "0.8rem",
                                            borderRadius: 6,
                                            border: `1px solid ${cat.color}30`,
                                            color: cat.color,
                                            background: `${cat.color}08`,
                                            transition: "all 0.2s ease",
                                            cursor: "default",
                                        }}
                                        whileHover={{
                                            y: -2,
                                            boxShadow: `0 4px 16px ${cat.color}25`,
                                            borderColor: `${cat.color}60`,
                                        }}
                                    >
                                        {skill}
                                    </motion.span>
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
