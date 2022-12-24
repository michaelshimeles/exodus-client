import { useQuery } from "react-query";
import axios from "axios";

const fetchSalesChart = ({ queryKey }) => {
  let end = Math.round(new Date() / 1000);
  let start = Math.round(
    (new Date().getTime() - Number(queryKey[2]) * 60 * 1000) / 1000
  );

  const id = queryKey[1];
  return axios.get(`${process.env.REACT_APP_URL}/sales/chart/${id}`, {
    params: { start: start, end: end },
  });
};

export const useSalesChart = (id, time) => {
  return useQuery(["sales-chart", id, time], fetchSalesChart, {
    refetchInterval: 10000,
  });
};
