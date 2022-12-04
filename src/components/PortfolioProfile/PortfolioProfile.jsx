import "./PortfolioProfile.scss";
import logo from "../../assets/images/ethereum.svg";

const PortfolioProfile = ({ ens, totalValue, scores }) => {
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
            <p>{scores ? scores.whaleness : ""}</p>
            <p>{scores ? scores.hands : ""}</p>
            <p>{scores ? scores.whaleness : ""}</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfile;
