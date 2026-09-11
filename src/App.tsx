import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";
import GlowCursor from "./components/GlowCursor";

export default function App() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("portfolio-theme") !== "light";
  });

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
    localStorage.setItem("portfolio-theme", isDark ? "dark" : "light");
  }, [isDark]);

  return (
    <div className="min-h-screen">
      <GlowCursor />
      <Nav isDark={isDark} onToggleTheme={() => setIsDark((current) => !current)} />
      <main>
        <Hero />
        <Projects />
        <About />
        <Certifications />
      </main>
      <Contact />
    </div>
  );
}
