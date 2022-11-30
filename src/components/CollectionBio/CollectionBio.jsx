import { Link } from "react-router-dom";
import MoonBird from "../../assets/images/moonbird.png";
import "./CollectionBio.scss";
const CollectionBio = () => {
  return (
    <div className="collection">
      <div className="collection-container">
        <div className="collection__left">
          <div className="collection-__profile">
            <img
              src={MoonBird}
              alt="Collection Profile"
              className="collection__img"
            />
          </div>
          <div className="collection__info">
            <div className="collection__name">
              <p>Collection Name</p>
            </div>
            <div className="collection__link">
              <Link className="collection__site">
                <p>www.website.com</p>
              </Link>
              <Link className="collection__social">
                <p>www.twitter.com</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="collection__right">
          <div className="collection__right-section">
            <div className="collection__price">
              <p>Floor Price: 1</p>
              <p>Ratio: 2</p>
            </div>
            <div className="collection__stats">
              <p>Holders: 3</p>
              <p>Supply: 4</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBio;
