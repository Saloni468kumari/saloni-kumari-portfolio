import { motion } from "framer-motion";
import { GraduationCap, Trophy, Award, Code2, LucideIcon } from "lucide-react";

// Types to fix Red Lines on Icons
interface Achievement {
  icon: LucideIcon;
  text: string;
}

const achievements: Achievement[] = [
  { icon: Award, text: "Full Stack GenAI and Agentic AI · Udemy" },
  { icon: Code2, text: "300+ DSA problems solved" },
  { icon: Award, text: "NPTEL DBMS Certification" },
  { icon: Award, text: "GDSC Web Dev Bootcamp" },
  { icon: Award, text: "Web Development Certification · Udemy" },
  { icon: Award, text: "AWS Cloud Foundations" },
];

export function SectionLabel({ n, label }: { n: string; label: string }) {
  return (
    <div className="flex items-center gap-4">
      <span className="font-mono text-xs text-lavender-glow">{n}</span>
      <span className="h-px w-10 bg-lavender-glow/50" />
      <span className="text-[11px] uppercase tracking-[0.25em] text-muted-foreground">
        {label}
      </span>
    </div>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel n="01" label="About" />

        <div className="mt-10 grid grid-cols-1 gap-10 lg:gap-16 lg:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-display text-3xl md:text-4xl font-medium leading-snug text-balance">
              An <em className="gradient-text">aspiring engineer</em> passionate about building things that think.
            </h2>

            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I'm a final-year B.Tech student in CSE-AIML, deeply curious about the intersection of
              software engineering and artificial intelligence. I design scalable full-stack systems
              and integrate intelligence through GenAI, agents, and RAG pipelines.
            </p>

            <div className="mt-7 rounded-2xl border border-border bg-card/40 p-5">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-lavender to-accent-pink">
                  <GraduationCap className="h-4 w-4 text-background" />
                </span>

                <div>
                  <div className="text-[11px] uppercase tracking-wider text-muted-foreground">Education</div>
                  <div className="mt-1 font-display text-lg">B.Tech CSE-AIML · 2026</div>
                  <div className="text-sm text-muted-foreground">Lakshmi Narain College of Technology, Bhopal</div>
                  <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-lavender/10 px-3 py-1 text-xs font-medium text-lavender">
                    CGPA · 7.98
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="absolute -inset-6 -z-10 rounded-3xl bg-lavender-glow/10 blur-3xl" />
            <div className="rounded-3xl border border-border glass p-7">
              <div className="flex items-center gap-3">
                <Trophy className="h-5 w-5 text-lavender-glow" />
                <h3 className="font-display text-xl">Achievements</h3>
              </div>

              <div className="mt-5 grid gap-3">
                {achievements.map((a) => (
                  <motion.div
                    key={a.text}
                    className="group flex items-center gap-3 rounded-lg border border-border/50 bg-card/40 px-4 py-2.5 transition-all hover:border-lavender hover:bg-card/70"
                  >
                    <span className="grid h-8 w-8 place-items-center rounded-md bg-lavender/10 text-lavender group-hover:bg-lavender group-hover:text-background">
                      <a.icon className="h-3.5 w-3.5" />
                    </span>
                    <span className="text-sm text-muted-foreground">{a.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}