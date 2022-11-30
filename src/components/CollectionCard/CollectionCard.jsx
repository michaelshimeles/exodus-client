import "./CollectionCard.scss";
import MoonBird from "../../assets/images/moonbird.png";

const CollectionCard = () => {
  return (
    <div className="collection-cards">
      <div className="collection-cards__container">
        <div className="collection-cards__item">
          <img className="collection-cards__img" src={MoonBird} />
          <p>MoonBirds</p>
        </div>
        <div className="collection-cards__item">
          <p>8 ETH</p>
        </div>
        <div className="collection-cards__item">
          <p>0.75</p>
        </div>
        <div className="collection-cards__item">
          <p>5</p>
        </div>
        <div className="collection-cards__item">
          <p>40 ETH</p>
        </div>
        <div className="collection-cards__item">
          <p>12%</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
