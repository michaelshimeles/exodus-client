import "./Card.scss";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Card = ({ name, image, tokenId, address }) => {
  const [floorPrice, setFloorPrice] = useState(null);

  const URL = `${process.env.REACT_APP_URL}/floorprice`;

  useEffect(() => {
    axios
      .post(URL, {
        address: address,
      })
      .then((response) => {
        setFloorPrice(response.data.data.price);
      })
      .catch((error) => {
        return error;
      });
  }, []);

  return (
    <Link to={"/collection/" + address} className="card">
      <div className="card__container">
        <div className="card__image">
          <img src={image} alt="NFT" />
        </div>
        <div className="card__info">
          <div className="card__title">
            <h1>{name}</h1>
            <p>{tokenId}</p>
          </div>
          <div className="card__price">
            <h2>{floorPrice ? floorPrice : "💩"}</h2>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
