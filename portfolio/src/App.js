import Nav from "./components/Nav";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import LetsConnect from "./components/LetsConnect";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  return (
    <>
      <main>
        <Nav />
        <Home />
        <AboutMe />
        <Projects />
        <Skills />
        <LetsConnect />
        <Footer />
      </main>
    </>
  );
};
export default App;
