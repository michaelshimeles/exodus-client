import "./ListingsCard.scss";

const ListingsCard = ({ image, tokenName, price, status, createdTime }) => {
  let currentTime = new Date().toUTCString().split(" ")[4].split(":");
  let newCreatedTime = createdTime.split("T")[1].split(".")[0].split(":");
  let minute = Number(currentTime[1]) - Number(newCreatedTime[1]);
  return (
    <div className="listings" >
      <div className="listings__container">
        <img className="listings__img" src={image} alt="Listed NFT profile" />
        <div className="listings__info">
          <div className="listings__stats-left">
            <div className="listings__stats-id">
              <p>{String(tokenName)}</p>
            </div>
          </div>
          <div className="listings__stats-right">
            <p className="listings__stats-time">
              {minute < 1 ? "< 1 min" : minute + " min"}{" "}
            </p>
            <div className="listings__stats-price">
              <p>Ξ{String(price)}</p>
            </div>
            <div className="listings__stats-buy">
              <p>Buy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
