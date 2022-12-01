import Chart from "chart.js/auto";
import "./SalesChart.scss";
import { Scatter } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
const SalesChart = () => {
  const options = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "A dataset",
        data: Array.from({ length: 100 }, () => ({
          x: faker.datatype.number({ min: 0, max: 150 }),
          y: faker.datatype.number({ min: 0, max: 150 }),
        })),
        backgroundColor: "rgba(255, 99, 132, 1)",
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
