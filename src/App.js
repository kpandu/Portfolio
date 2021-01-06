import React from "react";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";
import Landing from "./components/Landing/Landing";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Technologies from "./components/Technologies/Technologies";

function App() {
  return (
    <div>
      <Landing />
      <About />
      <Skills />
      <Technologies />
      <Education />
      <Experience />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
