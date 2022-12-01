import "./SalesCard.scss";
import MoonBird from "../../assets/images/moonbird.png";
const SalesCard = () => {
  return (
    <div className="sales">
      <div className="sales__container">
        <img className="sales__img" src={MoonBird} />
        <div className="sales__info">
          <div className="sales__stats-left">
            <div className="sales__stats-id">
              <p>#9682</p>
            </div>
            <div className="sales__stats-rank">
              <p>Blur.io</p>
            </div>
          </div>
          <div className="sales__stats-right">
            <div className="sales__stats-price">
              <p>Ξ73</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SalesCard;
