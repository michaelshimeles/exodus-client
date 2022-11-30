import "./TopCollections.scss";
import CollectionCard from "../../components/CollectionCard/CollectionCard"

const TopCollections = () => {
  return (
    <div className="collections">
      <div className="collections__header">
        <h1>Top Collections</h1>
      </div>
      <div className="collections__table">
        <p className="collections__table-item">Name</p>
        <p className="collections__table-item">Floor Price</p>
        <p className="collections__table-item">Holder/Supply</p>
        <p className="collections__table-item">Sales</p>
        <p className="collections__table-item">Volume</p>
        <p className="collections__table-item">Change</p>
      </div>
      <div className="collections__card">
        <CollectionCard />
      </div>
      <div className="collections__card">
        <CollectionCard />
      </div>
      <div className="collections__card">
        <CollectionCard />
      </div>
      <div className="collections__card">
        <CollectionCard />
      </div>
      <div className="collections__card">
        <CollectionCard />
      </div>
      <div className="collections__card">
        <CollectionCard />
      </div>
      <div className="collections__card">
        <CollectionCard />
      </div>
    </div>
  );
};

export default TopCollections;
