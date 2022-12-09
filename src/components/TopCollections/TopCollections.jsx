import "./TopCollections.scss";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading/Loading";

const TopCollections = () => {
  const [topColletions, setTopCollections] = useState(null);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/topcollections`)
      .then((response) => {
        setTopCollections(response.data.collections);
      });
  }, []);

  return (
    <div className="collections">
      <div className="collections__header">
        <h1>Top Collections</h1>
      </div>
      <div className="collections__table">
        <p className="collections__table-item">Name</p>
        <p className="collections__table-item">Floor Price</p>
        <p className="collections__table-item">Total Supply</p>
        <p className="collections__table-item">Sales (1W)</p>
        <p className="collections__table-item">Volume (1W)</p>
        <p className="collections__table-item">Change %</p>
      </div>
      {topColletions ? (
        topColletions.map((collection, index) => {
          return (
            <Link
              to={"/collection/" + collection.id}
              className="collections__table-link"
              key={index}
            >
              <CollectionCard
                image={collection.sampleImages[0]}
                name={collection.name}
                floorPrice={collection.floorAsk.price?.amount.decimal}
                supply={collection.tokenCount}
                sales={collection.onSaleCount}
                volume={collection.volume?.["1day"]}
                change={collection.volumeChange?.["1day"]}
              />
            </Link>
          );
        })
      ) : (
        <Loading />
      )}
    </div>
  );
};
export default TopCollections;
