import { useParams } from "react-router-dom";

import BtnGitHub from "../components/BtnGitHub";
import { projects } from "../helpers/projectsList";

export default function ProjectPage() {
  const { titleId } = useParams();
  console.log(titleId);
  const project = projects[titleId];

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img
            src={project.imgBig}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>

          {project.gitHubLink && <BtnGitHub link="https://github.com" />}
        </div>
      </div>
    </main>
  );
}
