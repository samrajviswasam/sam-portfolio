import { useCallback, useState } from "react";

import Navbar from "./components/Navbar";
import CursorFX from "./components/CursorFX";
import NetworkBackground from "./components/NetworkBackground";
import SystemHUD from "./components/SystemHUD";
import ScrollProgress from "./components/ScrollProgress";
import SectionReveal from "./components/SectionReveal";
import TerminalPanel from "./components/TerminalPanel";
import BootSequence from "./components/BootSequence";

import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function App() {
  const [booting, setBooting] = useState(true);

  const handleBootComplete = useCallback(() => {
    setBooting(false);
  }, []);

  return (
    <>
      {booting && <BootSequence onComplete={handleBootComplete} />}

      <NetworkBackground />
      <ScrollProgress />
      <CursorFX />
      <Navbar />
      <SystemHUD />

      <main>
        <Hero />

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Skills />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Certifications />
        </SectionReveal>

        <SectionReveal>
          <TerminalPanel />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </main>
    </>
  );
}

export default App;
