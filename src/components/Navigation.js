import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  return (
    <div className="navigation">
      <Link to="/" className="nav__home">
        Home
      </Link>
      <Link to="/about" className="nav__about">
        About
      </Link>
    </div>
  );
}

export default Navigation;
