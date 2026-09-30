"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket, GitPullRequest } from "lucide-react";

const experiences = [
    {
        company: "Physics Wallah",
        role: "Tech Engineering Intern",
        period: "Jan 2025 to Jul 2025",
        location: "Noida",
        icon: Briefcase,
        bullets: [
            "India's leading EdTech platform. Built reusable TypeScript, Next.js, and Tailwind CSS UI components for production CMS interfaces.",
            "Worked extensively on the internal UI library used across PW platforms serving 1.5M+ DAU, fixing component defects and implementing required changes.",
            "Integrated the Otpless authentication SDK into production authentication workflows.",
            "Performed technical testing and QA for PW's primary consumer facing website, validating production flows and release critical edge cases.",
            "During Tech Sangam, worked on a gamified learning prototype inspired by Clash of Clans where students could solve questions, earn points, unlock features, and compete; team ranked Top 10 out of 50+ teams."
        ],
        tags: ["TypeScript", "Next.js", "UI Library", "1.5M+ DAU", "Production QA"],
    },
    {
        company: "Seedite",
        role: "Co Founder & Sole Engineer",
        period: "Dec 2024 to Present",
        location: "Remote",
        icon: Rocket,
        link: "https://www.seedite.in",
        bullets: [
            "Solo managed the technical architecture, building a production Node.js/Express backend with MongoDB Atlas.",
            "Implemented Razorpay payments using dual verification (client side signature + independent webhook HMAC SHA256) and idempotent paths to prevent duplicate enrollment.",
            "Built Google OAuth 2.0 account linking, session based single device login enforcement, and B2B college licensing with email based multi tenant access control and per student analytics.",
            "Architected secure content delivery using Bunny Stream CDN with SHA 256 signed token URLs (24h expiry) and an S3/CloudFront asset storage layer.",
            "Developed a Gemini powered admin natural language to MongoDB query engine, secured by an application level operation whitelist and secondary AI read only verification.",
            "Configured GitHub Actions CI/CD to an Ubuntu VPS with PM2 process management and secret based environment injection.",
            "Shipped 100+ hours of lecture content and iterated 100+ feature/UX changes from user feedback."
        ],
        tags: ["Node.js", "MongoDB", "320+ Users", "₹16K+ Revenue", "99.9% Uptime", "SEO 100", "0.3s FCP"],
    },
    {
        company: "Haystack (deepset ai)",
        role: "Open Source Contributor",
        period: "2025 to Present",
        location: "Remote",
        icon: GitPullRequest,
        link: "https://github.com/deepset-ai/haystack",
        bullets: [
            "11 merged PRs and 2 improvement proposals to an open source LLM orchestration framework, improving framework level reliability.",
            "PR #11569: Fixed telemetry decorator metadata loss/preservation issue and added targeted tests.",
            "PR #11505: Implemented secure by default symlink handling for ByteStream and converters.",
            "PR #11259: Fixed device state restoration in NamedEntityExtractor alongside release note updates.",
            "Investigated and resolved framework level bugs, improving reliability of retrieval and pipeline components for downstream users."
        ],
        tags: ["Open Source", "LLM Framework", "11 PRs Merged", "Python"],
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

                <div style={{ position: "relative" }}>
                    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
                        {experiences.map((exp, i) => {
                            const Icon = exp.icon;
                            return (
                                <motion.div
                                    key={exp.company}
                                    initial={{ opacity: 0, y: 24 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.6, delay: 0.2 + i * 0.15 }}
                                    style={{ display: "flex", gap: 20, position: "relative", zIndex: 1 }}
                                >
                                    {/* Timeline node */}
                                    <div
                                        style={{
                                            width: 40,
                                            height: 40,
                                            minWidth: 40,
                                            borderRadius: 12,
                                            background: "var(--accent-glow)",
                                            border: "1.5px solid rgba(16, 185, 129, 0.25)",
                                            display: "flex",
                                            alignItems: "center",
                                            justifyContent: "center",
                                            marginTop: 4,
                                            zIndex: 2,
                                        }}
                                    >
                                        <Icon size={18} style={{ color: "var(--accent)" }} />
                                    </div>

                                    {/* Card */}
                                    <div className="card" style={{ flex: 1, position: "relative", paddingLeft: 24 }}>
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
                                                opacity: 0.3,
                                            }}
                                        />

                                        <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 14 }}>
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 8 }}>
                                                <h3 style={{ fontSize: "1.15rem", fontWeight: 700, color: "var(--text)" }}>
                                                    {exp.link ? (
                                                        <a href={exp.link} target="_blank" rel="noopener noreferrer" style={{ color: "inherit", textDecoration: "none", transition: "color 0.2s" }}
                                                            onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                                                            onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text)")}
                                                        >
                                                            {exp.company}
                                                        </a>
                                                    ) : exp.company}
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
                                            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 4 }}>
                                                <span style={{ fontSize: "0.8rem", color: "var(--accent)", fontWeight: 500 }}>
                                                    {exp.role}
                                                </span>
                                                {exp.location && (
                                                    <span style={{ fontSize: "0.7rem", color: "var(--text-dim)", fontFamily: "var(--font-mono)" }}>
                                                        {exp.location}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Bullet points */}
                                        <ul style={{ listStyle: "none", padding: 0, margin: "0 0 14px 0" }}>
                                            {exp.bullets.map((bullet, j) => (
                                                <li
                                                    key={j}
                                                    style={{
                                                        fontSize: "0.85rem",
                                                        color: "var(--text-muted)",
                                                        lineHeight: 1.7,
                                                        paddingLeft: 16,
                                                        position: "relative",
                                                        marginBottom: j < exp.bullets.length - 1 ? 6 : 0,
                                                    }}
                                                >
                                                    <span
                                                        style={{
                                                            position: "absolute",
                                                            left: 0,
                                                            top: "0.55em",
                                                            width: 4,
                                                            height: 4,
                                                            borderRadius: "50%",
                                                            background: "var(--text-dim)",
                                                        }}
                                                    />
                                                    {bullet}
                                                </li>
                                            ))}
                                        </ul>

                                        <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                                            {exp.tags.map((t) => (
                                                <span key={t} className="tag">{t}</span>
                                            ))}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>

            <div className="divider" style={{ marginTop: 80 }} />

            <style jsx>{`
            `}</style>
        </section>
    );
}
