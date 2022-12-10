import "./Card.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = ({
  name,
  image,
  tokenId,
  address,
  tokenCount,
  clicked,
  setClicked,
  volume,
  floorSale
}) => {
  const [floorPrice, setFloorPrice] = useState(null);

  useEffect(() => {
    if (!clicked) {
      axios
        .post(`${process.env.REACT_APP_URL}/floorprice`, {
          address: address,
        })
        .then((response) => {
          setFloorPrice(response.data.data.price);
        })
        .catch((error) => {
          return error;
        });
    }
  }, [address, clicked]);

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
              <h2>{volume > 0 && floorPrice ? floorPrice + " ETH" : "💩"}</h2>
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
