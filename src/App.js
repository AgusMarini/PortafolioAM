import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import "./App.css";
import Contact from "./components/Contact";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  const [theme, setTheme] = useState("dark"); // Estado inicial del tema 
  
  useEffect(() => {
    AOS.init({
      duration: 600, // Animaciones cortas y sutiles
      offset: 50,
      once: true,
    });
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  return (
    <div className={theme}>
      <Header toggleTheme={toggleTheme} currentTheme={theme} />
      <main>
        <About />
        <Services />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
