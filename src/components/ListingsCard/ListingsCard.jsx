import "./ListingsCard.scss";
const ListingsCard = ( { image, tokenName, price }) => {
  return (
    <div className="listings">
      <div className="listings__container">
        <img className="listings__img" src={image} />
        <div className="listings__info">
          <div className="listings__stats-left">
            <div className="listings__stats-id">
              <p>{String(tokenName)}</p>
            </div>
            {/* <div className="listings__stats-rank">
              <p>Rank: 1242</p>
            </div> */}
          </div>
          <div className="listings__stats-right">
            <div className="listings__stats-price">
              <p>Ξ{String(price)}</p>
            </div>
            {/* <div className="listings__stats-buy">
              <p>Buy</p>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
