"use client";

import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ParticleField = dynamic(() => import("./ParticleField"), { ssr: false });

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
                {/* Tag */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontFamily: "var(--font-mono)",
                        fontSize: "0.75rem",
                        letterSpacing: "0.2em",
                        color: "#10b981",
                        marginBottom: 28,
                    }}
                >
                    FULL STACK DEVELOPER · AI ENGINEER · BUILDER
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
                        marginBottom: 24,
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
                        maxWidth: 560,
                        margin: "0 auto 40px",
                        color: "#71717a",
                        fontSize: "1rem",
                        lineHeight: 1.7,
                    }}
                >
                    I build products people actually use from EdTech platforms serving
                    thousands to AI-driven content pipelines. Engineering the future at the
                    intersection of <span style={{ color: "#e4e4e7", fontWeight: 500 }}>full-stack development</span> and{" "}
                    <span style={{ color: "#e4e4e7", fontWeight: 500 }}>artificial intelligence</span>.
                </motion.p>

                {/* CTAs */}
                <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 }}
                    style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}
                >
                    <a href="#projects" className="btn-primary">
                        View My Work <span style={{ fontSize: "1.1em" }}>↓</span>
                    </a>
                    <a href="#contact" className="btn-outline">
                        Let&apos;s Connect <span style={{ fontSize: "1.1em" }}>→</span>
                    </a>
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
