import "./SalesChart.scss";
import { Scatter } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ping from "../../utils/ping";
import pingPost from "../../utils/pingPost";

const SalesChart = () => {
  const [salesChart, setSalesChart] = useState(null);
  const [floorChart, setFloorChart] = useState(null);

  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/sales/${id}`;

  useEffect(() => {
    ping(`${URL}`, setSalesChart);
    ping(`${URL}`, setSalesChart, 10000);

    pingPost(
      `${process.env.REACT_APP_URL}/floorprice`,
      {
        address: id,
      },
      setFloorChart
    );

    pingPost(
      `${process.env.REACT_APP_URL}/floorprice`,
      {
        address: id,
      },
      setFloorChart,
      20000
    );
  }, [URL]);

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
          beginAtZero:true
        },
        scaleLabel: {
          display: true,
        },
      },
      y: {
        ticks: {
          callback: function (dataLabel, index) {
            return dataLabel < floorChart * 2 ? dataLabel : dataLabel;
          },
          beginAtZero:true,
          fontSize: 16,
          autoSkip: false,
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
      <Scatter className="sales-section__chart" options={options} data={data} />
    </div>
  );
};

export default SalesChart;
