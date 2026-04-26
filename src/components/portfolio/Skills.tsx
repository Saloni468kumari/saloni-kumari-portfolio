import { motion } from "framer-motion";
import { Code, Brain, Heart, LucideIcon } from "lucide-react";
import { SectionLabel } from "./About";

// Proper Typing for Icons
interface SkillGroup {
  icon: LucideIcon;
  title: string;
  items: string[];
}

const groups: SkillGroup[] = [
  {
    icon: Code,
    title: "Technical",
    items: ["Java", "Python", "JavaScript", "React", "Node.js", "Express", "MongoDB", "MySQL", "Git", "HTML/CSS", "Tailwind CSS"],
  },
  {
    icon: Brain,
    title: "AI / ML & GenAI",
    items: ["LangChain", "LangGraph", "RAG Pipelines", "Hugging Face", "Agentic AI", "Knowledge Graphs", "FastAPI", "Voice Agents"],
  },
  {
    icon: Heart,
    title: "Soft Skills",
    items: ["Problem Solving", "DSA", "Teamwork", "Communication", "Adaptability", "Leadership"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-pink/10 blur-[120px]" />
      
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel n="02" label="Skills" />
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium md:text-5xl text-balance">
          A toolkit built across <em className="bg-gradient-to-r from-lavender to-accent-pink bg-clip-text text-transparent not-italic font-semibold">code, intelligence and craft</em>.
        </h2>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: gi * 0.1, duration: 0.6 }}
              className="group relative rounded-3xl border border-border bg-card/50 p-7 transition-all hover:border-lavender hover:-translate-y-2"
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-lavender/0 to-accent-pink/0 opacity-0 transition-opacity group-hover:from-lavender/5 group-hover:to-accent-pink/5 group-hover:opacity-100" />
              
              {/* Icon Box */}
              <span className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-lavender to-accent-pink">
                <g.icon className="h-5 w-5 text-background" />
              </span>
              
              <h3 className="mt-5 font-display text-2xl text-foreground">{g.title}</h3>
              
              <div className="mt-5 flex flex-wrap gap-2">
                {g.items.map((it) => (
                  <span
                    key={it}
                    className="rounded-full border border-border/70 bg-background/40 px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:border-lavender hover:text-foreground"
                  >
                    {it}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}