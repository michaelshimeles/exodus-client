import "./StatsBar.scss";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const StatsBar = () => {
  const [statsBar, setStatsBar] = useState(null);
  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/info`;

  useEffect(() => {
    axios.get(`${URL}/${id}`).then((response) => {
      setStatsBar(response.data);
    });
  }, [id]);

  return (
    <div className="stats-bar">
      <div className="stats-bar__container">
        <div className="stats-bar__item">
          <p className="stats-bar__title">Listings</p>
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
          <p className="stats-bar__title">Volume (24hr)</p>
          <p className="stats-bar__text">
            {statsBar
              ? Math.round(statsBar.stats.dailyVolume * 100) / 10
              : "n/a"}
          </p>
        </div>
        <div className="stats-bar__item">
          <p className="stats-bar__title">Sales (24hr)</p>
          <p className="stats-bar__text">
            {statsBar
              ? Math.round(statsBar.stats.dailySalesCount * 100) / 10
              : "n/a"}
          </p>
        </div>
        <div className="stats-bar__item">
          <p className="stats-bar__title">Avg Price (24hr)</p>
          <p className="stats-bar__text">
            {statsBar
              ? Math.round(statsBar.stats.dailyAveragePrice * 100) / 100
              : "n/a"}
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
  );
};

export default StatsBar;
