import "./PortfolioProfile.scss";
import logo from "../../assets/images/ethereum.svg";

const PortfolioProfile = ({ ens, totalValue, scores, labels }) => {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__left">
          <div className="profile__img">
            <img src={logo} alt="Portfolio icon" />
          </div>
          <div className="profile__value">
            <p className="profile__address">{ens ? ens : ""}</p>
            {/* <p className="profile__usd">$36.35</p> */}
            <p className="profile__eth">Ξ{totalValue}</p>
          </div>
        </div>
        <div className="profile__stats">
          <p>{scores ? scores.hands : ""}</p>
          <p>
            {scores
              ? scores.whaleness === 1
                ? "🦐 Shrimp"
                : scores.whaleness === 2
                ? "🐟 fish"
                : scores.whaleness === 3
                ? "🐬 Dolphin"
                : scores.whaleness === 4
                ? "🦈 Shark"
                : scores.whaleness === 5
                ? "🐳 Whale"
                : ""
              : ""}
          </p>
          {labels.map((label) => {
            return <p>{label.name}</p>;
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfile;
