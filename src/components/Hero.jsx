"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { Github, Linkedin, Code, Trophy } from "lucide-react";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

const quickLinks = [
    { icon: Github, href: "https://github.com/ritikraj2425", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/ritik-raj-0a098228a/", label: "LinkedIn" },
    { icon: Code, href: "https://codeforces.com/profile/ritik_raj2425", label: "Codeforces" },
    { icon: Trophy, href: "https://leetcode.com/u/ritikraj2425/", label: "LeetCode" },
];

export default function Hero() {
    return (
        <section
            style={{
                position: "relative",
                minHeight: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                overflow: "hidden",
            }}
        >
            <ParticleField />

            {/* Bottom blend */}
            <div
                style={{
                    position: "absolute",
                    bottom: 0,
                    left: 0,
                    right: 0,
                    height: 200,
                    background: "linear-gradient(to top, #0a0a0b, transparent)",
                    zIndex: 5,
                    pointerEvents: "none",
                }}
            />

            <div className="container-main" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
                {/* Availability indicator */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 8,
                        padding: "6px 16px",
                        borderRadius: 20,
                        border: "1px solid rgba(16, 185, 129, 0.2)",
                        background: "rgba(16, 185, 129, 0.05)",
                        marginBottom: 28,
                    }}
                >
                    <span
                        style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "#10b981",
                            display: "inline-block",
                            boxShadow: "0 0 8px rgba(16, 185, 129, 0.6)",
                        }}
                    />
                    <span
                        style={{
                            fontFamily: "var(--font-mono)",
                            fontSize: "0.7rem",
                            letterSpacing: "0.1em",
                            color: "#10b981",
                        }}
                    >
                        OPEN TO OPPORTUNITIES
                    </span>
                </motion.div>

                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.2em",
                        color: "var(--text-dim)",
                        marginBottom: 20,
                    }}
                >
                    FULL STACK DEVELOPER · AI ENGINEER · OPEN SOURCE CONTRIBUTOR
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.35 }}
                    style={{
                        fontSize: "clamp(3rem, 10vw, 7rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.04em",
                        lineHeight: 1,
                        marginBottom: 28,
                    }}
                >
                    <span className="gradient-text">Ritik</span>{" "}
                    <span style={{ color: "#e4e4e7" }}>Raj</span>
                </motion.h1>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.55 }}
                    style={{
                        maxWidth: 620,
                        margin: "0 auto 36px",
                        color: "#71717a",
                        fontSize: "1.05rem",
                        lineHeight: 1.75,
                    }}
                >
                    AI &amp; Software builder  open-source contributor to{" "}
                    <span style={{ color: "#e4e4e7", fontWeight: 500 }}>Haystack</span>, co-founder of a scaled
                    EdTech product, and creator of an AI content channel with{" "}
                    <span style={{ color: "#10b981", fontWeight: 500 }}>250K+ views</span>. From LoRA fine-tuning to
                    production automation with MCP, RabbitMQ, and Celery  I build{" "}
                    <span style={{ color: "#e4e4e7", fontWeight: 500 }}>end-to-end</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap", marginBottom: 36 }}
                >
                    <a href="#projects" className="btn-primary">
                        View My Work <span style={{ fontSize: "1.1em" }}>↓</span>
                    </a>
                    <a href="#contact" className="btn-outline">
                        Let&apos;s Connect <span style={{ fontSize: "1.1em" }}>→</span>
                    </a>
                </motion.div>

                {/* Social quick links */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.85 }}
                    style={{ display: "flex", gap: 10, justifyContent: "center" }}
                >
                    {quickLinks.map((link) => {
                        const Icon = link.icon;
                        return (
                            <a
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={link.label}
                                style={{
                                    width: 38,
                                    height: 38,
                                    borderRadius: 8,
                                    border: "1px solid var(--border)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-dim)",
                                    textDecoration: "none",
                                    transition: "all 0.25s ease",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "#10b981";
                                    e.currentTarget.style.color = "#10b981";
                                    e.currentTarget.style.transform = "translateY(-2px)";
                                    e.currentTarget.style.boxShadow = "0 4px 12px rgba(16,185,129,0.15)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border)";
                                    e.currentTarget.style.color = "var(--text-dim)";
                                    e.currentTarget.style.transform = "translateY(0)";
                                    e.currentTarget.style.boxShadow = "none";
                                }}
                            >
                                <Icon size={16} />
                            </a>
                        );
                    })}
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    style={{
                        position: "absolute",
                        bottom: -60,
                        left: "50%",
                        transform: "translateX(-50%)",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 8,
                    }}
                >
                    <span style={{ fontSize: "0.65rem", color: "#52525b", letterSpacing: "0.15em", fontFamily: "var(--font-mono)" }}>SCROLL</span>
                    <motion.div
                        animate={{ y: [0, 6, 0] }}
                        transition={{ duration: 1.8, repeat: Infinity }}
                        style={{
                            width: 18,
                            height: 28,
                            borderRadius: 10,
                            border: "1.5px solid #333",
                            display: "flex",
                            justifyContent: "center",
                            paddingTop: 6,
                        }}
                    >
                        <div style={{ width: 3, height: 6, borderRadius: 3, background: "#10b981" }} />
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
