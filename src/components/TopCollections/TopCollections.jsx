import "./TopCollections.scss";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import { useState } from "react";
import { Link } from "react-router-dom";
// import LoadingComp from "../LoadingComp/LoadingComp";
import { useTopCollections } from "../../hooks/useTopCollections";
import { useTrending } from "../../hooks/useTrending";
import LoadingComp from "../LoadingComp/LoadingComp";
import Loading from "../Loading/Loading";

const TopCollections = () => {
  const [topColClicked, setTopColClicked] = useState(true);
  const [time, setTime] = useState("5m");

  const { data: topCol, isLoading: topColLoading } = useTopCollections();

  const { data: trending, isLoading: trendingLoading } = useTrending(time);

  const handleSelect = (event) => {
    setTime(event.target.value);
  };
  return (
    <div className="collections">
      <div className="collections__header">
        <h1>{topColClicked ? "Top Collections" : "Trending"}</h1>
        <div className="collections__selection">
          {!topColClicked ? (
            <form className="collections__form">
              <select
                id="time"
                className="collections__select"
                onChange={handleSelect}
              >
                <option id="time" value="5m">
                  5m
                </option>
                <option id="time" value="10m">
                  10m
                </option>
                <option id="time" value="15m">
                  15m
                </option>
                <option id="time" value="30m">
                  30m
                </option>
                <option id="time" value="1h">
                  1h
                </option>
                <option id="time" value="6h">
                  6h
                </option>
                <option id="time" value="12h">
                  12h
                </option>
                <option id="time" value="24h">
                  24h
                </option>
              </select>
            </form>
          ) : (
            <></>
          )}
          <div className="collections__switch">
            <p
              className="collections__topcol"
              onClick={() => {
                setTopColClicked(true);
              }}
            >
              📊
            </p>
            <p
              className="collections__topprofit"
              onClick={() => {
                setTopColClicked(false);
              }}
            >
              📈
            </p>
          </div>
        </div>
      </div>
      <div className="collections__table">
        <p className="collections__table-item">Name</p>
        <p className="collections__table-item">{"Floor Price"}</p>
        <p className="collections__table-item">
          {topColClicked ? "Total Supply" : "Total ETH Spent"}
        </p>
        <p className="collections__table-item">
          {topColClicked ? "Sales (1W)" : "Listings"}
        </p>
        <p className="collections__table-item">
          {topColClicked ? "Volume (1W)" : "Sales"}
        </p>
        <p className="collections__table-item">
          {topColClicked ? "Change % " : "Momentum"}
        </p>
      </div>
      {topColLoading ? <LoadingComp /> : <></>}
      {trendingLoading ? <LoadingComp /> : <></>}
      {topColClicked
        ? topCol?.data?.collections.map((collection) => {
            return (
              <Link
                to={"/collection/" + collection.id}
                className="collections__table-link"
                key={collection?.id}
              >
                <CollectionCard
                  image={collection.sampleImages[0]}
                  name={collection.name}
                  floorPrice={collection.floorAsk.price?.amount?.decimal}
                  supply={collection.tokenCount}
                  sales={collection.onSaleCount}
                  volume={collection.volume?.["1day"]}
                  change={collection.volumeChange?.["1day"]}
                  topColClicked={topColClicked}
                />
              </Link>
            );
          })
        : trending?.data?.results?.map((collection, index) => {
            if (
              collection.name === "BoredApeYachtClub" ||
              collection.name === "MutantApeYachtClub" ||
              collection.name === "Moonbirds" ||
              collection.name === "OpenSea Shared Storefront" ||
              collection.name === "Doodles" ||
              collection.name === "Azuki" ||
              collection.name === "ENS" ||
              collection.name === "CloneX" ||
              collection.name === "Otherdeed" ||
              collection.name === "CyberKongz" ||
              collection.name === "Rarible" ||
              collection.name === "BoredApeKennelClub" ||
              collection.name === "PudgyPenguins" ||
              collection.name === "Cool Cats"
            ) {
              return <div key={index}></div>;
            } else {
              // calling useQuery
              if (trending?.data?.results.length === 0) {
                return <Loading />;
              } else {
                return (
                  <Link
                    to={"/collection/" + collection.contract_address}
                    className="collections__table-link"
                    key={index}
                  >
                    <CollectionCard
                      nameTrending={collection.name}
                      imageTrending={collection.image_url}
                      addressTrending={collection.contract_address}
                      totalEthTrending={collection.total_eth_spent}
                      timeTrending={time}
                    />
                  </Link>
                );
              }
            }
          })}
    </div>
  );
};

export default TopCollections;
