import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, Download } from "lucide-react";

const ROLES = [
  "AI/ML Engineer",
  "Full Stack Developer",
  "GenAI Builder",
  "Software Engineer",
];

// Remove the import lines at the top and just use these:
const portrait = "/src/assets/hero-portrait2.png"; 
const particles = "/src/assets/particles-bg.jpg";
const resume = "/src/assets/resume.pdf";

function useTyping(words: string[]) {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [del, setDel] = useState(false);

  useEffect(() => {
    const word = words[i % words.length];
    const timeout = setTimeout(() => {
      if (!del) {
        const next = word.slice(0, text.length + 1);
        setText(next);
        if (next === word) {
          setTimeout(() => setDel(true), 1400);
        }
      } else {
        const next = word.slice(0, text.length - 1);
        setText(next);
        if (next === "") {
          setDel(false);
          setI((v) => v + 1);
        }
      }
    }, del ? 45 : 90);
    return () => clearTimeout(timeout);
  }, [text, del, i, words]);

  return text;
}

export function Hero() {
  const typed = useTyping(ROLES);

  return (
    <section id="home" className="relative isolate overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      {/* BACKGROUND */}
      <div className="absolute inset-0 -z-10">
        <img
          src={particles}
          alt=""
          className="h-full w-full object-cover opacity-40"
          onError={(e) => (e.currentTarget.style.display = 'none')} 
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-[1.2fr_1fr]">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-4 font-display text-4xl font-medium leading-[1.1] md:text-5xl lg:text-[4.2rem]"
          >
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent font-semibold">Hi</span>, <br />
            This is{" "}
            <em className="not-italic bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Saloni Kumari
            </em>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Currently developing{" "}
            <span className="font-medium text-foreground">production-grade AI systems</span> and scalable full-stack applications.
          </motion.p>

          <motion.div className="mt-6 font-mono text-base text-muted-foreground md:text-lg">
            <span className="text-purple-400">~/</span>currently →{" "}
            <span className="caret font-medium text-foreground">{typed}</span>
          </motion.div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold bg-gradient-to-r from-purple-500 to-pink-500 text-white transition-all hover:scale-105">
              <Mail className="h-4 w-4" /> Contact
            </a>
            <a href={resume} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-7 py-3.5 text-sm font-semibold text-foreground backdrop-blur transition-all hover:bg-card/70">
              <Download className="h-4 w-4" /> Resume
            </a>
          </div>
        </div>

        {/* IMAGE WITH FALLBACK */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="mx-auto w-full max-w-md">
          <div className="group relative">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-tr from-purple-500/30 to-pink-500/30 blur-3xl opacity-75" />
            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-2 backdrop-blur-xl">
              <img
                src={portrait}
                alt="Saloni Kumari"
                className="relative z-0 h-full w-full rounded-[1.6rem] object-cover transition duration-500 group-hover:scale-[1.03]"
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/400x500?text=Saloni")}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}