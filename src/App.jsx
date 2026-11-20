import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Hero from "./components/Hero";
import Expertise from "./components/expertise";
import Stack from "./components/stacks";
import Work from "./components/work";
import Education from "./components/education";
import About from "./components/about";
import Contact from "./components/contact";
import Skills from "./components/skills";
import Service from "./components/service";
import AnimatedCursor from "./components/AnimatedCursor";
import useScrollReveal from "./hooks/useScrollReveal";

const Home = () => (
  <>
    <Hero />
    <Expertise />
    <Stack />
    <Work />
    <Education />
    <About />
    <Contact />
  </>
);

const App = () => {
  useScrollReveal();

  return (
    <Router>
      <AnimatedCursor />
      <div className="app-shell min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
        <Navbar />
        <main className="max-w-[1600px] mx-auto pt-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
