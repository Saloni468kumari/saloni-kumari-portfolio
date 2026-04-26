import { motion } from "framer-motion";
import { useRef, useState, type FormEvent, type InputHTMLAttributes } from "react";
import emailjs from "@emailjs/browser";
import { SectionLabel } from "./About";

import {
  Mail,
  Phone,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

/* ---------------- SOCIAL TYPE ---------------- */
interface Social {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href: string;
}

/* ---------------- SOCIAL DATA ---------------- */
const socials: Social[] = [
  {
    icon: Mail,
    label: "Email",
    value: "saloni26lnct@gmail.com",
    href: "mailto:saloni26lnct@gmail.com",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    value: "/in/saloni-singh-8a1808253",
    href: "https://linkedin.com/in/saloni-singh-8a1808253",
  },
  {
    icon: FaGithub,
    label: "GitHub",
    value: "@Saloni468kumari",
    href: "https://github.com/Saloni468kumari",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+91 93417 06734",
    href: "tel:+919341706734",
  },
];

/* ---------------- MAIN COMPONENT ---------------- */
export function Contact() {
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formRef.current) return;

    setSending(true);
    setError(null);

    try {
      await emailjs.sendForm(
        "service_eh4y2qp",
        "template_kbfh2i7",
        formRef.current,
        "Ask79iipSd3wuz_YY"
      );

      setSent(true);
      formRef.current.reset();
      setEmail("");

      setTimeout(() => setSent(false), 5000);
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28">
      {/* glow */}
      <div className="absolute left-1/2 top-0 -z-10 h-[400px] w-[800px] -translate-x-1/2 rounded-full bg-purple-500/10 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6">
        <SectionLabel n="05" label="Contact" />

        <div className="mt-10 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          
          {/* LEFT SIDE */}
          <div>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              Let's build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                something brilliant
              </span>
            </h2>

            <p className="mt-6 text-lg text-gray-400 max-w-md">
              Have a project or opportunity? Drop a message — I usually reply within a day.
            </p>

            {/* SOCIAL LINKS */}
            <div className="mt-10 grid gap-3">
              {socials.map((s) => {
                const Icon = s.icon;

                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ x: 6 }}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/5 px-5 py-4 hover:border-purple-500 transition"
                  >
                    <div className="flex items-center gap-4">
                      <span className="grid h-10 w-10 place-items-center rounded-xl bg-purple-500/10 text-purple-400">
                        <Icon className="h-4 w-4" />
                      </span>

                      <div>
                        <div className="text-xs uppercase text-gray-400">
                          {s.label}
                        </div>
                        <div className="font-medium">{s.value}</div>
                      </div>
                    </div>

                    <ArrowUpRight className="h-4 w-4 text-gray-400" />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <motion.form
            ref={formRef}
            onSubmit={handleSubmit}
            className="rounded-3xl border border-white/10 bg-white/5 backdrop-blur-md p-8 shadow-xl"
          >
            <div className="grid gap-5">
              
              <Field label="Your name" name="from_name" placeholder="Saloni Kumari" />

              <Field
                label="Email"
                name="reply_to"
                type="email"
                placeholder="saloni@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <input type="hidden" name="user_email" value={email} />

              <Field label="Subject" name="subject" placeholder="Collaboration ✨" />

              <div>
                <label className="text-xs uppercase text-gray-400 font-semibold">
                  Message
                </label>

                <textarea
                  name="message"
                  required
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
                />
              </div>

              {error && <p className="text-red-400 text-sm">{error}</p>}

              <button
                type="submit"
                disabled={sending}
                className="rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-4 text-white font-semibold disabled:opacity-50"
              >
                {sent ? "Message sent ✨" : sending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}

/* ---------------- FIELD COMPONENT ---------------- */
function Field({
  label,
  ...props
}: { label: string } & InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label className="text-xs uppercase text-gray-400 font-semibold">
        {label}
      </label>

      <input
        required
        {...props}
        className="mt-2 w-full rounded-xl border border-white/10 bg-black/20 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-purple-500"
      />
    </div>
  );
}