import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout.jsx";
import Home from "./pages/Home.jsx";
import AboutMe from "./pages/AboutMe.jsx";
import Projects from "./pages/Projects.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";

import "./styles/main.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "aboutMe",
        element: <AboutMe />,
      },
      {
        path: "projects",
        children: [
          {
            index: true,
            element: <Projects />,
          },
          {
            path: ":titleId",
            element: <ProjectPage />,
          },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
