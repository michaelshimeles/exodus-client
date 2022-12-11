import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ethImage from "../../assets/images/ethereum.svg";
import "./HotMintsCard.scss";
const HotMintsCard = ({
  name,
  url,
  mint_num,
  minter_num,
  whale_num,
  fomo,
  volume,
  contract_address,
  time,
}) => {
  const [mintDetails, setMintDetails] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/info/resevoir/` + contract_address)
      .then((response) => {
        setMintDetails(response.data.data.collections[0]);
      });
  }, [time, contract_address]);

  return (
    <div className="mints-card">
      <div className="mints-card__container">
        <div className="mints-card__img">
          {mintDetails?.image ? (
            <img src={mintDetails?.image} alt="NFT profile" />
          ) : (
            <img src={ethImage} alt="NFT placeholder" />
          )}
        </div>
        <div className="mints-card__stats">
          <div className="mints-card__text ">
            <p>{name}</p>
          </div>
          <div className="mints-card__text mints-card__subtext">
            <p>Total Mints: {mint_num}</p>
          </div>
          <div className="mints-card__text mints-card__subtext">
            <p>Mint Volume: {volume} ETH</p>
          </div>
          <div className="mints-card__text mints-card__subtext">
            <p>Minter Number: {minter_num}</p>
          </div>
          <div className="mints-card__text mints-card__subtext">
            <p>Whales: {whale_num}</p>
          </div>
          <div className="mints-card__text mints-card__subtext">
            <p>
              Fomo Level:
              {fomo === "HIGH"
                ? "🔥"
                : fomo === "MEDIUM"
                ? "👌"
                : fomo === "LOW"
                ? "💩"
                : fomo === "NONE"
                ? "👎"
                : fomo}
            </p>
          </div>
          <div className="mints-card__buttons">
            <Link to={{ pathname: url }} target="_blank">
              <div className="mints-card__btn">
                <button type="button">Mint</button>
              </div>
            </Link>
            <Link to={"/collection/" + contract_address}>
              <div className="mints-card__btn">
                <button type="button">Data</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotMintsCard;
