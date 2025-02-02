import MyPhoto from "../../components/myPhoto/MyPhoto";
import "./style.css";
import Contacts from "../../components/contacts/Contacts";

export default function AboutMe() {
  return (
    <main className="section">
      <div className="container">
        <h2 className="title-1">About Me</h2>
        <div className="aboutMe">
          <MyPhoto />
          <div className="aboutMe__content">
            <div className="aboutMe__text">
              <p>
                I’m a Front-End Developer with experience in TypeScript,
                JavaScript, React, and Redux.
              </p>
              <p>
                I enjoy building modern, user-friendly interfaces and solving
                complex problems. I have strong teamwork and communication
                skills, take responsibility for my tasks, and quickly adapt to
                new technologies. I’m always eager to learn and
                improve—currently enhancing my skills in Next.js and refining my
                English (B1). My goal is to develop high-quality web
                applications that provide great user experiences.
              </p>
              <p>
                I would be happy to discuss potential opportunities! Open to
                relocation to another city for the right offer.
              </p>
            </div>
            <Contacts />
          </div>
        </div>
      </div>
    </main>
  );
}
