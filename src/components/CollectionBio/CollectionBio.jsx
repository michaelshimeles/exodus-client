import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import eth from "../../assets/images/ethereum.svg"
import "./CollectionBio.scss";
const CollectionBio = () => {
  const [bioStats, setBioStats] = useState(null);

  const { id } = useParams();

  const URL = `http://localhost:8080/info/${id}`;

  useEffect(() => {
    axios.get(`${URL}`).then((response) => {
      setBioStats(response.data);
      console.log("Bio Stats", response.data);
    });
  }, []);

  return (
    <div className="collection">
      <div className="collection-container">
        <div className="collection__profile">
          <img
            src={bioStats ? bioStats.images.image_url : eth}
            alt="Collection Profile"
            className="collection__img"
          />
        </div>
        <div className="collection__info">
          <div className="collection__name">
            <p>{bioStats ? bioStats.name : ""}</p>
          </div>
          <div className="collection__link">
            <div className="collection__site">
              <p>
                Floor Price: Ξ{bioStats ? bioStats.stats.floorPrice.price || "n/a" : ""}
              </p>
            </div>
            <div className="collection__social">
              <p>
                Holder/Supply:
                {bioStats
                  ? bioStats.stats.holders / bioStats.stats.totalSupply
                  : ""}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBio;
