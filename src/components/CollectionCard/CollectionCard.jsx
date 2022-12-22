import "./CollectionCard.scss";
import eth from "../../assets/images/ethereum.svg";
import axios from "axios";
import { useEffect, useState } from "react";

const CollectionCard = ({
  name,
  image,
  floorPrice,
  supply,
  sales,
  volume,
  change,
  topColClicked,
  nameTrending,
  imageTrending,
  totalEthTrending,
  address,
}) => {
  const [floor, setFloor] = useState([]);

  useEffect(() => {
    getFloorPrice(address);
  }, [address]);

  const getFloorPrice = (address) => {
    axios
      .post(`${process.env.REACT_APP_URL}/floorprice`, {
        address: address,
      })
      .then((response) => {
        let answer = response.data?.sources
          ? response.data?.sources[0]?.floorAskPrice
            ? response.data?.sources[1]?.floorAskPrice
            : response.data?.sources[2]?.floorAskPrice
          : "n/a";
        setFloor(answer);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="collection-cards">
      {topColClicked ? (
        <div className="collection-cards__container">
          <div className="collection-cards__item collection-cards__item-name">
            <img
              className="collection-cards__img"
              src={image}
              alt="Collection profile"
            />
            <p className="collection-cards__text">{name}</p>
          </div>
          <div className="collection-cards__item">
            <p>{floorPrice}</p>
          </div>
          <div className="collection-cards__item">
            <p>{supply}</p>
          </div>
          <div className="collection-cards__item">
            <p>{sales}</p>
          </div>
          <div className="collection-cards__item">
            <p>{volume}</p>
          </div>
          <div className="collection-cards__item">
            <p>{Math.round(change * 100)}%</p>
          </div>
        </div>
      ) : (
        <div className="collection-cards__container">
          <div className="collection-cards__item collection-cards__item-name">
            <img
              className="collection-cards__img"
              src={imageTrending ? imageTrending : eth}
              alt="Collection profile"
            />
            <p className="collection-cards__text">{nameTrending}</p>
          </div>
          <div className="collection-cards__item">
            <p>{floor}</p>
          </div>
          <div className="collection-cards__item">
            <p>{totalEthTrending}</p>
          </div>
          <div className="collection-cards__item">
            <p>{}</p>
          </div>
          <div className="collection-cards__item">
            <p></p>
          </div>
          <div className="collection-cards__item">
            <p></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default CollectionCard;
