import "./SalesCard.scss";
const SalesCard = ({ image, price, orderSource, tokenId }) => {
  // let currentTime = new Date().toUTCString().split(" ")[4].split(":");
  // let newCreatedTime = new Date(timestamp)
  //   .toUTCString()
  //   .split(" ")[4]
  //   .split(":");


  // console.log("Current Time", currentTime);
  // console.log("New Created", newCreatedTime);

  // let time = Number(currentTime[0]) - (Number(newCreatedTime[0]) + 12);

  return (
    <div className="sales">
      <div className="sales__container">
        <img className="sales__img" src={image} alt="Sold NFT" />
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
            {/* <p>  {time < 1 ? "< 1 min" : time + " min"}{" "}</p> */}
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
