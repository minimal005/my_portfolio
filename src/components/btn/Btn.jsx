import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function Btn({ link, text, ...props }) {
  return (
    <Link to={link} {...props} className="btn" target="_blank">
      {text}
    </Link>
  );
}
