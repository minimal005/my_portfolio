import Project from "../components/Project";
import { projects } from "../helpers/projectsList.js";

export default function Projects() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Projects</h2>
        <ul className="projects">
          {projects.map((item) => {
            return (
              <Project key={item.title} title={item.title} img={item.img} />
            );
          })}
        </ul>
      </div>
    </main>
  );
}
