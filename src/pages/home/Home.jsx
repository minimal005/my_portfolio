import Btn from "../../components/btn/Btn";
import "./style.css";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hello, my name is{" "}
              <em className="title-color">Halyna Kravchenko</em>
            </strong>
            <br />I am a frontend developer
          </h1>
          <div className="header__text">
            <p>who creates with love.</p>
          </div>

          <Btn
            link="https://flowcv.com/resume/0geg2cwwnb"
            target="_blank"
            download
            text="Show Resume"
          />
        </div>
      </header>
    </>
  );
}
