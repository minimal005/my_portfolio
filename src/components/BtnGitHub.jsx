import gitHubIcon from "../assets/img/icons/gitHub-black.svg";

export default function BtnGitHub(link) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="btn-outline">
      <img src={gitHubIcon} alt="" /> GitHub
    </a>
  );
}
