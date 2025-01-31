import Btn from "../components/Btn";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__wrapper">
          <h1 className="header__title">
            <strong>
              Hello, my name is <em>Halyna Kravchenko</em>
            </strong>
            <br />I am a frontend developer
          </h1>
          <div className="header__text">
            <p>who creates with love.</p>
          </div>
          <Btn link="#!" text="Download CV" />
        </div>
      </header>
    </>
  );
}
