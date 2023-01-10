import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { useRef } from "react";
import "./HoldersChart.scss";
import { Text } from "@chakra-ui/react";
import { Doughnut, getDatasetAtEvent } from "react-chartjs-2";
import { useNavigate, useParams } from "react-router-dom";
import { useWhales } from "../../hooks/useWhales";

ChartJS.register(ArcElement, Tooltip, Legend);

const HoldersChart = () => {
  const { id } = useParams();
  const chartRef = useRef();

  const navigate = useNavigate();

  const { data: whales } = useWhales(id)

  const onClick = (event) => {
    console.log(getDatasetAtEvent(chartRef.current, event));
  };

  const labels = whales?.data?.results?.map((whale) => {
    return whale.owner_address;
  });

  const holderData = whales?.data?.results?.map((whale) => {
    return whale.count;
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
    onClick: (event, elements) => {
      let walletIndex = elements[0].index;
      navigate("/portfolio/" + labels[walletIndex]);
    },
  };

  return (
    <div className="doughnut">
      <Text fontWeight="bold" fontSize="xl" className="doughnut__title">Whales Distribution 🐳</Text>
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
