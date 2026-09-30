"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Trophy, GitPullRequest, Code, Youtube, Award, Zap } from "lucide-react";

const achievements = [
    {
        icon: GitPullRequest,
        title: "Open Source  Haystack",
        description: "11 merged PRs and 2 improvement proposals to deepset-ai/Haystack, a widely-used open-source LLM orchestration framework.",
    },
    {
        icon: Code,
        title: "1000+ DSA Problems",
        description: "Solved 1000+ Data Structures & Algorithms problems across LeetCode, Codeforces, and other competitive programming platforms.",
    },
    {
        icon: Youtube,
        title: "YouTube  1.4K Subs, 250K+ Views",
        description: "Built a tech & AI content channel with 1.4K subscribers and 250K+ views. Some videos produced entirely with AI avatar, AI voice, and AI-generated visuals.",
    },
    {
        icon: Trophy,
        title: "Tech-Sangam (PW + AWS)",
        description: "Ranked Top 10 out of 50+ teams at Tech-Sangam, developing a gamified learning prototype featuring point-based question solving, unlocks, and competitive mechanics.",
    },
    {
        icon: Zap,
        title: "Razorpay AI Buildathon",
        description: "Participant at the Razorpay AI Buildathon  built a multi-agent merchant onboarding pipeline.",
    },
    {
        icon: Award,
        title: "Hacktoberfest 2024",
        description: "Merged 4 PRs during Hacktoberfest 2024 and earned the official contributor badge.",
    },
];

export default function Achievements() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="achievements" className="section" ref={ref}>
            <div className="container-main">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-label"
                >
          // achievements
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                    Recognition &amp; milestones<span style={{ color: "var(--accent)" }}>.</span>
                </motion.h2>

                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                        gap: 16,
                    }}
                >
                    {achievements.map((item, i) => {
                        const Icon = item.icon;
                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                                className="card"
                                style={{ display: "flex", gap: 16, alignItems: "flex-start" }}
                            >
                                <div
                                    style={{
                                        width: 40,
                                        height: 40,
                                        minWidth: 40,
                                        borderRadius: 10,
                                        background: "var(--accent-glow)",
                                        border: "1px solid rgba(16, 185, 129, 0.2)",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                    }}
                                >
                                    <Icon size={18} style={{ color: "var(--accent)" }} />
                                </div>
                                <div>
                                    <h3 style={{ fontSize: "0.95rem", fontWeight: 700, color: "var(--text)", marginBottom: 6 }}>
                                        {item.title}
                                    </h3>
                                    <p style={{ fontSize: "0.825rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            <div className="divider" style={{ marginTop: 80 }} />
        </section>
    );
}
