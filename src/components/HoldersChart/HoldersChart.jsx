import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useRef } from "react";
import "./HoldersChart.scss";
import { useEffect } from "react";

import { Doughnut, getDatasetAtEvent } from "react-chartjs-2";
import { useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const HoldersChart = () => {
  const [whales, setWhales] = useState(null);
  const { id } = useParams();
  const chartRef = useRef();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/whales/${id}`)
      .then((response) => {
        setWhales(response.data.owner);
        console.log(response.data.owner);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  };

  const data = {
    labels: whales
      ? whales.map((whale) => {
          return whale.address;
        })
      : "",
    datasets: [
      {
        data: whales
          ? whales.map((whale) => {
              return whale.ownedCount;
            })
          : "",
        backgroundColor: ["#0072EF", "#A3D1F8"],
        borderColor: ["#0072EF", "#A3D1F8"],
      },
    ],
  };

  const options = {
    legend: {
      display: false,
    },
    tooltips: {
      enabled: false,
    },
    onClick: (event, elements) => {
      console.log(event)
      console.log(elements)
    },
  };

  return (
    <div className="doughnut">
      <Doughnut
        data={data}
        options={options}
        onClick={onClick}
        ref={chartRef}
      ></Doughnut>
    </div>
  );
};

export default HoldersChart;
