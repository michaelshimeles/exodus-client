import "./PortfolioProfile.scss";
import logo from "../../assets/images/ethereum.svg"

const PortfolioProfile = () => {
  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__left">
          <div className="profile__img">
            <img src={logo} alt="Portfolio icon"/>
          </div>
          <div className="profile__value">
            <p className="profile__address">michaelshimeles.eth</p>
            <p className="profile__usd">$36.35</p>
            <p className="profile__eth">Ξ0.029</p>
          </div>
        </div>
        <div className="profile__stats">
          <p>👋 Normie Hands</p>
          <p>🦐 Shrimp</p>
        </div>
      </div>
    </div>
  );
};

export default PortfolioProfile;
