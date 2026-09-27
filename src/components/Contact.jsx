"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Github, Linkedin, Mail, Code, Trophy, Youtube } from "lucide-react";

const socials = [
    { icon: Mail, label: "Email", href: "mailto:rajritik2425@gmail.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/ritik-raj-0a098228a/" },
    { icon: Github, label: "GitHub", href: "https://github.com/ritikraj2425" },
    { icon: Youtube, label: "YouTube", href: "https://www.youtube.com/@ritikraj2425" },
    { icon: Code, label: "Codeforces", href: "https://codeforces.com/profile/ritik_raj2425" },
    { icon: Trophy, label: "LeetCode", href: "https://leetcode.com/u/ritikraj2425/" },
];

export default function Contact() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="contact" className="section" ref={ref}>
            <div className="container-main" style={{ textAlign: "center" }}>
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-label"
                    style={{ display: "block" }}
                >
          // let&apos;s connect
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: "clamp(1.8rem, 5vw, 3.5rem)",
                        fontWeight: 700,
                        letterSpacing: "-0.03em",
                        lineHeight: 1.2,
                        marginBottom: 20,
                    }}
                >
                    Got something interesting?
                    <br />
                    <span className="gradient-text">Let&apos;s talk</span>
                    <span style={{ color: "var(--accent)" }}>.</span>
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        color: "var(--text-muted)",
                        maxWidth: 480,
                        margin: "0 auto 32px",
                        fontSize: "0.95rem",
                        lineHeight: 1.7,
                    }}
                >
                    I&apos;m always open to exciting opportunities, collaborations, or
                    just a good conversation about tech and AI. Drop me a line.
                </motion.p>

                <motion.a
                    href="mailto:rajritik2425@gmail.com"
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="btn-primary"
                    style={{
                        display: "inline-flex",
                        marginBottom: 12,
                        fontSize: "0.95rem",
                        padding: "14px 32px",
                    }}
                >
                    <Mail size={18} /> rajritik2425@gmail.com
                </motion.a>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.4 }}
                    style={{
                        fontSize: "0.7rem",
                        fontFamily: "var(--font-mono)",
                        color: "var(--text-dim)",
                        letterSpacing: "0.05em",
                        marginBottom: 32,
                    }}
                >
                    +91 9113132537
                </motion.p>

                {/* Social icons */}
                <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.45 }}
                    style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}
                >
                    {socials.map((s) => {
                        const Icon = s.icon;
                        return (
                            <motion.a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                title={s.label}
                                whileHover={{ scale: 1.08, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                style={{
                                    width: 48,
                                    height: 48,
                                    borderRadius: 12,
                                    border: "1px solid var(--border)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    color: "var(--text-dim)",
                                    textDecoration: "none",
                                    transition: "border-color 0.25s, color 0.25s",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.borderColor = "var(--accent)";
                                    e.currentTarget.style.color = "var(--accent)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.borderColor = "var(--border)";
                                    e.currentTarget.style.color = "var(--text-dim)";
                                }}
                            >
                                <Icon size={20} />
                            </motion.a>
                        );
                    })}
                </motion.div>
            </div>

            {/* Footer */}
            <div
                style={{
                    maxWidth: 1100,
                    margin: "80px auto 0",
                    padding: "20px 24px",
                    borderTop: "1px solid var(--border)",
                    textAlign: "center",
                    fontSize: "0.7rem",
                    color: "var(--text-dim)",
                    letterSpacing: "0.05em",
                    fontFamily: "var(--font-mono)",
                }}
            >
                Designed & Built by <span style={{ color: "var(--accent)" }}>Ritik Raj</span> | 2026
            </div>
        </section>
    );
}
