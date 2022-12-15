import "./SalesChart.scss";
import { Scatter } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import pingPost from "../../utils/pingPost";

const SalesChart = () => {
  const [salesChart, setSalesChart] = useState(null);
  const [time, setTime] = useState(60);

  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/sales/${id}`;

  useEffect(() => {
    let end = Math.round(new Date() / 1000);
    let start = Math.round(
      (new Date().getTime() - Number(time) * 60 * 1000) / 1000
    );
    pingPost(
      `${URL}`,
      {
        start: start,
        end: end,
      },
      setSalesChart
    );
    clearInterval(
      pingPost(
        `${URL}`,
        {
          start: start,
          end: end,
        },
        setSalesChart,
        10000
      )
    );
  }, [URL, id, time]);

  const clicked = (event) => {
    setTime(event.target.value);
  };

  const options = {
    scaleBeginAtZero: false,
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      enabled: false,
    },
    scales: {
      x: {
        ticks: {
          callback: function (dataLabel, index) {
            return new Date(Number(dataLabel) * 1000).toLocaleTimeString();
          },
          fontSize: 16,
          autoSkip: false,
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Sales Chart",
        data: salesChart?.map((sales) => {
          return {
            x: sales?.timestamp,
            y: sales?.priceInEth,
          };
        }),
      },
    ],
  };
  return (
    <div className="sales-section">
      <form>
        <select
          className="sales-section__form"
          id="time"
          value={time}
          onChange={clicked}
        >
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
          <option id="time" value="240">
            4h
          </option>
          <option id="time" value="720">
            12h
          </option>
          <option id="time" value="1440">
            24h
          </option>
          <option id="time" value="10080">
            1w
          </option>
          <option id="time" value="40320">
            1m
          </option>
          <option id="time" value="483840">
            1y
          </option>
        </select>
      </form>
      <Scatter className="sales-section__chart" options={options} data={data} />
    </div>
  );
};

export default SalesChart;
