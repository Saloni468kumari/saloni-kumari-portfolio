import { motion } from "framer-motion";
import { Globe, Layers, Palette, Cpu, Bot, Code2, LucideIcon } from "lucide-react";
import { SectionLabel } from "./About";

// Types added to prevent Red Lines on Icons
interface Service {
  icon: LucideIcon;
  title: string;
  desc: string;
}

const services: Service[] = [
  { icon: Cpu, title: "AI/ML Engineer", desc: "RAG, agents and intelligent pipelines that ship." },
  { icon: Layers, title: "Full Stack Development", desc: "End-to-end web applications with modern stacks." },
  { icon: Globe, title: "Web Development", desc: "Performant, responsive sites that simply work." },
  { icon: Palette, title: "Frontend Engineering", desc: "Pixel-perfect UIs powered by React + Tailwind." },
  { icon: Code2, title: "Software Development", desc: "Clean, scalable code following best practices." },
  { icon: Bot, title: "Chatbot Development", desc: "Conversational AI & voice agents tailored to you." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel n="04" label="Services" />
        <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium md:text-5xl text-balance">
          What I can <em className="bg-gradient-to-r from-lavender to-accent-pink bg-clip-text text-transparent not-italic font-semibold">build for you</em>.
        </h2>

        {/* BORDER-GRID EFFECT: Standardized colors for Tailwind v4 */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-3xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="group relative bg-card p-8 transition-colors hover:bg-card/60"
            >
              {/* ICON BOX */}
              <span className="grid h-12 w-12 place-items-center rounded-2xl border border-lavender/30 bg-lavender/10 text-lavender transition-all group-hover:bg-gradient-to-br group-hover:from-lavender group-hover:to-accent-pink group-hover:text-background group-hover:border-transparent">
                <s.icon className="h-5 w-5" />
              </span>
              
              <h3 className="mt-6 font-display text-2xl text-foreground">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              
              <span className="mt-6 inline-flex items-center gap-1 text-xs font-medium text-lavender opacity-0 transition-opacity group-hover:opacity-100">
                Contact for details →
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}