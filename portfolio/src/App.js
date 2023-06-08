import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import LetsConnect from "./components/LetsConnect";
import Skills from "./components/Skills";
import "./App.css";

const App = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.body.className = theme;
  }, [theme]);

  return (
    <>
      <div className={`App ${theme}`}></div>
      <main>
        <Nav toggleTheme={toggleTheme} />
        <Home theme={theme} />
        <AboutMe />
        <Skills />
        <Projects />
        <LetsConnect theme={theme} />
      </main>
    </>
  );
};
export default App;
