import { useParams } from "react-router-dom";

import { projects } from "../../helpers/projectsList";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import Btn from "../../components/btn/Btn";
import "./style.css";
import { correctTitle } from "../../helpers/title";

export default function ProjectPage() {
  const { id } = useParams();

  const project = projects[id];

  const skills = project.skills.join(" | ");

  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{correctTitle(project.title)}</h1>

          <img
            src={project.img}
            alt={project.title}
            className="project-details__cover"
          />

          <div className="project-details__desc">
            <p>{skills}</p>
            <p className="project-details__text">{project.description}</p>
          </div>

          <div className="buttons">
            {project.demo && <Btn link={project.demo} text="Demo" />}
            {project.gitHubLink && <BtnGitHub link={project.gitHubLink} />}
          </div>
        </div>
      </div>
    </main>
  );
}
