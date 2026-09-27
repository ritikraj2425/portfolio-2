"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const categories = [
    {
        name: "Languages",
        skills: ["Python", "JavaScript", "TypeScript", "C", "C++", "Java", "Go", "SQL"],
    },
    {
        name: "Frontend",
        skills: ["React.js", "Next.js", "Electron", "Tailwind CSS"],
    },
    {
        name: "Backend",
        skills: ["Node.js", "Express.js", "FastAPI"],
    },
    {
        name: "Databases",
        skills: ["MongoDB", "MySQL"],
    },
    {
        name: "AI / ML",
        skills: ["PyTorch", "Transformers", "Hugging Face", "LLM Agents", "RAG", "LoRA Fine-tuning", "Diffusion Models", "MCP"],
    },
    {
        name: "Automation",
        skills: ["RabbitMQ", "Celery", "Playwright", "Microservices", "REST APIs", "Webhooks"],
    },
    {
        name: "Core CS",
        skills: ["DSA", "Operating Systems", "DBMS", "Computer Networks", "Computer Architecture", "System Design"],
    },
    {
        name: "Security",
        skills: ["Ethical Hacking", "JWT", "OAuth 2.0", "RBAC", "Rate Limiting"],
    },
    {
        name: "Systems Programming",
        skills: ["Terminal Rendering", "Manual Memory Allocation", "Game Loops", "State Machines", "Low-Level C"],
    },
    {
        name: "Infra & Tools",
        skills: ["AWS", "Docker", "Git", "GitHub Actions", "Linux", "Razorpay", "Bunny.net CDN"],
    },
    {
        name: "AI Content",
        skills: ["AI Avatars", "Voice Cloning", "AI Video Generation", "AI Image Generation"],
    },
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
                            transition={{ duration: 0.5, delay: 0.15 + i * 0.06 }}
                            className="card"
                        >
                            <span
                                style={{
                                    display: "block",
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.1em",
                                    fontFamily: "var(--font-mono)",
                                    color: "var(--accent)",
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
                                        transition={{ duration: 0.3, delay: 0.3 + i * 0.06 + j * 0.03 }}
                                        className="tag"
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
