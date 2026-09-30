"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Razorpay Merchant Onboarding AI Agent",
        tagline: "Multi-Agent Automation Pipeline",
        year: "2025",
        status: "Live",
        tech: ["RabbitMQ", "Celery", "MCP", "FastAPI", "AI Agents", "Microservices"],
        description: [
            "Built a multi-agent onboarding pipeline (4 microservices) that verifies merchant data.",
            "Scrapes and cross-checks business websites automatically.",
            "Generates a risk/trust score to auto-approve, reject, or grant a 48-hr grace period.",
            "Orchestrated async agent workflows with RabbitMQ and Celery.",
            "Exposed an MCP server so merchants can self-onboard directly through an AI assistant."
        ],
        liveUrl: "https://razorpay-onboarding-agent.vercel.app/",
        githubUrl: "https://github.com/ritikraj2425/Razorpay-OnboardingAgent",
    },
    {
        title: "Fillica AI",
        tagline: "Autonomous Job Application Agent",
        year: "2026",
        status: "Live",
        tech: ["Claude", "GPT-4o", "Gemini", "Playwright", "Electron", "Next.js", "MongoDB"],
        description: [
            "Multi-LLM agent framework with retry logic, structured outputs, and provider abstraction.",
            "Hybrid system utilizing deterministic Playwright DOM injection.",
            "Integrates vision-language reasoning and semantic field disambiguation.",
            "Reached 85% accuracy across 15+ ATS platforms.",
            "Full-stack desktop app built with Electron, Next.js, Node.js, and MongoDB."
        ],
        liveUrl: "https://fillica-ai.vercel.app",
        githubUrl: "https://github.com/ritikraj2425/FillicaAI",
    },
    {
        title: "Seedite",
        tagline: "Full-Stack EdTech Platform",
        year: "2024",
        status: "Production",
        tech: ["Next.js", "Node.js", "Express", "MongoDB", "Razorpay", "Bunny CDN"],
        description: [
            "A complete learning platform for competitive exam prep.",
            "Features structured practice workflows, video streaming, mock tests, and interview prep.",
            "Includes performance analytics and a full admin dashboard.",
            "Gained 320+ users and Rs. 16K+ revenue with zero paid marketing.",
            "Achieved 99.9% uptime, SEO 100, and 0.3s FCP."
        ],
        liveUrl: "https://www.seedite.in/",
        githubUrl: "",
    },
    {
        title: "RAIDEN-C",
        tagline: "Terminal Shooter Engine in Pure C",
        year: "2026",
        status: "Open Source",
        tech: ["C", "Manual Memory Allocation", "State Machines", "Game Engine"],
        description: [
            "Built a terminal-based shooter game engine entirely in C without string.h, math.h, or standard allocation APIs.",
            "Implemented custom libraries for memory management, string operations, terminal rendering, and non-blocking keyboard input.",
            "Created manual memory allocator using a preallocated pool with custom lifecycle handling.",
            "Engineered frame-based game loop with collision detection and double-buffered rendering."
        ],
        githubUrl: "https://github.com/Prince0906/Raiden",
    },
    {
        title: "University Library Cabin Booking",
        tagline: "Campus-Wide Booking System",
        year: "2025",
        status: "Live",
        tech: ["Node.js", "Express", "MongoDB", "Google OAuth 2.0", "JWT", "RBAC"],
        description: [
            "Campus-wide cabin booking platform built and deployed solo, replacing manual cabin allocation.",
            "Features authenticated, concurrent-safe reservations and group-consent workflows.",
            "Engineered robust race-condition handling using an in-memory Node.js mutex for concurrent slot requests.",
            "Ensures duplicate/overlapping booking prevention.",
            "Evolved the system to v4 with a group-booking model requiring member consent via QR codes.",
            "Scaled to 600+ users, 1,500+ bookings, and 800+ completed sessions."
        ],
        liveUrl: "https://agl-cabin-booking.vercel.app/",
        githubUrl: "https://github.com/ritikraj2425/ashok-goel-library",
    },
    {
        title: "Discrete Diffusion Text Generation",
        tagline: "Fine-Tuning / Model Internals",
        year: "2025",
        status: "Demo",
        tech: ["PyTorch", "Transformers", "Hugging Face", "Gradio", "DiT", "AdamW"],
        description: [
            "Trained a 17M-parameter Masked Diffusion LM.",
            "Utilized 6-layer DiT, AdaLN, and log-linear noise schedule.",
            "Optimized with AdamW, cosine LR, EMA, and noise-weighted ELBO.",
            "Shipped a live Gradio demo on Hugging Face Spaces."
        ],
        liveUrl: "https://huggingface.co/spaces/ritikraj2425/Discrete-Diffusion-Text-Demo",
        githubUrl: "https://github.com/ritikraj2425/Diffusion-Text-Generation",
    },
    {
        title: "Quantum Research  HHL Algorithm",
        tagline: "Quantum Computing",
        year: "2025",
        status: "Research",
        tech: ["Python", "Qiskit", "Linear Algebra", "Quantum Circuits"],
        description: [
            "Studied and implemented the Harrow Hassidim Lloyd (HHL) quantum algorithm for solving linear systems.",
            "Explored quantum circuit design, algorithmic complexity, and limitations of quantum linear solvers.",
            "Focused on theoretical understanding and simulation-based validation."
        ],
        githubUrl: "https://github.com/ritikraj2425/HHL_Algorithm_Quantum",
    },
    {
        title: "MergeFlow",
        tagline: "MR/PR Management Tool",
        year: "2025",
        status: "Demo",
        tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        description: [
            "Built a centralized PR coordination tool to resolve fragmented Slack-based manager approvals.",
            "Engineered an organization-level hierarchy where teams authenticate specific GitHub projects.",
            "Members can securely tag managers on PRs.",
            "Integrated GitHub API to fetch real-time PR status.",
            "Provides managers a consolidated dashboard of pending reviews.",
            "Successfully demonstrated the workflow optimization to the engineering team."
        ],
        liveUrl: "https://mergeflow.vercel.app/",
        githubUrl: "https://github.com/ritikraj2425/mr-management-backend",
    },
];

function ProjectCard({ project, index }) {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    const [hover, setHover] = useState(false);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: index * 0.1 }}
        >
            <div
                className="card project-card"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    borderTop: `2px solid ${hover ? "var(--accent)" : "var(--border)"}`,
                    transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                }}
            >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap", marginBottom: 6 }}>
                            <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text)", lineHeight: 1.3 }}>{project.title}</h3>
                            <span
                                style={{
                                    fontSize: "0.6rem",
                                    fontFamily: "var(--font-mono)",
                                    fontWeight: 600,
                                    letterSpacing: "0.08em",
                                    padding: "2px 8px",
                                    borderRadius: 4,
                                    background: "var(--accent-glow)",
                                    color: "var(--accent)",
                                    border: "1px solid rgba(16, 185, 129, 0.2)",
                                    whiteSpace: "nowrap",
                                    textTransform: "uppercase",
                                }}
                            >
                                {project.status}
                            </span>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                            <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.05em" }}>
                                {project.tagline}
                            </span>
                            <span style={{ fontSize: "0.65rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)", letterSpacing: "0.05em" }}>
                                {project.year}
                            </span>
                        </div>
                    </div>
                    <div style={{ display: "flex", gap: 10, alignItems: "center", marginLeft: 12, flexShrink: 0 }}>
                        {project.liveUrl && (
                            <a
                                href={project.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Live demo of ${project.title}`}
                                style={{
                                    color: "var(--text-dim)",
                                    transition: "color 0.2s",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 32,
                                    height: 32,
                                    borderRadius: 6,
                                    border: "1px solid transparent",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--accent)";
                                    e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--text-dim)";
                                    e.currentTarget.style.borderColor = "transparent";
                                }}
                            >
                                <ExternalLink size={15} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub repo of ${project.title}`}
                                style={{
                                    color: "var(--text-dim)",
                                    transition: "color 0.2s",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    width: 32,
                                    height: 32,
                                    borderRadius: 6,
                                    border: "1px solid transparent",
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.color = "var(--accent)";
                                    e.currentTarget.style.borderColor = "rgba(16, 185, 129, 0.2)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.color = "var(--text-dim)";
                                    e.currentTarget.style.borderColor = "transparent";
                                }}
                            >
                                <Github size={15} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 18px 0" }}>
                    {project.description.map((bullet, j) => (
                        <li
                            key={j}
                            style={{
                                fontSize: "0.85rem",
                                color: "var(--text-muted)",
                                lineHeight: 1.7,
                                paddingLeft: 16,
                                position: "relative",
                                marginBottom: j < project.description.length - 1 ? 6 : 0,
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

                {/* Tech */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tech.map((t) => (
                        <span key={t} className="tag">
                            {t}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}

export default function Projects() {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true, margin: "-80px" });

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container-main">
                <motion.span
                    initial={{ opacity: 0, x: -10 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5 }}
                    className="section-label"
                >
          // projects
                </motion.span>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="section-title"
                >
                    Things I&apos;ve built<span style={{ color: "var(--accent)" }}>.</span>
                </motion.h2>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={inView ? { opacity: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 12,
                        marginBottom: 32,
                        paddingBottom: 20,
                        borderBottom: "1px solid var(--border)",
                    }}
                >
                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-dim)", letterSpacing: "0.1em" }}>
                        {projects.length} PROJECTS
                    </span>
                    <span style={{ fontSize: "0.65rem", color: "var(--text-dim)" }}>|</span>
                    <span style={{ fontSize: "0.7rem", fontFamily: "var(--font-mono)", color: "var(--text-muted)", letterSpacing: "0.1em" }}>
                        {projects.filter(p => p.status === "Live" || p.status === "Production").length} IN PRODUCTION
                    </span>
                </motion.div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    {projects.map((p, i) => (
                        <ProjectCard key={p.title} project={p} index={i} />
                    ))}
                </div>
            </div>

            <div className="divider" style={{ marginTop: 80 }} />
        </section>
    );
}
