import "./NavBar.scss";
import logo from "../../assets/logo/logo.png";
import { Link } from "react-router-dom";
import { ConnectKitButton } from "connectkit";
import { useAccount } from "wagmi";
import { useEffect, useState } from "react";
import axios from "axios";

const NavBar = () => {
  const { address } = useAccount();
  const [addressState, setAddressState] = useState(address);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState("");

  const URL = process.env.REACT_APP_URL;

  useEffect(() => {
    setAddressState(address);
  }, [address]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(event.target.value);

    axios
      .get(`${URL}/search/${event.target.value}`)
      .then((response) => {
        setResult(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleBlur = () => {
    if (result !== "")
    {
      setResult("")
    }
    return
  };

  // const handleBlurr = (event) => {
  //   setResult(event.target.value)
  // }

  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar__left">
          <Link to="/">
            <img className="navbar__img" src={logo} alt="Exodus logo" />
          </Link>
          <form className="navbar__form">
            <input
              id="search"
              name="search"
              value={search}
              className="navbar__input"
              placeholder="Search Collection..."
              onChange={handleSearch}
              onBlur={result && search ? "" : handleBlur}
              onClick={handleSearch}
            ></input>
            <div
              className="navbar__results"

            >
              {result !== "" ? (
                result.collections.map((search, index) => {
                  return (
                    <Link
                      key={index}
                      className="navbar__link"
                      to={"/collection/" + search?.contract}
                    >
                      <div className="navbar__image">
                        <img src={search?.image} alt="Search result" />
                        <p className="navbar__result">{search?.name}</p>
                      </div>
                      <div>
                        {search?.openseaVerificationStatus === "verified" ? (
                          <p>✅</p>
                        ) : (
                          <p>🔵</p>
                        )}
                      </div>
                    </Link>
                  );
                })
              ) : (
                <></>
              )}
            </div>
          </form>
        </div>

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
            <ConnectKitButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
