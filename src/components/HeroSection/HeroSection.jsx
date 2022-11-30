import "./HeroSection.scss";
import MoonBird from "../../assets/images/moonbird.png";
import Azuki from "../../assets/images/azuki.png";
import MekaVerse from "../../assets/images/mekaverse.png";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__text-header">Meet Exodus</h1>
        <p className="hero__text-paragraph">
          Your favorite NFT toolkit. Analyze, Trade, & Track all in one platform
        </p>
      </div>
      <div className="hero__img">
        <img className="hero__img-item" src={MekaVerse} />;
        <img className="hero__img-item" src={MoonBird} />;
        <img className="hero__img-item" src={Azuki} />;
      </div>
    </div>
  );
};

export default HeroSection;
