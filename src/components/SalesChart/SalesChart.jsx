import "./SalesChart.scss";
import { Scatter } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ping from "../../utils/ping";

const SalesChart = () => {
  const [salesChart, setSalesChart] = useState(null);

  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/sales/${id}`;

  useEffect(() => {
    ping(`${URL}`, setSalesChart);
    ping(`${URL}`, setSalesChart, 10000);
  }, [URL]);

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      enabled: false,
    },
  };

  const data = {
    datasets: [
      {
        label: "Sales Chart",
        data: salesChart?.map((sales) => {
          return {
            x: new Date(Number(sales?.timestamp)).toLocaleTimeString(),
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
