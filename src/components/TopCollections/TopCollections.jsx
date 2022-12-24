import "./TopCollections.scss";
import CollectionCard from "../../components/CollectionCard/CollectionCard";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LoadingComp from "../LoadingComp/LoadingComp";
import { useTopCollections } from "../../hooks/useTopCollections";

const TopCollections = () => {
  const [trending, setTrending] = useState(null);
  const [topColClicked, setTopColClicked] = useState(true);
  const [time, setTime] = useState("5m");

  const { data: topCol, isLoading: topColLoading, isFetching } = useTopCollections();

  if (topColLoading && isFetching) {
    <LoadingComp />;
  }

  useEffect(() => {
    axios
      .post(`${process.env.REACT_APP_URL}/trending`, {
        time: `${time}`,
      })
      .then((response) => {
        setTrending(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [topColClicked, time]);

  const handleSelect = (event) => {
    setTime(event.target.value);
  };

  // const fetchFloorPrice = () => {
  //   return axios.get(`${process.env.REACT_APP_URL}/info/${id}`);
  // };

  // const { data: floorPrice } = useQuery("floor-price", fetchFloorPrice);

  // useEffect(() => {
  //   getFloorPrice(address);
  // }, [address]);

  // const getFloorPrice = (address) => {
  //   axios
  //     .post(`${process.env.REACT_APP_URL}/floorprice`, {
  //       address: address,
  //     })
  //     .then((response) => {
  //       console.log(response.data);
  //       let answer = response.data?.sources
  //         ? response.data?.sources[0]?.floorAskPrice
  //           ? response.data?.sources[1]?.floorAskPrice
  //           : response.data?.sources[2]?.floorAskPrice
  //         : "n/a";
  //       setFloor(answer);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

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
        <p className="collections__table-item">Sales (1W)</p>
        <p className="collections__table-item">Volume (1W)</p>
        <p className="collections__table-item">Change %</p>
      </div>
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
                  floorPrice={collection.floorAsk.price?.amount.decimal}
                  supply={collection.tokenCount}
                  sales={collection.onSaleCount}
                  volume={collection.volume?.["1day"]}
                  change={collection.volumeChange?.["1day"]}
                  topColClicked={topColClicked}
                />
              </Link>
            );
          })
        : trending?.results?.map((collection, index) => {
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
              collection.name === "BoredApeKennelClub"
            ) {
              return <div key={index}></div>;
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
                    address={collection.contract_address}
                    totalEthTrending={collection.total_eth_spent}
                  />
                </Link>
              );
            }
          })}
    </div>
  );
};

export default TopCollections;
