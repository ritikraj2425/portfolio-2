"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github } from "lucide-react";

const projects = [
    {
        title: "Seedite",
        tagline: "Full-Stack EdTech Platform",
        tech: ["Next.js", "Node.js", "Express", "MongoDB", "AWS", "Bunny CDN"],
        description:
            "A complete learning platform for competitive exam prep — with structured practice workflows, video streaming, mock tests, interview prep, performance analytics, and a full admin dashboard. Not a tutorial project. A real product.",
        liveUrl: "https://www.seedite.in/",
        githubUrl: "",
        accent: "#10b981",
    },
    {
        title: "MergeFlow",
        tagline: "MR/PR Management Tool",
        tech: ["Next.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
        description:
            "Identified a workflow bottleneck during my internship and solved it. Built a web tool that streamlines MR/PR task coordination, cutting manual overhead and accelerating team velocity.",
        liveUrl: "https://mergeflow.vercel.app/",
        githubUrl: "https://github.com/ritikraj2425/mr-management-backend",
        accent: "#06b6d4",
    },
    {
        title: "Quantum Research",
        tagline: "HHL Algorithm Implementation",
        tech: ["Python", "Qiskit", "Linear Algebra"],
        description:
            "Studied and implemented the Harrow–Hassidim–Lloyd (HHL) quantum algorithm for solving linear systems. Explored quantum circuit design, algorithmic complexity, and the limits of quantum linear solvers. Pure research, pure curiosity.",
        githubUrl: "https://github.com/ritikraj2425/HHL_Algorithm_Quantum",
        accent: "#f59e0b",
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
            transition={{ duration: 0.6, delay: index * 0.12 }}
        >
            <div
                className="card"
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                    borderTop: `2px solid ${hover ? project.accent : "var(--border)"}`,
                    transition: "border-color 0.3s ease, transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease",
                }}
            >
                {/* Header */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 8 }}>
                    <div>
                        <h3 style={{ fontSize: "1.3rem", fontWeight: 700, color: "var(--text)", marginBottom: 4 }}>{project.title}</h3>
                        <span style={{ fontSize: "0.75rem", fontFamily: "var(--font-mono)", color: project.accent, letterSpacing: "0.05em" }}>
                            {project.tagline}
                        </span>
                    </div>
                    <div style={{ display: "flex", gap: 12, alignItems: "center" }}>
                        {project.liveUrl && (
                            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-dim)", transition: "color 0.2s" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
                            >
                                <ExternalLink size={16} />
                            </a>
                        )}
                        {project.githubUrl && (
                            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" style={{ color: "var(--text-dim)", transition: "color 0.2s" }}
                                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-dim)")}
                            >
                                <Github size={16} />
                            </a>
                        )}
                    </div>
                </div>

                {/* Description */}
                <p style={{ fontSize: "0.875rem", color: "var(--text-muted)", lineHeight: 1.7, margin: "16px 0 20px" }}>
                    {project.description}
                </p>

                {/* Tech */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {project.tech.map((t) => (
                        <span key={t} className="tag" style={{ borderColor: hover ? `${project.accent}40` : undefined, color: hover ? project.accent : undefined }}>
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
