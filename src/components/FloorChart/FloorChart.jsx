import { Bar, Line } from "react-chartjs-2";
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

  const dataLine = {
    datasets: [
      {
        label: "Volume Chart",
        data: floorChart?.map((floor, index, array) => {
          let reverseArr = array[array.length - 1 - index];
          return {
            x: new Date(Number(reverseArr?.timestamp) * 1000).toDateString(),
            y: reverseArr?.volume,
          };
        }),
      },
    ],
  };

  const dataBar = {
    datasets: [
      {
        label: "Floor Chart",
        data: floorChart?.map((floor, index, array) => {
          let reverseArr = array[array.length - 1 - index];
          return {
            x: new Date(Number(reverseArr?.timestamp) * 1000).toDateString(),
            y: reverseArr?.floor_sell_value,
          };
        }),
      },
    ],
  };

  return (
    <div className="floor-chart">
      <div className="floor-chart__floor">
        <h1 className="floor-chart__title">Floor Chart (1d)</h1>
        <Line
          data={dataBar}
          options={options}
        ></Line>
      </div>
      <div className="floor-chart__volume">
        <h1 className="floor-chart__title">Volume Chart (1d)</h1>
        <Bar
          data={dataLine}
          options={options}
        ></Bar>
      </div>
    </div>
  );
};

export default FloorChart;
