"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 60);
            const ids = links.map((l) => l.href.slice(1));
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i]);
                if (el && el.getBoundingClientRect().top <= 200) {
                    setActive(ids[i]);
                    break;
                }
            }
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <>
            <motion.header
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 50,
                    padding: "0 24px",
                    transition: "background 0.3s, border-color 0.3s",
                    background: scrolled ? "rgba(10,10,11,0.85)" : "transparent",
                    backdropFilter: scrolled ? "blur(16px)" : "none",
                    borderBottom: scrolled ? "1px solid #222225" : "1px solid transparent",
                }}
            >
                <div
                    style={{
                        maxWidth: 1100,
                        margin: "0 auto",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        height: 64,
                    }}
                >
                    <a href="#" style={{ textDecoration: "none", fontSize: "1.25rem", fontWeight: 700 }}>
                        <span style={{ color: "#10b981" }}>R</span>
                        <span style={{ color: "#e4e4e7" }}>R</span>
                    </a>

                    {/* Desktop */}
                    <nav style={{ display: "flex", alignItems: "center", gap: 32 }} className="desktop-nav">
                        {links.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
                                style={{
                                    textDecoration: "none",
                                    fontSize: "0.8rem",
                                    letterSpacing: "0.05em",
                                    fontWeight: 500,
                                    color: active === l.href.slice(1) ? "#10b981" : "#71717a",
                                    transition: "color 0.2s",
                                }}
                                onMouseEnter={(e) => (e.target.style.color = "#e4e4e7")}
                                onMouseLeave={(e) =>
                                    (e.target.style.color = active === l.href.slice(1) ? "#10b981" : "#71717a")
                                }
                            >
                                {l.label}
                            </a>
                        ))}
                        <a href="https://drive.google.com/file/d/1TUi-6zBBG8Fu5slLffh-Fj6HszgFtGf9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="btn-outline" style={{ padding: "8px 20px", fontSize: "0.8rem" }}>
                            Resume
                        </a>
                    </nav>

                    {/* Mobile toggle */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="mobile-toggle"
                        style={{
                            display: "none",
                            background: "none",
                            border: "none",
                            cursor: "pointer",
                            flexDirection: "column",
                            gap: 5,
                            padding: 4,
                        }}
                    >
                        <span style={{ display: "block", width: 22, height: 2, background: "#e4e4e7", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(3px, 3px)" : "none" }} />
                        <span style={{ display: "block", width: 22, height: 2, background: "#e4e4e7", borderRadius: 2, transition: "opacity 0.3s", opacity: open ? 0 : 1 }} />
                        <span style={{ display: "block", width: 22, height: 2, background: "#e4e4e7", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg) translate(3px, -3px)" : "none" }} />
                    </button>
                </div>
            </motion.header>

            {/* Mobile menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        style={{
                            position: "fixed",
                            inset: 0,
                            zIndex: 45,
                            background: "rgba(10,10,11,0.97)",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center",
                            gap: 32,
                        }}
                    >
                        {links.map((l, i) => (
                            <motion.a
                                key={l.href}
                                href={l.href}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.08 }}
                                style={{ textDecoration: "none", fontSize: "1.5rem", fontWeight: 600, color: "#e4e4e7" }}
                            >
                                {l.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>

            <style jsx>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: flex !important; }
        }
      `}</style>
        </>
    );
}
