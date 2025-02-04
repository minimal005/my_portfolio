import { skills } from "../../helpers/skills";
import { Section } from "../../components/section/Section";
import "./style.css";

export const Skills = () => {
  return (
    <Section title="Skills">
      <div className="skills">
        <ul className="skills__list">
          {skills.map((skill, index) => (
            <li className="skills__item" key={index}>
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </Section>
  );
};
