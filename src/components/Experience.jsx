"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Rocket, GitPullRequest } from "lucide-react";

const experiences = [
    {
        company: "Physics Wallah",
        role: "Tech Engineering Intern",
        period: "Jan 2025 – Jul 2025",
        location: "Noida",
        icon: Briefcase,
        bullets: [
            "Contributed to an internal UI component library used across PW platforms serving 1.5M+ DAU.",
            "Integrated the Otpless auth SDK into production authentication workflows on PW.live.",
            "Performed technical testing and QA on PW.live (v2), the company's primary consumer-facing website, before release.",
        ],
        tags: ["UI Library", "Otpless SDK", "1.5M+ DAU", "Production", "QA"],
    },
    {
        company: "Seedite",
        role: "Co-Founder & Sole Engineer",
        period: "Dec 2024 – Present",
        location: "Remote",
        icon: Rocket,
        link: "https://www.seedite.in",
        bullets: [
            "Solo-built and shipped a scalable EdTech platform in under 1 month — 320+ users, Rs. 16K+ revenue, 99.9% uptime, zero paid marketing.",
            "Shipped 100+ hours of lecture content; iterated 100+ feature/UX changes directly from user feedback.",
            "Full system architecture: Bunny.net CDN, Razorpay payments, mock tests, interview prep, analytics. SEO 100, 125K+ impressions, 0.3s FCP, 3% conversion rate.",
        ],
        tags: ["EdTech", "Full-Stack", "320+ Users", "Rs. 16K+ Revenue", "99.9% Uptime"],
    },
    {
        company: "Haystack (deepset-ai)",
        role: "Open Source Contributor",
        period: "2025 – Present",
        location: "Remote",
        icon: GitPullRequest,
        link: "https://github.com/deepset-ai/haystack",
        bullets: [
            "11 merged PRs and 2 improvement proposals to an open-source LLM orchestration framework.",
            "Investigated and resolved framework-level bugs, improving reliability of retrieval and pipeline components for downstream users.",
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
                    {/* Timeline line */}
                    <div
                        className="timeline-line"
                        style={{
                            position: "absolute",
                            left: 19,
                            top: 0,
                            bottom: 0,
                            width: 1,
                            background: "linear-gradient(to bottom, var(--accent), var(--border) 40%, var(--border) 60%, transparent)",
                            zIndex: 0,
                        }}
                    />

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
                                    {/* <div
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
                                    </div> */}

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
                @media (max-width: 640px) {
                    .timeline-line {
                        display: none !important;
                    }
                }
            `}</style>
        </section>
    );
}
