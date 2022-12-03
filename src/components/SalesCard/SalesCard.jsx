import "./SalesCard.scss";
const SalesCard = ({image, price, orderSource, tokenId}) => {
  return (
    <div className="sales">
      <div className="sales__container">
        <img className="sales__img" src={image} />
        <div className="sales__info">
          <div className="sales__stats-left">
            <div className="sales__stats-id">
              <p>#{tokenId}</p>
            </div>
            <div className="sales__stats-rank">
              <p>{orderSource}</p>
            </div>
          </div>
          <div className="sales__stats-right">
            <div className="sales__stats-price">
              <p>Ξ{price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
