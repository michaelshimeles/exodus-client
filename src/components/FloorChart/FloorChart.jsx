import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import "./FloorChart.scss";

const FloorChart = () => {
  const [floorChart, setFloorChart] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/volume/${id}`)
      .then((response) => {
        console.log(response.data.collections);
        setFloorChart(response.data.collections);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

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
        label: "Floor Chart",
        data: floorChart?.map((floor) => {
          return {
            x: new Date(Number(floor?.timestamp)).toLocaleTimeString(),
            y: floor?.volume,
          };
        }),
      },
    ],
  };

  return (
    <div className="floor-chart">
      <h1 className="floor-chart__title">Volume Chart (1d)</h1>
      <Line className="floor-chart__line" data={data} options={options}></Line>
    </div>
  );
};

export default FloorChart;
