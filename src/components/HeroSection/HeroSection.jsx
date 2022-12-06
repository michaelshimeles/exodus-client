import "./HeroSection.scss";
import MoonBird from "../../assets/images/moonbird.png";
import Azuki from "../../assets/images/azuki.png";
import MekaVerse from "../../assets/images/mekaverse.png";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="hero">
      <div className="hero__text">
        <h1 className="hero__text-header">meet Exodus</h1>
        <p className="hero__text-paragraph">
          Your favorite NFT toolkit. Analyze, Trade, & Track all in one platform
        </p>
      </div>
      <div className="hero__img">
        <Link
          to="/collection/0x9a534628b4062e123ce7ee2222ec20b86e16ca8f"
          className="hero__img-link"
        >
          <img className="hero__img-item" src={MekaVerse} alt="Mekaverse NFT" />
        </Link>
        <Link
          to="/collection/0x23581767a106ae21c074b2276d25e5c3e136a68b"
          className="hero__img-link"
        >
          <img className="hero__img-item" src={MoonBird} alt="MoonBird NFT" />
        </Link>
        <Link
          to="/collection/0xed5af388653567af2f388e6224dc7c4b3241c544"
          className="hero__img-link"
        >
          <img className="hero__img-item" src={Azuki} alt="Azuki NFT" />
        </Link>
      </div>
    </div>
  );
};

export default HeroSection;
