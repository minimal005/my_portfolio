import { Link } from "react-router-dom";

export default function Contacts() {
  return (
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
        <Link to="mailto:kravchenkohali@gmail.com">
          kravchenkohali@gmail.com
        </Link>
      </p>
    </address>
  );
}
