import { skills } from "../../helpers/skills";
import "./style.css";

export const Skills = () => {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">Skills</h2>
        <div className="skills">
          <ul className="skills__list">
            {skills.map((skill, index) => (
              <li className="skills__item" key={index}>
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
};
