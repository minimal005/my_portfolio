import { NavLink } from "react-router-dom";
import BtnDarkMode from "./BtnDarkMode";

export default function Navbar() {
  const activeLink = "nav-list__link nav-list__link--active";
  const normalLink = "nav-list__link";
  return (
    <nav className="nav">
      <div className="container">
        <div className="nav-row">
          <NavLink to="/" className="logo">
            <strong>My</strong> portfolio
          </NavLink>

          <BtnDarkMode />

          <ul className="nav-list">
            <li className="nav-list__item">
              <NavLink
                to=""
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                end
              >
                Home
              </NavLink>
            </li>
            <li className="nav-list__item">
              <NavLink
                to="aboutMe"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                About Me
              </NavLink>
            </li>

            <li className="nav-list__item">
              <NavLink
                to="projects"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Projects
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
