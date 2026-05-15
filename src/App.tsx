import { useState, useEffect } from "react";
import { Navbar } from "./components/portfolio/Navbar";
import { Hero } from "./components/portfolio/Hero";
import { About } from "./components/portfolio/About";
import { Skills } from "./components/portfolio/Skills";
import { Projects } from "./components/portfolio/Projects";
import { Services } from "./components/portfolio/Services";
import { Contact } from "./components/portfolio/Contact";
import { Footer } from "./components/portfolio/Footer";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    const saved = localStorage.getItem("theme");
    return saved === "light" ? "light" : "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className={`relative min-h-screen overflow-x-hidden bg-background text-foreground ${theme === "light" ? "light" : ""}`}>
      <Navbar theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;
