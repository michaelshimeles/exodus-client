import "./CollectionCard.scss";

const CollectionCard = ({
  name,
  image,
  floorPrice,
  supply,
  sales,
  volume,
  change,
}) => {
  return (
    <div className="collection-cards">
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
    </div>
  );
};

export default CollectionCard;
