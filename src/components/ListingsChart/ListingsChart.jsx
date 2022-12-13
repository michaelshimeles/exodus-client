import "./ListingsChart.scss";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ping from "../../utils/ping";
// eslint-disable-next-line
import Chart from "chart.js/auto";

const ListingsChart = () => {
  const [lineChart, setLineChart] = useState(null);

  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/listings/chart/${id}`;

  useEffect(() => {
    ping(`${URL}`, setLineChart);
    ping(`${URL}`, setLineChart, 10000);
  }, [URL]);

  let delayed;
  
  const options = {
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
            // return dataLabel
          },
          fontSize: 16,
          autoSkip: false,
        },
        scaleLabel: {
          display: true,
          labelString: "Week",
        },
      },
    },
    // animation: {
    //   onComplete: () => {
    //     delayed = true;
    //   },
    //   delay: (context) => {
    //     let delay = 0;
    //     if (context.type === 'data' && context.mode === 'default' && !delayed) {
    //       delay = context.dataIndex * 30 + context.datasetIndex * 10;
    //     }
    //     return delay;
    //   },
    // },
  };

  const data = {
    labels: ["Price"],
    datasets: [
      {
        fill: true,

        data: lineChart?.data.orders?.map((listing, index) => {
          return {
            x: listing?.createdAt,
            y: listing?.price?.amount?.decimal,
          };
        }),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return (
    <div className="listings-section">
      <Line className="listings-section__chart" options={options} data={data} />
    </div>
  );
};

export default ListingsChart;
