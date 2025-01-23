import { Route, Routes, HashRouter as Router } from "react-router-dom";
import RootLayout from "./pages/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

import "./styles/main.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="aboutMe" element={<AboutMe />} />
          <Route path="projects">
            <Route index element={<Projects />} />
            <Route path=":titleId" element={<ProjectPage />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
