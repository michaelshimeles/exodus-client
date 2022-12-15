import axios from "axios";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useState, useRef } from "react";
import "./HoldersChart.scss";
import { useEffect } from "react";

import { Doughnut, getDatasetAtEvent } from "react-chartjs-2";
import { useNavigate, useParams } from "react-router-dom";

ChartJS.register(ArcElement, Tooltip, Legend);

const HoldersChart = () => {
  const [whales, setWhales] = useState(null);
  const { id } = useParams();
  const chartRef = useRef();

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_URL}/whales/${id}`)
      .then((response) => {
        setWhales(response.data.owner);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  };

  const labels = whales?.map((whale) => {
    return whale.address;
  });

  const holderData = whales?.map((whale) => {
    return whale.ownedCount;
  });

  const data = {
    labels: labels,
    datasets: [
      {
        data: holderData,
        backgroundColor: ["#0072EF", "#A3D1F8"],
        borderColor: ["#0072EF", "#A3D1F8"],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    tooltips: {
      enabled: false,
    },
    onClick: (event, elements) => {
      let walletIndex = elements[0].index;
      console.log(labels[walletIndex])
      navigate("/portfolio/" + labels[walletIndex]);
    },
  };

  return (
    <div className="doughnut">
      <h1 className="doughnut__title">Whales Distribution 🐳</h1>
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
