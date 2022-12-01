import { Link } from "react-router-dom";
import MoonBird from "../../assets/images/moonbird.png";
import "./CollectionBio.scss";
const CollectionBio = () => {
  return (
    <div className="collection">
      <div className="collection-container">
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
                <p>Floor Price: 5 ETH</p>
              </Link>
              <Link className="collection__social">
                <p>Holder/Supply: 0.6</p>
              </Link>
            </div>
        </div> 
      </div>
    </div>
  );
};

export default CollectionBio;
