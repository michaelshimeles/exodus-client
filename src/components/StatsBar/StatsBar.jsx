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
  const [floorPrice, setFloorPrice] = useState(null);
  const [dropDown, setDropDown] = useState(false);
  const [salesDayStats, setSalesDayStats] = useState(null);
  const [listingsDayStats, setListingsDayStats] = useState(null);

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
  }, [id, time, dropDown]);

  // Floor Price
  useEffect(() => {
    pingPost(
      `${process.env.REACT_APP_URL}/floorprice`,
      {
        address: id,
      },
      setFloorPrice
    );

    pingPost(
      `${process.env.REACT_APP_URL}/floorprice`,
      {
        address: id,
      },
      setFloorPrice,
      20000
    );
  }, [id, time, dropDown]);

  // Sales Stats
  useEffect(() => {
    let currentTime = Math.round(new Date() / 1000);
    let diffTime = Math.round(
      (new Date().getTime() - Number(time) * 60 * 1000) / 1000
    );

    pingPost(
      `${process.env.REACT_APP_URL}/sales/time/${id}`,
      {
        start: diffTime,
        end: currentTime,
        metadata: true,
      },
      setSalesStats
    );

    clearInterval(
      pingPost(
        `${process.env.REACT_APP_URL}/sales/time/${id}`,
        {
          start: diffTime,
          end: currentTime,
          metadata: true,
        },
        setSalesStats,
        5000
      )
    );
  }, [id, time]);

  // Listings Stats
  useEffect(() => {
    let currentTime = Math.round(new Date() / 1000);
    let diffTime = Math.round(
      (new Date().getTime() - Number(time) * 60 * 1000) / 1000
    );

    pingPost(
      `${process.env.REACT_APP_URL}/listings/time/${id}`,
      {
        start: diffTime,
        end: currentTime,
        metadata: true,
      },
      setListingsStats
    );
    clearInterval(
      pingPost(
        `${process.env.REACT_APP_URL}/listings/time/${id}`,
        {
          start: diffTime,
          end: currentTime,
          metadata: true,
        },
        setListingsStats,
        5000
      )
    );
  }, [id, time]);

  // 24hr stats
  useEffect(() => {
    let currentTime = Math.round(new Date() / 1000);
    let diffTime = Math.round((new Date().getTime() - 1440 * 60 * 1000) / 1000);

    axios
      .post(`${process.env.REACT_APP_URL}/sales/time/${id}`, {
        start: diffTime,
        end: currentTime,
        metadata: true,
      })
      .then((response) => {
        setSalesDayStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post(`${process.env.REACT_APP_URL}/listings/time/${id}`, {
        start: diffTime,
        end: currentTime,
        metadata: true,
      })
      .then((response) => {
        setListingsDayStats(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id, dropDown]);

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
    console.log("Time", event.target.value);
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
        </select>
      </form>
      <div className="stats">
        <div className="stats-bar" onClick={handleDropDown}>
          <div className="stats-bar__container">
            <div className="stats-bar__item">
              <p className="stats-bar__title">Floor Price</p>
              <p className="stats-bar__text">
                {floorPrice ? floorPrice.sources[0]?.floorAskPrice : "n/a"}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">Total Listings</p>
              <p className="stats-bar__text">
                {statsBar ? statsBar.stats?.tokenListedCount : "n/a"}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">Total Supply</p>
              <p className="stats-bar__text">
                {statsBar ? statsBar.stats?.totalSupply : "n/a"}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">{time} Min Listings</p>
              <p className="stats-bar__text">
                {listingsStats ? listingsStats?.orders.length : 0}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">{time} Min Sales</p>
              <p className="stats-bar__text">
                {salesStats ? salesStats?.sales.length : 0}
              </p>
            </div>
            <div className="stats-bar__item">
              <p className="stats-bar__title">Momentum Indicator ({time}m)</p>
              <p className="stats-bar__text">
                {momentum(
                  salesStats?.sales.length,
                  listingsStats?.orders.length
                )}
              </p>
            </div>
          </div>
        </div>
        {dropDown ? (
          <div className="stats-bar">
            <div className="stats-bar__container">
              <div className="stats-bar__item">
                <p className="stats-bar__title">24hr Listings</p>
                <p className="stats-bar__text">
                  {listingsDayStats ? listingsDayStats?.orders.length : "n/a"}
                </p>
              </div>
              <div className="stats-bar__item">
                <p className="stats-bar__title">24hr Sales</p>
                <p className="stats-bar__text">
                  {salesDayStats ? salesDayStats?.sales.length : "n/a"}
                </p>
              </div>
              <div className="stats-bar__item">
                <p className="stats-bar__title">Momentum Indicator (24hr)</p>
                <p className="stats-bar__text">
                  {momentum(
                    salesDayStats?.sales.length,
                    listingsDayStats?.orders.length
                  )}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StatsBar;
