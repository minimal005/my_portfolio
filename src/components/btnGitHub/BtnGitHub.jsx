import gitHubIcon from "./gitHub-black.svg";
import "./style.css";

// eslint-disable-next-line react/prop-types
export default function BtnGitHub({ link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="btn-outline title-color"
    >
      <img src={gitHubIcon} alt="" /> GitHub
    </a>
  );
}
