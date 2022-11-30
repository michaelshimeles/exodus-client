import "./NavBar.scss";
import logo from "../../assets/logo/logo.png";

const NavBar = () => {
  return (
    <div className="navbar">
      <div className="navbar-container">
        <img className="navbar__img" src={logo} alt="Exodus logo" />
        <div className="navbar__links">
          <p>Trending</p>
          <p>Portfolio</p>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
