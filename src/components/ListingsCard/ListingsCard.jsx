import "./ListingsCard.scss";
import MoonBird from "../../assets/images/moonbird.png";
const ListingsCard = () => {
  return (
    <div className="listings">
      <div className="listings__container">
        <img className="listings__img" src={MoonBird} />
        <div className="listings__info">
          <div className="listings__stats-left">
            <div className="listings__stats-id">
              <p>#9682</p>
            </div>
            <div className="listings__stats-rank">
              <p>Rank: 1242</p>
            </div>
          </div>
          <div className="listings__stats-right">
            <div className="listings__stats-price">
              <p>Ξ73</p>
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
