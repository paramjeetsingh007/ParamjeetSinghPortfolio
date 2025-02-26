import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from './Components/Home';
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Experience from "./Components/Experience";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router> {/* Wrap with BrowserRouter */}
      <Navbar />
      <Home/>
      <AboutMe/>
      <Projects/>
      <Experience/>
      <Skills/>
      <Contact/>
      <Footer/>
    </Router>
  );
}

export default App;
