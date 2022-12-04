import "./NavBar.scss";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";

const NavBar = () => {
  const { address, isConnecting, isDisconnected } = useAccount();

  const [addressState, setAddressState] = useState(address);

  useEffect(() => {
    setAddressState(address);
  }, [address]);

  return (
    <div className="navbar">
      <div className="navbar-container">
        <Link to="/">
          <img className="navbar__img" src={logo} alt="Exodus logo" />
        </Link>
        <div className="navbar__links">
          <p>Trending</p>
          {addressState ? (
            <Link to={"/portfolio/" + address} className="navbar__portfolio">
              <p>Portfolio</p>
            </Link>
          ) : (
            <></>
          )}
          <div className="navbar__button">
            <ConnectKitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
