import { Link, useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Project({ title, img }) {
  const navigate = useNavigate();
  function handlerProject() {
    navigate("/src/projects/homePro/index.html");
  }

  return (
    <Link to={`/projects/` + title} onClick={handlerProject}>
      <li className="project">
        <img src={img} alt={title} className="project__img" />
        <h3 className="project__title">{title}</h3>
      </li>
    </Link>
  );
}
