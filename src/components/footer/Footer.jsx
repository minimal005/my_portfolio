import gitHub from "./../../img/icons/gitHub.svg";
import { Link } from "react-router-dom";
import "./style.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <ul className="social">
            <li className="social__item">
              <Link to="https://github.com/minimal005" target="_blank">
                <img src={gitHub} alt="gitHub" />
              </Link>
            </li>
            <li className="social__item social__item--in">
              <Link
                to="https://www.linkedin.com/in/halyna-kravchenko-451172291/"
                target="_blank"
              >
                in
              </Link>
            </li>
          </ul>
          <div className="copyright">
            <p>© 2025 my-portfolio</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
