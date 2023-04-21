import React from "react";
import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import LetsConnect from "./components/LetsConnect";
import "./App.css";

const App = () => {
  return (
    <main>
      <Nav />
      <Home />
      <AboutMe />
      <Projects />
      <LetsConnect />
    </main>
  );
};
export default App;
