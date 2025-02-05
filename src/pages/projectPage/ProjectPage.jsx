import { useParams } from "react-router-dom";
import BtnGitHub from "../../components/btnGitHub/BtnGitHub";
import { Section } from "../../components/section/Section";
import Btn from "../../components/btn/Btn";

import { correctTitle } from "../../helpers/title";
import { projects } from "../../helpers/projectsList";
import "./style.css";

export default function ProjectPage() {
  const { id } = useParams();

  const project = projects[id];

  const skills = project.skills.join(" | ");

  return (
    <Section title={correctTitle(project.title)}>
      <div className="project-details">
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
    </Section>
  );
}
