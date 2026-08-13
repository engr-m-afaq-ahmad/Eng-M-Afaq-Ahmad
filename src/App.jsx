import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

// Importing Components
import Education from "./components/education";
import Skills from "./components/skills";
import Work from "./components/work";
import Stack from "./components/stacks";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Contact from "./components/contact";
import About from "./components/about";
import Service from "./components/service";
import Hero from "./components/Hero";
const App = () => {
  return (
    <Router>
      <div className="bg-[#050414] text-gray-200">
        <Navbar />
        <div className="max-w-[1600px] mx-auto">
          <Routes>
            <Route path='/' element={<>
              <Hero />
              <Education />
              <Skills />
              <Stack/>
              <Work />
              <Service />
              <Contact />
            </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/stack" element={<Stack />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
