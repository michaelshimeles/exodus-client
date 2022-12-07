import "./NavBar.scss";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

const NavBar = () => {
  const { address } = useAccount();

  const [addressState, setAddressState] = useState(address);

  useEffect(() => {
    setAddressState(address);
  }, []);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img className="navbar__img" src={logo} alt="Exodus logo" />
        </Link>
        <div className="navbar__links">
          <p>Trending</p>
          <Link to="/hotmints" className="navbar__portfolio">
            <p>Hot Mints</p>
          </Link>
          {addressState ? (
            <Link to={"/portfolio/" + address} className="navbar__portfolio">
              <p>Portfolio</p>
            </Link>
          ) : (
            <></>
          )}
          <div className="navbar__button">
            <ConnectButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
