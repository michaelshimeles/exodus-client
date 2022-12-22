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
            <p className="profile__eth">Ξ{totalValue}</p>
          </div>
        </div>
        <div className="profile__stats">
          <p>
            {scores
              ? scores.hands === "normie"
                ? "👋 Normie Hands"
                : scores.hands === "new"
                ? "🐣 New"
                : scores.hands === "paper"
                ? "📜 Paper Hands"
                : scores.hands === 1 || scores.hands === "1"
                ? "Holds Sometimes"
                : scores.hands === 2 || scores.hands === "2"
                ? "Holds Occasionally"
                : scores.hands === 3 || scores.hands === "3"
                ? "Long Term Holder"
                : scores.hands === 4 || scores.hands === "4"
                ? "Very Long Term Holder"
                : scores.hands === 5 || scores.hands === "5"
                ? "King Holder"
                : ""
              : ""}
          </p>
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
          {labels.map((label, index) => {
            return (
              <p key={index}>
                {label.name
                  ? label.name === "diamond"
                    ? "💎 Diamond Hands"
                    : label.name === "five-diamond"
                    ? "💎 Top 3% Holder"
                    : label.name === "paperhands"
                    ? "📜 Paper Hands"
                    : label.name === "whale"
                    ? "🐳 Whale"
                    : label.name === "blue-chip"
                    ? "💸 Blue Chip"
                    : label.name === "smart-money"
                    ? "💰🧠 Smart Money"
                    : label.name === "top-minter"
                    ? "⛏️ Top Minter"
                    : label.name === "top-trader"
                    ? "📈 Top Trader"
                    : ""
                  : ""}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfile;
