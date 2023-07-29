import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <nav className="light-blue lighten-1">
      <div className="nav-wrapper">
        {/* <img src={logo} alt="the meal" className="siteLogo" /> */}
        <Link to="/" className="brandLogo">
          The meal
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to={`/about`}>About</Link>
          </li>
          <li>
            <Link to={`/contacts`}>Contacts</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export { Header };
