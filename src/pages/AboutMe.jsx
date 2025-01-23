import Btn from "../components/Btn";

import { Link } from "react-router-dom";
import MyPhoto from "../components/MyPhoto";

export default function AboutMe() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">About Me</h2>
        <div className="aboutMe">
          <MyPhoto />
          <div className="aboutMe__content">
            <div className="abotMe__text">
              Hello! My name is Halyna. I am a frontend developer. Constantly
              trying to practice and improve my skills because I really love my
              profession.
            </div>
            <address>
              <p>
                <span>Location: </span> Ukraine, Ternopil
              </p>
              <p>
                <span>Phone: </span>
                <Link to="tel:+380983525265" style={{ hyphens: "none" }}>
                  +38 (098) 352-52-65
                </Link>
              </p>
              <p>
                <span>EMAIL: </span>
                <Link to="mailto:minimal005@gmail.com">
                  minimal005@gmail.com
                </Link>
              </p>
            </address>
            <p className="aboutMe__btnResume">
              <Btn
                link="/src/assets/files/Kravchenko_Frontend_Resume.pdf"
                target="_blank"
                download
                text="Download Resume"
              />
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
{
  //   <h2 class="title-2">My stack</h2>
  //         <p>
  //           JavaScript, TypeScript, ReactJS, Redux, HTML, CSS, NPM, TailwindCSS
  //         </p>
}
