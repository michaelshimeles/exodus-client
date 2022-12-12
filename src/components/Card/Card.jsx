import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({
  name,
  image,
  tokenId,
  address,
  tokenCount,
  clicked,
  setClicked,
  volume,
  floorAskPrice,
  floorSale
}) => {
  return (
    <Link to={"/collection/" + address} className="card">
      <div className="card__container">
        <div className="card__image">
          <img src={image} alt="NFT" />
        </div>
        <div className="card__info">
          <div className="card__title">
            <h1>{name}</h1>
            <p>{tokenId || "Own " + tokenCount}</p>
          </div>
          <div className="card__price">
            {clicked === undefined ? (
              <h2>{volume > 0 && floorSale ? floorSale + " ETH" : "💩"}</h2>
            ) : (
              <h2>{volume > 0 && floorSale ? floorSale + " Ξ" : "💩"} </h2>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
