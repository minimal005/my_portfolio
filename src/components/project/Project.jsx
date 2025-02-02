/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
import "./style.css";
import { correctTitle } from "../../helpers/title";

const Project = ({ title, img, index }) => {
  return (
    <NavLink to={`/project/${index}`}>
      <li className="project">
        <div className="project__wrapper">
          <img src={img} alt={title} className="project__img" />
        </div>
        <h3 className="project__title">{correctTitle(title)}</h3>
      </li>
    </NavLink>
  );
};

export default Project;
