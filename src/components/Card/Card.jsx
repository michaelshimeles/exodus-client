import "./Card.scss";

const Card = ({ name, image, tokenId, floorPrice }) => {
  return (
    <div className="card">
      <div className="card__container">
        <div className="card__image">
          <img src={image} alt="NFT"/>
        </div>
        <div className="card__info">
          <div className="card__title">
            <h1>{name}</h1>
            <p>{tokenId}</p>
          </div>
          <div className="card__price">
            <h2>{floorPrice}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
