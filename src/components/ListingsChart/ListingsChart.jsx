import "./ListingsChart.scss";
import { Bar } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ping from "../../utils/ping";
// eslint-disable-next-line
import Chart from "chart.js/auto";

const ListingsChart = () => {
  const [barChart, setBarChart] = useState(null);

  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/listings/${id}`;

  useEffect(() => {
    ping(`${URL}`, setBarChart);
    ping(`${URL}`, setBarChart, 10000);
  }, [URL]);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
    },
  };

  const data = {
    labels: ["Price"],
    datasets: [
      {
        label: "Listings Distribution",
        data: barChart
          ? barChart.data.orders.map(
              (listing, index) => listing.price.amount.decimal
            )
          : "",
      },
    ],
  };

  return (
    <div className="listings-section">
      <Bar className="listings-section__chart" options={options} data={data} />
    </div>
  );
};

export default ListingsChart;
