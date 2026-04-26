import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SectionLabel } from "./About";

const projects = [
  {
    tag: "Flagship",
    title: "Multi-Agent Career AI",
    desc: "A multi-agent orchestration system with personalized career roadmap and AI agents.",
    stack: ["LangGraph", "FastAPI", "RAG"],
    badge: "🚀",
    status: "In Progress",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    tag: "New",
    title: "AI Interview Assistant",
    desc: "AI mock interview system with voice agents and feedback.",
    stack: ["React", "Python", "RAG"],
    badge: "🤖",
    status: "In Progress",
    liveUrl: "#",
    codeUrl: "#",
  },
  {
    tag: "Health",
    title: "AI Fitness Tracker",
    desc: "Fitness app with AI food recognition and dashboard.",
    stack: ["MERN", "Gemini"],
    badge: "💪",
    status: "Completed",
    liveUrl: "https://ai-fitness-tracker-coral.vercel.app/",
    codeUrl: "https://github.com/Saloni468kumari/AI-Fitness-Tracker",
  },
  {
    tag: "MERN",
    title: "Car Rental System",
    desc: "Full MERN booking system with dashboards.",
    stack: ["MongoDB", "React", "Node"],
    badge: "🚗",
    status: "Completed",
    liveUrl: "#",
    codeUrl: "https://github.com/Saloni468kumari/car-rental",
  },
];

export function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        
        {/* TOP SECTION */}
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <SectionLabel n="03" label="Selected Work" />
            <h2 className="mt-6 max-w-2xl text-4xl font-display md:text-5xl">
              Projects that{" "}
              <em className="bg-gradient-to-r from-lavender to-accent-pink bg-clip-text text-transparent not-italic font-semibold">
                solve, scale and surprise
              </em>.
            </h2>
          </div>

          <p className="max-w-sm text-sm text-muted-foreground">
            From AI systems to full-stack platforms — a peek at what I've built.
          </p>
        </div>

        {/* PROJECT GRID */}
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              viewport={{ once: true }}
              className="group rounded-3xl border border-border bg-card/40 p-8 transition-all duration-300 hover:border-lavender hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            >
              {/* HEADER */}
              <div className="flex items-start justify-between">
                <div className="flex flex-col gap-3">
                  <span className="text-xs font-semibold tracking-wide text-lavender uppercase">
                    {p.tag}
                  </span>

                  <span
                    className={`inline-flex w-fit rounded-full px-3 py-1 text-[11px] font-semibold border ${
                      p.status === "Completed"
                        ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                        : "border-amber-500/30 bg-amber-500/10 text-amber-400"
                    }`}
                  >
                    {p.status}
                  </span>
                </div>

                <span className="text-2xl">{p.badge}</span>
              </div>

              {/* TITLE & DESC */}
              <h3 className="mt-5 text-2xl font-semibold text-foreground">
                {p.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {p.desc}
              </p>

              {/* STACK */}
              <div className="mt-5 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-lg bg-background/60 px-3 py-1 text-xs text-muted-foreground border border-border"
                  >
                    {s}
                  </span>
                ))}
              </div>

              {/* ACTIONS */}
              <div className="mt-7 flex flex-wrap gap-3">
                <a
                  href={p.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-lavender to-accent-pink px-4 py-2 text-xs font-semibold text-background shadow transition hover:scale-105"
                >
                  Live Preview
                  <ArrowUpRight className="h-3 w-3" />
                </a>

                {p.codeUrl !== "#" && (
                  <a
                    href={p.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-border bg-card/40 px-4 py-2 text-xs font-semibold text-foreground transition hover:border-lavender"
                  >
                    <FaGithub className="h-3 w-3" />
                    Code
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}