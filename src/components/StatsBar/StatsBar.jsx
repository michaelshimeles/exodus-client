import "./StatsBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import pingPost from "../../utils/pingPost";
const StatsBar = () => {
  const [statsBar, setStatsBar] = useState(null);
  const [salesStats, setSalesStats] = useState(null);
  const [listingsStats, setListingsStats] = useState(null);
  const [time, setTime] = useState(5);
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/info/${id}`)
      .then((response) => {
        setStatsBar(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  useEffect(() => {
    let currentTime = Math.round(new Date() / 1000);
    let fiveMinutes = Math.round(
      (new Date().getTime() - Number(time) * 60 * 1000) / 1000
    );

    pingPost(
      `${process.env.REACT_APP_URL}/sales/time/${id}`,
      {
        start: fiveMinutes,
        end: currentTime,
        metadata: true,
      },
      setSalesStats
    );
    pingPost(
      `${process.env.REACT_APP_URL}/sales/time/${id}`,
      {
        start: fiveMinutes,
        end: currentTime,
        metadata: true,
      },
      setSalesStats,
      20000
    );
  }, [id, time]);

  useEffect(() => {
    let currentTime = Math.round(new Date() / 1000);
    let fiveMinutes = Math.round(
      (new Date().getTime() - Number(time) * 60 * 1000) / 1000
    );

    pingPost(
      `${process.env.REACT_APP_URL}/listings/time/${id}`,
      {
        start: fiveMinutes,
        end: currentTime,
        metadata: true,
      },
      setListingsStats
    );
    pingPost(
      `${process.env.REACT_APP_URL}/listings/time/${id}`,
      {
        start: fiveMinutes,
        end: currentTime,
        metadata: true,
      },
      setListingsStats,
      20000
    );
  }, [id, time]);

  const momentum = (sales, listings) => {
    if (sales === listings) {
      return "Neutral";
    } else if (sales > listings) {
      return "Bullish";
    }

    return "Stagnant";
  };

  const clicked = (event) => {
    setTime(event.target.value);
  };

  return (
    <div className="stats">
      <form className="stats__form" onChange={clicked}>
        <select id="time">
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
          {/* <option id="time" value="360">
            6h
          </option>
          <option id="time" value="720">
            12h
          </option>
          <option id="time" value="1440">
            24h
          </option>
          <option id="time" value="10080">
            7d
          </option>
          <option id="time" value="43200">
            30d
          </option> */}
        </select>
      </form>
      <div className="stats-bar">
        <div className="stats-bar__container">
          <div className="stats-bar__item">
            <p className="stats-bar__title">Total Listings</p>
            <p className="stats-bar__text">
              {statsBar ? statsBar.stats.tokenListedCount : "n/a"}
            </p>
          </div>
          <div className="stats-bar__item">
            <p className="stats-bar__title">Total Supply</p>
            <p className="stats-bar__text">
              {statsBar ? statsBar.stats.totalSupply : ""}
            </p>
          </div>
          <div className="stats-bar__item">
            <p className="stats-bar__title">{time} Min Listings</p>
            <p className="stats-bar__text">
              {listingsStats ? listingsStats.orders.length : 0}
            </p>
          </div>
          <div className="stats-bar__item">
            <p className="stats-bar__title">{time} Min Sales</p>
            <p className="stats-bar__text">
              {salesStats ? salesStats.sales.length : 0}
            </p>
          </div>
          <div className="stats-bar__item">
            <p className="stats-bar__title">Momentum Indicator ({time}m)</p>
            <p className="stats-bar__text">
              {momentum(salesStats?.sales.length, listingsStats?.orders.length)}
            </p>
          </div>
          <div className="stats-bar__item">
            <p className="stats-bar__title">Avg Price (1w)</p>
            <p className="stats-bar__text">
              {statsBar
                ? Math.round(statsBar.stats.weeklyAveragePrice * 100) / 100
                : "n/a"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsBar;
