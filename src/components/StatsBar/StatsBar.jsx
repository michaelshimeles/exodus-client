import "./StatsBar.scss";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useStatsBar } from "../../hooks/useStatsBar";
import { useFloorPrice } from "../../hooks/useFloorPrice";
import { useSalesStats } from "../../hooks/useSalesStats";
import { useListingsStats } from "../../hooks/useListingsStats";
const StatsBar = () => {
  const [time, setTime] = useState(5);
  const [dropDown, setDropDown] = useState(false);

  const { id } = useParams();

  const { data: statsBar } = useStatsBar(id);
  const { data: floorPrice } = useFloorPrice(id);
  const { data: salesStats } = useSalesStats(id, time);
  const { data: listingsStats } = useListingsStats(id, time);

  console.log("listingsStats", listingsStats);

  const momentum = (sales, listings) => {
    if (sales === listings && sales === 0) {
      return "No Volume";
    } else if (sales > listings) {
      return "Bullish";
    } else if (sales === listings && sales > 0) {
      return "Pot. Reversal";
    }

    return "Bearish";
  };

  const clicked = (event) => {
    event.preventDefault();
    setTime(event.target.value);
  };

  const handleDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <div className="stats">
      <form className="stats__form">
        <select id="time" onChange={clicked}>
          <option id="time" value="5">
            5m
          </option>
          <option id="time" value="10">
            10m
          </option>
          <option id="time" value="15">
            15m
          </option>
          <option id="time" value="30">
            30m
          </option>
          <option id="time" value="60">
            1h
          </option>
          <option id="time" value="1440">
            24hr
          </option>
        </select>
      </form>
      <div className="stats">
        <div className="stats-bar" onClick={handleDropDown}>
          <div className="stats-bar__container">
            <div className="stats-bar__item">
              <p className="stats-bar__title">Floor Price</p>
              <p className="stats-bar__text">
                {floorPrice
                  ? floorPrice?.data?.sources[0]?.floorAskPrice
                  : "n/a"}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">Total Listings</p>
              <p className="stats-bar__text">
                {statsBar ? statsBar?.data?.stats?.tokenListedCount : "n/a"}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">Total Supply</p>
              <p className="stats-bar__text">
                {statsBar ? statsBar?.data?.stats?.totalSupply : "n/a"}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">{time} Min Listings</p>
              <p className="stats-bar__text">
                {listingsStats ? listingsStats?.data?.orders.length : 0}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">{time} Min Sales</p>
              <p className="stats-bar__text">
                {salesStats ? salesStats?.data?.sales.length : 0}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">Momentum Indicator ({time}m)</p>
              <p className="stats-bar__text">
                {momentum(
                  salesStats?.data?.sales.length,
                  listingsStats?.data?.orders.length
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
