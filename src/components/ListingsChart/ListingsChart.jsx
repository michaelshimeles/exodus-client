import "./ListingsChart.scss";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ping from "../../utils/ping";
// eslint-disable-next-line
import Chart from "chart.js/auto";
import { Flex, Text } from "@chakra-ui/react";

const ListingsChart = () => {
  const [lineChart, setLineChart] = useState(null);

  const { id } = useParams();

  const URL = `${process.env.REACT_APP_URL}/listings/chart/${id}`;

  useEffect(() => {
    ping(`${URL}`, setLineChart);
    ping(`${URL}`, setLineChart, 10000);
  }, [URL]);

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
      
      <Flex direction="column" w="full" gap="1rem">
        <Text fontSize="xl" fontWeight="bold">Listings Chart</Text>
        <Line
          className="listings-section__chart"
          options={options}
          data={data}
        />
      </Flex>
    </div>
  );
};

export default ListingsChart;
