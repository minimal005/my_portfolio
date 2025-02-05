import { Route, Routes, HashRouter as Router } from "react-router-dom";
import ScrollToTop from "./utils/scrollToTop.js";
import Home from "./pages/home/Home.jsx";
import Projects from "./pages/projects/Projects.jsx";
import ProjectPage from "./pages/projectPage/ProjectPage.jsx";
import { Skills } from "./pages/skills/Skills.jsx";
import AboutMe from "./pages/aboutMe/AboutMe.jsx";

import Navbar from "./components/navbar/Navbar.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./styles/main.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutMe" element={<AboutMe />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
