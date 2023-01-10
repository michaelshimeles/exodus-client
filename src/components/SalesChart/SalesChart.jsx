import { Flex, Select, Text } from "@chakra-ui/react";
import { Chart, registerables } from "chart.js";
import { useState } from "react";
import { Scatter } from "react-chartjs-2";
import { useParams } from "react-router-dom";
import { useSalesChart } from "../../hooks/useSalesChart";
import "./SalesChart.scss";
Chart.register(...registerables);

const SalesChart = () => {
  const [time, setTime] = useState(60);

  const { id } = useParams();
  const { data: salesChart } = useSalesChart(id, time);

  const clicked = (event) => {
    setTime(event.target.value);
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
    scales: {
      x: {
        ticks: {
          callback: function (dataLabel, index) {
            if (time <= 1440) {
              return new Date(Number(dataLabel) * 1000).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              });
            } else {
              return new Date(Number(dataLabel) * 1000).toLocaleDateString();
            }
          },
          fontSize: 16,
          autoSkip: false,
          beginAtZero: true,
        },
        scaleLabel: {
          display: true,
        },
      },
    },
  };

  const data = {
    datasets: [
      {
        label: "Sales Chart",
        data: salesChart?.data?.map((sales) => {
          return {
            x: sales?.timestamp,
            y: sales?.priceInEth,
          };
        }),
      },
    ],
  };
  return (
      <div className="sales-section">
        <Flex justify="space-between" w="100%">
          <Text fontSize="xl" fontWeight="bold">
            Sales Chart
          </Text>
          <form>
            <Select id="time" value={time} onChange={clicked}>
              <option id="time" value="5">
                5m
              </option>
              <option id="time" value="10">
                10m
              </option>
              <option id="time" value="15">
                15m
              </option>
              <option id="time" value="30">
                30m
              </option>
              <option id="time" value="60">
                1h
              </option>
              <option id="time" value="240">
                4h
              </option>
              <option id="time" value="720">
                12h
              </option>
              <option id="time" value="1440">
                24h
              </option>
              <option id="time" value="10080">
                1w
              </option>
              <option id="time" value="40320">
                1m
              </option>
              <option id="time" value="483840">
                1y
              </option>
            </Select>
          </form>
        </Flex>

        <Scatter
          className="sales-section__chart"
          options={options}
          data={data}
        />
      </div>
  );
};

export default SalesChart;
