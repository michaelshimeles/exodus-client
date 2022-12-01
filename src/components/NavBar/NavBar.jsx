import "./NavBar.scss";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img className="navbar__img" src={logo} alt="Exodus logo" />
        </Link>
        <div className="navbar__links">
          <p>Trending</p>
          <p>Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
