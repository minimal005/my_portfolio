import Project from "../../components/project/Project.jsx";
import { projects } from "../../helpers/projectsList.js";
import { Section } from "../../components/section/Section";
import "./style.css";

export default function Projects() {
  return (
    <Section title="Projects">
      <ul className="projects">
        {projects.map((project, index) => {
          return (
            <Project
              key={index}
              title={project.title}
              img={project.img}
              index={index}
            />
          );
        })}
      </ul>
    </Section>
  );
}
