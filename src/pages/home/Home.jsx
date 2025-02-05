import Btn from "../../components/btn/Btn";
import { motion } from "motion/react";
import "./style.css";

export default function Home() {
  return (
    <>
      <motion.header
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="header"
      >
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
      </motion.header>
    </>
  );
}
